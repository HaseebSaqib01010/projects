import React from 'react'
import "./CvForm.css"
import { useSpring, animated } from "react-spring";
const Hobbies = ({activeSection,addComponent,removeComponent}) => {
    const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0%)', 
        from: { opacity: 1, transform: 'translateX(100%)' },
        config: { duration: 1250 }, 
      });
  return (
    <animated.div className="textInput" style={formAnimation}>
       
       {/* <p style={{ color: "gray" }}>
          {activeSection === "personal"
            ? "Personal information is all about your identity"
            : `Write about ${activeSection} here`}
        </p> */}
        <div className="field-top" style={{display:"block"}}>
        <h3>{activeSection}</h3>
        <p>What do you like? </p>
          {/* <ul>
            <li>
              <button style={{ fontSize: "20px",backgroundColor:"white",border:"none" }} onClick={() => addComponent(activeSection)}>
                <i
                  className="fa fa-plus-circle"
                  style={{ color: "#502ACC" }} 
                ></i>
              </button>
            </li>
            <li>
              <button style={{ fontSize: "20px",backgroundColor:"white",border:"none" }} onClick={() => removeComponent(activeSection)}>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
              </button>
            </li>
            <li>
              <button style={{ fontSize: "20px",backgroundColor:"white",border:"none" }} href="">
                <i className="fa-solid fa-pen" style={{ color: "#502ACC" }}></i>
              </button>
            </li>
          </ul> */}
        </div>
    <div style={{margin:"20px"}}>
    <div className="input-head">
      <ul>
        <li>
          <button href="">
            <i
              className="fa-solid fa-bold"
              style={{ color: "white" }}
            ></i>
          </button>
        </li>
        <li>
          <button href="">
            <i className="fas fa-italic" style={{ color: "white" }}></i>
          </button>
        </li>
        <li>
          <button href="">
            <i
              className="fas fa-underline"
              style={{ color: "white" }}
            ></i>
          </button>
        </li>
        <li>
          <button href="">
            <i
              className="fas fa-align-justify"
              style={{ color: "white" }}
            ></i>
          </button>
        </li>
        
      </ul>
    </div>
    <textarea style = {{padding:"15px", fontSize:"24px"}}name="" id="" cols="30" rows="10" placeholder='e.g. Cycling, Sky Diving, Panting ...'></textarea>
    </div>
  </animated.div> 
  )
}

export default Hobbies;
