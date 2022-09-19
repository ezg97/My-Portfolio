import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cryptoExchange from "../../Assets/Projects/Crypto-Exchange.PNG";
import count2Win from "../../Assets/Projects/Count2Win.png";
import ezgSwap from "../../Assets/Projects/EZG-Swap.PNG";
import chatApp from "../../Assets/Projects/Chat-App-page.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat App"
              description="Create your own profile then message, search, and add your friends (links)."
              ghLink="https://github.com/ezg97/chat-app-client"
              demoLink="https://www.chat-app.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={count2Win}
              isBlog={false}
              title="Count 2 Win"
              description="A mathematical game that requires strategy and some counting to win."
              ghLink="https://github.com/ezg97/Count-2-website-"
              demoLink="https://www.count2win.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoExchange}
              isBlog={false}
              title="Crypto Exchange"
              description="Decentralized app allows you to buy, sell, deposit, and withdraw tokens/ether."
              ghLink="https://github.com/ezg97/Crypto-Exchange"
              demoLink="https://fanciful-biscochitos-273de0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ezgSwap}
              isBlog={false}
              title="EZG Swap"
              description="Buy and Sell my custom made tokens for Ether."
              ghLink="https://github.com/ezg97/EZG-Swap"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
