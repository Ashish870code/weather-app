import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {" "}
         Developed by{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://ashishkrsingh-portfolio.netlify.app/"
        >
          Ashish Kumar Singh
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;