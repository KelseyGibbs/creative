import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <strong><li className="current"><a className="smoothscroll" href="#home">Home</a></li></strong>
               <strong><li><a className="smoothscroll" href="#about">About</a></li></strong>
               <strong><li><a className="smoothscroll" href="#resume">Resume</a></li></strong>
               <strong><li><a className="smoothscroll" href="#portfolio">Portfolio</a></li></strong>
               <strong><li><a className="smoothscroll" href="#contact">Contact</a></li></strong>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
            <strong><h1 className="responsive-headline">Kelsey Gibbs</h1></strong>
            <strong><h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Junior Software Developer with a passion for innovation and problem solving. 
               </h3></strong>
               <hr/>

            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}