import useAuth from "../../hooks/useAuth";
import AuthContext from "./AuthContext";

const AuthState = ({children}) => {

    const authInfo = useAuth();

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthState;