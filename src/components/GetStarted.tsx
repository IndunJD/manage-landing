import React from "react"
import { Row, Col, Button } from "reactstrap"
import imageOverlay from '../assets/images/bg-tablet-pattern.svg'

const GetStarted = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <h1 className="get-started-text">
            Simplify how your team works today.
          </h1>
          <div className="pattern-overlay-3">
            <img src={imageOverlay} alt="bg-pattern" />
          </div>
        </Col>
        <Col md={6} className="get-started-col">
          <div>
            <Button className="btn-white">Get Started</Button>
          </div>
          <div className="pattern-overlay-4">
            <img src={imageOverlay} alt="bg-pattern" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GetStarted;
