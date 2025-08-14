import React, { useContext } from 'react';
import { PostsContext } from '../../../../context/PostsContext';
import { useParams } from 'react-router-dom';

const PostContextRead = () => {

    const {postId} = useParams()
    const {state, actions, error, loading, refetch} = useContext(PostsContext)
    console.log(postId)
    
    if(!loading) return <p>로딩중...</p>
    const post = state.posts && state.posts.find((post) => post.id === Number(postId))
    if(!post) return <p>게시물이 없습니다</p>
    const {title, body, id} =post;
    return (
        <div>
            <p>제목 : {post.title}</p>
            <p>내용 : {post.body}</p>
            <p>아이디 : {post.id}</p>
        </div>
    );
};

export default PostContextRead;