import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Photowall extends Component {
  render() {
    return (
      <div>
        <Link className="addIcon" to="/CreateProject"></Link>
      </div>
    );
  }
}

export default Photowall;
