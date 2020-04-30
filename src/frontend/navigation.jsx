import React, { Component } from 'react'

export class Navigation extends Component {

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a  href="#about" className="navbar-brand page-scroll" >Lianne de la Salle</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about" className="page-scroll">About</a></li>
              <li><a href="#services" className="page-scroll">Resume</a></li>
              <li><a href="#portfolio" className="page-scroll">Portfolio</a></li>
              <li><a href="#contact" className="page-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
