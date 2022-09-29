import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {this.props.moviesData.length > 0 &&
              this.props.moviesData.map((movie) => {
                return (
                  <Col>
                    <Card style={{ width: "24rem", marginLeft: "35%" }}>
                      <Card.Img variant="top" src={movie.image_url} />
                      <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                          Overview: {movie.overview}
                          <br />
                          Average Votes: {movie.average_votes}
                          <br />
                          Total Votes: {movie.total_votes}
                          <br />
                          Popularity: {movie.popularity}
                          <br />
                          Released On: {movie.released_on}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Movies;
