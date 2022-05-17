import React from "react";
import Card from "react-bootstrap/Card"
import "./Item.css";

class Item extends React.Component {
  render() {
    return(
      <>
        <Card>
          <Card.Header>
            <Card.Title>{this.props.data.display_name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>Latitude: {this.props.data.lat}</Card.Text>
            <Card.Text>Longitude: {this.props.data.lon}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Item;