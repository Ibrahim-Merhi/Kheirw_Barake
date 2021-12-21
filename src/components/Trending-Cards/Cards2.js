import React from "react";
import "./Cards.css"
import Testprod from "../../assets/images/products-1.jpg";
import { Carousel } from 'react-bootstrap';
import img1 from "../../assets/images/Products/ملح.png"
import img2 from "../../assets/images/Products/برغل اسمر.jpg"
import img3 from "../../assets/images/Products/sugar deroni.png"
import img4 from "../../assets/images/Products/برغل.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
function Trending() {
  return (
    <section class="popular-deals section bg-gray">
      <div class="container"></div>
<div class="row">
        
          {/* <!-- offer 01 --> */}
            {/* <div class="trending-ads-slide"> */}
           
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light ">
                  <div class="card" id="test">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={img1}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">ملح ناعم-سيرينا 1 كغ</a>
                      </h4>
                      {/* <ul class="list-inline product-meta">
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
                      </ul> */}
                      <p class="card-text">
                      السعر : 5,000 <br/>
المقاس : 1 كيلوغرام 
                      </p>
                      {/* <div class="product-ratings">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light ">
                  <div class="card" id="test">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={img2}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">برغل اسمر خشن-خير بركة 900غ</a>
                      </h4>
                      {/* <ul class="list-inline product-meta">
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
                      </ul> */}
                      <p class="card-text">
                      السعر : 17,000 <br/>
المقاس : 900 غرام 
                      </p>
                      {/* <div class="product-ratings">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light ">
                  <div class="card" id="test">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={img3}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">سكر أبيض - ديروني </a>
                      </h4>
                      {/* <ul class="list-inline product-meta">
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
                      </ul> */}
                      <p class="card-text">
                      2,500 <br/>
المقاس : 900 غرام 
                      </p>
                      {/* <div class="product-ratings">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                {/* <!-- product card --> */}
                <div class="product-item bg-light ">
                  <div class="card" id="test">
                    <div class="thumb-content">
                      {/* <!-- <div class="price">$200</div> --> */}
                      <a href="single.html">
                        <img
                          class="card-img-top img-fluid"
                          src={img4}
                          alt="Card image cap"
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="single.html">برغل اسمر ناعم-خير وبركة 900غ</a>
                      </h4>
                      {/* <ul class="list-inline product-meta">
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
                      </ul> */}
                      <p class="card-text">
                      السعر : 17,000 <br/>
المقاس : 900 غرام 
                      </p>
                      {/* <div class="product-ratings">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          {/* </div> */}
           
        
    </section>
  );
}

export default Trending;
