import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContaxt } from '../../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContaxt)
    console.log(user)

    const handelLogut = () =>{
        logOut()
        .then(result =>{})
        .catch(error => console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/chakout">ChakOut</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup">SingUp</Link>
                {
                    user && <span className='text-email'>{user.email}<button onClick={handelLogut}>singOut</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;