import React, { useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSpring, animated } from "react-spring";
import "./CvForm.css"
const PersonalInformation = ({activeSection,info, onFormInputChange}) => {
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [formData, setFormData] = useState(info);
      const handleMonthSelect = (month) => {
        setSelectedMonth(month);
      };
    
      const handleYearSelect = (year) => {
        setSelectedYear(year);
      };
      const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0%)', 
        from: { opacity: 1, transform: 'translateX(100%)' },
        config: { duration: 1250 }, 
      });
    

      // const handleInputChange = (e) => {
      //   const { name, value } = e.target;
      //   setFormData((prevData) => ({
      //     ...prevData,
      //     [name]: value,
      //   }));
    
      //   // Pass the updated form data to the parent component
      //   onFormInputChange({
      //     [name]: value,
      //   });
      // };
    const handleSubmit = () => {
      onFormInputChange(formData);
    };
  return (
    <animated.div style={formAnimation}>
       
     
        <div className="field-top">
          <h3>{activeSection}</h3>
     
        </div>
      <div className="division" style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px",lineHeight:"2.5"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Wanted job title <i style={{color:"#502ACC"}} className="fa fa-question-circle" aria-hidden="true" ></i>
          </label>
          <input
           type="text"
           name="jobTitle"
           placeholder="e.g Teacher"
           value={info?.jobTitle}
           onChange={(e)=>onFormInputChange(e)}
      />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
        <div style={{display:"flex"}}>
        <div  className ="uploadSec" ><i className="fa-solid fa-user" style={{color: "#8ba9d0",fontSize:"60px",marginTop:"20px"}}></i></div>
        <button style={{marginLeft:"10px",paddingTop:"70px",backgroundColor:"white",border:"none",color:"#0534c2"}}>Upload Photo</button>
        </div>
         
        </div>
        
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="12"
            placeholder="John"
            value={info?.firstName}
            onChange={(e)=>onFormInputChange(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="12"
            placeholder="John"
            value={info?.lastName}
            onChange={(e)=>onFormInputChange(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Email
          </label>
          <input type="email" 
          className="12" 
          name='email'
          placeholder="xyz@gmail.com" 
          value={info?.email}
          onChange={(e)=>onFormInputChange(e)} 
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Contact number
          </label>
          <input type="text"
           name='number'
           className="12" 
           placeholder="111-111-111"
           value={info?.number}
           onChange={(e)=>onFormInputChange(e)}
           />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Country
          </label>
          <input type="country" 
            className="12" 
            name='country'
            placeholder="Canada" 
            value={info?.country}
            onChange={(e)=>onFormInputChange(e)}
            />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            City
          </label>
          <input type="text" 
          className="12" 
          placeholder="Toronto" 
          name='city'
          value={info?.city}
          onChange={(e)=>onFormInputChange(e)} />
        </div>
      </div>
     
     </animated.div>
  ) 
}

export default PersonalInformation
