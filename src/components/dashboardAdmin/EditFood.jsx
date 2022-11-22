import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { fileUpLoad } from "../../services/fileUpload";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import './EditFood.scss'

const EditFood = () => {
    const { name } = useParams()
    const [specificFood, setSpecificFood] = useState()
    const { restaurants } = useSelector(store => store.restaurants)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        getFood(name)
    }, []);

    const getFood = (name) => {
        restaurants.forEach(restaurant => {
            restaurant.menu.forEach(element => {
                if (element.name === name) {
                    setSpecificFood({
                        restaurantId: restaurant.id,
                        ...element
                    })
                }
            });
        });
    }
    console.log(specificFood)
    const onUploadImage = async (image) => {
        const url = await fileUpLoad(image);
        if (url) {
            return url;
        }
    }

    const onSubmit = async (data) => {
        const photoUrl = await onUploadImage(data.image[0])
        const price = parseInt(data.price)
        const foodUpdated = {
            name: data.name,
            category: data.category,
            description: data.description,
            price: price,
            image: photoUrl
        }
        console.log(foodUpdated)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food has been edited',
            showConfirmButton: false,
            timer: 1500
        })
        // navigate('/home')
    }
    return (
        <Container>
            <main className="editfood">
                {
                    specificFood
                    && (
                        <>
                            <span>Editing {specificFood.name} restaurant</span>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <CssTextField
                                    defaultValue={specificFood.name}
                                    type='text'
                                    label="Name"
                                    variant="standard"
                                    {...register("name", { required: "Food name required" })}
                                    error={!!errors?.name}
                                    helperText={errors?.name ? errors.name.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificFood.category}
                                    type='text'
                                    label="Category"
                                    variant="standard"
                                    {...register("category", { required: "Food category required" })}
                                    error={!!errors?.category}
                                    helperText={errors?.category ? errors.category.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificFood.description}
                                    type='text'
                                    label="Description"
                                    variant="standard"
                                    {...register("description", { required: "Food description required" })}
                                    error={!!errors?.description}
                                    helperText={errors?.description ? errors.description.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificFood.price}
                                    type='number'
                                    inputProps={{ inputMode: 'numeric' }}
                                    label="Price"
                                    variant="standard"
                                    {...register("price", { required: "Food price required" })}
                                    error={!!errors?.price}
                                    helperText={errors?.price ? errors.price.message : null}
                                />
                                <CssTextField fullWidth type="file" {...register("image", { required: "Restaurant image required" })} />
                                <ColorButton type="submit">Add Food</ColorButton>
                            </form>
                        </>
                    )
                }
            </main>
        </Container>
    )
};

export default EditFood;
