import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { PostsContext } from '../../../../context/PostsContext';

const PostContextList = () => {
    console.log(useContext(PostsContext))
    
    return (
        <div>
            
        </div>
    );
};

export default PostContextList;