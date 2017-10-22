import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    console.log('from projects', localStorage.getItem('jwtToken'))
    axios.get('http://127.0.0.1:8000/api/project/')
      .then((result) => {
      console.log('prod: ', result)
      // this.setState({ organizations: result.data });
    });
  }

  render () {
    console.log(this.props);
    return (
      <div className='row'>
      </div>
    );
  }
}

export default Projects;