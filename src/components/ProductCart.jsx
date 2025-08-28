import React from 'react'

function ProductCart({img, name, price, number}) {
  return (
    <div>
        <div className="d-flex justify-content-evenly align-items-center my-5">
            <div className="cart-img">
                <img src={img} className='rounded-3' alt="" />
            </div>
            <div className="cart-details d-flex flex-column">
                <p className='fw-bold'>{name}</p>
                <p>{price}</p>
            </div>
            <div className="cart-count d-flex align-items-center gap-3">
                <button className='btn'>-</button>
                <span>{number}</span>
                <button className='btn'>+</button>
            </div>
            <div className="cart-delete">
                <button className='btn btn-danger p-1'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCart