import { Container } from "@mui/system";
import React from "react";
import Logo from "../styledComponents/Logo";
import Tittle from "../styledComponents/Tittle";
import Subtittle from "../styledComponents/Subtittle";
import './Verification.scss'

const Verification = () => {
    return (
        <Container>
            <div className="logo">
                <Logo />
                <Tittle text={'Verification'} />
                <Subtittle text={'Enter the four-digit code from SMS'} />
                <Subtittle text={'SMS not received. Send again?'} />
            </div>
        </Container>
    )
}

export default Verification;
