import React from 'react';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div>
            메인 페이지❤️
            {/* <a href="/intro">소개페이지로 이동</a> */}
            <div>

                <Link to={"/intro?jobs=developer"}>개발자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to={"/intro?jobs=planner"}>플래너 소개페이지로 이동</Link>
            </div>
            <p><button><Link to={"/hobby"}>취미페이지로 이동</Link></button></p>
        </div>
    );
};

export default MainContainer;