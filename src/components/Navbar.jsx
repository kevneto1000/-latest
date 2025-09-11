import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function Navbar() {
    let backendUrl = import.meta.env.VITE_API_URL;
    const userId = localStorage.getItem("userId")

    const { cartCount } = useContext(CartContext);


    function handlePost(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios.post(`${backendUrl}/products/create/`, formData)
        .then((response) => {
            console.log("Post added successfully", response.data)
        })
        .catch(err => console.error(err));
    }

  return (
    <div>
        <nav
            className="navbar navbar-expand-sm bg-success"
        >
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex gap-3 my-2 my-lg-0">
                        {/* Modal button */}
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#modalId"
                        >
                            Post a product
                        </button>
                        
                        <div
                            className="modal fade"
                            id="modalId"
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
                                            Post New Product
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="" onSubmit={handlePost}>
                                            <div className='mb-3'>
                                                <input type="text" name='name' className='form-control' placeholder='Enter product name' />
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="">Description</label>
                                                <textarea name="description" id="" className='form-control'></textarea>
                                            </div>
                                            <div className='mb-3'>
                                                <input type="number" name='price' className='form-control' placeholder='Product price' />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="number" name='in_stock' className='form-control' placeholder='How many in stock?' />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="">Images</label>
                                                <input type="file" name='images' className='form-control' />
                                            </div>

                                            <button className='btn btn-outline-primary mb-3' type='submit'>
                                                Add Product
                                            </button>
                                        </form>
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
                        
                        <Link 
                            to="/cart"
                            className="btn btn-badge border border-1 border-black position-relative"
                        >
                            <FaShoppingCart/>
                            <span
                                className="badge bg-danger position-absolute top-0 right-0 rounded-pill"
                            >
                                {cartCount}
                            </span>
                        </Link>

                        {   
                            !userId ?
                                <button className='btn btn-warning'>
                                    <Link to="/login">Login</Link>
                                </button>
                            : 

                                <button className='btn btn-warning'>
                                    <Link to="/login">Signout</Link>
                                </button>
                        }
                        
                    </div>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar