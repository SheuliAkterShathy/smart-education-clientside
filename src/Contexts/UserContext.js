import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
      const [user,setUser] = useState(null);


      const googleProvider = new GoogleAuthProvider();

      const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
      }

      const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile)
      }
    

      const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
      }

       const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
       }

      const logOut = () =>{
        return signOut(auth);
      }


      useEffect(() =>{
     const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
      })
      return() =>{
        unsubscribe();
      }

      },[])


    const authInfo = {
      user,
      createUser,
      updateUserProfile,
      signIn,
      signInWithGoogle,
      logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;