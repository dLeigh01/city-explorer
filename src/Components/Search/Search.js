import React from "react";
import Form from "react-bootstrap/Form";

class Search extends React.Component {
  render() {
    return(
      <Form>
        <Form.Group>
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='start typing...'
            onChange={this.props.handleChange}
          />
          <button
            type='submit'
            onClick={this.props.handleSubmit}
          >Explore!</button>
        </Form.Group>
      </Form>
    );
  }
}

export default Search;