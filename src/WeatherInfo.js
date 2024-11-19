import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <span>
                  <FormattedDate date={props.data.date} />
                </span>
                ,
                <span className="text-capitalize">
                  {props.data.description}
                </span>
              </li>
              <li>
                Humidity:<strong> {props.data.humidity}%</strong>, Wind:
                <strong>{Math.round(props.data.wind)} km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperature-info d-flex justify-content-end">
              <img src={props.data.iconUrl} alt={props.data.description} />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="unit">℃</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
