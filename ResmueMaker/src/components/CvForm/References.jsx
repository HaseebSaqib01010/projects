import React, { useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSpring, animated } from "react-spring";
import "./CvForm.css"
import { v4 as uuid } from "uuid";

const References = ({activeSection,addComponent,removeComponent, allReferences}) => {
    const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0%)', 
        from: { opacity: 1, transform: 'translateX(100%)' },
        config: { duration: 1250 }, 
      });
      const addReferences = () => {
        let Reference = {
          id:uuid(),
          Label:"label",
          Link:"link"
        };
        addReferences(Reference);
      };  
  return (
    <animated.div style={formAnimation}>
       
       {/* <p style={{ color: "gray" }}>
          {activeSection === "personal"
            ? "Personal information is all about your identity"
            : `Write about ${activeSection} here`}
        </p> */}
        {/* <div className="field-top" style={{marginBottom:"-20px"}}>
          <h3>Website & Social Links</h3>
          <ul>
            <li>
            <button style={{ fontSize: "20px",backgroundColor:"white",border:"none", height:"0px",marginRight:"60px"}}  onClick={() => addWebLinks()}>
                <i
                  className="fa fa-plus-circle"
                  style={{ color: "#502ACC" }} 
                ></i>
              </button>
            </li>
          
          </ul>
        </div> */}
      
       {allReferences?.map((singleReference)=>{
                   return ( 

        <div>
        <h3 style={{display:"flex", justifyContent:"space between", margin:"12px"}}> {activeSection} &nbsp;
          <li style={{listStyle:"none"}}>
                   <button style={{ fontSize: "24px",backgroundColor:"white",border:"none", height:"0px",marginRight:"60px"}}
              onClick={() => addReferences()}
            >
              <i className="fa fa-plus-circle" style={{ color: "#502ACC" }}></i>
            </button>
          </li>
         
        </h3> 

       
         <div className="division" key={singleReference.id} style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px"}}>
         <div style={{display:"flex",width:"100%"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Referent's Full Name
          </label>
          <input
            type="text"
            className="12"
            placeholder="e.g. Mr Wick"
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Company 
          </label>
          <input type="url" className="12" placeholder="WFC" />
        </div>
        
        <button style={{ fontSize: "20px",backgroundColor:"white",border:"none",position:"relative",top: "-10px",right: "5px", height: "0px" }} onClick={() => removeComponent(singleReference.id)}>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
        </button>
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Email
          </label>
          <input
            type="email"
            className="12"
            placeholder="e.g. wfc@gmail.com"
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Contact
          </label>
          <input type="number" className="12" placeholder="111-11-1111" />
        </div>
       </div>
       </div>
                    )})}
      
    </animated.div>
  )
}

export default References;
