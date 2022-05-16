import React from "react";
import Search from "../Search/Search.js";

class Header extends React.Component {
  render() {
    return(
      <>
        <Search
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
        />
      </>
    );
  }
}

export default Header;