import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./CvForm.css";
import SweetAlert from "react-bootstrap-sweetalert/dist/components/SweetAlert";
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from "uuid";

const Education = ({
  activeSection,
  addComponent,
  removeComponent,
  allEducation,
}) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 1, transform: "translateX(100%)" },
    config: { duration: 1250 },
  });
  const addEducation = () => {
    let education = {
      id: uuid(),
      nameInstitute: "nameInstitute",
      degree: "degree",
      major: "major",
      field: "field",
      studyDuration: "studyDuration",
    };
    addComponent(education);
 
  };

  return (
    <animated.div style={formAnimation}>
      {/* <p style={{ color: "gray" }}>
          {activeSection === "personal"
            ? "Personal information is all about your identity"
            : `Write about ${activeSection} here`}
        </p> */}
      {/* <div className="field-top" style={{marginBottom:"-22px"}}>
          <h3>{activeSection}</h3>
      
          <ul>
          <li>
                   <button style={{ fontSize: "20px",backgroundColor:"white",border:"none", height:"0px",marginRight:"60px"}}
              onClick={() => addEducation()}
            >
               
              <i className="fa fa-plus-circle" style={{ color: "#502ACC" }}></i>
            </button>
          </li>
         
        </ul>
        </div> */}

      {allEducation?.map((singleEducation) => {
        return (
          <div>
            <p>
              A varied education on your resume sums up the value that your
              learning and background belongs to your job
            </p>
            <h3
              style={{
                display: "flex",
                justifyContent: "space between",
                margin: "12px",
              }}
            >
              {" "}
              {activeSection} &nbsp;
              <li style={{ listStyle: "none" }}>
                <button
                  style={{
                    fontSize: "24px",
                    backgroundColor: "white",
                    border: "none",
                    height: "0px",
                    marginRight: "60px",
                  }}
                  onClick={() => addEducation()}
                >
                  <i
                    className="fa fa-plus-circle"
                    style={{ color: "#502ACC" }}
                  ></i>
                </button>
              </li>
            </h3>
            <div
              key={singleEducation.id}
              style={{
                border: "lightgrey 1px solid",
                padding: "20px",
                margin: "10px",
              }}
            >
              <div className="division">
                <div style={{ display: "flex", width: "100%" }}>
                  <div className="col-md-12 col-lg-6 px-2">
                    <label htmlFor="" className="col-12">
                      School
                    </label>
                    <input
                      type="text"
                      className="12"
                      placeholder="e.g. Harvard "
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 px-2">
                    <label htmlFor="" className="col-12">
                      Degree
                    </label>
                    <input
                      type="text"
                      className="12"
                      placeholder="e.g Design and Analysis of Algorithm"
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
                    onClick={() => removeComponent(singleEducation.id)}
                  >
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      style={{ color: "#502ACC" }}
                    ></i>
                  </button>
                </div>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    Major
                  </label>
                  <input
                    type="text"
                    className="12"
                    placeholder="Criminal Justice"
                  />
                </div>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    City
                  </label>
                  <input type="text" className="12" placeholder="e.g. Ohio" />
                </div>
              </div>
              <div style={{ display: "flex", marginLeft: "22px" }}>
                <div className="time-label">
                  <label htmlFor="">Start Date</label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* <input type="checkbox" name="" id="" style={{ width: "20px", position:"relative", right:"-10px",top:"-10px"}} />
          <label
            htmlFor=""
            style={{ width: "170px", padding: "1px", fontSize: "16px" }}
          >
            Currently Study Here
          </label> */}
                  </div>
                </div>
                <div className="time-label">
                  <label htmlFor="">End Date</label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      style={{
                        width: "20px",
                        position: "relative",
                        right: "-10px",
                        top: "-10px",
                      }}
                    />
                    <label
                      htmlFor=""
                      style={{
                        width: "170px",
                        padding: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Currently Study Here
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="time-periods">
                  <DropdownButton
                    id="dropdown-item-button text-light"
                    title={selectedMonth || "Month"}
                    className="timeDropdown "
                    variant="none"
                    onChange={() => handleMonthSelect()}
                  >
                    <Dropdown.ItemText>Select Month</Dropdown.ItemText>
                    <Dropdown.Item as="button">January</Dropdown.Item>
                    <Dropdown.Item as="button">February </Dropdown.Item>
                    <Dropdown.Item as="button">March</Dropdown.Item>
                    <Dropdown.Item as="button">April</Dropdown.Item>
                    <Dropdown.Item as="button">May</Dropdown.Item>
                    <Dropdown.Item as="button">June</Dropdown.Item>
                    <Dropdown.Item as="button">July</Dropdown.Item>
                    <Dropdown.Item as="button">August</Dropdown.Item>
                    <Dropdown.Item as="button">September</Dropdown.Item>
                    <Dropdown.Item as="button">October</Dropdown.Item>
                    <Dropdown.Item as="button">November</Dropdown.Item>
                    <Dropdown.Item as="button">December</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    id="dropdown-item-button"
                    title={selectedYear || "Year"}
                    className="timeDropdown"
                    variant="none"
                    onChange={() => handleYearSelect("2010")}
                  >
                    <Dropdown.ItemText>Select Year</Dropdown.ItemText>
                    <Dropdown.Item as="button">2010</Dropdown.Item>
                    <Dropdown.Item as="button">2011</Dropdown.Item>
                    <Dropdown.Item as="button">2012</Dropdown.Item>
                    <Dropdown.Item as="button">2013</Dropdown.Item>
                    <Dropdown.Item as="button">2014</Dropdown.Item>
                    <Dropdown.Item as="button">2015</Dropdown.Item>
                    <Dropdown.Item as="button">2016</Dropdown.Item>
                    <Dropdown.Item as="button">2017</Dropdown.Item>
                    <Dropdown.Item as="button">2018</Dropdown.Item>
                    <Dropdown.Item as="button">2019</Dropdown.Item>
                    <Dropdown.Item as="button">2020</Dropdown.Item>
                    <Dropdown.Item as="button">2021</Dropdown.Item>
                    <Dropdown.Item as="button">2022</Dropdown.Item>
                    <Dropdown.Item as="button">2023</Dropdown.Item>
                  </DropdownButton>
                </div>

                <div className="time-periods">
                  <DropdownButton
                    id="dropdown-item-button text-light"
                    title={selectedMonth || "Month"}
                    className="timeDropdown "
                    variant="none"
                    onChange={() => handleMonthSelect()}
                  >
                    <Dropdown.ItemText>Select Month</Dropdown.ItemText>
                    <Dropdown.Item as="button">January</Dropdown.Item>
                    <Dropdown.Item as="button">February </Dropdown.Item>
                    <Dropdown.Item as="button">March</Dropdown.Item>
                    <Dropdown.Item as="button">April</Dropdown.Item>
                    <Dropdown.Item as="button">May</Dropdown.Item>
                    <Dropdown.Item as="button">June</Dropdown.Item>
                    <Dropdown.Item as="button">July</Dropdown.Item>
                    <Dropdown.Item as="button">August</Dropdown.Item>
                    <Dropdown.Item as="button">September</Dropdown.Item>
                    <Dropdown.Item as="button">October</Dropdown.Item>
                    <Dropdown.Item as="button">November</Dropdown.Item>
                    <Dropdown.Item as="button">December</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    id="dropdown-item-button"
                    title={selectedYear || "Year"}
                    className="timeDropdown"
                    variant="none"
                    onChange={() => handleYearSelect("2010")}
                  >
                    <Dropdown.ItemText>Select Year</Dropdown.ItemText>
                    <Dropdown.Item as="button">2010</Dropdown.Item>
                    <Dropdown.Item as="button">2011</Dropdown.Item>
                    <Dropdown.Item as="button">2012</Dropdown.Item>
                    <Dropdown.Item as="button">2013</Dropdown.Item>
                    <Dropdown.Item as="button">2014</Dropdown.Item>
                    <Dropdown.Item as="button">2015</Dropdown.Item>
                    <Dropdown.Item as="button">2016</Dropdown.Item>
                    <Dropdown.Item as="button">2017</Dropdown.Item>
                    <Dropdown.Item as="button">2018</Dropdown.Item>
                    <Dropdown.Item as="button">2019</Dropdown.Item>
                    <Dropdown.Item as="button">2020</Dropdown.Item>
                    <Dropdown.Item as="button">2021</Dropdown.Item>
                    <Dropdown.Item as="button">2022</Dropdown.Item>
                    <Dropdown.Item as="button">2023</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    marginBottom: "20px",
                  }}
                >
                  Description
                </h2>
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
                        <i
                          className="fas fa-italic"
                          style={{ color: "white" }}
                        ></i>
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
                <textarea
                  style={{
                    padding: "20px",
                    fontSize: "20px",
                    width: "100%",
                    border: "solid 1px lightGrey",
                  }}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="e.g. Graduated with High Honors..."
                ></textarea>
              </div>
            </div>
          </div>
        );
      })}
    </animated.div>
  );
};

export default Education;
