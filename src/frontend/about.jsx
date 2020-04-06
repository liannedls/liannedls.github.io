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
                        <li>BASc. Electrical Engineering uOttawa</li>
                        <li>Diversified work experience, as a software and hardware engineer</li>
                        <li>Javascript, HTML, CSS, SQL, NoSQL, Python, C++, QML, React, Bootstrap</li>
                        <li>Git, Virtual Machines, Arch Linux, Networking, Cyber Security, Gimp</li>
                      </ul>
                    </div>

                    <div className="col-xs-12 col-md-6 text-left">
                      <ul>
                        <li>Avid software developer and maker involved in community projects and open source</li>
                        <li>Fully bilingual, native English and French speaker (written and oral) </li>
                        <li>Experience in startup, academic, public, and private work environments</li>

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
