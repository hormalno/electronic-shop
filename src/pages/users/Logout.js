import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => console.log(error))
};

export default Logout;