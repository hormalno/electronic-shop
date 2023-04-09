import {createContext} from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const authInfo = useAuth();

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;