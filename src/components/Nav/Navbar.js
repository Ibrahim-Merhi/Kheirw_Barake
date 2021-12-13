
import image from '../../assets/images/logo.jpg'
import React from 'react'
import { Link } from "react-router-dom";

function Navbar () {
    return (
		<nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">Brand</a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse8">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse8">
                <div class="navbar-nav">
				<Link className="nav-item nav-link " to="/">Home</Link>
				   <Link className="nav-item nav-link " to="/about">About Us</Link>
				   {/* <Link className="nav-item nav-link " to="/products">Products</Link> */}
				   <Link className="nav-item nav-link " to="/contact">Contact Us</Link>
                   <Link className='nav-item nav-link' to="/store">Store</Link>
                   <Link className='nav-item nav-link' to="/store2">Store-list-view</Link>
                </div>
                <form class="d-flex ms-auto">
                    <input type="text" class="form-control me-sm-2" placeholder="Search"/>
                    <button type="submit" class="btn btn-outline-secondary">Search</button>
                </form>
            </div>
        </div>        
    </nav>
    )
}

export default Navbar