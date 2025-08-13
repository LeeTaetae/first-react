import React, { useState } from 'react';
import TodoInsert from './TodoInsert';

const Todo = ({todo, handleTodos, setHandleTodos}) => {
  const {id, title, isChecked, userId} = todo;
  console.log(todo)
  
  const [value, setValue] = useState(title)
  const onChangeValue = (e) => setValue(e.target.value)

  const [isEdit, setEdit] = useState(false)
  const handleEdit = () => setEdit(!isEdit)

  const handleCheck = async () => {
    await fetch(`https://json-server.ideaflow.co.kr/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        isChecked : !isChecked
      })
    })
    .then((res) => {
      if(!res.ok) return; 
      setHandleTodos(!handleTodos)
    })
    .catch(console.err)
  }
  



  // Create : POST
   // Read : GET
   // Update : PUT
   // Delete : DELETE
  const remoteTodo = async () => {
    await fetch(`https://json-server.ideaflow.co.kr/todos/${id}`, {
      method : "DELETE"
    })
  }
  
  // 수정
  const updateTodo = async () => {
    await fetch(`https://json-server.ideaflow.co.kr/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        title : value,
      })
    })
    .then((res) => {
      if(!res.ok) return; 
      setHandleTodos(!handleTodos)
      setEdit(!isEdit)
    })
    .catch(console.err)
  }

//  완료상태(isChecked) 수정
// 사용자가 체크박스를 클릭하면, isCHecked 상태가 true로 변경
// true인 상태에서 다시 체크박스를 클릭하면 false로 변경
// isChecked가 true라면, line-through 스타일 적영

  return (
    <li>
      <input style={{textDecoration : isChecked ? "line-through" : ""}} type="checkbox" checked={isChecked}  onChange={handleCheck} />
      { isEdit ? <input value={value} onChange={onChangeValue} /> : <span >{title}</span> }
      { isEdit ? <button onClick={updateTodo}>완료</button> : <button onClick={handleEdit}>수정</button> }
      <button onClick={remoteTodo}>삭제</button>
    </li>
  );
};

export default Todo;