import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.email}</span>
                    <br></br>
                    <span>{resumeData.phone}</span>
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
