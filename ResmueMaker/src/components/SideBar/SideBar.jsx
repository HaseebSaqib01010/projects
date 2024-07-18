import React, { useState } from 'react';
import './SideBar.css'; 
import sampleImage from "../../assets/images/sample.jpeg";
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import Amsterdam from '../TemplatesContent/Amsterdam/Amsterdam';
import { useEffect } from 'react';

const SideBar = ({ sidebarOpen, logo_nameRef, toggleSidebar,ChildInfo,personalInfo,perInfo,showRenderTemp}) => {
  // console.log("child-info",ChildInfo);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleContent = (content) => {
    if (content === 'templates') {
      setShowTemplates(!showTemplates);
    } else if (content === 'moreOptions') {
      setShowMoreOptions(!showMoreOptions);
    }
  };
  // useEffect(()=>
  //   console.log("sideBar" , ChildInfo)
  // ,[ChildInfo])

  // useEffect(()=> 
  //   console.log(personalInfo)
  // , [personalInfo])
  // console.log("test-info",ChildInfo)
  console.log("perInfo",perInfo)

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : 'close'}`}>
      <div className="logo-details">
        <div className="logo_name" ref={logo_nameRef}>
          <p>Resume Settings</p>
        </div>
        <span
          className={`bx ${sidebarOpen ? 'bx-menu-alt-right' : 'bx-menu'}`}
          id="close-resume"
          style={{ color: "#ffffff" }}
          onClick={toggleSidebar}
        >
          {sidebarOpen && <CancelIcon className='cancelIcon' />}
        </span>
      </div>

      <div className="ResumeSetting">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 style={{ paddingTop: "15px" }}>Templates</h5>
          <i
            className={`fa-solid ${showTemplates ? 'fa-minus' : 'fa-plus'}`}
            onClick={() => toggleContent('templates')}
          ></i>
        </div>
        {showTemplates && (
          <div className="template">
            <img src={sampleImage} alt="Classic Template" />
            <p>Classic</p>
            {/* <Link onClick={showRenderTemp}> */}
              <button onClick={showRenderTemp} className="btn">Change Template</button>
            {/* </Link> */}
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 style={{ paddingTop: "15px" }}>More Options</h5>
          <i
            className={`fa-solid ${showMoreOptions ? 'fa-minus' : 'fa-plus'}`}
            onClick={() => toggleContent('moreOptions')}
          ></i>
        </div>

        {showMoreOptions && (
          <div className="options">
            <div className="inner-fill grid">
              <i className="fa-solid fa-eye"></i>
              <a href="">Preview Resume</a>
            </div>
            <div className="inner-fill grid">
              <i className="fa-solid fa-download"></i>
              <a href="">Download PDF</a>
            </div>
          </div>
        )}
      </div>
      <div className='templateSettings'>
      
      <Amsterdam CollectInfo={ChildInfo} personalInfo={personalInfo} perInfo={perInfo}/>

      </div>
    </div>
  );
};

export default SideBar;
