import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const isAuth = (WrappedComponent) => {

    const Component = (props) => {        
        const {isAuthenticated} = useContext(AuthContext);

        if (!isAuthenticated) {
            return null;
        }
    
        return <WrappedComponent {...props} />
    }

    return Component;
}; 

export default isAuth;