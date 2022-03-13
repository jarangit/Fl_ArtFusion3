import React from "react";
import "./sections.css";
const SectionBetter = () => {
  const data = [
    {
      title: "Personal Loans Online",
      img: "/img/blurb-thb01.jpeg",
      content: `Our Online Form is quick, secure, and hassle free. You can fill out our Online Form from the privacy of your own home.

      `,
    },
    {
      title: "All Credit Types Accepted",
      img: "/img/blurb-thb02.jpeg",
      content: `There are many advantages with 247FlashLoans. You can fill out our Online Form with any credit type at 247FlashLoans.
      `,
    },
    {
      title: "See Money In Your Account",
      img: "/img/blurb-thb03.jpeg",
      content: `Another benefit is funds are deposited directly into your bank account as soon as the next business day!`,
    },
  ];
  return (
    <div className="better">
      <div className="jr_container">
        <div className="better_title">
          <h1>
            A Better Personal Money Solution To Get Funds, Fast, Anywhere!
          </h1>
          <p>
            With 247FlashLoans, you can receive funding up to $35,000. We have
            extensive partnerships with large authorized lenders. This allows us
            to cover almost all 50 states. If approved, the Loan may be received
            in as soon as the next business day from the privacy of your own
            home.
          </p>
        </div>

        <div className="better_box">
          {data?.map((item, key) => (
            <div key={key} className="better_box_item">
              <img src={item.img} alt="" />
              <div className="better_item_content">
                <h2>{item.title}</h2>
                <p>
                  {item.content.length > 100
                    ? item.content.substring(0, 100) + "..."
                    : item.content}
                </p>
                <button
                  className="better_item_but"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Get Started Now!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBetter;
