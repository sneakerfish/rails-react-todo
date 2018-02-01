import React, { Component } from "react"
import PropTypes from "prop-types"

const API = 'https://localhost:3000/api/v1/todos.json';

class AllItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return <div />;
  }
}

export default AllItems
