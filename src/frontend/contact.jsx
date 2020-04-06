import React, { Component } from 'react'

export class Contact extends Component {

  render() {
    return (
        <div>
      <div id="contact">
  <div className="container">
    <div className="col-md-8">
      <div className="row">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Please fill out the form below and I will get back to you as soon as possible.</p>
        </div>
        <form name="sentMessage" id="contactForm" noValidate>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div id="success"></div>
          <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
        </form>
      </div>
    </div>
    <div className="col-md-3 col-md-offset-1 contact-info">
      <div className="contact-item">
        <h3>Contact Info</h3>
        <p><span><i className="fa fa-map-marker"></i> Address</span>{this.props.data ? this.props.data.address : 'loading'}</p>
      </div>
      <div className="contact-item">
        <p><span><i className="fa fa-phone"></i> Phone</span> {this.props.data ? this.props.data.phone : 'loading'}</p>
      </div>
      <div className="contact-item">
        <p><span><i className="fa fa-envelope-o"></i> Email</span> {this.props.data ? this.props.data.email : 'loading'}</p>
      </div>
      <div className="contact-item">
        <p>
        <button class="btn btn-primary btn-square" ><i href="https://www.linkedin.com/in/lianne-de-la-salle-72b51999/" className="fa fa-linkedin"></i> </button></p>
      </div>
      <div className="contact-item">
        <p>
          <button class="btn btn-success" href="https://github.com/liannedls"><i className = "fa fa-github"></i> Github</button>
        </p>
      </div>
    </div>
  </div>
</div>
<div id="footer">
  <div className="container text-center">
    <p>&copy;2018 Design by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a> Issaaf Kattan </p>
  </div>
</div>
      </div>
    )
  }
}

export default Contact
