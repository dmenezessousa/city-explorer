import React from "react";
import axios from "axios";
import FormComponent from "./Form";
import CardComponent from "./Card";
import ToastComponent from "./Toast";
import Weather from "./Weather";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationData: {},
      error: false,
      errorMessage: "",
      weatherData: {},
      searchWeatherQuery: "",
      lat: "",
      lon: "",
    };
  }

  getLocation = async (e) => {
    e.preventDefault();
    this.setState({
      locationData: {},
      weatherData: {},
    });
    try {
      const locationIqData = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;

      const locationIqResponse = await axios.get(locationIqData);
      console.log(locationIqResponse.data[0]);
      this.setState({
        locationData: locationIqResponse.data[0],
        lat: locationIqResponse.data[0].lat,
        lon: locationIqResponse.data[0].lon,
        error: false,
        errorMessage: "",
        searchQuery: "",
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }

    try {
      const weatherData = `http://localhost:3001/weather?searchWeatherQuery=${this.state.searchQuery}&lat=${this.state.lat}&lon=${this.state.lon}`;
      const weatherResponse = await axios.get(weatherData);
      console.log(weatherResponse);
      this.setState({
        weatherData: weatherResponse.data,
        error: false,
        errorMessage: "",
        searchWeatherQuery: "",
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  updateSearchQuery = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    return (
      <main>
        <ToastComponent
          error={this.state.error}
          errorMessage={this.state.errorMessage}
        />
        <FormComponent
          getLocation={this.getLocation}
          updateSearchQuery={this.updateSearchQuery}
          searchQuery={this.state.searchQuery}
        />
        <CardComponent locationData={this.state.locationData} />
        <Weather weatherData={this.state.weatherData} />
      </main>
    );
  }
}

export default Main;
