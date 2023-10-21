import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(children, loading)

    if (loading) {
        return <>
            <div className="flex justify-center h-screen  items-center">

                <p className="text-2xl font-semibold font-serif"> wait for a moment</p>
            </div>
        </>
    }

    if (user) {
        return children
    }


    return (
        <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;