import React from "react";
import Item from "../Item/Item.js"
import Figure from "react-bootstrap/Figure";
import List from "../List/List.js";

class Main extends React.Component {
  render() {
    return(
      <>
        <Item
          data={this.props.data}
          isSearched={this.props.isSearched}
          error={this.props.error}
          errorMessage={this.props.errorMessage}
          weatherData={this.props.weatherData}
        />
        {this.props.error
          ?
          <></>
          :
          this.props.isSearched
          ?
          <Figure>
              <Figure.Image
                alt='map'
                src={this.props.map}
                />
            </Figure>
            :
            <></>
          }
          {this.props.isMovieDataAvailable &&
              <List
                movieData={this.props.movieData}
              />
          }
      </>
    );
  }
}

export default Main;