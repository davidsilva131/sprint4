import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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