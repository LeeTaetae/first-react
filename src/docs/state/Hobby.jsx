import React, { useState } from 'react';


// 사용자에게 취미를 입력받고 화면에 실시간으로 출력
// 취미가 축구면, 글자 크기를 50px로 바꿈
// 취미가 농구면 글자의 색깔을 blue로 설정
const Hobby = () => {

    const [hobby, setHobby] = useState("")
    const [color, setColor] = useState("")
    const [size, setSize] = useState("") 


    const onChangeResult = (e) => {
        const target = e.target.value
        setHobby(target)

        if(target === "축구") {
            setSize("50px")
        }else if(target === "농구") {
            setColor("blue")
        } else {
            setSize("20px")
            setColor("black")
        }
    }

    return (
        <div>
            <input  type="text" onChange={onChangeResult} />
            <p style={{color : color, fontSize : size}}>{hobby}</p>
        </div>
    );
};

export default Hobby;