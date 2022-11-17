import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithPopup } from "firebase/auth"
import { auth, google } from "../../firebase/firebaseConfig"
import { userTypes } from "../types/userTypes"
import { signInWithEmailAndPassword } from 'firebase/auth'

export const userRegisterAsync = ({ email, password, name, avatar }) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                const { accessToken } = user.auth.currentUser;
                await updateProfile(auth.currentUser,
                    {
                        displayName: name,
                        photoURL: avatar
                    })
                dispatch(
                    userRegisterSync({
                        name,
                        email,
                        accessToken,
                        photoURL: avatar,
                        error: false
                    }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                dispatch(userRegisterSync({ error: true, errorMessage }))
            })
    }
}

const userRegisterSync = (user) => {
    return {
        type: userTypes.CREATE_USER,
        payload: { ...user },
    };
}

export const userLoginAsync = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const { displayName, accessToken, photoURL } = user.auth.currentUser;
                dispatch(
                    userLoginSync({
                        name: displayName,
                        email,
                        accessToken,
                        photoURL,
                        error: false
                    })
                )
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                dispatch(userLoginSync({ email, error: true, errorMessage }))
            })
    }
}

export const loginProviderAsync = (provider) => {
    return (dispatch) => {
        signInWithPopup(auth, google)
            .then((result) => {
                const user = result.user;
                const { displayName, accessToken, photoURL } = user.auth.currentUser
                dispatch(userLoginSync({
                    name: displayName,
                    email: user.email,
                    accessToken,
                    photoURL,
                    error: false
                }))
            })
    }
}

export const userLoginSync = (user) => {
    return {
        type: userTypes.LOGIN_USER,
        payload: { ...user }
    }
}

export const userLogoutAsync = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(userLogoutSync());
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const userLogoutSync = () => {
    return {
        type: userTypes.USER_LOGOUT,
    };
};
