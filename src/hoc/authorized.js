import { useContext } from "react";
import AuthContext from "../contexts/auth/AuthContext";
import Login from "../pages/users/Login"


const authorized = (Component) => (props) => {

    const {isAuthenticated} = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Login />
    }
  
    return <Component {...props} />;
  };

export default authorized;