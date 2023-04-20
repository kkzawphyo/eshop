import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
// import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";

function Login() {
    const history = useNavigate ();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [state, dispatch] = useStateValue();  
    const[errormsg,setErrormsg] = useState('')

    const signIn = e => {
            e.preventDefault();
            const response = fetch('http://localhost:4000/user/login', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            usr_email: email,
            usr_password: password
            })
        })
         .then((response)=>response.json());
         response.then(function(result){
            if(result.message !== "Authentication successful"){
                setErrormsg(result.message);
            }else{
                dispatch({
                    type: "ADD_TO_USERINFO",
                    item: {
                        usr_name:result.usr_name
                    },
                });
                localStorage.setItem("user", JSON.stringify(result));
                history("/");
            }
            
         })
    }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             if (auth) {
    //                 history('/');
    //             }
    //         })
    //         .catch(error => alert(error.message))

    // }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button variant="outlined" className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <h5 className='error-msg'>{errormsg}   </h5>
                <Link to="/Signup" style={{ textDecoration: "none" }}>
                    <button className='login__registerButton'>Create your eShop Account</button>
                </Link>
                {/* <button className='login__registerButton' onClick={register}>Create your eShop Account</button> */}
            </div>
        </div>
    )
}

export default Login;