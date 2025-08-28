import React from 'react'
// import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

import img from '../assets/tamara-bellis-IwVRO3TLjLc-unsplash.jpg'

function Home() {
  return (
    <section>
        <div className="banner">
            <div className="d-flex justify-content-center align-items-center h-100">
                <h1 className='text-center text-white display-2 fw-bold'>Welcome to Home Page</h1>
            </div>
        </div>

        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4 my-5">
                      <ProductList
                          img={img}
                          name={"Dress"}
                          description={"This is a beautiful dress"}
                          price={45000}
                      />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-5">
                      <ProductList
                          img={img}
                          name={"Dress"}
                          description={"This is a beautiful dress"}
                          price={45000}
                      />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-5">
                      <ProductList
                          img={img}
                          name={"Dress"}
                          description={"This is a beautiful dress"}
                          price={45000}
                      />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-5">
                      <ProductList
                          img={img}
                          name={"Dress"}
                          description={"This is a beautiful dress"}
                          price={45000}
                      />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-5">
                      <ProductList
                          img={img}
                          name={"Dress"}
                          description={"This is a beautiful dress"}
                          price={45000}
                      />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-5">
                      <ProductList
                          img={img}
                          name={"Dress"}
                          description={"This is a beautiful dress"}
                          price={45000}
                      />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home