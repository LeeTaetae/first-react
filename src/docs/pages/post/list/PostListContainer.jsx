import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostListContainer = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch("http://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            return posts
        }

        getPosts()
            .then((posts) => posts.slice(0, 30))
            .then(setPosts)
            .catch(console.error)

    }, [])

    const postList = posts.map(({id, title}, i) => (
        <li key={i}>
            <Link to={`/posts/read/${id}`}>제목 : {title}</Link>
            </li>
    ))
    return (
        <div>
            {postList}
        </div>
    );
};

export default PostListContainer;