import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase-config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

      const [user, setUser] = useState();
      const [loading, setLoading] = useState(true);


const createUser = (email, password) =>{
      setLoading(true);
return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) =>{
      setLoading(true);
return signInWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
      setLoading(true);
      return signOut(auth);
}

useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('this is on auth state change', loggedUser)
            setUser(loggedUser)
            setLoading(false);
      })
      return()=>{
            unSubscribe()
      }
},[])

      const authInfo = {
            user,
            createUser,
            signIn,
            logOut,
            loading
      };

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider >
      );
};

export default AuthProvider;