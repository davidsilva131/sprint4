import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const GoBack = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <span style={{ cursor: 'pointer' }} onClick={handleGoBack}>
            <ArrowBackIosIcon />
        </span>
    )
};

export default GoBack;
