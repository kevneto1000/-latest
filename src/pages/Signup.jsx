import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/tamara-bellis-IwVRO3TLjLc-unsplash.jpg'

function Signup() {
  return (
    <section>
        <div className="container mt-5">
            <div className="row mt-5 align-items-center">
                <div className="col-12 col-md-6 mt-5">
                    <img src={img} alt="" className='w-100'/>
                </div>

                <div className="col-12 col-md-6 mt-5">
                    <h3 className='text-center'>Signup Here</h3>

                    <form action="">
                        <div className='my-4'>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='First Name' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='Last Name' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">email</label>
                            <input type="email" placeholder='Enter your email' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Enter your password' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Profile</label>
                            <input type="file" className='form-control' />
                        </div>


                        <div className="d-grid gap-2 mt-3">
                            <button className='btn btn-success'>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup