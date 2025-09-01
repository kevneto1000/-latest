import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import img from '../assets/tamara-bellis-68csPWTnafo-unsplash.jpg'

function Login() {
    const backendUrl = import.meta.env.VITE_API_URL;
    let navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        axios.post(`${backendUrl}/login/`, form)
        .then((response) => {
            // console.log("Login Successful: " + response.data)
            alert("Login Successful", response.data)
            navigate("/")
        })
        .catch((error) => {
            for(let key in error.response.data) {
                alert(`${key} ${error.response.data[key]}`);
            }
        })
    }
  return (
    <section>
        <div className="container mt-5">
            <div className="row mt-5 align-items-center">
                <div className="col-12 col-md-6 mt-5">
                    <img src={img} alt="" className='w-100'/>
                </div>

                <div className="col-12 col-md-6 mt-5">
                    <h3 className='text-center'>Login Here</h3>

                    <form action="" onSubmit={handleLogin}>
                        <div className='my-4'>
                            <label htmlFor="">Email</label>
                            <input name='email' type="email" placeholder='Enter your email' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Password</label>
                            <input name='password' type="password" placeholder='Enter your password' className='form-control' />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type='submit' className='btn btn-success'>Login</button>
                            <p className='text-center'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login