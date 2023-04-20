import React, { useState } from 'react';
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
// import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";

function Signup() {
    const history = useNavigate ();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState('');
    const [repassword, setRepassword] = useState(''); 
    const [state, dispatch] = useStateValue();  
    const[errormsg,setErrormsg] = useState('')

    const signUp = e => {
        e.preventDefault();
        const response = fetch('http://localhost:4000/user/signup', {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        usr_email: email,
        usr_password: password,
        usr_name:name,
        usr_repassword:repassword
        })
    })
     .then((response)=>response.json());
     response.then(function(result){
        alert(result.message);
        
     })
}

    return (
        <div className='signup'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="signup__logo">
                    <StorefrontIcon className="signup__logoImage" fontSize="large" />
                    <h2 className="signup__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-up</h1>

                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Retype Password</h5>
                    <input type='password' value={repassword} onChange={e => setRepassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signUp}>Sign Up</button>
                </form>
                <h5 className='error-msg'>{errormsg}</h5>
                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to="/login" style={{ textDecoration: "none" }}>
                    <button className='login__registerButton'>Click to Sign-in</button>
                </Link>
            </div>
        </div>
    )
}

export default Signup;