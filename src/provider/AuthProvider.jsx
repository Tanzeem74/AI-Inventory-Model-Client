import React, {useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';
const googleProvider=new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    console.log(user);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const loginWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
    },[])
    const authData={
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
        loginWithGoogle
    };

    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;