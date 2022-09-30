import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.moviesData.length > 0 &&
          this.props.moviesData.map((movie, idx) => (
            <Movie key={idx} movie={movie} />
          ))}
      </>
    );
  }
}

export default Movies;
