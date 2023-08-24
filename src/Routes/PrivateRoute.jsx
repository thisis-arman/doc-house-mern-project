import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()


    if (loading) {
        return <>
            <div className="flex items-center justify-center">
                <p className="text-4xl font-semibold">Loading...</p>
            </div>
        </>
    }

    if (user) {
        return children
    }


    return (
        <div>
            <Navigate to='/sign-in' state={{ from: location }} replace></Navigate>

        </div>
    );
};

export default PrivateRoute;