import { CardActionArea } from "@mui/material";
import React from "react";
import './FiltersCards.scss'
const FiltersCards = ({ restaurantsCategory }) => {
  const cards = [
    {
      icon: null,
      text: 'All'
    },
    {
      icon: '🍕',
      text: 'Pizza'
    },
    {
      icon: '🍔',
      text: 'Fast food'
    },
    {
      icon: '🥗',
      text: 'Vegetarian'
    },
    {
      icon: '🍣',
      text: 'Sushi'
    },
    {
      icon: '🍝',
      text: 'Italian'
    },
    {
      icon: '🌯',
      text: 'Mexican'
    }
  ]

  const handleClickFilterCard = (text) => {
    console.log(`da click a la card de ${text}`)
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
