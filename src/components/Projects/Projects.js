import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trenders from "../../Assets/Projects/trenders.png";
import codingBlocks from "../../Assets/Projects/codingBlocks.png";
import myExpenses from "../../Assets/Projects/myExpenses.png";
import moviesGrid from "../../Assets/Projects/moviesGrid.png";


function Projects() {
  const projectArray = [
    {name:"trenders",imgPath:trenders,ghLink:"https://github.com/Piyush-Aggarwal040501/trenders_server",demoLink:"https://fabulous-sopapillas-0210c7.netlify.app/",description:[
      "A full stack E-Commerce site made using MERN stack.",
      "Enhance security by verifying users via Gmail OTP, ensuring a seamless and robust authentication process.",
      "Admin Pannel for admin to edit,delete or add new products",
      "search Bar for user to search for theri particular products",
      "Integrated with razorpay for online transaction"
    ]},
    {name:"Coding Blocks",imgPath:codingBlocks,ghLink:"https://github.com/Piyush-Aggarwal040501/CodingBlocks",demoLink:"",description:[
      "A Responsive web application like GFG for searching article made using Node.js and MySql.",
      "Search bar for users to search any article and also can request to improve and article",
      "Admin Pannel so admin can approve the users suggestion to improve the articles"
    ]},
    {name:"Movies Grid",imgPath:moviesGrid,ghLink:"https://github.com/Piyush-Aggarwal040501/movies-grid",demoLink:"https://peaceful-gumption-e52210.netlify.app/",description:[
      "Responsive web application for searching movies made using React.js",
      "Search bar to search for any movies and when click on it modal opens and show the description of the movie"
    ]},
    {name:"My Expenses",imgPath:myExpenses,ghLink:"https://github.com/Piyush-Aggarwal040501/my-expenses",demoLink:"https://melodious-blini-abd1f9.netlify.app/",description:[
      "A simple expense tracking site made using HTML, CSS and Javascript",
      "We can add income and expenses and it will be added and on top  we get how much amount we are left with"
    ]},

  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="main-text">Works </strong>
        </h1>
        <h5 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h5>
        <br />
        <Row style={{ justifyContent: "spaceBetween", paddingBottom: "10px" }}>
          {projectArray.map((item)=>(
            <Col md={6} className="project-card">
              <ProjectCard
                name={item.name} imgPath={item.imgPath} ghLink={item.ghLink} demoLink={item.demoLink} description={item.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
