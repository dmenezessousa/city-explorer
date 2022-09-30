import React from "react";
import { Container, Card} from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Card style={{ width: "54rem", marginLeft: "11%" }} key={this.props.key} bg="dark">
            <Card.Img variant="top" src={this.props.movie.image_url} />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>
                {this.props.movie.title}
              </Card.Title>
              <Card.Text style={{ color: "white", float: "right" }}>
                Overview: {this.props.movie.overview}
                <br />
                Average Votes: {this.props.movie.average_votes}
                <br />
                Total Votes: {this.props.movie.total_votes}
                <br />
                Popularity: {this.props.movie.popularity}
                <br />
                Released On: {this.props.movie.released_on}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default Movie;
