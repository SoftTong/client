import React from "react";
import "../../css/footer.css";

const Footer = () => {
  return (
    <>
      <div class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h2 class="footer-heading mb-4">
                개인정보처리방침 ┃ 사이트맵 ┃ 클린신고센터
              </h2>
              <p>
                충청북도 청주시 서원구 충대로1(개신동)
                학연산공동기술연구원(E9동) 742호┃ 043-249-1833
              </p>
            </div>
            <div class="col-lg-3 ml-auto">
              <div class="row">
                <div class="col-lg-8">
                  <h2 class="footer-heading mb-4">Quick Links</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">충북대학교</a>
                    </li>
                    <li>
                      <a href="#">충북대학교 개신누리</a>
                    </li>
                    <li>
                      <a href="#">SW중심사업단</a>
                    </li>
                    <li>
                      <a href="#">충북대학교 전자정보대학</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              <div class="border-top pt-5">
                <p>
                  © 2021 충북대학교 SW중심대학사업단 X SoTong All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
