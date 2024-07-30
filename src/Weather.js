import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.main.data.humidity,
      wind: response.data.main.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "",
      date: "Friday 12:49",
    });
  }

  if (weatherData.ready) {
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
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <span>{weatherData.date}</span>,
                  <span className="text-capitalize">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  Humidity:<strong> {weatherData.humidity}</strong>, Wind:
                  <strong>{weatherData.wind} km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-info d-flex justify-content-end">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">℃</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "282f8036ef5dat2effb4fc9cbocda23a";
    let city = "Johannesburg";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
