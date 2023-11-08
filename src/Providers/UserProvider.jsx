import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

export const BookWaveContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            setLoading(false);
            if(currentUser){ 
                axios.post('https://book-wave-server.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token access', res.data)
                })
            }
            else{
                axios.post('https://book-wave-server.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
            
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signWithGoogle

    }
    
    return (
        <BookWaveContext.Provider value={userInfo}>
            {children}
        </BookWaveContext.Provider>
    );
};

export default UserProvider;