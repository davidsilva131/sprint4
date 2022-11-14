import { Container, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import GoBack from "../styledComponents/GoBack";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './AddCard.scss'
const AddCard = () => {

    const [showPassword, setShowPassword] = useState(true)

    const handleVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Container>
            <div className="addcard">
                <section className="addcard__tittle">
                    <GoBack />
                    <span>Add new card</span>
                </section>
                <section className="addcard__body">
                    <aside className="addcard__body__inputs">
                        <CssTextField
                            fullWidth
                            placeholder="Card name"
                        />
                        <CssTextField
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Card number"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {showPassword
                                            ? <VisibilityOffIcon onClick={handleVisibility} /> :
                                            <VisibilityIcon onClick={handleVisibility} />}
                                    </InputAdornment>
                                )
                            }}
                        />
                        <div className="addcard__body__inputs__cardinfo">
                            <CssTextField

                                placeholder="Expires"
                            />
                            <CssTextField

                                placeholder="CVV"
                            />
                        </div>
                    </aside>
                    <ColorButton fullWidth>
                        Save
                    </ColorButton>
                </section>
            </div>
        </Container>
    )
};

export default AddCard;
