import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.length > 0 &&
          this.props.weatherData.map((day, idx) => (
            <WeatherDay key={idx} weatherDay={day} />
          ))}
      </>
    );
  }
}

export default Weather;
