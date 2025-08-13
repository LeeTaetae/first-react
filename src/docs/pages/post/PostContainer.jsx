import React from 'react';
import { PostsProvider } from '../../../context/PostsContext';
import { Outlet } from 'react-router-dom';

const PostContainer = () => {
    return (
        
            <PostsProvider>
                <div>배너</div>
                <Outlet />
            </PostsProvider>
      
    );
};

export default PostContainer;