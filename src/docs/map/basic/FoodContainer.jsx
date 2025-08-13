import React from 'react';

const FoodContainer = () => {

    const foods = [
        {
        id : 1,
        name : "마라탕"

        },
        {
            id : 2,
            name : "라면"
        },
        {
            id : 3,
            name : "육개장"
        },
        {
            id : 4,
            name : "뚝불"
        }
    ]

    const foodList = foods.map((food, i) => <li>{food.name}</li>)

    return (
        <div>
            {foodList}
        </div>
    );
};

export default FoodContainer;