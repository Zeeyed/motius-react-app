import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          "id": 1,
          "url": "http://127.0.0.1:8000/api/project/1/",
          "name": "My project"
        },
        {
            "id": 2,
            "url": "http://127.0.0.1:8000/api/project/2/",
            "name": "Second Project"
        }
      ]
    };
  }

  componentDidMount() {
    var config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      }
    };    
    axios.get('http://127.0.0.1:8000/api/project/', config)
      .then((result) => {
      console.log('prod: ', result)
      // this.setState({ projects: result.data });
    })
    .catch((e) => console.log(e));
  }

  render () {
    return (
      <div class="list-group">
        {
          this.state.projects.map(project => (
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{ project.name }</h5>
            </div>
          </a>
          ))
        }
      </div>
    );
  }
}

export default Projects;