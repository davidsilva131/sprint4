import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import { fileUpLoad } from '../../services/fileUpload'
import { useDispatch } from "react-redux";
import { addNewRestaurantAsync } from "../../redux/actions/restaurantsAction";

const AddRestaurant = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const onUploadImage = async (image) => {
        const url = await fileUpLoad(image);
        if (url) {
            return url;
        }
    }

    const onSubmit = async (data) => {
        const photoUrl = await onUploadImage(data.image[0])
        const stars = parseInt(data.stars)
        const beforeYou = parseInt(data.beforeYou)
        const newRestaurant = {
            name: data.name,
            category: data.category,
            description: data.description,
            workTime: data.workTime,
            beforeYou: beforeYou,
            stars: stars,
            image: photoUrl,
            menu: []
        }
        dispatch(addNewRestaurantAsync(newRestaurant))
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
                        inputProps={{ inputMode: 'numeric' }}
                        label="Before You"
                        variant="standard"
                        {...register("beforeYou", { required: "Restaurant before you required" })}
                        error={!!errors?.beforeYou}
                        helperText={errors?.beforeYou ? errors.beforeYou.message : null}
                    />
                    <CssTextField
                        type='number'
                        label="Stars"
                        inputProps={{ inputMode: 'numeric' }}
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
