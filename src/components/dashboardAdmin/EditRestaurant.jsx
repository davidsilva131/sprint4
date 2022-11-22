import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { updateRestaurantAsync } from "../../redux/actions/restaurantsAction";
import { fileUpLoad } from "../../services/fileUpload";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import './EditRestaurant.scss'
const EditRestaurant = () => {
    const { id } = useParams()
    const { restaurants } = useSelector((state) => state.restaurants)
    const [specificRestaurant, setSpecificRestaurant] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getRestaurant(id)
    }, []);

    const getRestaurant = (id) => {
        setSpecificRestaurant(restaurants.find(restaurant => restaurant.id === id))
    }
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
        const restaurantUpdated = {
            name: data.name,
            category: data.category,
            description: data.description,
            workTime: data.workTime,
            beforeYou: beforeYou,
            stars: stars,
            image: photoUrl,
        }
        dispatch(updateRestaurantAsync(restaurantUpdated, id))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Restaurant has been edited',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/home')
    }

    return (
        <Container>
            <main className="editrestaurant">
                {
                    specificRestaurant
                        ? (<>
                            <span>Editing {specificRestaurant.name} restaurant</span>
                            <form onSubmit={handleSubmit(onSubmit)} className="editrestaurant__form">
                                <CssTextField
                                    defaultValue={specificRestaurant.name}
                                    type='text'
                                    label="Name"
                                    variant="standard"
                                    {...register("name", { required: "Restaurant name required" })}
                                    error={!!errors?.name}
                                    helperText={errors?.name ? errors.name.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificRestaurant.category}
                                    type='text'
                                    label="Category"
                                    variant="standard"
                                    {...register("category", { required: "Restaurant category required" })}
                                    error={!!errors?.category}
                                    helperText={errors?.category ? errors.category.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificRestaurant.description}
                                    type='text'
                                    label="Description"
                                    variant="standard"
                                    {...register("description", { required: "Restaurant description required" })}
                                    error={!!errors?.description}
                                    helperText={errors?.description ? errors.description.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificRestaurant.workTime}
                                    type='text'
                                    label="Work Time"
                                    variant="standard"
                                    {...register("workTime", { required: "Restaurant work time required" })}
                                    error={!!errors?.workTime}
                                    helperText={errors?.workTime ? errors.workTime.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificRestaurant.beforeYou}
                                    type='number'
                                    inputProps={{ inputMode: 'numeric' }}
                                    label="Before You"
                                    variant="standard"
                                    {...register("beforeYou", { required: "Restaurant before you required" })}
                                    error={!!errors?.beforeYou}
                                    helperText={errors?.beforeYou ? errors.beforeYou.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificRestaurant.stars}
                                    type='number'
                                    label="Stars"
                                    inputProps={{ inputMode: 'numeric' }}
                                    variant="standard"
                                    {...register("stars", { required: "Restaurant stars required" })}
                                    error={!!errors?.stars}
                                    helperText={errors?.stars ? errors.stars.message : null}
                                />
                                <CssTextField fullWidth type="file" {...register("image", { required: "Restaurant image required" })} />
                                <ColorButton type="submit">Edit Restaurant</ColorButton>

                            </form>
                        </>
                        )
                        : (<span>Restaurante no encontrado...</span>)
                }
            </main>
        </Container>
    )
}

export default EditRestaurant;