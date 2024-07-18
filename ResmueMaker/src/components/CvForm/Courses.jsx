import React from "react";
import "./CvForm.css";
import { v4 as uuid } from "uuid";
import { useSpring, animated } from "react-spring";
const Courses = ({ activeSection, allCourses ,addComponent, removeComponent }) => {
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 1, transform: "translateX(100%)" },
    config: { duration: 1250 },
  });
  const addCourses = () => {
    let courses = {
      id: uuid(),
      courseCode: "courseCode",
      courseName: "courseName",
      grades: "grades",
      courseDuration: "courseDuration",
    };
    addComponent(courses);
  };
  return (
    <animated.div style={formAnimation}>
      {/* <p style={{ color: "gray" }}>
          {activeSection === "personal"
            ? "Personal information is all about your identity"
            : `Write about ${activeSection} here`}
        </p> */}
   
      {allCourses?.map((singleCourse)=>{
      return (
      <div>    <h3 style={{display:"flex", justifyContent:"space between", margin:"12px"}}> {activeSection} &nbsp;
          <li style={{listStyle:"none"}}>
                   <button style={{ fontSize: "24px",backgroundColor:"white",border:"none", height:"0px",marginRight:"60px"}}
              onClick={() => addCourses()}
            >
              <i className="fa fa-plus-circle" style={{ color: "#502ACC" }}></i>
            </button>
          </li>
         
        </h3> 
      <div className="division"  style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px"}}>
      <div style={{display:"flex",width:"100%"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Course Code
          </label>
          <input type="text" className="12" placeholder="CSC 210" />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Course Name
          </label>
          <input
            type="text"
            className="12"
            placeholder="e.g Design and Analysis of Algorithm"
          />
        </div>
        <button style={{ fontSize: "20px",backgroundColor:"white",border:"none",position:"relative",top: "-10px",right: "5px", height: "0px" }} onClick={() => removeComponent(singleCourse.id)}>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
              </button>
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Grades
          </label>
          <input type="text" className="12" placeholder="e.g A+" />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Course Duration
          </label>
          <input type="text" className="12" placeholder="e.g 3-months" />
        </div>
      </div>
      </div>
      )
              })
                
              }
    </animated.div>
  );
};

{/* <div className="division">
  <div className="col-md-12 col-lg-6 px-2">
    <label htmlFor="" className="col-12">
      Name of Institute
    </label>
    <input type="text" className="12" placeholder="Lipsum University, NY" />
  </div>
  <div className="col-md-12 col-lg-6 px-2">
    <label htmlFor="" className="col-12">
      Degree
    </label>
    <input
      type="text"
      className="12"
      placeholder="e.g Bachelors of Computer Science"
    />
  </div>
  <div className="col-md-12 col-lg-6 px-2">
    <label htmlFor="" className="col-12">
      Major
    </label>
    <input type="text" className="12" placeholder="Criminal Justice" />
  </div>
  <div className="col-md-12 col-lg-6 px-2">
    <label htmlFor="" className="col-12">
      Field
    </label>
    <input type="text" className="12" placeholder="Law" />
  </div>
</div>; */}
export default Courses;
