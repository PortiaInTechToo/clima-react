import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Portia Mthethwa and is open-sourced on{" "}
          <a href="https://github.com/Portia165/clima-react.git">Github</a>.
        </footer>
      </div>
    </div>
  );
}
