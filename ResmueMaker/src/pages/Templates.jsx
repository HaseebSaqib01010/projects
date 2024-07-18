import React from "react";
import TemplateNavbar from "../components/Navbar/TemplateNavbar";
import "../assets/css/Template.css";
import TemplateMenu from "../components/TemplatesMenu/TemplateMenu";
import Amsterdam from "../components/TemplatesContent/Amsterdam/Amsterdam";
function Templates({hideRenderTemp}) {
  return (
    <div>
      <TemplateNavbar hideRenderTemp={hideRenderTemp} />
      <div className="changeTemplate">
        <div className="templateWrapper" style={{width:"30%"}}>
          <TemplateMenu />
        </div>
        <div className="templateContent">
        <Amsterdam/>
        
      </div>
      </div>
     
    </div>
  );
}

export default Templates;
