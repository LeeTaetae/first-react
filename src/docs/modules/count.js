// src/docs/modules/count.js
import { createAction, handleActions } from 'redux-actions';

// action types
const INCREASE = 'count/INCREASE';
const DECREASE = 'count/DECREASE';
const INCREASE_VALUE = 'count/INCREASE_VALUE';

// action creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseValue = createAction(INCREASE_VALUE); // payload 사용

// ✅ 초기 상태: handlers와 키를 맞춘다 (number)
const initialState = { number: 0 };

// ✅ 두 번째 인자는 reducerMap "바깥"에 전달
const count = handleActions(
  {
    [INCREASE]: (state) => ({ ...state, number: state.number + 1 }),
    [DECREASE]: (state) => ({ ...state, number: state.number - 1 }),
    [INCREASE_VALUE]: (state, { payload }) => ({ ...state, number: state.number + payload }),
  },
  initialState
);

export default count;
