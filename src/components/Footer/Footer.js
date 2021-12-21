import "./Footer.css";
import Footerimg from "../../assets/images/logo.jpg";
import React from "react";
import "boxicons";
import "font-awesome/css/font-awesome.min.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
// import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer
      class="text-center text-lg-start text-dark"
      style={{ backgroundColor: "#ECEFF1", direction: "rtl" }}
    >
      <section
        class="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: "#ECEFF1", direction: "rtl" }}
      >
        <div class="me-5"></div>
      </section>

      <section class="">
        <div class="container text-center  mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-3">خير وبركة</h6>
              {/* <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                /> */}
              <p>
                - معلومات عامة عن خير وبركة - معلومات عامة عن خير وبركة -
                معلومات عامة عن خير وبركة
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 class="text-uppercase fw-bold mb-3">المنتجات والبضائع</h5>
              {/* <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                /> */}
              <p>
                <a href="#!" class="text-dark">
                  ألبان وأجبان
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  ألبسة داخلية وخارجية
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  أكسسوارات وهدايا
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  زيوت ومعلبات
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 class="text-uppercase fw-bold mb-3">يمكنكم متابعتنا عبر</h5>
              {/* <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                /> */}
              <p>
                <a href="#!" class="text-dark">
                  Facebook
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  Youtube
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  Twitter
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h5 class="text-uppercase fw-bold mb-3">للتواصل معنا عبر </h5>
              {/* <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                /> */}
              <p>
                <FaHome /> &nbsp;طرابلس - لبنان
              </p>
              <p>
                <FaMailBulk /> &nbsp;kheirwbarake@gmail.com
              </p>
              <p>
                <FaPhone />
                &nbsp;&nbsp; 54 18 28 70 +961
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-3" style={{ backgroundColor: "#34495E" }}>
        © 2022 Copyright
      </div>
    </footer>
  );
}

export default Footer;
