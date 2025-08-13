import React, { useState } from 'react';

const ProductContainer = () => {

    const [message, setMessage] = useState("")
      const [store, setStore] = useState ({
    income : 0,
    productList : [
      {
        name : "노트북",
        price: 300000
      },
      {
        name : "키보드",
        price: 50000
      },
      {
        name : "마우스",
        price: 30000
      },
      {
        name : "스피커",
        price: 75000
      },
      {
        name : "마이크",
        price: 150000
      },
    ]
  })

  const productLi = store.productList.map((pro, i) => <li key={i}><p>판매물품 : {pro.name}</p> <p>가격 : {pro.price}원</p></li> )
    
  const buyProduct = (e) => {
    const product = e.target.value;
    const productNames = store.productList.map(({name}) => name)

    if(e.key === "Enter") {
        console.log(product)
        if(productNames.includes(product)) {
            setMessage("거래 완료")
        }else if(!productNames.includes(product)) {
            setMessage("거래 불가!")
        }else if(store.productList.length === 0) {
            setMessage("판매불가")
        }else {
            setMessage("")
        }
    }
  }
    return (
        <div>
            <ul>
                {productLi}
            </ul>
            <p>{message}</p>
            <input type="text" onKeyDown={buyProduct} />
        </div>
    );
};

export default ProductContainer;