import "./App.css";
import { useState } from "react";
import Banner from "./components/Banner";

function App() {
  const [openLable, setopenLable] = useState(true);

  return (
    <div>
      {openLable && (
        <div className="label_covid">
          <p className="lable_covid_p1">
            <span>COVID-19 Update:</span> We are open and accepting loan
            requests.
          </p>
          <p className="lable_covid_p2">
            The harder it is to find funds, The harder we work to help you.
          </p>
          <button 
          onClick={() => setopenLable(false)}
          className="lable_cobid_close">x</button>
        </div>
      )}

      <Banner/>
    </div>
  );
}

export default App;
