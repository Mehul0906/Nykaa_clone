import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    
    return (
        <div className='position-absolute bg-white mt-3' style={{boxShadow:"2px 1px 5px 1px black"}}>
            <div className='Sign-box-first'>
                <div className='Sign-box-second'>
                    <h3>Login / Create Account</h3>
                    <span style={{ fontSize: "15px", color: "grey" }}>Register now and get 1000 Nykaa reward points instantly!</span>
                    <div className='d-flex justify-content-center pt-3'>
                        <Link to={"/Signinpage"}><button className='Sign-first-btn'>Sign in with Mobile / Email</button></Link>
                    </div>
                    <div className='d-flex justify-content-center pt-3'>
                        <Link><button className='Sign-second-btn'>Google</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login