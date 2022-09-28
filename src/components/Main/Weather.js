import React from "react";
import { Container, Table } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.length > 0 &&
          this.props.weatherData.map((weather, index) => {
            return (
              <>
                <Container key={index}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{weather.date}</td>
                        <td>{weather.description}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </>
            );
          })}
      </>
    );
  }
}

export default Weather;
