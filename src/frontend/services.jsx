import React, { Component } from 'react'
import Pdf from './resume.pdf'

export class Services extends Component {
  onResumeClick() {
  window.open(Pdf)
}
  render() {
    return (
        <div id="services" className="text-center">
          <div className="container">
            <div className="section-title" >
              <h2>Resume</h2>
              <button className="btn btn-primary" onClick={this.onResumeClick}> Download </button>
              <div className="row">
                <div className="col-xs-12 col-md-4">
                  <h3> Technologies</h3>
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="col-xs-12 col-md-4 text-left">
                  <h3>Day to Day Comfort</h3>
                    <ul>
                      <li>Python</li>
                      <li>Django</li>
                      <li>Redis</li>
                      <li>Docker</li>
                      <li>Regex</li>
                      <li>RabbitMQ</li>
                      <li>Javascript</li>
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>React</li>
                      <li>Node.js</li>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                      <li>Linux</li>
                      <li>Git</li>
                      <li>Bash</li>
                      <li>Gimp</li>
                      <li>QML</li>
                      <li>Jira</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4 text-left">
                  <h3>Experience With</h3>
                  <ul>
                    <li>Networking</li>
                    <li>Testing</li>
                    <li>Cyber Security</li>
                    <li>Encryption and Cryptography</li>
                    <li>Eagle</li>
                  </ul>
              </div>
            </div>
            <div className="row ">
              <div className="col-xs-12 col-md-3">
                <h3>Education</h3>
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="col-xs-12 col-md-9 text-left">
                <h3>BASc. Electrical Engineering (Magna Cum Laude)</h3>
                <h4>University of Ottawa 2017</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-3">
                <h3>Work Experience</h3>
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="col-xs-12 col-md-9 text-left">
                <h3>Software Engineer</h3>
                <h4>Employer: Canadian Radio-television and Telecommunications Commission</h4>
                <h4>
                  I contributed to the CRTC's internal Django web application, the Spam Reporting Center. Working in a small team I implemented new features, fixed bugs, developed automated tests, and ensured proper functionality.
                </h4>
                <h3>Software and Hardware Engineer</h3>
                <h4>Employer: CCX Technologies</h4>
                <h4>
                  Working with the small team at CCX Technologies, I designed, built, and tested cyber security software and custom built avionics routers. This diverse role included; software design and testing, schematic and PCB design, and product build, verification, and testing.
                </h4>
                <h3>Makerspace Coordinator</h3>
                <h4>Employer: University of Ottawa - Makerspace</h4>
                <h4>
                  As the Makerspace Workshop coordinator, I designed and facilitated workshops on a variety of technology subjects and equipment. This role included learning and developing workshops on new technologies including IoT, 3D modelling software, VR, among others.
                </h4>
                <h3>Research Assistant</h3>
                <h4>Employer: University of Ottawa – SUNLAB Solar Research Lab</h4>
                <h4>
                  As a research assistant at the SUNLAB, an advanced solar technologies research group at the University of Ottawa, I worked on a variety of projects related to solar energy research. I designed and created tools for the lab, maintained an outdoor solar tracking test site, and addressed performance problems. Using the data from this test site, I completed an analysis of a five-year solar radiation database (now freely available for other researchers).
                </h4>
                <h3>Protection and Control Engineer</h3>
                <h4>Employer: Hydro One</h4>
                <h4>
                  As a protection and control engineer I worked primarily in the field, completing maintenance on testing instrumentation, updated engineering drawings to reflect field conditions, and addressed problems at various substations.
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-3">
                <h3>Other Skills</h3>
                <i className="fa fa-book"></i>
              </div>
              <div className="col-xs-12 col-md-4 text-left">
                <h3>Soft Skills</h3>
                <ul>
                  <li>Experience working in teams of various sizes</li>
                  <li>Experience communicating with the public, students, and clients</li>
                  <li>Bilingual (french/english)</li>
                  <li>Comfortable working remotely</li>
                  <li>Comfortable learning independently</li>
                  <li>Experience working in a fast-paced, changing environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
