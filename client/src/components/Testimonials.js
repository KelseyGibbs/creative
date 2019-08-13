import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                
              </div> 
            </div> 
          </div> 
        </div>  
      </section>
        );
  }
}