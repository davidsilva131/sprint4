import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";

const AddRestaurant = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Container>
            <section className="addrestaurant">
                <h1>Add Restaurant</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="addrestaurant__form">
                    <CssTextField
                        type='text'
                        label="Name"
                        variant="standard"
                        {...register("name", { required: "Restaurant name required" })}
                        error={!!errors?.name}
                        helperText={errors?.name ? errors.name.message : null}
                    />
                    <CssTextField
                        type='text'
                        label="Category"
                        variant="standard"
                        {...register("category", { required: "Restaurant category required" })}
                        error={!!errors?.category}
                        helperText={errors?.category ? errors.category.message : null}
                    />
                    <CssTextField
                        type='text'
                        label="Description"
                        variant="standard"
                        {...register("description", { required: "Restaurant description required" })}
                        error={!!errors?.description}
                        helperText={errors?.description ? errors.description.message : null}
                    />
                    <CssTextField
                        type='text'
                        label="Work Time"
                        variant="standard"
                        {...register("workTime", { required: "Restaurant work time required" })}
                        error={!!errors?.workTime}
                        helperText={errors?.workTime ? errors.workTime.message : null}
                    />
                    <CssTextField
                        type='number'
                        label="Before You"
                        variant="standard"
                        {...register("beforeYou", { required: "Restaurant before you required" })}
                        error={!!errors?.beforeYou}
                        helperText={errors?.beforeYou ? errors.beforeYou.message : null}
                    />
                    <CssTextField
                        type='number'
                        label="Stars"
                        variant="standard"
                        {...register("stars", { required: "Restaurant stars required" })}
                        error={!!errors?.stars}
                        helperText={errors?.stars ? errors.stars.message : null}
                    />
                    <CssTextField fullWidth type="file" {...register("image", { required: "Restaurant image required" })} />
                    <ColorButton type="submit">Add Restaurant</ColorButton>
                </form>
            </section>
        </Container>
    )
};

export default AddRestaurant;
