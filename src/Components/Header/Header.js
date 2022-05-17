import React from "react";
import Search from "../Search/Search.js";
import "./Header.css";

class Header extends React.Component {
  render() {
    return(
      <header>
        <Search
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
        />
      </header>
      
    );
  }
}

export default Header;