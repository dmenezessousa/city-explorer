import React from "react";
import axios from "axios";
import FormComponent from "../Form/Form";
import CardComponent from "../Card/Card";
import ToastComponent from "../Toast/Toast";
import Weather from "../Weather/Weather";
import Movies from "../Movies/Movies";
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
      moviesData: {},
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
      this.setState(
        {
          locationData: locationIqResponse.data[0],
          lat: locationIqResponse.data[0].lat,
          lon: locationIqResponse.data[0].lon,
          error: false,
          errorMessage: "",
        },
        () => {
          this.getWeather();
          this.getMovies();
        }
      );
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  getWeather = async () => {
    try {
      const API = process.env.REACT_APP_API_LIVE_URL;
      const url = `${API}/weather`;
      const weatherResponse = await axios.get(url, {
        params: {
          lat: this.state.lat,
          lon: this.state.lon,
        },
      });

      this.setState({
        weatherData: weatherResponse.data,
        error: false,
        errorMessage: "",
        searchWeatherQuery: "",
        searchQuery: "",
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  getMovies = async () => {
    try {
      const API = process.env.REACT_APP_API_LIVE_URL;
      const url = `${API}/movies`;
      const moviesResponse = await axios.get(url, {
        params: {
          query: this.state.searchQuery,
        },
      });

      this.setState({
        moviesData: moviesResponse.data,
        error: false,
        errorMessage: "",
        searchMoviesQuery: "",
        searchQuery: "",
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
        <Movies moviesData={this.state.moviesData} />
      </main>
    );
  }
}

export default Main;
