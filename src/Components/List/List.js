import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./List.css";

class List extends React.Component {
  render () {
    let data = this.props.movieData;
    let movies = data.map((movie,idx) => <ListGroup.Item
      key={idx}
    >
      <p>{movie.title}</p>
      {movie.image_url &&
        <img src={`https://image.tmdb.org/t/p/w200${movie.image_url}`} alt={movie.title}/>
      }
      <p>"{movie.overview}"</p>
      <p>Released {movie.released_on}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Average Rating: {movie.average_votes}</p>
      <p>Total Votes: {movie.total_votes}</p>
    </ListGroup.Item>);
    return (
      <ListGroup>
        <h4>Movies from the Area</h4>
        {movies}
      </ListGroup>
    );
  }
}

export default List;