import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateAuth = ({children}) => {

    const location = useLocation();
    const {user,loading}=useContext(AuthContext)

    if (loading){

        return <p>Loading ....</p>
    }

    if(user){
        return children
    }

    return <Navigate to ='/signIn'state={{from:location}} replace></Navigate>
    
};



export default PrivateAuth;