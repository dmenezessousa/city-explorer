import React from "react";
import { Form, Container } from "react-bootstrap";

class WeatherForm extends React.Component {
  render() {
    return (
      <>
        <h2>Weather</h2>
        <Container>
          <Form className="form-inline">
            <div className="form-group mx-5  mb-4 mt-5 ">
              <input
                onChange={this.props.updateWeatherSearchQuery}
                value={this.props.searchWeatherQuery}
                type="text"
                className="form-control"
                placeholder="Enter City Name"
              />
              <button
                onClick={this.props.getWeather}
                type="submit"
                className="btn btn-primary mb-2 mt-2"
              >
                Explorer!
              </button>
            </div>
          </Form>
        </Container>
      </>
    );
  }
}

export default WeatherForm;