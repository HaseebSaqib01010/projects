import React from "react";
import "./CvForm.css";
import { v4 as uuid } from "uuid";
import { useSpring, animated } from "react-spring";
const ComputerSkills = ({
  activeSection,
  allSkill,
  addComponent,
  removeComponent,
}) => {
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 1, transform: "translateX(100%)" },
    config: { duration: 1250 },
  });

  const addSkill = () => {
    let skill = {
      id: uuid(),
      skills: "skills",
      expertLevel: "expertLevel",
    };
    addComponent(skill);
  };
  console.log(allSkill);
  return (
    <animated.div style={formAnimation}>
      {/* <p style={{ color: "gray" }}>
          {activeSection === "personal"
            ? "Personal information is all about your identity"
            : `Write about ${activeSection} here`}
        </p> */}
      <div className="field-top">
        <h3>{activeSection}</h3>
    
      </div>
      <p>Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system)</p>
      <div className="skillsSet">
      <button >Effective Team Leader <i className="fa-solid fa-plus"></i></button>
      <button >Highly Organized and Efficient <i className="fa-solid fa-plus"></i></button>
      <button >Critical Thinking <i className="fa-solid fa-plus"></i></button>
      <button >Microsoft Office <i className="fa-solid fa-plus"></i></button>
      <button >Strong Communication Skills <i className="fa-solid fa-plus"></i></button>
      <button >Time Management Skills <i className="fa-solid fa-plus"></i></button>
      <button >Conflict Resolution <i className="fa-solid fa-plus"></i></button>
      <button >Public Speaking <i className="fa-solid fa-plus"></i></button>
      <button >Marketing <i className="fa-solid fa-plus"></i></button>
      <button >Initiatives and Problem-Solving Skills  <i className="fa-solid fa-plus"></i></button>

      </div>
      
          <li style={{listStyle:"none", float:"right",marginRight:"0px",padding:"20px"}}>
            <button
              style={{
                fontSize: "20px",
                backgroundColor: "white",
                border: "none",
                
                
                             }}
              onClick={() => addSkill()}
            >
              Add more Skills &nbsp;
              <i className="fa fa-plus-circle" style={{ color: "#502ACC" }}></i>
             
            </button>
          </li>
      

      {allSkill?.map((singleSkill) => {
        return (
          <div
            key={singleSkill.id}
            className="division"
            style={{
              border: "lightgrey 1px solid",
              padding: "20px",
              margin: "10px",
              clear:"both"
            }}
          >
            <div style={{ display: "flex", width: "100%" }}>
              <div className="col-md-12 col-lg-6 px-2">
                <label htmlFor="" className="col-12">
                  Skills
                </label>
                <input type="text" className="12" placeholder="e.g. Marketing" />
              </div>
              <div className="col-md-12 col-lg-6 px-2">
                <label htmlFor="" className="col-12">
                  Level of Expertise
                </label>
                <input
                  type="text"
                  className="12"
                  placeholder="e.g Beginner"
                />
              </div>
              <button
                style={{
                  fontSize: "20px",
                  backgroundColor: "white",
                  border: "none",
                  position: "relative",
                  top: "-10px",
                  right: "5px",
                  height: "0px",
                }}
                onClick={() => removeComponent(singleSkill.id)}
              >
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
              </button>
            </div>
            {/* <div className="col-md-12 col-lg-6 px-2">
              <label htmlFor="" className="col-12">
                Skills
              </label>
              <input type="text" className="12" placeholder="e.g JavaScript" />
            </div>
            <div className="col-md-12 col-lg-6 px-2">
              <label htmlFor="" className="col-12">
                Level of Expertise
              </label>
              <input type="text" className="12" placeholder="e.g Experts" />
            </div> */}
          </div>
        );
      })}
    </animated.div>
  );
};

export default ComputerSkills;
