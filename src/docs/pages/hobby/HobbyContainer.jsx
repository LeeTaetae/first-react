import React from 'react';
import { useParams } from 'react-router-dom';

const HobbyContainer = () => {
    // url parameter : url에 parameter를 심어서 전송하는 방법

    const {hobbies} = useParams();


    return (
        <div>
           <p>취미 1 : {hobbies}</p>
        </div>
    );
};

export default HobbyContainer;