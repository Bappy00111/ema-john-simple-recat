import React, { useContext } from 'react';
import { AuthContaxt } from '../Provider/AuthProvider';
import { Navigate, useLocation,  } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user,lodding} = useContext(AuthContaxt)
    const location = useLocation()
    console.log(location)
   
    console.log(location)
    if(lodding){
        return <h1>logdding...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'state={{from:location}} replace></Navigate>
};

export default PrivetRoutes;