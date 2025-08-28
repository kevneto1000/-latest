import React from 'react'
import { Link } from 'react-router-dom';

function ProductList({img, name, description, price}) {
  return (
    <div>
        <div className="card mx-auto" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text text-success fw-bold'>{price}</p>
                <Link  className="btn btn-primary mt-2 d-flex justify-content-center card-link">Add to cart</Link>
            </div>
        </div>
    </div>
  )
}

export default ProductList