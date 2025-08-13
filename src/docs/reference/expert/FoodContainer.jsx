import React, { useRef, useState } from 'react';

const CreateDelete = () => {
    const [foods, setFoods] = useState([])
    const inputRef = useRef([{}])
    const checkboxRef = useRef([])
    
    const result = foods.length === 0 ? "" : foods.map((food , i) => <li key={i}><input type="checkbox" ref={((el) => (checkboxRef.current[i] = el))} value={food.english} /><span>{food.korean} ({food.english})</span></li>)

    const onClickEvent = (e) => {
        console.log(e.target.id)
        if(e.target.id == "add") {
            let foodTemp = {
                korean: inputRef.current[0].value,
                english: inputRef.current[1].value
            }
            setFoods([...foods, foodTemp])
        } else {
           // foods에서 체크한 친구를 찾는다. 
           checkboxRef.current.forEach((checkbox, i, arr) => {
            if(checkbox !== null) {
                if(checkbox.checked == true) {
                    let spliceFood = foods.filter((food, i) => !checkboxRef.current[i].checked);
                    console.log(checkbox.checked)
                    setFoods(spliceFood)
                }
            }
           });
            checkboxRef.current.forEach((checkbox) => {
                 if(checkbox !== null) {
                    checkbox.checked = false
                }
            });
        }
    }
    
    // foods [{ korean : "돈까스", english : "katsu"}]

    return (
        <div>
            <div>
                <div>
                    <input type="text" ref={(el) => (inputRef.current[0] = el)}/>
                    <input type="text" ref={(el) => (inputRef.current[1] = el)}/>
                </div>
                <span>
                    <button id="add" onClick={onClickEvent}>추가</button>
                    <button id="delete" onClick={onClickEvent}>삭제</button>
                </span>
            </div>
            <ul>
                {result}
            </ul>
        </div>
    );
};

export default CreateDelete;