import React, { Component } from 'react'

export class Gallery extends Component {
  render() {
    return (
        <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="https://gitlab.com/compucorpsmentoring/intap/tree/master" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>CompuCorps</h4>
                    </div>
                    <img src="img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title"/> </a> 
                    </div>
                    </div>
                </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="http://friendshipsupportgroup.ca/" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Friendship Support Group</h4>
                    </div>
                    <img src="img/portfolio/02-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="http://create-best.com/pitch/" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>HealthHood</h4>
                    </div>
                    <img src="img/portfolio/award2.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="http://vybitapp.com/" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Vybit</h4>
                    </div>
                    <img src="img/portfolio/splash_720.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="http://www.skilessonplanner.com/" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Ski Lesson Planner</h4>
                    </div>
                    <img src="img/portfolio/alpine.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="https://github.com/liannedls/healthhood_map" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>HealthHood</h4>
                    </div>
                    <img src="img/portfolio/healthhoodlogo.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
