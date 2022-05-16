import React from "react";
import Item from "../Item/Item.js"

class Main extends React.Component {
  render() {
    return(
      <>
        <Item
          data={this.props.data}
        />
      </>
    );
  }
}

export default Main;