import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  axios  from 'axios';


function ProductDetails() {
  const backendUrl = import.meta.env.VITE_API_URL;
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${backendUrl}/products/${id}`)
    .then(response => {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch(err => console.error(err));
  }, [id])

  return (
    <section>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-9">
            <div className="product-details-info">
              <h2 className='m-4'>{product?.name}</h2>
              <p className='m-4'>{product?.description}</p>
            </div>
            {
              product?.images?.length > 0 && (
                <Carousel
                  showThumbs={true}
                  infiniteLoop={true}
                  autoPlay={false}
                  emulateTouch={true}
                  className='bg-secondary-subtle'
                >
                  {
                    product.images.map(img => (
                      <div className='img-carousel'>
                        <img key={img.id} src={backendUrl+img.image} alt={product?.name} className="img-fluid" />
                      </div>
                    ))
                  }

                </Carousel>
              )
            }
          </div>

          <div className="col-12 col-md-3 border border-1 border-secondary-sublte rounded-2 h-25 d-flex flex-column justify-content-center">
            <h3 className='m-4'>{"₦"+product?.price}</h3>
            <p className='text-secondary fw-bold'>We have {product?.in_stock} items left.</p>
            <button className="btn btn-primary m-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails