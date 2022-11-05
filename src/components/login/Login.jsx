import { Container, InputAdornment, TextField } from "@mui/material";
import React from "react";
import Logo from '../../images/logo.svg'
import './Login.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import Tittle from "../styledComponents/Tittle";
import Subtittle from "../styledComponents/Subtittle";

function Login() {
    return (
        <Container>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <Tittle text={'Sing in'} />
                <Subtittle text={'Login or create an account with your phone number to start ordering'} />
            </div>
            <form >
                <CssTextField
                    fullWidth
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <ColorButton fullWidth>Login</ColorButton>
            </form>

        </Container>
    )
}

export default Login;
