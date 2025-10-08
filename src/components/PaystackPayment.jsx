import React from 'react'
import { PaystackButton } from 'react-paystack'

function PaystackPayment() {
  const publicKey = "pk_test_99d8f5a23465707c659bcd34e4658cd6acddaffe";
  const email = "netodboss@gmail.com";
  const amount = 5000 * 100;
  const reference = new Date().getTime().toString();


  const componentProps = {
    email,
    amount,
    publicKey,
    reference,

    text: "Pay with Paystack (demo)",
    onSuccess: (response) => {
      alert("Payment Successful\nReference: " + response.reference);
    },
    onClose: () => {
      alert("Payment unseuccessful");
    },
  }

  return (
    <div className='p-3'>
      <h3>Demo Paystack Payment</h3>
      <PaystackButton className='btn btn-success' {...componentProps} />
    </div>
  )
}

export default PaystackPayment