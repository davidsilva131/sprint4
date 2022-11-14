import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCards = () => {

    const navigate = useNavigate()
    const handleFoodCard = () => {
        navigate('/fooddetails')
    }

    return (
        <>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea onClick={handleFoodCard}>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '171px', height: '182px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="110px"
                        image="https://imgs.search.brave.com/u4DPZXHT_Q4UP9CHNtqvdWZ6xq5qVa7H2wRx-3HWTQY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmVraWFjb2NpbmEu/Y29tL2FydGljdWxv/cy9wb3J0YWRhLzU3/MDAwLzU3NDM3Lmpw/Zw"
                        alt="plato"
                    />
                    <CardContent>
                        <div className="food">
                            <span className="food__name">Bolognese salad</span>
                            <span className="food__price">$  14.5</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
};

export default FoodCards;
