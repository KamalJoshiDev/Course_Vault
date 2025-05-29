import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4EEe3d1Enzb8xIF5w67DITRgGPUXj2rk",
    authDomain: "course-vault.firebaseapp.com",
    projectId: "course-vault",
    storageBucket: "course-vault.appspot.com",  
    messagingSenderId: "1011571783757",
    appId: "1:1011571783757:web:c1a4c7803331a4c0f64404"
};


const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp); 
const FirebaseGoogleAuth = new GoogleAuthProvider();


const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = ({ children }) => {
    const SignUpWithGoogle = async () => {
        try {
            const RegisterUser = await signInWithPopup(FirebaseAuth, FirebaseGoogleAuth);
            const userID = RegisterUser.user.uid;        
            const username = RegisterUser.user.displayName; 
            const email = RegisterUser.user.email;          

            console.log("User ID:", userID);
            console.log("Username:", username);
            console.log("Email:", email);
            
            return RegisterUser.user;
        } catch (error) {
            console.error("Error Signing In With Google:", error.message);
            throw error;
        }
    };

    return (
        <FirebaseContext.Provider value={{ SignUpWithGoogle }}>
            {children}
        </FirebaseContext.Provider>
    );
};
