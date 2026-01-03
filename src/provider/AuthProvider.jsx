import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('access-token');
        return signOut(auth);
    }
    const updateUser = async (updatedData) => {
        if (!auth.currentUser) return;

        try {
            await updateProfile(auth.currentUser, updatedData);
            setUser({
                ...auth.currentUser,
                displayName: updatedData.displayName,
                photoURL: updatedData.photoURL
            });
            await auth.currentUser.reload();

        } catch (error) {
            console.error("Profile update failed:", error);
            throw error;
        }
    };
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //         setLoading(false);
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, [])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // --- টোকেন ম্যানেজমেন্ট শুরু ---
                currentUser.getIdToken().then(token => {
                    localStorage.setItem('access-token', token);
                    setLoading(false); // টোকেন পাওয়ার পর লোডিং ফলস করা নিরাপদ
                });
                // --- টোকেন ম্যানেজমেন্ট শেষ ---
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [])
    const authData = {
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