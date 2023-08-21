import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContaxt } from '../../Provider/AuthProvider';

const Login = () => {
    const { singIn } = useContext(AuthContaxt)
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const [succes, setSucces] = useState('')
    const navegate = useNavigate();
    const location = useLocation()
    console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handelLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log(email,password)
        setError('')
        setError('')
        singIn(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                setSucces('Your email success')
                setError('')
                from.reset('')
                navegate('from', { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setSucces('')
            })

    }
    return (
        <div className='from-container'>
            <h2 className='from-title'>Login</h2>
            <form onSubmit={handelLogin}>
                <div className='from-control'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='from-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" required />
                    <p onClick={() => setShow(!show)}><small>

                        {
                            show ? <span>hide password</span> : <span>show password</span>
                        }
                    </small></p>

                </div>
                <p className='error-text'>{error}</p>
                <p className='success-text'>{succes}</p>

                <input className='btn-submite' type="submit" value="Login" />
                <p>New to Ema-john? <Link className='text-font' to='/singup'>Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;