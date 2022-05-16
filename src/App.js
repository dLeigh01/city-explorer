import React from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      data: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`)
    this.setState({
      data: cityData.data[0],
    })
  }

  handleChange = (event) => {
    this.setState({
      city: event.target.value
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
        />
      </>
    );
  }
}

export default App;