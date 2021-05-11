import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

            </div>

            <div className="nine columns main-col">

               <p>
               {
                 resumeData.aboutMe
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Get in Touch</h2>
                  <p className="address">
                    <span>{resumeData.phone}</span>
                    <br></br>
                    <span>{resumeData.email}</span>
       					   </p>
                  </div>
                  <div className="columns">
                  <img src="../images/professionalimagethumb.jpg"></img>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
