import React, { useState } from 'react';
import getTodos from './getTodos';
import fetchTodo from './fetchTododo';

const TodoInsert = () => {

    const [value, setValue] = useState("")
    const increaseLike = () => setLike(like + 1)
    const [handleTodos, setHandleTodos] = useState(false)
    const onChangeValue = (e) => {
        setValue(e.target.value) //e.target = value
    }   

    const insertTodo = async (e) => {
        if(e.key === "Enter") {
            console.log(value)
           
            if(!window.confirm(`이대로 추가하시겠습니까?`) ) return;

            const url = "https://json-server.ideaflow.co.kr/todos"
            const option = {
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                // Json : Json 프로토 타입
                // .stringify() : JSON 객체로 변환한 값을 리턴하는 메서드
                body: JSON.stringify00({
                    id : (TodoInsert.length + 1).toString(),
                    title : value,
                    isChecked : false
                })
            }
            
            // POST(url, method, type)
            fetchTodo(url, option)
            .then((res) => {
                if(!res.ok) return alert("오류 발생 ㅜ")
                alert("할일 추가가 완료되었습니다!")
                setHandleTodos(!handleTodos)
            })
            .catch(console.error)
        }
    }
    return (
        <div>
            <input type="text" onChange={onChangeValue} onKeyDown={insertTodo} placeholder='오늘 할 일을 추가해 볼까요?' />
        </div>
    );
};

export default TodoInsert;