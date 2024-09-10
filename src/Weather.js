import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Pretoria</h1>
      <ul>
        <li>Tuesday 23:31</li>
        <li>Scattered clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
            alt="Scattered Clouds"
          />
          14 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipation: 0%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
