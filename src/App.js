import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Portia Mthethwa,{""}
          {""}
          <a href="https://github.com/Portia165/clima-react.git">
            is open-sourced on Github
          </a>
          {""}
          and hosted on{""}
          <a href="https://soft-baklava-cfe374.netlify.app/">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}
