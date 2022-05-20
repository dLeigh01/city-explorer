import React from "react";
import Weather from "../Weather/Weather.js"
import Figure from "react-bootstrap/Figure";
import Movies from "../Movies/Movies.js";
import './Main.css';

class Main extends React.Component {
  render() {
    return(
      <main>
        {!this.props.error &&
          this.props.isMovieDataAvailable &&
          <Movies
          movieData={this.props.movieData}
          />
        }
        {!this.props.error &&
          this.props.isSearched &&
          <Figure>
              <Figure.Image
                alt='map'
                src={this.props.map}
                />
            </Figure>
        }
        <Weather
          data={this.props.data}
          isSearched={this.props.isSearched}
          error={this.props.error}
          errorMessage={this.props.errorMessage}
          weatherData={this.props.weatherData}
          />
      </main>
    );
  }
}

export default Main;