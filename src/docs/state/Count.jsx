import React, {useState} from 'react';

const Count = () => {
    const [number, setNumber] = useState(0);
  
    
    const increase = (e) => {
        setNumber(number + 1)
    }

    const dec = (e) => {
        // setNumber(number -1)
        if(number > 0 ) {
            setNumber(number - 1)
        }
    }


    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+1 증가</button>
            <button onClick={dec}>-1 감소</button>
        </div>
    );
};

export default Count;