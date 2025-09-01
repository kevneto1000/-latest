import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Home() {

    const backendUrl = import.meta.env.VITE_API_URL;
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`${backendUrl}/products/`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.log(error))
    }, [])

  return (
    <section>
        <div className="banner">
            <div className="d-flex justify-content-center align-items-center h-100">
                <h1 className='text-center text-white display-2 fw-bold'>Welcome to Home Page</h1>
            </div>
        </div>

        <div className="container mt-5">
            <div className="row mt-5">
                {
                    product.map((products) => (
                        <div className="col-12 col-md-6 col-lg-4 my-5">
                            <div className="card mx-auto" style={{ width: "18rem" }}>
                                <img src={backendUrl + products?.first_image} className="card-img-top img-fluid" alt={products?.name} style={{ height: "18rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{products?.name}</h5>
                                    <p className='card-text text-success fw-bold'>{products?.price}</p>
                                    <Link className="btn btn-primary mt-2 d-flex justify-content-center card-link">Add to cart</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Home