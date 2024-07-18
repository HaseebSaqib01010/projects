import React from 'react'
import "./CvForm.css"
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from "uuid";
 
const Languages = ({activeSection,addComponent,removeComponent, allLanguages}) => {
    const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0%)', 
        from: { opacity: 1, transform: 'translateX(100%)' },
        config: { duration: 1250 }, 
      });
      const addLanguages = () => {
        let language = {
          id:uuid(),
          firstLanguage:"firstLanguage",
          secondLanguage:"secondLanguage"
        };
        addComponent(language);
      };  
  return (
    <animated.div style={formAnimation}>
       
       {/* <p style={{ color: "gray" }}>
          {activeSection === "personal"
            ? "Personal information is all about your identity"
            : `Write about ${activeSection} here`}
        </p> */}
        {/* <div className="field-top">
          <h4>{activeSection}</h4>
          <ul>
            <li>
            <button style={{ fontSize: "20px",backgroundColor:"white",border:"none", height:"0px",marginRight:"60px"}}  onClick={() => addLanguages()}>
                <i
                  className="fa fa-plus-circle"
                  style={{ color: "#502ACC" }} 
                ></i>
              </button>
            </li>
          
          </ul>
        </div> */}
       {allLanguages?.map((singleLanguage)=>{
                   return ( 
                    <div>    <h3 style={{display:"flex", justifyContent:"space between", margin:"12px"}}> {activeSection} &nbsp;
          <li style={{listStyle:"none"}}>
                   <button style={{ fontSize: "24px",backgroundColor:"white",border:"none", height:"0px",marginRight:"60px"}}
              onClick={() => addLanguages()}
            >
              <i className="fa fa-plus-circle" style={{ color: "#502ACC" }}></i>
            </button>
          </li>
         
        </h3>  
         <div className="division" key={singleLanguage.id} style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px"}}>
         <div style={{display:"flex",width:"100%"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
          Language
          </label>
          <input
            type="text"
            className="12"
            placeholder="e.g. French"
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Level 
          </label>
          <select className="form-select" aria-label="Default select example">
             <option selected>Select Level</option>
             <option className='option' value="1">Native Speaker</option>
             <option className='option' value="2">Highly Proficient</option>
             <option className='option' value="3">Very good command</option>
          </select>
          {/* <input type="text" className="12" placeholder="e.g Spanish" /> */}
        </div>
        
        <button style={{ fontSize: "20px",backgroundColor:"white",border:"none",position:"relative",top: "-10px",right: "5px", height: "0px" }} onClick={() => removeComponent(singleLanguage.id)}>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
              </button>
        </div>
       </div>
       </div>
                    )})}
      
    </animated.div>
  )
}

export default Languages
