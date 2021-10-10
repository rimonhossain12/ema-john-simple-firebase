import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUsers] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // poppup function
    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
    }
    // log out function
    const logOut = () => {
        signOut(auth)
            .then(resutl => {
                setUsers({})
            })
    }
    // firebase observed it's user for user login or logout
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);

            }
        });
    }, [])
    return {
        user,
        singInUsingGoogle,
        logOut
    }

}
export default useFirebase;