import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Me</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Me in a Nutshell</h3>

                  <div className="row">

                    <div className="col-xs-12 col-md-6 text-left">
                      <ul>
                        <li>Coffee</li>
                        <li>Coffee</li>
                        <li>Coffee</li>
                        <li>Coffee</li>
                      </ul>
                    </div>

                    <div className="col-xs-12 col-md-6 text-left">
                      <ul>
                        <li>Coffee</li>
                        <li>Coffee</li>
                        <li>Coffee</li>
                        <li>Coffee</li>
                      </ul>
                    </div>

                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
