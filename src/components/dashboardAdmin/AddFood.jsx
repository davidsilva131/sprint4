import { CircularProgress, Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewFoodAsync } from "../../redux/actions/restaurantsAction";
import { fileUpLoad } from "../../services/fileUpload";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";

const AddFood = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [restaurantSelected, setRestaurantSelected] = useState('');
    const { restaurants } = useSelector((store) => store.restaurants);
    const dispatch = useDispatch();
    const handleChange = ({ target }) => {
        setRestaurantSelected(target.value);
    }

    const onUploadImage = async (image) => {
        const url = await fileUpLoad(image);
        if (url) {
            return url;
        }
    }

    const onSubmit = async (data) => {
        const photoUrl = await onUploadImage(data.image[0])
        const tempRestaurant = restaurants.filter((restaurant) => restaurant.name === restaurantSelected && restaurant)
        const newFood = {
            name: data.name,
            category: data.category,
            description: data.description,
            price: parseInt(data.price),
            image: photoUrl,
            aditionalIngredients: []
        }
        dispatch(addNewFoodAsync(newFood, tempRestaurant[0].id))
    }
    return (
        <Container>
            <section className="addfood">
                <h1>Add Food</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CssTextField
                        type='text'
                        label="Name"
                        variant="standard"
                        {...register("name", { required: "Food name required" })}
                        error={!!errors?.name}
                        helperText={errors?.name ? errors.name.message : null}
                    />
                    <CssTextField
                        type='text'
                        label="Category"
                        variant="standard"
                        {...register("category", { required: "Food category required" })}
                        error={!!errors?.category}
                        helperText={errors?.category ? errors.category.message : null}
                    />
                    <CssTextField
                        type='text'
                        label="Description"
                        variant="standard"
                        {...register("description", { required: "Food description required" })}
                        error={!!errors?.description}
                        helperText={errors?.description ? errors.description.message : null}
                    />
                    <CssTextField
                        type='number'
                        inputProps={{ inputMode: 'numeric' }}
                        label="Price"
                        variant="standard"
                        {...register("price", { required: "Food price required" })}
                        error={!!errors?.price}
                        helperText={errors?.price ? errors.price.message : null}
                    />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Restaurant</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={restaurantSelected}
                            label="Restaurants"
                            onChange={handleChange}
                        >
                            {
                                restaurants.map((restaurant, index) =>
                                    <MenuItem key={index} value={restaurant.name}>{restaurant.name}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                    <CssTextField fullWidth type="file" {...register("image", { required: "Restaurant image required" })} />
                    <ColorButton type="submit">Add Food</ColorButton>

                </form>
            </section>
        </Container>
    )
};

export default AddFood;
