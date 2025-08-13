import React, { useState } from 'react';
import World from './World';

const Hello = () => {

    // let name = "Mike"

    const [name, setName] = useState("Mike")

    function changeName() {
       setName(name === "Mike" ?"Jane" : "Mike")
    }
    return (
        <div>
            <h1>State</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>change</button>
        </div>
    );
};

export default Hello;