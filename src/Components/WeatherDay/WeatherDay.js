import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    return(
      <Card.Text>{this.props.weatherData.date}: {this.props.weatherData.description}<br></br>High of {this.props.weatherData.high}&deg; | Low of {this.props.weatherData.low}&deg;</Card.Text>
    );
  }
}

export default WeatherDay;