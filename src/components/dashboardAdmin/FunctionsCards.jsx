import { Chip } from "@mui/material";
import React from "react";
import './FunctionsCards.scss'
const FunctionsCards = ({ setFunctionSelected }) => {
    const functions = ['Restaurants', 'Food', 'Orders']
    const handleClickFunction = (text) => {
        setFunctionSelected(text)
    }
    return (
        <>
            <section className="functions">
                {
                    functions.map((fun, index) =>
                        <Chip key={index} label={fun} onClick={() => { handleClickFunction(fun) }} />
                    )
                }
            </section>
        </>
    )
};

export default FunctionsCards;
