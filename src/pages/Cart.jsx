import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const backendUrl = import.meta.env.VITE_API_URL;
  const {getCartItems, updateCart, deleteCart} = useContext(CartContext);
  const [cartData, setCartData] = useState({items: [], count: 0, subtotal: 0});

  useEffect(() => {
    getCartItems().then(data => setCartData(data))
  })

  return (
    <section>
      <div className="cart-intro">
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1 className='text-center text-white display-2 fw-bold'>Your Cart Page</h1>
        </div>

        <div className="container my-5">
          <div className="row my-5">
            <div className="col-12 p-4">
              {
                cartData.items.map(item => (
                  <div className="d-flex justify-content-evenly align-items-center my-5">
                    <div className="cart-img">
                      <img src={backendUrl+item.first_image} className='rounded-3' alt={item.name} />
                    </div>
                    <div className="cart-details d-flex flex-column">
                      <p className='fw-bold'>{item.name}</p>
                      <p>{"₦" + item.price}</p>
                    </div>
                    <div className="cart-count d-flex align-items-center gap-3">
                      <button className='btn' onClick={() => updateCart(item.id, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button className='btn' onClick={() => updateCart(item.id, item.qty + 1)}>+</button>
                    </div>
                    <div className="cart-delete">
                      <button className='btn btn-danger p-1' onClick={() => deleteCart(item.id)}>Delete</button>
                    </div>
                  </div>
                ))
              }


              <div className="cart-subtotal">
                <h4 className='text-start'>Subtotal: ₦{cartData.subtotal}</h4>
                <div className="d-flex justify-content-center my-5">
                  <button
                    type="button"
                    className="btn btn-primary btn-md"
                    data-bs-toggle="modal"
                    data-bs-target="#modalId1"
                  >
                    Proceed to checkout
                  </button>
                
                  <div
                    className="modal fade"
                    id="modalId1"
                    tabIndex="-1"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    
                    role="dialog"
                    aria-labelledby="modalTitleId"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="modalTitleId">
                            Choose Your Payment Mode
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className='d-flex justify-content-between'>
                            <Link to="/paystack_payment">
                              <button className='btn btn-outline-success pay'>
                                Paystack Payment
                              </button>
                            </Link>
                            
                            <Link to="/manual_payment">
                              <button className='btn btn-outline-primary pay'>
                                Manual Payment
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <script>
                    const myModal = new bootstrap.Modal(
                      document.getElementById("modalId"),
                      options,
                    );
                  </script>  
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