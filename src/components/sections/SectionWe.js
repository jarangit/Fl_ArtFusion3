import React from "react";
import { dataAQ } from "../../data/dataAQ";
import { dataAccoding } from "../../data/dataAccoding";
const SectionWe = () => {
  const Accordion = ({ data: { title, content } }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="aq_box">
        <div className="aq_box_item" onClick={() => setOpen(!isOpen)}>
          <p>{title}</p>
        </div>
        <div className={`aq_box_item_content ${!isOpen ? "active" : ""}`}>
          <div className="aq_content">{content}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="we">
      <div className="jr_container">
        <div className="we_header">
          <h3>
            We Will Try to Connect You with a Lender Who Understands Your
            Financial Needs!
          </h3>
        </div>

        <div className="we_title">
          <h5>What is a Personal Loan?</h5>
          <p>
            A personal loan is a way for an individual to receive up to $35,000
            in funding. It is a loan that can be used for home enhancements,
            luxury item purchases, vehicle repairs or bill payments. The length
            of the loan is called the term and can range all the way up to 60
            months, depending on the lender. Our simple Online Form does not
            contain any long questions. Instead, it asks for your basic
            information and a location for where you would like the loan to be
            sent to. It is that easy!
          </p>
          <hr />
        </div>
        <div className="we_title">
          <h5>Basic Loan Requirements</h5>
          <ul>
            <li>Must be at least 18 years old</li>
            <li>Must be a U.S. citizen.</li>
            <li>Currently employed or receive steady income.</li>
            <li>
              Have a bank account to receive the funds, ideally with direct
              deposit. No Bank Account? Click Here
            </li>
          </ul>
          <hr />
        </div>

        <div className="we_title">
          <h5>Disclosure Policy</h5>
          <p>
            Please read the following disclosures. There is information about
            General Loan information, APR information, Renewals and Repayment
            Terms.
          </p>

          {dataAccoding.map((item, key) => (
            <React.Fragment key={key}>
              <Accordion data={item} />
            </React.Fragment>
          ))}
          <hr />
        </div>

        <div className="we_title">
          <h3 className="we_header">How It Works</h3>
          <h5>Fast, Easy & Secure Online Form.</h5>
          <p>
            247FlashLoans realizes that financial problems come unexpected and
            always at a bad time. We believe that lending should be made easy,
            fast and not only rely on the individual's past history. We are here
            to help. The process starts with completing our Online Form. The
            Online Form must be completed accurately to make sure the funds are
            not sent to the wrong individual. Lenders use the information
            provided to verify your identity before sending you funds. One of
            the advantages of using 247FlashLoans is that we have many lenders
            that have different lending methods. This means that you are more
            likely to be approved by a lender within our network because there
            are more options available to you. Since each lender has their own
            lending policies, once approved, please be sure to read their
            disclosures and lending practices carefully before you sign and
            agree to the loan.
          </p>
        </div>
        <div className="we_title">
          <h3 className="we_header">Frequently Asked Questions</h3>
          {dataAQ?.map((item, key) => (
            <React.Fragment key={key}>
              <h5>{item.title}</h5>
              <p>{item.content}</p>
            </React.Fragment>
          ))}
        </div>

        <div className="we_title">
          <h3 className="we_header">Fees & Interest</h3>
          <p>
            247FlashLoans services will always be provided free of charge, but
            that is not to say that the lender will give you a loan for free.
            Your lender will charge you fees and/or interest and must provide
            you with full disclosure of their loan terms upon approval. It is
            then your responsibility to read through the terms before signing
            your loan agreement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWe;
