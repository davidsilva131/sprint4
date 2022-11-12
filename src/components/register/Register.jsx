import { Container, IconButton } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React, { useState } from "react";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import { VisibilityOff } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import './Register.scss'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../redux/actions/userAction";
import { fileUpLoad } from '../../services/fileUpload.js'
const Register = () => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const dispatch = useDispatch()
  const { error, errorMessage } = useSelector((store) => store.user);
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [snack, setSnack] = useState({ open: false, variant: 'success', messagge: '' });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack({ open: false, ...snack })
  };

  const { open, variant, messagge } = snack;

  const onUploadImage = async (image) => {
    const url = await fileUpLoad(image);
    if (url) {
      return url;
    } else {
      setSnack({ open: true, variant: 'error', messagge: 'No se ha podido cargar la imagen' });
    }
  }

  const onSubmit = async (data) => {
    const photoUrl = await onUploadImage(data.image[0])
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: photoUrl
    }
    dispatch(userRegisterAsync(newUser))
    if (error) {
      setSnack({ open: true, variant: 'error', messagge: 'No se ha podido crear la cuenta' });
    } else {
      setSnack({ open: true, variant: 'success', messagge: 'Cuenta creada con exito!' });
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Container>
        <div className="register__tittle">
          <h1>Create account</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <div className="register__form__inputs">
            <CssTextField
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              {...register("name", { required: "Name required" })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
            />
            <CssTextField
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address"
                }
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            <CssTextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              variant="standard"
              {...register("password", { required: "Password required" })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
              InputProps={{
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
            <CssTextField fullWidth type="file" {...register("image", { required: "Avatar required" })} />
          </div>
          <div className="register__footer">
            <ColorButton onClick={(handleClick) => { }} type="submit" fullWidth>Sing In</ColorButton>
            <Link to='/'>Login</Link>
          </div>
        </form>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
            {messagge}
          </Alert>
        </Snackbar>
      </Container>
    </>
  )
}

export default Register;
