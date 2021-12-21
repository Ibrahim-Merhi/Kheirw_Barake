
import logonb from '../../assets/images/logonb.png'
import './Navbar.css'
import React from 'react'
import { Link } from "react-router-dom";

function Navbar () {
    return (
	// 	<nav className="navbar navbar-expand-lg navbar-light">
    //     <div className="container-fluid">
    //         <img src={logonb} alt='' className='imge' />
    //         <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse8">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarCollapse8">
    //             <div className="navbar-nav">
	// 			<Link className="nav-item nav-link " to="/">Home</Link>
	// 			   <Link className="nav-item nav-link " to="/about">About Us</Link>
	// 			   {/* <Link className="nav-item nav-link " to="/products">Products</Link> */}
	// 			   <Link className="nav-item nav-link " to="/contact">Contact Us</Link>
    //                <Link className='nav-item nav-link' to="/store">Store</Link>
                   
    //             </div>
    //             <form className="d-flex ms-auto">
                    
    //                 <Link className='nav-iteam nav-link' to="/Sign"> <button type="submit" className="btn btn-outline-secondary">log in</button> </Link>
    //             </form>
    //         </div>
    //     </div>        
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-dark" style={{background: "#34495E"}}>
    <div class="container">
        <img src={logonb} alt="Logo" class="imge" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                <Link className="nav-item nav-link " to="/">الصفحة الرئيسية</Link>
                </li>
                <li class="nav-item">
                   <Link className='nav-item nav-link' to="/store">المتجر</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-item nav-link " to="/about">من نحن</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-item nav-link " to="/contact">تواصل معنا</Link>
                </li>
               
                <li class="nav-item">
                   <Link className='nav-item nav-link' to="/allstore">AllStore</Link>
                </li>
                <li class="nav-item">
                   <Link className='nav-item nav-link' to="/cart">Cart</Link>
                </li>
            </ul>
            <div class="d-flex">
             <button class="btn btn-light"> <Link className='nav-iteam' to="/Sign">تسجيل الدخول</Link></button>
            </div>
        </div>
    </div>
</nav>
    )
}

export default Navbar