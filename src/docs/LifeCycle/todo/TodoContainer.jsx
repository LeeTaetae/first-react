import React, { useEffect, useState } from 'react';
import getTodos from './getTodos';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

const TodoContainer = () => {
    
    const [todos, setTodos] = useState([]);
    const [handleTodos, setHandleTodos] = useState(false)

    useEffect(() => {
        getTodos("https://json-server.ideaflow.co.kr/todos")
            .then(setTodos)
            .catch(console.error)
    }, [handleTodos])

    console.log(todos)
    const todoList = todos.map((todo, i) => <Todo  key={i} todo={todo}/>)

    return (
        <div>
            <TodoInsert  todos = {todos} handleTodos={handleTodos} setHandleTodos={setHandleTodos}/>
            <h1>남은 할일의 개수 : {todos.length && todoList.length}개</h1>
            <ul>{todoList}</ul>

        </div>
    );
};

export default TodoContainer;