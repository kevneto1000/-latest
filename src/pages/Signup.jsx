import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import img from '../assets/tamara-bellis-IwVRO3TLjLc-unsplash.jpg'

function Signup() {

    const backendUrl = import.meta.env.VITE_API_URL;

    let navigate = useNavigate();

    function handleSignup(e) {
        e.preventDefault();

        let form = new FormData(e.currentTarget)

        axios.post(`${backendUrl}/signup/`, form) 
            .then((response) => {
                alert("Account created successfully", response.data)
                // console.log("Account created successfully: " + response.data)

                navigate('/login')
            })
            .catch((error) => {
                for (let key in error.response.data) {
                    alert(`${key} ${error.response.data[key]}`);
                }
            })
        

    }

  return (
    <section>
        <div className="container mt-5">
            <div className="row mt-5 align-items-center">
                <div className="col-12 col-md-6 mt-5">
                    <img src={img} alt="" className='img-fluid'/>
                </div>

                <div className="col-12 col-md-6 mt-5">
                    <h3 className='text-center'>Signup Here</h3>

                    <form action="" onSubmit={handleSignup}>
                        <div className='my-4'>
                            <label htmlFor="">First Name</label>
                            <input type="text" name='first_name' placeholder='First Name' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" name='last_name' placeholder='Last Name' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">email</label>
                            <input type="email" name='email' placeholder='Enter your email' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Password</label>
                            <input type="password" name='password' placeholder='Enter your password' className='form-control' />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="">Profile</label>
                            <input type="file" name='profile' className='form-control' />
                        </div>


                        <div className="d-grid gap-2 mt-3">
                            <button type='submit' className='btn btn-success'>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup