import "./Popular.css";
import React from "react";
import Testprod from "../../assets/images/products-1.jpg";

function Popular() {
  return (
    <section class="popular-deals section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-titl">
              <h2>Trending Adds</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                magnam.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- offer 01 --> */}
            {/* <div class="trending-ads-slide"> */}
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light">
                  <div class="card">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={Testprod}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">11inch Macbook Air</a>
                      </h4>
                      <ul class="list-inline product-meta">
                        <li class="list-inline-item">
                          <a href="single.html">
                            <i class="fa fa-folder-open-o"></i>Electronics
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-calendar"></i>26th December
                          </a>
                        </li>
                      </ul>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo, aliquam!
                      </p>
                      <div class="product-ratings">
                        <ul class="list-inline">
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light">
                  <div class="card">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={Testprod}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">Full Study Table Combo</a>
                      </h4>
                      <ul class="list-inline product-meta">
                        <li class="list-inline-item">
                          <a href="single.html">
                            <i class="fa fa-folder-open-o"></i>Furnitures
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-calendar"></i>26th December
                          </a>
                        </li>
                      </ul>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo, aliquam!
                      </p>
                      <div class="product-ratings">
                        <ul class="list-inline">
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light">
                  <div class="card">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={Testprod}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">11inch Macbook Air</a>
                      </h4>
                      <ul class="list-inline product-meta">
                        <li class="list-inline-item">
                          <a href="single.html">
                            <i class="fa fa-folder-open-o"></i>Electronics
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-calendar"></i>26th December
                          </a>
                        </li>
                      </ul>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo, aliquam!
                      </p>
                      <div class="product-ratings">
                        <ul class="list-inline">
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light">
                  <div class="card">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={Testprod}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">Full Study Table Combo</a>
                      </h4>
                      <ul class="list-inline product-meta">
                        <li class="list-inline-item">
                          <a href="single.html">
                            <i class="fa fa-folder-open-o"></i>Furnitures
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-calendar"></i>26th December
                          </a>
                        </li>
                      </ul>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo, aliquam!
                      </p>
                      <div class="product-ratings">
                        <ul class="list-inline">
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item selected">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
    </section>
  );
}

export default Popular;




{/* <div>
<div className='container-fluid' >
    <div className="row">
        <div className="col-sm-12">
            <h3>React Bootstrap Carousel</h3>
        </div>
    </div>
    <div className="row">
        <div className="col-6">
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src={ad}
                        alt="First slide"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src={ad1}
                        alt="Second slide"
                    />

                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src={ad2}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>

            </Carousel>
        </div>
    </div>
</div>
</div> */}