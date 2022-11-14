import { Card, CardContent, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { ColorButton } from "../styledComponents/MaterialComponents";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './FoodDetails.scss'
import GoBack from "../styledComponents/GoBack";
const FoodDetails = () => {

  const [counter, setCounter] = useState(1)

  const handleLess = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  return (
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
            image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
            alt="nombre plato"
          />
          <CardContent>
            <div className="foodDetails__tittle">
              <span className="foodDetails__tittle__name">Caesar salad without sauge</span>
              <span className="foodDetails__tittle__time"><AccessTimeIcon sx={{ width: '12px' }} />15-20min</span>
            </div>
            <span className="foodDetails__body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
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
            <span>$14.05</span>
          </ColorButton>
        </section>
      </div>

    </Container>
  )
};

export default FoodDetails;
