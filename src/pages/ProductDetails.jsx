import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import img from '../assets/timberland.webp'
import img1 from '../assets/timberland_1.webp'
import img2 from '../assets/timberland_2.webp'
import img3 from '../assets/timberland_3.webp'

function ProductDetails() {

  return (
    <section>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-9">
            <Carousel 
              showThumbs={true}  
              infiniteLoop={true}
              autoPlay={false}
              emulateTouch={true}
              className='bg-secondary-subtle'
            >
              <div className='img-carousel'>
                <img src={img} alt="Product Image" className="img-fluid" />
              </div>
              <div className='img-carousel'>
                <img src={img1} alt="Product Image" className="img-fluid" />
              </div>
              <div className='img-carousel'>
                <img src={img2} alt="Product Image" className="img-fluid" />
              </div>
              <div className='img-carousel'>
                <img src={img3} alt="Product Image" className="img-fluid" />
              </div>
            </Carousel>
            <div className="product-details-info">
              <h2 className='m-4'>Timberland Shoes</h2>
              <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
          <div className="col-12 col-md-3 border border-1 border-secondary-sublte rounded-2 h-25 d-flex flex-column justify-content-center">
            <h3 className='m-4'>45000.00</h3>
            <button className="btn btn-primary m-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails