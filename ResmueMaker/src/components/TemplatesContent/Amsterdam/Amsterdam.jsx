import React from 'react'
import "./Amsterdam.css"
import { useEffect } from 'react';
const Amsterdam = ({CollectInfo,personalInfo,perInfo}) => {

    // useEffect(()=> 
    // console.log("amsterdam-info",CollectInfo)
    //  ,[CollectInfo])
    // console.log("noUseEffect",personalInfo)
    console.log("perInfo",perInfo)
   
    // useEffect(()=>console.log("amsterdam-personalInfo", personalInfo),[personalInfo])
    
      return (
        <div className="containerStyle amsterdam-container">
          <div className="outlineStyle">
            <div className="mainContentStyle">
            <div className="leftContentStyle">
            
                <h2 className="titleStyle">DETAILS</h2>
                <hr className="hrStyle" />
                <h3 className="titleStyle">Address</h3>
                <p className="paragraphStyle" style ={{fontSize:"18px"}}>{CollectInfo?.city}, {CollectInfo?.country}</p>
                {/* Add the rest of the content here */}
                <h3 className="titleStyle" >Phone</h3>
                <p className="paragraphStyle" style ={{fontSize:"18px"}}>{CollectInfo?.number}</p>
                <h3 className="titleStyle">Email</h3>
                <p className="paragraphStyle" style ={{fontSize:"18px"}}>{CollectInfo?.email}</p>
               
                <h2 className="titleStyle">SKILLS</h2>
                <hr className="hrStyle" />
                <div style={{ margin: '0px', padding: '0px' }}>
                  <p style={{ color: 'black', margin: '2px', marginBottom: '10px', marginTop: '10px', paddingTop: '10px',fontSize:"18px",width:"100%"}}>Project Management Skills</p>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <hr style={{ borderRadius: '6px', padding: '4px' }} color="#526D82" width="100%" />
                  </div>
                </div>
                {/* Add the rest of the skills here */}
              </div>
              <div className="rightContentStyle">
                <div className="profileContainerStyle">
                  <h1 className="profileTitleStyle">{CollectInfo?.firstName} {CollectInfo?.lastName
}</h1>
                  <h3 className= "profileSubtitleStyle">{CollectInfo?.jobTitle}</h3>
                </div>
                <div className='central-content'>
                <h1 style={{ paddingTop: '45px', margin: '0px', marginLeft: '0px' }}>PROFILE</h1>
                <hr style={{ padding: '1px', backgroundColor: 'black' }} />
                <p className='paragraphStyle' style ={{fontSize:"18px"}}>
                  Hardworking and experienced Receptionist with several years of experience serving as a supportive and
                  integral employee in high volume client settings. Experienced in creating schedules, making appointments,
                  selling products, and providing clients with optimal customer service. Bringing forth the ability to
                  manage front desk settings with poise and grace, in addition to managing a variety of administrative
                  duties. Eager to join a new team of people, and assist them as a dedicated and passionate Receptionist.
                </p>
                <h1>EMPLOYMENT HISTORY</h1>
                <hr style={{ padding: '1px', backgroundColor: 'black' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4>Sales Manager, Winthrop and Lee</h4>
                  <p style={{ color: 'grey', fontSize: '16px', fontWeight: 'bold' ,marginTop:"-10px" }}>Boulder</p>
                </div>
                <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>
                  November 2014 - August 2019
                </h3>
                <ul style={{ fontSize: '18px', textAlign: 'justify', lineHeight: '1.5', position: 'relative', top: '-20px' }}>
                  <li>Greeted clients and provided them with information and superior service.</li>
                  <li>Handled calls, collected personal information, and managed schedules.</li>
                  <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li>
                  <li>Handled calls, collected personal information, and managed schedules.</li>
                  <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li>
                </ul>
                {/* Add the rest of the employment history here */}
                <h1>EDUCATION</h1>
                <hr style={{ padding: '1px', backgroundColor: 'black' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4>Bachelor of Marketing, Colorado College</h4>
                  <p style={{ color: 'grey', fontSize: '18px', fontWeight: 'bold',marginTop:"-10px" }}>Colorado College</p>
                </div>
                <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>Aug 2005-May 2009</h3>
                {/* Add the rest of the education history here */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4>Bachelor of Marketing, Colorado College</h4>
                  <p style={{ color: 'grey', fontSize: '18px', fontWeight: 'bold',marginTop:"-10px" }}>Colorado College</p>
                </div>
                <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>Aug 2005-May 2009</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4>Bachelor of Marketing, Colorado College</h4>
                  <p style={{ color: 'grey', fontSize: '18px', fontWeight: 'bold',marginTop:"-10px" }}>Colorado College</p>
                </div>
                <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>Aug 2005-May 2009</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4>Bachelor of Marketing, Colorado College</h4>
                  <p style={{ color: 'grey', fontSize: '18px', fontWeight: 'bold',marginTop:"-10px" }}>Colorado College</p>
                </div>
                <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>Aug 2005-May 2009</h3>
                
              </div>
              
            </div>
          </div>
        </div>
        </div>
      );
    };
    
export default Amsterdam;
