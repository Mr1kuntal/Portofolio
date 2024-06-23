import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaHtml5,FaCss3Alt,FaBootstrap   } from "react-icons/fa";

function Techstack() {
  const techArray = [
    {icon:<CgCPlusPlus />,name:"C++"},
    {icon:<DiJavascript1 />,name:"Javascript"},
    {icon:<DiReact />,name:"React.Js"},
    {icon:<DiNodejs />,name:"Node.Js"},
    {icon:<DiMongodb />,name:"Mongo DB"},
    {icon:<GrMysql />,name:"MySql"},
    {icon:<FaHtml5 />,name:"HTML"},
    {icon:<FaCss3Alt  />,name:"CSS"},
    {icon:<FaBootstrap  />,name:"Bootstrap"},
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

export default Techstack;
