import React from "react";

const Jsx03 = () => {
    const name = "이태희"
    const age = 27
    const under = 26
    const message = "반갑습니다."

    return (
        <>
            <p>저는 {age}살이고  만으로는 {under}살인 {name}라고 합니다.</p>
            <p>{message}</p>
        </>
    )
}

export default Jsx03
