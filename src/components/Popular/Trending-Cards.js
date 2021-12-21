import "./Popular.css";
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from "../Trending-Cards/Cards";
import Trending2 from "../Trending-Cards/Cards2";
function Test123() {
  return (
<div>
<div className='container-fluid' >
    <div className="row">
        <div className="col-12">
            <Carousel controls={false} indicators={true} variant="dark">

                <Carousel.Item>
                   <Trending />
                    
                </Carousel.Item>

                <Carousel.Item>
                <Trending2 />

                    
                </Carousel.Item>


            </Carousel>
        </div>
    </div>
</div>
</div> 
 );
}
export default Test123;