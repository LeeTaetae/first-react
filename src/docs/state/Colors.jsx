import React, { useState } from 'react';


// result : 사용자가 입력한 결과
// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색 입력시 글자색을 없앤다.

// 입력했을 떄 입력한 요소를 들고온되
// 2. result에 입력한 값을 추가하거나 변경한다.
// 3. 상태를 변화시켜야 한다.
const Colors = () => {
    const [result, setResult] = useState("")
    const [color, setColor] = useState("")
    
   
    const ClickToChangeColor =(e) => {
        console.log(e)
        const target = e.target.innerText
        

        if(target === "빨간색 버튼") {
            // setResult('빨간색')
            setColor("red")
        } else if(target === "파란색 버튼") {
            // setResult("파란색")
            setColor("blue")
        }
    }

    const changeToColor =(e) => {
        
        setResult(e.target.value)
    }

    return (
        <div>
            <p style={{color : color}}>{result}</p>
            <input type="text" onChange={changeToColor} />
            <button onClick={ClickToChangeColor}>빨간색 버튼</button>
            <button onClick={ClickToChangeColor}>파란색 버튼</button>
        </div>
    );
};

export default Colors;