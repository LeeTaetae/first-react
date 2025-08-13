// src/docs/modules/count.js
import { createAction, handleActions } from 'redux-actions';

// 리덕스 구현
// type
// CHANGE_COLOR, CHANGE_FONT_SIZE
const CHANGE_COLOR = 'font/CHANGE_COLOR';
const CHANGE_FONT_SIZE = "font/CHANGE_FONT_SIZE";

// action
export const changeColor = createAction(CHANGE_COLOR);
export const changeFontSize = createAction(CHANGE_FONT_SIZE);


// state
const initialState = { 
    fontSize : "",
    color : ""
 };


const font = handleActions(
    //reduce의 분기처리
  {
    [CHANGE_COLOR]  : (state, action) => ( { ...state, color : action.payload}),
    [CHANGE_FONT_SIZE] : (state, action) => ({...state, fontSize : "100px"}),
  },
  initialState
);

export default font;
