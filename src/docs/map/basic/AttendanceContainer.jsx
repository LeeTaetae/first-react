import React, { useState } from 'react';

const AttendanceContainer = () => {

    // isPresent 출석 여부
    // 화면에 출석한 사람만 모두 출력하고,
    // 글자 색을 파란색으로 변경한다.
    // 출석하지 않았다면 글자크기를 10px로 변경한다.

    // const [student, setStudent] = useState("")
    const [color, setColor] = useState("")
    // const [size, setSize] = useState("")
    const attendanceData = [
    { id: 1, name: "이승참", isPresent: true },
    { id: 2, name: "유한미", isPresent: false },
    { id: 3, name: "김정술", isPresent: true },
    { id: 4, name: "이영성", isPresent: false },
    { id: 5, name: "최무빈", isPresent: true },
    { id: 6, name: "김태희", isPresent: false },
    { id: 7, name: "최중서", isPresent: true },
    { id: 8, name: "정승훈", isPresent: false },
    { id: 9, name: "조예설", isPresent: true },
    { id: 10, name: "이현길", isPresent: true },
  ];


  const data = attendanceData.filter((data) => data.isPresent===true).map((data, i) => <li style={{color : "blue"}} key={i}>{data.name}</li>)
  const present = attendanceData.filter((data) => data.isPresent===false).map((data, i) => <li style={{fontSize : "10px"}} key={i}>{data.name}</li>)

    
  

    return (
        <div>
            {data}
            <hr />
            {present}
        </div>
    );
};


export default AttendanceContainer;