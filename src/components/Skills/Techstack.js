import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {DiJavascript1,DiReact,DiNodejs,DiMongodb} from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaBootstrap   } from "react-icons/fa";
import { SiExpress,SiJest,SiTailwindcss,SiRedux,SiFirebase } from "react-icons/si";


function Techstack() {
  const techArray = [
    {icon:<CgCPlusPlus />,name:"C++"},
    {icon:<DiJavascript1 />,name:"Javascript"},
    {icon:<DiReact />,name:"React.Js"},
    {icon:<DiNodejs />,name:"Node.Js"},
    {icon:<DiMongodb />,name:"Mongo DB"},
    {icon:<GrMysql />,name:"MySql"},
    {icon:<FaBootstrap  />,name:"Bootstrap"},
    {icon:<SiExpress />,name:"Express"},
    {icon:<SiJest />,name:"Jest"},
    {icon:<SiTailwindcss />,name:"Tailwind CSS"},
    {icon:<SiRedux />,name:"Redux Toolkit"},
    {icon:<SiFirebase />,name:"Google Firebase"},
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
