import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isAuth from "../../hoc/isAuth";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        signOut(auth)
        .then(()=>console.log("User logged out!"))
        .catch(e => console.log(e));
        navigate(-1)
    },[])   
};

export default isAuth(Logout);