import React from "react";
import axios from "axios";
import "./Main.css";
import { Container, Form, Card, Toast } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationData: {},
      error: false,
      errorMessage: "",
    };
  }

  getLocation = async (e) => {
    e.preventDefault();
    try {
      const locationIqData = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;

      const locationIqResponse = await axios.get(locationIqData);
      console.log(locationIqResponse.data[0]);
      this.setState({
        locationData: locationIqResponse.data[0],
        error: false,
        errorMessage: "",
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
        {this.state.error && (
          <Toast className="ml-4 mt-3" bg="danger" delay="5000">
            <Toast.Header>
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body style={{ color: "white" }}>
              {this.state.errorMessage}
            </Toast.Body>
          </Toast>
        )}
        <Container>
          <Form className="form-inline">
            <div className="form-group mx-5  mb-4 mt-5 ">
              <input
                onChange={this.updateSearchQuery}
                type="text"
                className="form-control"
                placeholder="Enter City Name"
              />
              <button
                onClick={this.getLocation}
                type="submit"
                className="btn btn-primary mb-2 mt-2"
              >
                Explorer!
              </button>
            </div>
          </Form>
        </Container>
        <Container>
          {this.state.locationData.display_name && (
            <Card style={{ width: "44rem", marginLeft: "23%"}}>
              <Card.Img
                variant="top"
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=13`}
              />
              <Card.Body>
                <Card.Title>{this.state.locationData.display_name}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          )}
        </Container>
      </main>
    );
  }
}

export default Main;
