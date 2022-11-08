import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig"
import { userTypes } from "../types/userTypes"
import { signInWithEmailAndPassword } from 'firebase/auth'

export const userRegisterAsync = ({ email, password, name }) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(userRegisterSync({ name, email, error: false }))
            })
            .catch((error) => {
                console.log(error);
                dispatch(userRegisterSync({ name, email, error: true }))
            })
    }
}

const userRegisterSync = ({ name, email, error }) => {
    return {
        type: userTypes.CREATE_USER,
        payload: { name, email, error },
    };
}

export const userLoginAsync = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            dispatch(userLoginSync({ ...response.user, error: false }))
        } catch (error) {
            dispatch(userLoginSync({ error: true }))
        }
    }
}

const userLoginSync = (user) => {
    return {
        type: userTypes.LOGIN_USER,
        payload: user
    }
}

