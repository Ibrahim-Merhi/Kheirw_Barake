import React from "react";
import Testprod from '../../assets/images/products-1.jpg'
import Searchbar from '../../components/Searchbar/Searchbar.js'
import { Link } from "react-router-dom";
const Store = () => {
    return (
<>
<Searchbar />
<section className="section-sm">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="search-result bg-gray">
					<h2>Results For "Electronics"</h2>
					<p>123 Results</p>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-3">
				<div className="category-sidebar">
					<div className="widget category-list">
	<h4 className="widget-header">All Category</h4>
	<ul className="category-list">
		<li><a href="category.html">Laptops <span>93</span></a></li>
		<li><a href="category.html">Iphone <span>233</span></a></li>
		<li><a href="category.html">Microsoft  <span>183</span></a></li>
		<li><a href="category.html">Monitors <span>343</span></a></li>
	</ul>
</div>

{/* <div className="widget category-list">
	<h4 className="widget-header">Nearby</h4>
	<ul className="category-list">
		<li><a href="category.html">New York <span>93</span></a></li>
		<li><a href="category.html">New Jersy <span>233</span></a></li>
		<li><a href="category.html">Florida  <span>183</span></a></li>
		<li><a href="category.html">California <span>120</span></a></li>
		<li><a href="category.html">Texas <span>40</span></a></li>
		<li><a href="category.html">Alaska <span>81</span></a></li>
	</ul>
</div>

<div className="widget filter">
	<h4 className="widget-header">Show Produts</h4>
	<select>
		<option>Popularity</option>
		<option value="1">Top rated</option>
		<option value="2">Lowest Price</option>
		<option value="4">Highest Price</option>
	</select>
</div>

<div className="widget price-range w-100">
	<h4 className="widget-header">Price Range</h4>
	<div className="block">
						<input className="range-track w-100" type="text" data-slider-min="0" data-slider-max="5000" data-slider-step="5"
						data-slider-value="[0,5000]" />
				<div className="d-flex justify-content-between mt-2">
						<span className="value">$10 - $5000</span>
				</div>
	</div>
</div>

<div className="widget product-shorting">
	<h4 className="widget-header">By Condition</h4>
	<div className="form-check">
	  <label className="form-check-label">
	    <input className="form-check-input" type="checkbox" value="" />
	    Brand New
	  </label>
	</div>
	<div className="form-check">
	  <label className="form-check-label">
	    <input className="form-check-input" type="checkbox" value="" />
	    Almost New
	  </label>
	</div>
	<div className="form-check">
	  <label className="form-check-label">
	    <input className="form-check-input" type="checkbox" value="" />
	    Gently New
	  </label>
	</div>
	<div className="form-check">
	  <label className="form-check-label">
	    <input className="form-check-input" type="checkbox" value="" />
	    Havely New
	  </label>
	</div>
</div> */}

				</div>
			</div>
			<div className="col-md-9">
				<div className="category-search-filter">
					<div className="row">
						<div className="col-md-6">
							<strong>Short</strong>
							<select>
								<option>Most Recent</option>
								<option value="1">Most Popular</option>
								<option value="2">Lowest Price</option>
								<option value="4">Highest Price</option>
							</select>
						</div>
						<div className="col-md-6">
							<div className="view">
								<strong>Views</strong>
								<ul className="list-inline view-switcher">
									<li className="list-inline-item">
										<Link to="/store2"><i className="fa fa-th-large "></i></Link>
									</li>
									<li className="list-inline-item">
									<Link to="/store"><i className="fa fa-reorder text-info"></i></Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="product-grid-list">
					<div className="row mt-30">
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod} alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">11inch Macbook Air</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Electronics</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod}alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">Study Table Combo</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Furnitures</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod} alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">11inch Macbook Air</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Electronics</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod} alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">11inch Macbook Air</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Electronics</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod}alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">Study Table Combo</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Furnitures</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod} alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">11inch Macbook Air</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Electronics</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod} alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">11inch Macbook Air</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Electronics</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod}alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">Study Table Combo</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Furnitures</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
						<div className="col-sm-12 col-lg-4 col-md-6">
							{/* <!-- product card --> */}
<div className="product-item bg-light">
	<div className="card">
		<div className="thumb-content">
			{/* <!-- <div className="price">$200</div> --> */}
			<a href="single.html">
				<img className="card-img-top img-fluid" src={Testprod} alt="Card image cap" />
			</a>
		</div>
		<div className="card-body">
		    <h4 className="card-title"><a href="single.html">11inch Macbook Air</a></h4>
		    <ul className="list-inline product-meta">
		    	<li className="list-inline-item">
		    		<a href="single.html"><i className="fa fa-folder-open-o"></i>Electronics</a>
		    	</li>
		    	<li className="list-inline-item">
		    		<a href="#"><i className="fa fa-calendar"></i>26th December</a>
		    	</li>
		    </ul>
		    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
		    <div className="product-ratings">
		    	<ul className="list-inline">
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item selected"><i className="fa fa-star"></i></li>
		    		<li className="list-inline-item"><i className="fa fa-star"></i></li>
		    	</ul>
		    </div>
		</div>
	</div>
</div>



						</div>
					</div>
				</div>
				<div className="pagination justify-content-center">
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
									<span className="sr-only">Previous</span>
								</a>
							</li>
							<li className="page-item"><a className="page-link" href="#">1</a></li>
							<li className="page-item active"><a className="page-link" href="#">2</a></li>
							<li className="page-item"><a className="page-link" href="#">3</a></li>
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
									<span className="sr-only">Next</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</section>
</>
    )
}

export default Store;