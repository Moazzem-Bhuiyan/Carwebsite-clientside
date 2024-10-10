import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase";





export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const createUser = (email,password)=>{

    return createUserWithEmailAndPassword(auth,email,password);
};

const login = (email,password)=>{

    return signInWithEmailAndPassword(auth,email,password);

};

const gooGleSignin =()=>{

    setLoading(true)
    return signInWithPopup(auth,googleProvider)
};

const logout =()=>{
    setLoading(true);
    return signOut(auth);
};

useEffect(()=>{
    const unSubsCribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log('current user ',currentUser)
        setLoading(false)
    });
    return()=>{
        return unSubsCribe();
    }

},[])

const authinfo ={
user,
loading,
createUser,
login,
gooGleSignin,
logout

}



    return (
        <AuthContext.Provider value={authinfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;