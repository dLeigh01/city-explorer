import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
  render() {
    return (
      <ListGroup.Item>
      <p>{this.props.movieData.title}</p>
      {this.props.movieData.image_url &&
        <img src={`https://image.tmdb.org/t/p/w200${this.props.movieData.image_url}`} alt={this.props.movieData.title}/>
      }
      <p>"{this.props.movieData.overview}"</p>
      <p>Released {this.props.movieData.released_on}</p>
      <p>Popularity: {this.props.movieData.popularity}</p>
      <p>Average Rating: {this.props.movieData.average_votes}</p>
      <p>Total Votes: {this.props.movieData.total_votes}</p>
    </ListGroup.Item>
    );
  }
}

export default Movie;