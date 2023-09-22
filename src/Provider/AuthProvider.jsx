import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebse/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = { displayName: 'uzzal' };

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password
        )
    }
    const handleLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password
            )
    }
    const authInfo = {
        user,
        handleRegister,
        handleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;