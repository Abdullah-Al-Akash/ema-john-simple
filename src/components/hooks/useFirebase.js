import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
        // Declare State For User:
        const [user, setUser] = useState({});

        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();

        const signInWithGoogle = () => {
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                console.log(result.user);
                        })
        }

        // Current Sign In user:
        useEffect(() => {
                onAuthStateChanged(auth, user => {
                        if (user) {
                                setUser(user)
                        }
                })
        }, []);

        // Log Out User functionality:
        const logOut = () => {
                signOut(auth)
                        .then(result => {
                                setUser({});
                        })
        }

        return {
                signInWithGoogle,
                user,
                logOut
        }
}

export default useFirebase;