import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Movies.css";
import Movie from '../Movie/Movie.js';

class Movies extends React.Component {
  render () {
    let data = this.props.movieData;
    let movies = data.map((movie,idx) => <Movie
        movieData={movie}
        key={idx}
      />);
    return (
      <ListGroup>
        <h4>Movies from the Area</h4>
        {movies}
      </ListGroup>
    );
  }
}

export default Movies;