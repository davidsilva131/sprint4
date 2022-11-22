import { async } from "@firebase/util";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { restaurantsTypes } from "../types/restaurantsTypes";

const collectionName = 'restaurants'
const restaurantsCollection = collection(database, collectionName);

export const getRestaurantsAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(restaurantsCollection);
        const restaurants = [];
        try {
            querySnapshot.forEach(element => {
                const restaurant = {
                    id: element.id,
                    ...element.data()
                }
                restaurants.push(restaurant)
            })
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(getRestaurantsSync(restaurants))
        }
    }
}

export const getRestaurantsSync = (restaurants) => {
    return {
        type: restaurantsTypes.GET_RESTAURANTS,
        payload: restaurants
    }
}

export const getSpecificRestaurantAsync = (restaurantName) => {
    return (dispatch) => {
        const docRef = doc(database, collectionName, restaurantName)
        getDoc(docRef)
            .then(docSnapshot => {
                if (docSnapshot.exists()) {
                    dispatch(getSpecificRestaurantSync(docSnapshot.data()))
                } else {
                    console.log("No such document!");
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(getSpecificRestaurantSync({}))
            })
    }

}

export const getSpecificRestaurantSync = (restaurant) => {
    return {
        type: restaurantsTypes.GET_SPECIFIC_RESTAURANT,
        payload: {
            restaurant,
        }
    }
}

export const addNewRestaurantAsync = (restaurant) => {
    return async (dispatch) => {
        try {
            const restaurantsCollection = collection(database, collectionName);
            const docs = await addDoc(restaurantsCollection, restaurant);
            dispatch(addNewRestaurantSync({ id: docs.id, ...restaurant }));
        } catch (error) {
            console.log(error);
            dispatch(addNewRestaurantSync({}));
        }
    }
}

const addNewRestaurantSync = (restaurant) => {
    return {
        type: restaurantsTypes.ADD_RESTAURANT,
        payload: restaurant
    }
}

export const addNewFoodAsync = (food, restaurantId) => {
    return async (dispatch) => {
        try {
            const restaurantRef = doc(database, collectionName, restaurantId);
            const docs = await updateDoc(restaurantRef, {
                menu: arrayUnion(food)
            })
        } catch (error) {
            console.log(error);
            dispatch()
        }
    }
}

const addNewFoodSync = (food) => {
    return {
        type: restaurantsTypes.ADD_FOOD,
        payload: food
    }
}

export const updateRestaurantAsync = (restaurant, id) => {
    return async (dispatch) => {
        try {
            const restaurantRef = doc(database, collectionName, id)
            const docs = await updateDoc(restaurantRef, {
                ...restaurant
            })
        } catch (error) {
            console.log(error)
            dispatch()
        }
    }
}

export const updateFoodAsync = (food, id) => {

}

export const deleteRestaurantAsync = (id) => {
    return async (dispatch) => {
        try {
            await deleteDoc(doc(database, collectionName, id))
        } catch (error) {
            console.log(error)
            dispatch()
        }
    }
}
