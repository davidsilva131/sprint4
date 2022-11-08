import { ButtonGroup, Container, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import './Login.scss'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import Tittle from "../styledComponents/Tittle";
import Subtittle from "../styledComponents/Subtittle";
import Logo from "../styledComponents/Logo";
import { VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data);

  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container>
      <div className="logo">
        <Logo />
        <Tittle text={'Sing in'} />
        <Subtittle text={'Login or create an account with your email to start ordering'} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="form">
          <CssTextField
            type="email"
            fullWidth
            variant="standard"
            {...register("email", { required: "Email required" })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <CssTextField
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="standard"
            {...register("password", { required: "Password requiered" })}
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : null}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  arial-label="toogle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />
        </div>
        <div className="footer">
          <ColorButton type="submit" fullWidth>Login</ColorButton>
          <ButtonGroup variant="text" fullWidth>
            <ColorButton fullWidth sx={{ gap: 2 }}><GoogleIcon />Login with Google</ColorButton>
            <ColorButton fullWidth sx={{ gap: 2 }}><FacebookIcon />Login with Facebook</ColorButton>
          </ButtonGroup>
          <Link to="register">Create account</Link>
        </div>
      </form>

    </Container>
  )
}

export default Login;
