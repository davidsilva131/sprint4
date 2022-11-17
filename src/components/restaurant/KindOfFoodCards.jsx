import React from "react";
import './KindOfFoodCards.scss'
const KindOfFoodCards = ({ menu, setMenuFiltered }) => {

    let kindFood = menu.map((food) => food.category)
    kindFood = [...new Set(kindFood)]

    const handleKindFood = (food) => {
        let tempMenu = menu.slice()
        tempMenu = tempMenu.filter(element => element.category === food)
        setMenuFiltered(tempMenu)
    }
    return (
        kindFood.map((food, index) =>
            <div onClick={() => { handleKindFood(food) }} key={index} className="filterFood">
                <span>{food}</span>
            </div>
        )
    )
};

export default KindOfFoodCards;
