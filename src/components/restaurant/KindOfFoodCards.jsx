import React from "react";
import './KindOfFoodCards.scss'
const KindOfFoodCards = () => {
    const kindFood = ['All', 'Salates', 'Pizza', 'Soups', 'Pastas', 'Pastas', 'Pastas', 'Pastas', 'Pastas', 'Pastas', 'Pastas', 'Pastas', 'Pastas']
    return (
        kindFood.map((food, index) =>
            <div key={index} className="filterFood">
                <span>{food}</span>
            </div>
        )
    )
};

export default KindOfFoodCards;
