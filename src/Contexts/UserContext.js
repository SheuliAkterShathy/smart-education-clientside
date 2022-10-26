import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
      const [user,setUser] = useState(null);
      const [loading,setLoading] = useState(true);


      const googleProvider = new GoogleAuthProvider();
      const githubProvider = new GithubAuthProvider();


      const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
      }

      const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    

      const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
      }

       const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
       }


       const signInWithGithub = () =>{
        return signInWithPopup(auth,githubProvider)
       }

      const logOut = () =>{
        setLoading(true);
        return signOut(auth);
      }


      useEffect(() =>{
     const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        
        // if(currentUser === null || currentUser.email){
            setUser(currentUser);
        // }
        setLoading(false);
      })
      return() =>{
        unsubscribe();
      }

      },[])


    const authInfo = {
      user,
      loading,
      setUser,
      createUser,
      updateUserProfile,
      signIn,
      signInWithGoogle,
      signInWithGithub,
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