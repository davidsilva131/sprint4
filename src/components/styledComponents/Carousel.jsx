import React, { useState } from "react";
import promo1 from '../../images/Promo 1.png'
import promo2 from '../../images/Promo 2.png'
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import './Carousel.scss'
import { IconButton } from "@mui/material";
import { StyledBackIcon, StyledNextIcon } from "./MaterialComponents";

export const Carousel = () => {
    const images = [promo1, promo2]

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (index, images, next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.legnth - 1
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)
    }

    return (
        <>
            <aside className="carousel">
                <StyledBackIcon onClick={previous} />
                <img src={`${selectedImage}`} alt="Promos" loading="lazy"></img>
                <StyledNextIcon onClick={next} />
            </aside>

        </>
    )
};
