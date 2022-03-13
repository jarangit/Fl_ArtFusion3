import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div>
      <div className="header_banner">
        <h1><span>24/7</span> flashloans</h1>
      </div>
      <div className="jr_container">
        <div className="banner_title">
          <strong>How much do you need?</strong>
          <div className="banner_chat">
            <img src="/img/worker.jpeg" alt="" className="banner_chat_img" />
            <div className="baner_chat_text">
              <p>
                Hi there! I’m Sarah, I’m here to help you find a loan.
                <span className="tooltip_caret"></span>
              </p>
            </div>
          </div>
        </div>
        <div id="_lg_form_"></div>

        <div className="banner_footer">
          <img src="/img/secure.png" alt="" />
          <p>We use 256 bit SSL technology to encrypt your data.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
