import React from 'react';

const Amount = ({ divStyle, buttonStyle, amount, coupon, addAmount, subtractAmount, addCoupon, subtractCoupon }) => {

    console.log("자식 랜더링")
  return (
    <div style={divStyle}>
      <button style={buttonStyle} onClick={subtractAmount}>-</button>
      <p>수량: {amount}</p>
      <button style={buttonStyle} onClick={addAmount}>+</button>
      <button style={buttonStyle} onClick={subtractCoupon}>-</button>
      <p>쿠폰: {coupon}</p>
      <button style={buttonStyle} onClick={addCoupon}>+</button>
    </div>
  );
};

export default Amount;