import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentDetails from './PaymentDetails'
import axios from 'axios'

import img from '../assets/opay_logo-removebg-preview.png'
import img1 from '../assets/palmpay_logo-removebg-preview.png'
import img2 from '../assets/Zenith-Bank-logo-removebg-preview.png'
import img3 from '../assets/unnamed-removebg-preview.png'

function ManualPayment() {
  const backendUrl = import.meta.env.VITE_API_URL;

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let form = new FormData(e.currentTarget)

    axios.post(`${backendUrl}/manual_payment/`, form)
    .then((response) => {
      alert(response.data.message)
      navigate('/')
    })
    .catch(err => console.error(err.response?.data))
  }



  return (
    <section>
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-md-6 my-5">  
                    <PaymentDetails
                      img={img2}
                      bankName= {"Zenith Bank"}
                      acctName={"Nduka Kevin"}
                      acctNo={2281206720}
                      phoneNo={"+2347015796524"}
                    />
                    <PaymentDetails
                      img={img3}
                      bankName= {"Moniepoint"}
                      acctName={"Nduka Kevin"}
                      acctNo={7015796524}
                      phoneNo={"+2347015796524"}
                    />
                    <PaymentDetails
                      img={img}
                      bankName= {"Opay"}
                      acctName={"Nduka Kevin"}
                      acctNo={7015796524}
                      phoneNo={"+2347015796524"}
                    />
                    <PaymentDetails
                      img={img1}
                      bankName= {"Palmpay"}
                      acctName={"Nduka Kevin"}
                      acctNo={7015796524}
                      phoneNo={"+2347015796524"}
                    />
                </div>

                <div className="col-12 col-md-6 my-5">
                  <h5 className='text-center text-secondary mt-5'>Please fill out this form after making payment for verification. Also contact the recipient and send the proof through whatsapp, after it is verified, you will get update on delivery.</h5>
                  <form action="" onSubmit={handleSubmit} className='mt-5'>
                    <div className='my-3'>
                      <input type="hidden" name='user' value="1" />

                      <label htmlFor="">Reference:</label>
                      <input type="text" name='reference' className='form-control' />
                    </div>
                    <div className='my-3'>
                      <label htmlFor="">Phone Number:</label>
                      <input type="text" name='phone_number' className='form-control' />
                    </div>
                    <div className='my-3'>
                      <label htmlFor="">Address:</label>
                      <input type="text" name='address' className='form-control' />
                    </div>
                    <div className='my-3'>
                      <label htmlFor="">Proof:</label>
                      <input type="file" name='proof' className='form-control' />
                    </div>

                    <div className='d-flex justify-content-center my-5'>
                      <button type='submit' className='btn btn-primary btn-sm'>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ManualPayment