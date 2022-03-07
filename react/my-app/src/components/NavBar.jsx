import React, { Component, createFactory } from 'react';

class NavBar extends Component {
  
    render() { 
      console.log("render-NavBar")

        return (<nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">{this.props.total}</span>
      </nav>);
    }
}
 
export default NavBar;