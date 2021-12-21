import "./Popular.css";
import React from "react";
import Testprod from "../../assets/images/products-1.jpg";
import { Carousel } from 'react-bootstrap';
import Test123 from "./Trending-Cards.js";
import Cards from "../Trending-Cards/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';
function Popular() {
  return (
    <section class="popular-deals section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 ">
            <div class="section-titl">
              <h2>الأصناف الأكثر مبيعاً</h2>
              <p>
                هنا يمكنك ان تشاهد الاصناف الاكثر مبيع والطلب بشكل مباشر
              </p>
            </div>
          </div>
        </div>
        <Test123 />
        
          
        </div>
    </section>
  );
}

export default Popular;




