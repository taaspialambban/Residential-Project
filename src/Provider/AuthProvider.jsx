import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";


 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const createLogin = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const authInfo = {
        createLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;