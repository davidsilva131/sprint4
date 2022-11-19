import { Card, CardContent, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ColorButton } from "../styledComponents/MaterialComponents";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './FoodDetails.scss'
import GoBack from "../styledComponents/GoBack";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const FoodDetails = () => {

  const [counter, setCounter] = useState(1)
  const { name } = useParams();
  const restaurantsStorage = useSelector((store) => store.restaurants);
  const [foodInfo, setFoodInfo] = useState()
  const [foodPrice, setFoodPrice] = useState()

  useEffect(() => {
    getFoodInfo()
  }, []);

  const getFoodInfo = () => {
    let tempFood = restaurantsStorage.restaurants.map((element) => element.menu)
    tempFood = tempFood.map(element => element.find(food => food.name === name))
    setFoodInfo(tempFood[0])
    setFoodPrice(tempFood[0].price)
  }

  const handleLess = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const getPrice = () => {
    return counter * foodPrice
  }

  return (
    <>
      {
        foodInfo ?
          (
            <Container>
              <div className="goback">
                <GoBack />
              </div>
              <div className="foodDetails">
                <Card>
                  <CardMedia
                    component="img"
                    height="270px"
                    width="100%"
                    image={foodInfo.image}
                    alt={foodInfo.name}
                  />
                  <CardContent>
                    <div className="foodDetails__tittle">
                      <span className="foodDetails__tittle__name">{foodInfo.name}</span>
                    </div>
                    <span className="foodDetails__body">{foodInfo.description}</span>
                  </CardContent>
                </Card>
                <section className="foodDetails__counter">
                  <aside className="foodDetails__counter__buttons">
                    <button onClick={handleLess} className="foodDetails__counter__buttons__less">-</button>
                    <span>{counter}</span>
                    <button onClick={handlePlus} className="foodDetails__counter__buttons__plus">+</button>
                  </aside>
                  <ColorButton sx={{ width: '209px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Add</span>
                    <span>$ {getPrice()}</span>
                  </ColorButton>
                </section>
              </div>

            </Container>
          ) :
          (<></>)
      }

    </>
  )
};

export default FoodDetails;
