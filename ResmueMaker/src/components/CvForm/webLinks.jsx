import React from 'react'
import "./CvForm.css"
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from "uuid";
 
const WebLinks = ({activeSection,addComponent,removeComponent, allWebLinks}) => {
    const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0%)', 
        from: { opacity: 1, transform: 'translateX(100%)' },
        config: { duration: 1250 }, 
      });
      const addWebLinks = () => {
        let webLink = {
          id:uuid(),
          Label:"label",
          Link:"link"
        };
        addComponent(webLink);
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
      
       {allWebLinks?.map((singleLink)=>{
                   return ( 

        <div>
        <h3 style={{display:"flex", justifyContent:"space between", margin:"12px"}}> {activeSection} &nbsp;
          <li style={{listStyle:"none"}}>
                   <button style={{ fontSize: "24px",backgroundColor:"white",border:"none", height:"0px",marginRight:"60px"}}
              onClick={() => addWebLinks()}
            >
              <i className="fa fa-plus-circle" style={{ color: "#502ACC" }}></i>
            </button>
          </li>
         
        </h3> 

        <p>You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio, Linkedin profile, or personal website</p>
         <div className="division" key={singleLink.id} style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px"}}>
         <div style={{display:"flex",width:"100%"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Label
          </label>
          <input
            type="text"
            className="12"
            placeholder="e.g. MY Portfolio"
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Links
          </label>
          <input type="url" className="12" placeholder="URL" />
        </div>
        
        <button style={{ fontSize: "20px",backgroundColor:"white",border:"none",position:"relative",top: "-10px",right: "5px", height: "0px" }} onClick={() => removeComponent(singleLink.id)}>
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

export default WebLinks;
