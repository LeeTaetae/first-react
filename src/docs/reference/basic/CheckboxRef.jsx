import React, { useRef, useState } from 'react';

const CheckboxRef = () => {

    const [result, setResult] = useState("")
    const inputRef = useRef([])
    const onClickToPrintHobby = () => {
        let hobby= ""
        console.log(inputRef.current)
        inputRef.current.forEach((input, i, inputArr) => {
            if(input.checked) {
                hobby += i === inputArr.length -1 ? input.value : input.value + ","
                // i는 인덱스, inputArr은  총 3개 이므로 1개를 빼면 마지막 인덱스임
                // 마지막 인덱스 인 게 참일 경우 값만 나오게하고 아닌 경우 콤마까지 나오게 하는것임  
            }
        })
        setResult(hobby)
        inputRef.current.forEach((input) => console.log(input.checked))

    }
    return (
        <div>
            <p>{result}</p>
            <label>
                <span>축구</span>
                <input type="checkbox" name="hobby" ref={(el) => inputRef.current[0] = el} value= "축구" />
            </label>
            <label>
                <span>야구</span>
                <input type="checkbox" name="hobby" ref={(el) => inputRef.current[1] = el} value= "야구"/>
            </label>
            <label>
                <span>농구</span>
                <input type="checkbox" name="hobby" ref={(el) => inputRef.current[2] = el} value= "농구"/>
            </label>
            <button onClick={onClickToPrintHobby} type='button'>취미 확인하기!</button>
        </div>
    );
};

export default CheckboxRef;