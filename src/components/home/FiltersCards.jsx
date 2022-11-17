import { CardActionArea } from "@mui/material";
import React from "react";
import './FiltersCards.scss'
const FiltersCards = ({ restaurants, setRestaurantsFiltered, restaurantsCategory }) => {

  const handleClickFilterCard = (text) => {
    let tempRestaurants = restaurants.slice()
    tempRestaurants = tempRestaurants.filter(restaurant => restaurant.category === text)
    setRestaurantsFiltered(tempRestaurants)
    console.log(tempRestaurants);
  }

  return (
    <>
      {
        restaurantsCategory.map((category, index) =>
          <CardActionArea key={index}
            onClick={() => { handleClickFilterCard(category) }}
            sx={{ width: '100px', height: '30px', borderRadius: '5px' }}>
            <aside className="filterCard">
              <span className="filterCard__text">{category}</span>
            </aside>
          </CardActionArea>
        )
      }
    </>
  )
};

export default FiltersCards;
