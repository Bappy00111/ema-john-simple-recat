import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.confige';



export const AuthContaxt = createContext(null)


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [lodding,setLoddig] = useState(true);

    const crateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn = (email,password) =>{
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }
    // ovserv  user auth state 
    useEffect(()=>{
     const unsubscribe =    onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoddig(false)
        })
        // stop observing while unmunting
        return () =>{
            return unsubscribe;
        }
    },[])
    const authInfo = {
        user,
        crateUser,
        singIn,
        logOut,
        lodding
    }
    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProvider;