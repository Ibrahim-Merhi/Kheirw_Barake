import React from "react";
import "./Categories.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

function Categories() {
  return (
    <html lang="ar" dir="rtl">
      <section class=" section">
        {/* <!-- Container Start --> */}
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <!-- Section title --> */}
              <div class="section-title">
                <h2>  الأصناف المتوفرة</h2>
                <p>
                هنا يمكنك ان تشاهد جميع الاصناف المتوفرة لدينا والطلب بشكل مباشر
                </p>
              </div>
              <div class="row">
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
					  {/* <span class="icon-bg-1">	 */}
                      <i class="fas fa-hand-holding-usd icon-bg-1" style={{color:'white'}}></i>
					  {/* </span> */}
                      <h4>صدقة وزكاة</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Laptops
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Iphone 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Microsoft 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Monitors 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fas fa-cheese icon-bg-2" style={{color:'white'}}></i>
                      <h4>البان واجبان</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Cafe 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Fast food
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Restaurants
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Food Trac
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fas fa-cookie-bite icon-bg-3" style={{color:'white'}}></i>
                      <h4>حلويات</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Farms
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Gym
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Hospitals
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Parolurs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fas fa-coffee icon-bg-4" style={{color:'white'}}></i>
                      <h4>مشروبات</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Mens Wears
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Accessories 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Kids Wears 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          It & Software 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fas fa-tshirt icon-bg-5" style={{color:'white'}}></i>
                      <h4>البسة خارجية</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          It Jobs
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Cleaning & Washing 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Management 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Voluntary Works 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fas fa-gifts icon-bg-6" style={{color:'white'}}></i>
                      <h4>اكسسوارات وهدايا</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Bus 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Cars
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Motobike
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Rent a car
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fas fa-box-tissue icon-bg-7" style={{color:'white'}}></i>
                      <h4>كلينكس وحفاضات</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Cats
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Dogs
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Birds 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Others
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fas fa-tshirt icon-bg-8" style={{color:'white'}}></i>
                      <h4>بيجامات</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Cleaning
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Car Washing 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Clothing 
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Business 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /Category List -->	 */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container End --> */}
      </section>
    </html>
  );
}

export default Categories;
