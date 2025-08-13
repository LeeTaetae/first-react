import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            잘못된 접근입니다.
            <Link to={"/"}>메인으로 가기</Link>
        </div>
    );
};

export default NotFound;