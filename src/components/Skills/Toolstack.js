import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify 
} from "react-icons/si";

import { FaGitAlt,FaGithub  } from "react-icons/fa";

function Toolstack() {
  const techArray = [
    {icon:<SiVisualstudiocode />,name:"Visual Studio"},
    {icon:<SiPostman />,name:"Postman"},
    {icon:<FaGitAlt />,name:"Git"},
    {icon:<FaGithub />,name:"Github"},
    {icon:<SiNetlify />,name:"Netlify"},
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techArray.map((item)=>(
        <Col xs={4} md={2} className="tech-icons">
          <div className="icon">{item.icon}</div>
          <div className="text">{item.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
