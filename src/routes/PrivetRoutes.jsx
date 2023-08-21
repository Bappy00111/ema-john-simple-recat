import React, { useContext } from 'react';
import { AuthContaxt } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user,lodding} = useContext(AuthContaxt)
    if(lodding){
        return <h1>logdding...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;