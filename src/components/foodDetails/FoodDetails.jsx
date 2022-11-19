import { Card, CardContent, CardMedia, Checkbox, FormControlLabel } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ColorButton } from "../styledComponents/MaterialComponents";
import './FoodDetails.scss'
import GoBack from "../styledComponents/GoBack";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActualOrder } from "../../redux/actions/orderAction";
const FoodDetails = () => {

  const [counter, setCounter] = useState(1)
  const { name } = useParams();
  const restaurantsStorage = useSelector((store) => store.restaurants);
  const [foodInfo, setFoodInfo] = useState()
  const [order, setOrder] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    getFoodInfo()
  }, []);

  const getFoodInfo = () => {
    let tempFood = restaurantsStorage.restaurants.map((element) => element.menu)
    tempFood = tempFood.map(element => element.find(food => food.name === name))
    tempFood = tempFood.filter(element => element !== undefined)
    setFoodInfo(tempFood[0])
    setOrder({
      name: tempFood[0].name,
      image: tempFood[0].image,
      price: tempFood[0].price,
      aditionalIngredients: [],
      quantity: 1
    })
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
    return counter * order.price
  }

  const handleChange = ({ target }, ingredient) => {
    if (target.checked) {
      if (!order.aditionalIngredients.find(element => element === ingredient.name)) {
        setOrder({
          ...order,
          aditionalIngredients: [
            ...order.aditionalIngredients,
            ingredient.name
          ],
          price: order.price + ingredient.price
        })
      }
    } else {
      let tempIngredients = order.aditionalIngredients.slice()
      const index = tempIngredients.indexOf(ingredient.name)
      tempIngredients.splice(index, 1)
      setOrder({
        ...order,
        aditionalIngredients: tempIngredients,
        price: order.price - ingredient.price
      })
    }
  }

  const handleOrder = () => {
    let tempOrder = {
      name: order.name,
      image: order.image,
      price: getPrice(),
      aditionalIngredients: order.aditionalIngredients,
      quantity: counter
    }
    dispatch(setActualOrder(tempOrder))
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
                    <div className="foodDetails__aditionals">
                      {
                        foodInfo.aditionalIngredients[0] !== ""
                        && (
                          foodInfo.aditionalIngredients.map((ingredient, index) =>
                            <div key={index} className="foodDetails__aditonals__ingredient">
                              <FormControlLabel control={<Checkbox onChange={(target) => { handleChange(target, ingredient) }} />} label={ingredient.name} />
                              <span>$ {ingredient.price}</span>
                            </div>
                          )
                        )

                      }
                    </div>
                  </CardContent>
                </Card>
                <section className="foodDetails__counter">
                  <aside className="foodDetails__counter__buttons">
                    <button onClick={handleLess} className="foodDetails__counter__buttons__less">-</button>
                    <span>{counter}</span>
                    <button onClick={handlePlus} className="foodDetails__counter__buttons__plus">+</button>
                  </aside>
                  <ColorButton onClick={handleOrder} sx={{ width: '209px', display: 'flex', justifyContent: 'space-between' }}>
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
