import React from 'react'

function PaymentDetails({acctName, phoneNo, acctNo, bankName, img}) {
  return (
    <div>
        <div className="my-5 pb-3 w-100 border-bottom border-1 d-flex flex-column align-items-center text-center details">
            <img src={img} alt="" className='img-logo' />
            <h3>{bankName}</h3>
            <p>{"Account Name: " + acctName}</p>
            <p>{"Account No: " + acctNo}</p>
            <em>{"Phone No: " + phoneNo}</em>
        </div>
    </div>
  )
}

export default PaymentDetails