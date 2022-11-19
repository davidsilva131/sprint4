import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import './Search.scss'
import BackSearch from '@mui/icons-material/SettingsBackupRestoreTwoTone';
import { useSelector } from "react-redux";
import { CardActionArea } from "@mui/material";
import notFoundLogo from "../../images/NotFound.png"

const Search = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const [allFood, setAllFood] = useState([])
    const [foodFiltered, setFoodFiltered] = useState([])

    useEffect(() => {
        const tempFood = restaurants.map((restaurant) => restaurant.menu)
        setAllFood(tempFood)
    }, [restaurants]);

    return (
        <Container>
            <div className="search">
                <SearchInput allFood={allFood} setFoodFiltered={setFoodFiltered} />
                <div className="search__recent">
                    <span className="search__recent__tittle">Recent Searches</span>

                </div>
                <section className="search__container">
                    {foodFiltered.length
                        ? (
                            foodFiltered.map((food, index) =>
                                <CardActionArea key={index}>
                                    <aside className="search__card">
                                        <img src={food.image} alt="" />
                                        <div className="search__card__content">
                                            <span>{food.name}</span>
                                            <span>$ {food.price}</span>
                                        </div>
                                    </aside>
                                </CardActionArea>
                            )
                        ) :
                        (
                            <img className="search__notFound" src={notFoundLogo} alt="Not Found Logo" />
                        )

                    }

                </section>
            </div>
        </Container>
    )
};

export default Search;
