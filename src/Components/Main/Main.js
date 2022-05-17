import React from "react";
import Item from "../Item/Item.js"
import Figure from "react-bootstrap/Figure";

class Main extends React.Component {
  render() {
    return(
      <>
        <Item
          data={this.props.data}
        />
        {this.props.isMapDisplaying
          ?
          <Figure>
            <Figure.Image
              alt='map'
              src={this.props.map}
            />
          </Figure>
          :
          <Figure></Figure>
        }
      </>
    );
  }
}

export default Main;