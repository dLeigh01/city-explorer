import React from "react";
import Card from "react-bootstrap/Card"
import "./Weather.css";
import Alert from "react-bootstrap/Alert"
import WeatherDay from "../WeatherDay/WeatherDay";

class Weather extends React.Component {
  render() {
    let forecast = this.props.weatherData.map(day => 
      <WeatherDay
        weatherData={day}
        key={day.date}
      />
    );

    return(
      <>
        {this.props.error
          ?
          <Alert>Error: {this.props.errorMessage}</Alert>
          :
          this.props.isSearched &&
            <Card>
              <Card.Header>
                <Card.Title>{this.props.data.display_name}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Latitude: {this.props.data.lat}</Card.Text>
                <Card.Text>Longitude: {this.props.data.lon}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Subtitle>Weather</Card.Subtitle>
                {forecast}
              </Card.Footer>
            </Card>
        }
      </>
    )
  }
}

export default Weather;