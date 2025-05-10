import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


 export const AuthContext = createContext(null);

 const googleProvider = new GoogleAuthProvider();
 const FaceBookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    const createLogin = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    };

    const userUpdateProfile = (name , image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }

    const Login = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    };

    const LogOut = () =>{
        setLoading(true)
        return signOut(auth)
    };

    const SingInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup (auth , googleProvider)
    }

    const singInWithFacebook = () =>{
        setLoading(true)
        return signInWithPopup (auth , FaceBookProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log('current user are' , currentUser)
            setUser(currentUser)
            setLoading(false)
        }) 
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createLogin,
        Login,
        SingInWithGoogle,
        singInWithFacebook,
        userUpdateProfile,
        LogOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;