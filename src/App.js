import "./App.css";
import { useState } from "react";
import Banner from "./components/Banner";
import SectionBetter from "./components/sections/SectionBetter";
import SectionWe from "./components/sections/SectionWe";
import Footer from "./components/Footer";

function App() {
  const [openLable, setopenLable] = useState(true);

  return (
    <div>
      {openLable && (
        <div className="label_covid">
          <div className="label_box">
            <p className="lable_covid_p1">
              <span>COVID-19 Update:</span> We are open and accepting loan
              requests.
            </p>
            <p className="lable_covid_p2">
              The harder it is to find funds, The harder we work to help you.
            </p>
            <button
              onClick={() => setopenLable(false)}
              className="lable_cobid_close"
            >
              x
            </button>
          </div>
        </div>
      )}

      <Banner />
      <SectionBetter />
      <SectionWe />
      <Footer />
    </div>
  );
}

export default App;
