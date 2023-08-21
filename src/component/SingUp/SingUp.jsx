import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContaxt } from '../../Provider/AuthProvider';

const SingUp = () => {
    const {crateUser} = useContext(AuthContaxt)
    const [errro,setError] = useState("")
    const [success,setSuccess] = useState('')

    const handelSingUp = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        const conframPass = from.confirm.value;
        console.log(email,password,conframPass)

        setError('')
        setSuccess('')
        if(password !== conframPass){
            setError('your password did not mach')
            return
        }
        else if(password.length < 6){
            setError('password must be 6 cracter or longer')
            return;
        }
        crateUser(email,password)
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser)
            setSuccess('success your email')
            setError('')
            from.reset()
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
            setSuccess('')
        })

    }
    return (
        <div className='from-container'>
            <h2 className='from-title'>Sing Up</h2>
            <form onSubmit={handelSingUp}>
                <div className='from-control'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='from-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='from-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submite' type="submit" value="sing up" />
                <p>Already have an account?<Link className='text-font' to='/login'>Login</Link></p>
                <p className='error-text'>{errro}</p>
                <p className='success-text'>{success}</p>
                 
            </form>
        </div>
    );
};

export default SingUp;