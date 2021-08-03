import React from "react";
import "../../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="footer-heading mb-4">
                개인정보처리방침 ┃ 사이트맵 ┃ 클린신고센터
              </h2>
              <p>
                충청북도 청주시 서원구 충대로1(개신동)
                학연산공동기술연구원(E9동) 742호┃ 043-249-1833
              </p>
            </div>
            <div className="col-lg-3 ml-auto">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="footer-heading mb-4">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">충북대학교</Link>
                    </li>
                    <li>
                      <Link to="#">충북대학교 개신누리</Link>
                    </li>
                    <li>
                      <Link to="#">SW중심사업단</Link>
                    </li>
                    <li>
                      <Link to="#">충북대학교 전자정보대학</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
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
