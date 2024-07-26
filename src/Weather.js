import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-3">
            <input type="submit" text="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Benoni</h1>
      <ul>
        <li>Friday 16:18</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="weather icon"
          />
          <h3>22℃</h3>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 15%</li>
            <li>Humidity: 29%</li>
            <li>Wind: 12 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
