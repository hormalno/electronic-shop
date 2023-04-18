import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {auth} from "../utils/firebase";

const useAuth = () => {

  const [authInfo, setAuthInfo] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthInfo({
          id: user.uid,
          username: user.email,          
          isAuthenticated: true
        })
      } else {
        setAuthInfo({isAuthenticated: false})
      }
    });
  },[])

  return authInfo;
 
};

export default useAuth;