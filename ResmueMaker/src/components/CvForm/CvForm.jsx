import { useState } from "react";
import React from "react";
import "./CvForm.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SideBar from "../SideBar/SideBar";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSpring, animated } from "react-spring";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PersonalInformation from "./PersonalInformation";
import Summary from "./Summary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Courses from "./Courses";
import ComputerSkills from "./ComputerSkills";
import Languages from "./Languages";
import AreaOfExpertise from "./AreaOfExpertise";
import WebLinks from "./webLinks";
import Activities from "./Activities";
import Hobbies from "./Hobbies";
import References from "./References";
import { v4 as uuid } from "uuid";
import Amsterdam from "../TemplatesContent/Amsterdam/Amsterdam";
import { Link } from "react-router-dom";
function Form({ toggleSidebar, activeSection, handleSectionChange,perInfo }) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [renderedComponents, setRenderedComponents] = useState([]);

  const handleNextSection = () => {
    const sections = [
      "Personal Details",
      "Professional Summary",
      "Education",
      "Employment History",
      "Skills",
      "Web Link",
      "Internship",
      "Courses",
      "Languages",
      "References",
      "Activities",
      "Hobbies",
    ];

    const currentIndex = sections.indexOf(activeSection);

    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      handleSectionChange(nextSection);
    }
  };
  const handlePreview = () => {
    const sections = [
      "Personal Details",
      "Professional Summary",
      "Education",
      "Employment History",
      "Skills",
      "Web Link",
      "Internship",
      "Courses",
      "Languages",
      "References",
      "Activities",
      "Hobbies",
    ];

    const currentIndex = sections.indexOf(activeSection);

    if (currentIndex > 0) {
      const previousSection = sections[currentIndex - 1];
      handleSectionChange(previousSection);
    }
  };

  console.log("perInfo",perInfo);

  // fill section components useStates

  const [expertise, setExpertise] = useState([
    {
      field: "field",
      expertLevel: "expertLevel",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: uuid(),
      skills: "skills",
      expertLevel: "expertLevel",
    },
  ]);

  const [courses, setCourses] = useState([
    {
      courseCode: "courseCode",
      courseName: "courseName",
      grades: "grades",
      courseDuration: "courseDuration",
    },
  ]);

  const [languages, setLanguages] = useState([
    {
      firstLanguage: "firstLanguage",
      secondLanguage: "secondLanguage",
    },
  ]);

  const [info, setInfo] = useState({
    jobTitle: "",
    photo: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    city: "",
  });

  const [personalInfo,setPersonalInfo] =useState ({
    jobTitle: "",
    photo: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    city: "", 
  }) 

  // console.log("check-info",info)
  // console.log("CvForm-personalInfo>>",personalInfo)
  const [summary, setSummary] = useState({
    description: "description",
  });

  const [experience, setExperience] = useState([
    {
      id: uuid(),
      previousInstitute: "previousInstitute",
      domainWork: "domainWork",
      address: "address",
      contactNumber: "contactNumber",
      timePeriod: "timePeriod",
    },
  ]);

  const [education, setEducation] = useState([
    {
      nameInstitute: "nameInstitute",
      degree: "degree",
      major: "major",
      field: "field",
      studyDuration: "studyDuration",
    },
  ]);
  const [webLink, setWebLink] = useState([
    {
      Label: "Label",
      Link: "Link",
    },
  ]);
  const [reference, setReference] = useState([
    {
      Label: "Label",
      Link: "Link",
    },
  ]);
  const [activity, setActivities] = useState([
    {
      id: uuid(),
      previousInstitute: "previousInstitute",
      domainWork: "domainWork",
      address: "address",
      contactNumber: "contactNumber",
      timePeriod: "timePeriod",
    },
  ]);

    // Define functions to update form data
    const updateInfo = (e) => {
      const {name,value} = e.target;
      
      setInfo((prevState) => ({...prevState, [name]: value}));
    
    };

    const updateSummary = (data) => {
      setSummary((prevSummary) => ({
        ...prevSummary,
        ...data,
      }));
    };
  

  const handleAddExpertise = (expertise) => {
    setExpertise((prevState) => [...prevState, expertise]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteExpertise = (id) => {
    let filterExpertise = expertise.filter((exp) => id !== exp.id);
    setExpertise(filterExpertise);
  };
  const handleAddSkill = (skill) => {
    setSkills((prevState) => [...prevState, skill]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteSkill = (id) => {
    let filterSkills = skills.filter((sk) => id !== sk.id);
    setSkills(filterSkills);
  };
  const handleAddCourses = (courses) => {
    setCourses((prevState) => [...prevState, courses]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteCourses = (id) => {
    let filterCourse = courses.filter((sk) => id !== sk.id);
    setCourses(filterCourse);
  };

  const handleAddEducation = (education) => {
    setEducation((prevState) => [...prevState, education]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteEducation = (id) => {
    let filterEducation = education.filter((edu) => id !== edu.id);
    setEducation(filterEducation);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleAddExperience = (singleExperience) => {
    setExperience((prevState) => [...prevState, singleExperience]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteExperience = (id) => {
    let filterExperience = experience.filter((exp) => id !== exp.id);
    setExperience(filterExperience);
  };
  const handleAddActivities = (singleActivity) => {
    setActivities((prevState) => [...prevState, singleActivity]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteActivities = (id) => {
    let filterActivities = activity.filter((exp) => id !== exp.id);
    setExperience(filterActivities);
  };

  const handleAddLanguages = (languages) => {
    setLanguages((prevState) => [...prevState, languages]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteLanguages = (id) => {
    let filterLanguages = languages.filter((lang) => id !== lang.id);
    setLanguages(filterLanguages);
  };
  const handleAddWebLink = (webLink) => {
    setWebLink((prevState) => [...prevState, webLink]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteWebLink = (id) => {
    let filterWebLink = webLink.filter((e) => id !== e.id);
    setWebLink(filterWebLink);
  };
  const handleAddReferences = (reference) => {
    setReference((prevState) => [...prevState, reference]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New {activeSection} Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteReference = (id) => {
    let filterReference = reference.filter((e) => id !== e.id);
    setReference(filterReference);
  };
  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 1, transform: "translateX(100%)" },
    config: { duration: 1250 },
  });
  const addComponent = (component) => {
    setRenderedComponents((prevComponents) => [...prevComponents, component]);
  };

  const removeComponent = (component) => {
    setRenderedComponents((prevComponents) =>
      prevComponents.filter((comp) => comp !== component)
    );
  };
  return (
    <animated.div style={formAnimation} className="field">
      <div className="topper">
        <h2>{activeSection} Section</h2>
        <span onClick={toggleSidebar}>
          <SettingsIcon
            className="settingIcon"
            style={{ color: "black", padding: "0px" }}
          />
        </span>
      </div>

      <animated.form style={formAnimation} onSubmit={handleSubmit}>
        {activeSection === "Personal Details" && (
          <PersonalInformation activeSection={activeSection} info={info} onFormInputChange={updateInfo} />
        )}
        {activeSection === "Professional Summary" && (
          <Summary activeSection={activeSection} summary={summary} />
        )}
        {activeSection === "Employment History" && (
          <WorkExperience
            activeSection={activeSection}
            allExperience={experience}
            addComponent={handleAddExperience}
            removeComponent={handleDeleteExperience}
          />
        )}
        {activeSection === "Education" && (
          <Education
            activeSection={activeSection}
            allEducation={education}
            addComponent={handleAddEducation}
            removeComponent={handleDeleteEducation}
          />
        )}
        {activeSection === "Courses" && (
          <Courses
            activeSection={activeSection}
            allCourses={courses}
            addComponent={handleAddCourses}
            removeComponent={handleDeleteCourses}
          />
        )}
        {activeSection === "Skills" && (
          <ComputerSkills
            activeSection={activeSection}
            allSkill={skills}
            addComponent={handleAddSkill}
            removeComponent={handleDeleteSkill}
          />
        )}
        {activeSection === "Languages" && (
          <Languages
            activeSection={activeSection}
            allLanguages={languages}
            addComponent={handleAddLanguages}
            removeComponent={handleDeleteLanguages}
          />
        )}
        {activeSection === "Internship" && (
          <AreaOfExpertise
            activeSection={activeSection}
            allExpertise={expertise}
            addComponent={handleAddExpertise}
            removeComponent={handleDeleteExpertise}
          />
        )}
        {activeSection === "Web Link" && (
          <WebLinks
            activeSection={activeSection}
            allWebLinks={webLink}
            addComponent={handleAddWebLink}
            removeComponent={handleDeleteWebLink}
          />
        )}
        {activeSection === "References" && (
          <References
            activeSection={activeSection}
            allReferences={reference}
            addComponent={handleAddReferences}
            removeComponent={handleDeleteReference}
          />
        )}
        {activeSection === "Activities" && (
          <Activities
            activeSection={activeSection}
            allActivities={activity}
            addComponent={handleAddActivities}
            removeComponent={handleDeleteActivities}
          />
        )}
        {activeSection === "Hobbies" && (
          <Hobbies activeSection={activeSection} />
        )}

   
        <div className="form-btn-sec">
          <button id="white-btn" onClick={handlePreview}>
            Previous Section
          </button>
          {activeSection !== "Web Link" && (
            <button id="btn" onClick={handleNextSection}>
              Next Section
            </button>
          )}
        </div>
      </animated.form>
      
  
    </animated.div>
  );
}

export default Form;
