import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
},[])

    const HandleLogin = async () => {
        let result = await fetch ("http://localhost:4000/login",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
        }else{
            alert("Please enter connect details")
        }
    }


    return (
        <div className='login'>
            <h1>Login</h1>
            <input className="inputBox" type="text" placeholder="Enter Email" ref={emailRef} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="password" placeholder="Enter Password" ref={passwordRef} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={HandleLogin} className="appButton" type="button">Login</button>
        </div>
    )
}
export default Login;