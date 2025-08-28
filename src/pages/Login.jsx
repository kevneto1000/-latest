import React from 'react'
import { Link } from 'react-router-dom'

import img from '../assets/tamara-bellis-68csPWTnafo-unsplash.jpg'

function Login() {
  return (
    <section>
        <div className="container mt-5">
            <div className="row mt-5 align-items-center">
                <div className="col-12 col-md-6 mt-5">
                    <img src={img} alt="" className='w-100'/>
                </div>

                <div className="col-12 col-md-6 mt-5">
                    <h3 className='text-center'>Login Here</h3>

                    <form action="">
                        <div className='my-4'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Enter your email' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Enter your password' className='form-control' />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button className='btn btn-success'>Login</button>
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