import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './header.css'
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import {Button} from 'reactstrap';
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};  

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
       
        
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <img src='assets/img/logo_1.PNG' width= "30%" height= "50" alt= "logo" style={{marginRight:"40%"}}/>
        
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
