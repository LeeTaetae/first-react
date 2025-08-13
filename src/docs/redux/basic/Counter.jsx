import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
// import {useInput} from 'react-use'
import count, { decrease, increase, increaseValue } from '../../modules/count';
import useInput from '../../hook/useInput';

const Counter = () => {
    const [value, setValue, onChangeValue] = useInput("")
    const dispatch = useDispatch();

    //store
    // useSelector((store) => store)
    const {number} =(useSelector((state) => state ))
    return (
        <div>
            <div>
                {number}
            <button onClick={() => {dispatch(decrease())}}>-1</button>
            <button onClick={() => {dispatch(increase())}}>+1</button>
            </div>
            <div>
                <input type="text" value={value } onChange={onChangeValue} />
                <button  onClick={() => {dispatch(increaseValue(+value))}}>더하기</button>
            </div>
            
        </div>
        
    );
};

export default Counter;