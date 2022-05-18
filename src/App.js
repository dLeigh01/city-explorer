import React from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import axios from "axios";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      data: '',
      map: '',
      isSearched: false,
      error: false,
      errorMessage: '',
      weatherData: [],
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
        let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`);
        let weather = await axios.get(`http://localhost:3001/weather?searchQuery=${this.state.city}&lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}&format=json`);
        this.setState({
          data: cityData.data[0],
          map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=12`,
          isSearched: true,
          error: false,
          weatherData: weather.data,
        });
    } catch (error){
      this.setState({
        error: true,
        errorMessage: error.message,
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      city: event.target.value,
    })
  }

  render() {
    return(
      <>
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Main
          data={this.state.data}
          map={this.state.map}
          isSearched={this.state.isSearched}
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          weatherData={this.state.weatherData}
        />
      </>
    );
  }
}

export default App;