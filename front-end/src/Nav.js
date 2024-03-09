import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './App.css';


const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/SignUp')
    }
    return (
        <div className='nav-ul'>
            <img alt='logo' className='logo' src='https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?w=2000' />
            {auth ?
                <ul>
                    <li>
                        <Link to='/'>Products</Link>
                    </li>
                    <li>
                        <Link to='/add'>Add Products</Link>
                    </li>
                    {/* <li>
                        <Link to='/update'>Update Products</Link>
                    </li> */}
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li><Link onClick={logout} to='/SignUp'>Logout {JSON.parse(auth).name}</Link></li>
                </ul> :
                <ul className='nav-ul nav-right'>
                    <li> <Link to='/signup'>Sign Up</Link></li>
                    <li> <Link to='/login'>Login</Link></li>
                </ul>


            }

        </div>
    )
}
export default Nav;