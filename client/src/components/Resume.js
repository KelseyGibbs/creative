import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    const resumeData = this.props.resumeData; 
    return (
      <section id="resume">

         <div className="row work">

            <div className="three columns header-col">
               <h1><span>Work History</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span> &bull; </span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>
         
        <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

              <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <em className="date">{item.MonthOfStarting} {item.YearOfStarting} </em>
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                          <p className="info">
                          {item.specialization}</p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>


         <div className="row skills">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
            </div>
        </div>  
        <div className="row skills">

            <div className="three columns header-col">
          
            </div>

            <div className="three columns main-col pretty">
            <i class="devicon-react-original-wordmark colored"></i>
            </div>

            <div className="three columns main-col pretty">
            <i class="devicon-git-plain-wordmark colored"></i>
            </div>

            <div className="three columns main-col pretty">
            <i class="devicon-mongodb-plain-wordmark colored"></i>
            </div>

        </div>
        <div className="row skills">

<div className="three columns header-col">

</div>

<div className="three columns main-col pretty">
<i class="devicon-nodejs-plain-wordmark colored"></i>
</div>

<div className="three columns main-col pretty">
<i class="devicon-jquery-plain-wordmark colored"></i>
</div>

<div className="three columns main-col pretty">
<i class="devicon-express-original-wordmark colored"></i>
</div>

</div>
<div className="row skills">

<div className="three columns header-col">

</div>

<div className="three columns main-col pretty">
<i class="devicon-mysql-plain-wordmark colored"></i>
</div>

<div className="three columns main-col pretty">
<i class="devicon-sequelize-plain-wordmark colored"></i>
</div>

<div className="three columns main-col pretty">
<i class="devicon-sass-original colored"></i>
</div>

</div>
            
               {/* <p>
               {resumeData.skillsDescription}
               </p> */}

   				{/* <div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div> */}

   			{/* </div> */}

      </section>
    );
  }
}