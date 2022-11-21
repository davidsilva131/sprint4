import { async } from "@firebase/util";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { allOrdersTypes } from '../types/allOrdersTypes'

const collectionName = 'orders'
const ordersCollection = collection(database, collectionName);

export const getOrdersAsync = (user) => {
    return (dispatch) => {
        const docRef = doc(database, collectionName, user);
        getDoc(docRef)
            .then(docSnapshot => {
                if (docSnapshot.exists()) {
                    dispatch(getOrdersSync(docSnapshot.data()))
                } else {
                    console.log('No such document!')
                }
            })
            .catch(error => {
                dispatch(getOrdersSync([]))
            })

    }
}

const getOrdersSync = (orders) => {
    return {
        type: allOrdersTypes.GET_ORDERS,
        payload: orders
    }
}

export const newOrderAsync = (order) => {
    return async (dispatch) => {
        try {
            const docs = await addDoc(ordersCollection, order)
            dispatch(newOrderSync({ id: docs.id, ...order }))
        } catch (error) {
            dispatch(newOrderSync({}))
        }
    }
}

const newOrderSync = (order) => {
    return {
        type: allOrdersTypes.NEW_ORDER,
        payload: order
    }
}



