import { InputAdornment } from "@mui/material";
import React from "react";
import { StyledSearchIcon, StyledSearchInput } from "../styledComponents/MaterialComponents";

const SearchInput = ({ allFood, setFoodFiltered }) => {
    const handleChange = ({ target }) => {
        let tempFood = []
        allFood.forEach(element => {
            element.map((food) =>
                tempFood = [
                    ...tempFood,
                    food
                ]
            )
        });
        const filter = tempFood.filter(food => food.name.toLowerCase().includes(target.value.toLowerCase()))
        if (filter.length === tempFood.length) {
            setFoodFiltered([])
        } else {
            setFoodFiltered(filter)
        }
    }

    return (
        <StyledSearchInput
            onChange={(target) => { handleChange(target) }}
            fullWidth
            id="filled-search"
            placeholder="Search for a dish"
            type="search"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <StyledSearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    )
};

export default SearchInput;
