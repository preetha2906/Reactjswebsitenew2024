import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
},[])

    const collectData = async () => {
        var formdata = {
            name: name,
            email: email,
            password: password
        }
        try {
            const result = await axios.post('http://localhost:4000/register', formdata);
            console.warn(result);
            localStorage.setItem("user",JSON.stringify(result))
            navigate('/')
          } 
          catch (error) {
            console.error(error);
          }
    }

    // const collectData = async()=>{
    //     // console.warn(name,email,password);
    //     let result = await fetch("http://localhost:4000/register",{
    //         method:'post',
    //         body:JSON.stringify({name,email,password}),
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     result = await result.json()
    //     console.warn(result);
    // }

    return (
        <div>
            <h1>Register</h1>
            {/* <input className="inputBox" type='text' placeholder='Enter Name' ref={name} onChange={(e) => setName(e.target.value)} />
            <input className="inputBox" type='text' placeholder='Enter Email' ref={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type='password' placeholder='Enter password' ref={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={collectData} className='appButton' type='button'>Sign Up</button> */}
            <input className="inputBox" type="text" placeholder="Enter Name" ref={nameRef} onChange={(e) => setName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Email" ref={emailRef} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="password" placeholder="Enter Password" ref={passwordRef} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}
export default SignUp;