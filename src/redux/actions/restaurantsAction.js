import { collection, getDocs } from "firebase/firestore";
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