import React, { useState } from 'react';

const SideEffectMount = () => {
    console.log("최초 마운드")

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json()
        setUsers(users)
    };

    getUsers
    ()

    const userList = users.map(({name} , i) => <p key={i}>{name}</p>)
    return (
        <div>
            {userList}
        </div>
    );
};

export default SideEffectMount;