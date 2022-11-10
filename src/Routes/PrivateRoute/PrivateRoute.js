import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="hero min-h-screen w-full">
            <div className="hero-content text-center w-1/2">
                <div className="max-w-lg">
                    <button type="button" className="btn bg-red-500 border-red-500 text-white">
                        <svg className="animate-spin h-5 w-5 mr-3 bg-blue-600" viewBox="0 0 24 24">
                        </svg>
                        Loading...
                    </button>
                </div>
            </div>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;