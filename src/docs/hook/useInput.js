import { useState } from "react"

const useInput = (initialValue) => { //useInput 함수 선언 
    const [ value, setValue ] = useState(initialValue) // 받아온 매개변수(현 예시로는 공백)를 초기 값으로 value 상태 생성

    const onChangeValue = (e) => { // onChange 이벤트 선언
        setValue(e.target.value)
    }

    return [value, onChangeValue]
}

export default useInput;