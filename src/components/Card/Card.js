import React from "react";
import {Container, Card, } from "react-bootstrap";

class CardComponent extends React.Component {
  render() {
    return (
      <>
        <Container>
          {this.props.locationData.display_name && (
            <Card style={{ width: "24rem", marginLeft: "35%" }}>
              <Card.Img
                variant="top"
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=13`}
              />
              <Card.Body>
                <Card.Title>{this.props.locationData.display_name}</Card.Title>
                <Card.Text>
                  Latitude: {this.props.locationData.lat}
                  <br />
                  Longitude: {this.props.locationData.lon}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Container>
      </>
    );
  }
}

export default CardComponent;
