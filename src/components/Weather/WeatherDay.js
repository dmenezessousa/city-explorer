import React from "react";
import { Container, Table } from "react-bootstrap";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <Container key={this.props.key}>
          <Table style={{color: "white"}} striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{color: "black"}}>{this.props.weatherDay.date}</td>
                <td style={{color: "white"}}>{this.props.weatherDay.description}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default WeatherDay;
