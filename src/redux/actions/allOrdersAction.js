import { async } from "@firebase/util";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { allOrdersTypes } from '../types/allOrdersTypes'

const collectionName = 'orders'
const ordersCollection = collection(database, collectionName);

export const getOrdersAsync = (user) => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(ordersCollection)
        const orders = []
        try {
            querySnapshot.forEach(element => {
                if (element.data().user === user) {
                    const order = {
                        id: element.id,
                        ...element.data()
                    }
                    orders.push(order)
                }
            })
        } catch (error) {

        } finally {
            dispatch(getOrdersSync(orders))
        }
    }
}

export const getAdminOrders = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(ordersCollection);
        const orders = []
        try {
            querySnapshot.forEach(element => {
                const order = {
                    id: element.id,
                    ...element.data()
                }
                orders.push(order)
            })
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(getOrdersSync(orders))
        }
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

export const updateOrderAsync = (order, id) => {
    return async (dispatch) => {
        try {
            const orderRef = doc(database, collectionName, id)
            const docs = await updateDoc(orderRef, {
                ...order
            })
        } catch (error) {
            dispatch()
        }
    }
}

export const deleteOrderAsync = (id) => {
    return async (dispatch) => {
        try {
            await deleteDoc(doc(database, collectionName, id))
        } catch (error) {
            dispatch()
        }
    }
}




