import { Alert, ButtonGroup, Container, IconButton, InputAdornment, Snackbar } from "@mui/material";
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
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginProviderAsync, userLoginAsync } from "../../redux/actions/userAction";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const { error, displayName } = useSelector(state => state.user)
  const [snack, setSnack] = useState({ open: false, variant: 'success', messagge: '' });
  const { open, variant, messagge } = snack;

  const onSubmit = (data) => {
    dispatch(userLoginAsync(data.email, data.password))
    if (error) {
      setSnack({ open: true, variant: 'error', messagge: 'Correo o contraseña incorrecta' });
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack({ open: false, ...snack })
  };

  const handleLoginGoogle = () => {
    dispatch(loginProviderAsync('google'))
  }

  const handleLoginFacebook = () => {
    dispatch(loginProviderAsync('facebook'))
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
            <ColorButton onClick={handleLoginGoogle} fullWidth sx={{ gap: 2 }}><GoogleIcon />Login with Google</ColorButton>
            <ColorButton onClick={handleLoginFacebook} fullWidth sx={{ gap: 2 }}><FacebookIcon />Login with Facebook</ColorButton>
          </ButtonGroup>
          <Link to="register">Create account</Link>
        </div>
      </form>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
          {messagge}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Login;
