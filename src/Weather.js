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
          <div className="col-3 p-0">
            <input
              type="submit"
              text="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h1>Benoni</h1>
            <ul>
              <li>
                <span>Saturday 12:49</span>, partly cloudy
              </li>
              <li>
                Humidity:<strong> 91%</strong>, Wind: <strong>12 km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperature-info d-flex justify-content-end">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
              />
              <h3>22℃</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
