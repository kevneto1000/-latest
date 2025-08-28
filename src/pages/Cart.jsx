import React from 'react'
import ProductCart from '../components/ProductCart';
import img from '../assets/tamara-bellis-IwVRO3TLjLc-unsplash.jpg'

function Cart() {
  return (
    <section>
      <div className="cart-intro">
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1 className='text-center text-white display-2 fw-bold'>Your Cart Page</h1>
        </div>

        <div className="container my-5">
          <div className="row my-5 border border-1 border-secondary-subtle rounded-2">
            <div className="col-12 p-4">
                <ProductCart
                    img={img}
                    name={"Dress"}
                    price={45000}
                    number={1}
                />
                <ProductCart
                    img={img}
                    name={"Dress"}
                    price={45000}
                    number={1}
                />
                <ProductCart
                    img={img}
                    name={"Dress"}
                    price={45000}
                    number={1}
                />

                <div className="cart-subtotal">
                    <h5 className='text-start'>Subtotal: 135000.00</h5>
                    <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-primary">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart