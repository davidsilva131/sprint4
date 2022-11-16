import React from "react";
import './KindOfFoodCards.scss'
const KindOfFoodCards = ({ menu }) => {
    let kindFood = menu.map((food) => food.category)
    kindFood = [...new Set(kindFood)]
    return (
        kindFood.map((food, index) =>
            <div key={index} className="filterFood">
                <span>{food}</span>
            </div>
        )
    )
};

export default KindOfFoodCards;
