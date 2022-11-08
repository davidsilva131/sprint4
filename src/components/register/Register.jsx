import { Container, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import { VisibilityOff } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import './Register.scss'
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data);

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
            <CssTextField
              label="Confirm you password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              variant="standard"
              {...register("password2", { required: "Please confirm you password" })}
              error={!!errors?.password2}
              helperText={errors?.password2 ? errors.password2.message : null}
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
          </div>
          <div className="register__footer">
            <ColorButton type="submit" fullWidth>Sing In</ColorButton>
            <Link to='/'>Login</Link>
          </div>
        </form>
      </Container>
    </>
  )
}

export default Register;
