import React, { Component } from 'react'
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
      <Navigation />
      <Header data={this.state.resumeData.Header}/>
      <About  data={this.state.resumeData.About}/>
      <Services  data={this.state.resumeData.Services}/>
      <Gallery />
      <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
