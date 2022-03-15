import React, { useState, useEffect } from "react";
import "./banner.css";
import Countdown from "react-countdown";
const Banner = () => {
  const [countApproved, setcountApproved] = useState(821);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return "You got to go";
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  useEffect(() => {
    const saveCountApp = localStorage.getItem("count_user_view");
    console.log(saveCountApp);
    if (saveCountApp) {
      setcountApproved(Number(saveCountApp) + 1);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("count_user_view", Number(countApproved) + 1);
  }, [countApproved]);
  return (
    <div>
      <div className="header_banner">
        <h1>
          <span>24/7</span> flashloans
        </h1>
      </div>
      <div className="jr_container">
        <div className="banner_count_down_time">
          <div>
            <span>{countApproved} </span>
            Approved Today
            <span>
              <Countdown date={Date.now() + 3000000} renderer={renderer} />
            </span>
          </div>
        </div>
        {/* <div className="banner_title">
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
        </div> */}
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
