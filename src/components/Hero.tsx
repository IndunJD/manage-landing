import React from "react";
import heroimg from "../assets/images/illustration-intro.svg";
import { Row, Col, Button } from "reactstrap";

const Hero = () => {
  return (
    <div className="section-container">
      <Row className="section-content-container">
        <Col lg={6} md={12} className="hero-content-container">
          <div className="hero-content">
            <h1>
              Bring everyone <br className="desktop-only" /> together to build{" "}
              <br className="desktop-only" /> better products.
            </h1>
            <p>
              Manage makes it simple for software teams{" "}
              <br className="desktop-only" /> to plan day-to-day tasks while
              keeping the <br className="desktop-only" /> larger teams goals in
              view.
            </p>
            <Button className="btn-orange-2">Get Started</Button>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="heroimg-container">
            <img
              src={heroimg}
              alt="hero-img"
              className="hero-img"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
