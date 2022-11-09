import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='min-h-screen flex justify-items-center justify-center'>
            <h1 className='text-3xl text-center'>Loading........</h1>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;