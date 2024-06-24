import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trenders from "../../Assets/Projects/trenders.png";
import netflixGPT from "../../Assets/Projects/netflixGPT.png";



function Projects() {
  const projectArray = [
    {name:"netflixGPT",imgPath:netflixGPT,ghLink:"https://github.com/Mr1kuntal/netflix-gpt",demoLink:"https://testproject-b7b93.web.app/",description:[
      "Developed a secure and personalized streaming suggestion website, NetflixGPT.",
      "Implemented restricted access where only logged-in users can access the home page.",
      "Implemented as a Single Page Application (SPA) using React.",
      "Applied Tailwind CSS for a responsive and visually appealing design.",
      "Utilized Google Firebase for backend services and user authentication.",
      "Integrated ChatGPT APIs to offer intelligent and tailored TV show suggestions.",
    ]},
    {name:"trenders",imgPath:trenders,ghLink:"https://github.com/Mr1kuntal/trenders",demoLink:"https://fabulous-sopapillas-0210c7.netlify.app/",description:[
      "A full stack E-Commerce site made using MERN stack.",
      "Enhance security by verifying users via Gmail OTP, ensuring a seamless and robust authentication process.",
      "Admin Pannel for admin to edit,delete or add new products",
      "search Bar for user to search for theri particular products",
      "Integrated with razorpay for online transaction"
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
