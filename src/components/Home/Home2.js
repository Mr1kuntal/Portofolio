import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",textAlign:"left" }}>
              Who <span className="text-4"> Am </span> I
            </h1>
            <p className="home-about-body">
              I am a 
              <b className="text-4"> full-stack web developer </b>
              , pursuing my B.Tech in 
              Computer Science & Engineering from 
              <b className="text-4"> IIITDM Jabalpur </b>
              <br />
              <br />I am fluent in Languages like
                <b className="text-4"> C++ and Javascript. </b>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
                <b className="text-4">Web Technologies and Products </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="text-4">Node.js</b> and
                  Modern Javascript Library and Frameworks
              &nbsp; like
                <b className="text-4"> React.js</b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-4">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Piyush-Aggarwal040501"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/piyush-aggarwal-276b33235/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pi.yush04/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
