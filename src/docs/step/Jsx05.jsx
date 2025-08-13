import React from 'react';


import PassComponent from './PassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';
import NotPassComponent from './NotPassComponent';

// age를 상수 나이로 설정함(임의)
// 19세 이상 성인이라면 "입장가능"
// 성인이 아니라면 "입장불가"
// 성인과 관계없이 age가 짝수라면 "당첨"출력
// 화면에 랜더링
const Jsx05 = () => {
    const age = 28
    const adult = age >= 19 
    const odd = age % 2 === 0 
    const enter = adult ? <PassComponent /> : <NotPassComponent />
    const win = odd ? <LuckyComponent/> : <UnLuckyComponent />
    return (
        <div>
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;