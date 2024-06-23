import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rupesh Singh Kuntal </strong>
              </h1>

              <div style={{ padding: "20px 0px", textAlign: "left" }}>
                <Type />
              </div>
              <h5 style={{ padding: "20px 0px", textAlign: "left" }}>
                Gmail : 
                <strong className="main-name">  rupesh11102000singh@gmail.com</strong>
              </h5>
              <a href="https://drive.google.com/file/d/1RKwEpZOaYhSPBrONOKDbfzM90VDIciTb/view?usp=drive_link" target="_blank" className="btn-resume">
                Resume
              </a>
            </Col>

            <Col md={5} style={{ padding: 20 }}>
              <img id="piyush-image"
                src="/rupesh.png"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
