import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
        <div id="services" className="text-center">
          <div className="container">
            <div className="section-title" >

              <h2>Resume</h2>
              <button class="btn btn-primary" href="resume.pdf" download="resume_LDeLaSalle"> Download </button>
              <div className="row">
                <div className="col-xs-12 col-md-3">
                  <h3> Technologies</h3>
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="col-xs-12 col-md-5 text-left">
                  <h3>Day to Day Comfort</h3>
                    <ul>
                      <li>Coffee</li>
                      <li>Coffee</li>
                      <li>Coffee</li>
                      <li>Coffee</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4">
                  <h3>Experience With</h3>
                  <ul>
                    <li>Coffee</li>
                    <li>Coffee</li>
                    <li>Coffee</li>
                    <li>Coffee</li>
                  </ul>
                </div>
            </div>

            <div className="row ">
                <div className="col-xs-12 col-md-3 text-left">
                  <h3>Education</h3>
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <div className="col-xs-12 col-md-9">
                <h3>BASc. Electrical Engineering (Magna Cum Laude)</h3>
                <h3>University of Ottawa 2017</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-3">
                  <h3>Work Experience</h3>
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="col-xs-12 col-md-9 text-left">
                  <h3>Software and Hardware Engineer</h3>
                  <h4>Employer: CCX Technologies
Working with the small team at CCX Technologies, I designed, built, and tested cyber security software and custom built avionics routers. This diverse role included; software design and testing, schematic and PCB design, and product build, verification, and testing.
</h4>
<h3>Makerspace Coordinatorr</h3>
                  <h4>Employer: University of Ottawa - Makerspace
As the Makerspace Workshop coordinator, I designed and facilitated workshops on a variety of technology subjects and equipment. This role included learning and developing workshops on new technologies including IoT, 3D modelling software, VR, among others.
</h4>
<h3>Software and Hardware Engineer</h3>
<h4>Employer: CCX Technologies
Working with the small team at CCX Technologies, I designed, built, and tested cyber security software and custom built avionics routers. This diverse role included; software design and testing, schematic and PCB design, and product build, verification, and testing.
</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-3">
                  <h3>Volunteer Project Experience</h3>
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="col-xs-12 col-md-4">
                  <h3>Day to Day Comfort</h3>
                    <ul>
                      <li>Coffee</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4">
                  <h3>Experience With</h3>
                  <ul>
                    <li>Coffee</li>
                  </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-3">
                  <h3>Other Skills</h3>
                  <i className="fa fa-book"></i>
                </div>
                <div className="col-xs-12 col-md-4">
                  <h3>Day to Day Comfort</h3>
                    <ul>
                      <li>Coffee</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4">
                  <h3>Experience With</h3>
                  <ul>
                    <li>Coffee</li>
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
