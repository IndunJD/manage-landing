import React from "react";
import { Row, Col } from "reactstrap";
import "../constants/index";
import { services } from "../constants/index";
import imageOverlay from "../assets/images/bg-tablet-pattern.svg";

const Services = () => {
  return (
    <div className="section-container services-container">
      <Row>
        <Col lg={6} md={12}>
          <div className="servives-content">
            <h1 className="section-title">What's different about Manage?</h1>
            <p className="content-text content-space">
              Manage provides all the functionality your{" "}
              <br className="desktop-only" /> team needs, without the
              complexity. Our <br className="desktop-only" /> software is
              tailor-made for modern digital <br className="desktop-only" />{" "}
              product teams.
            </p>
          </div>
          <div className="pattern-overlay-2">
            <img src={imageOverlay} alt="background-pattern" />
          </div>
        </Col>
        <Col lg={6} md={12} className="service-card-col">
          {services.map((service) => (
            <Row key={service.id} className="services-card">
              <div className="d-flex service-title-row">
                <Col md={2} xs={2}>
                  <span className="service-count">{service.id}</span>
                </Col>
                <Col md={10} xs={10}>
                  <h3 className="section-subtitle service-title">
                    {service.title}
                  </h3>
                </Col>
              </div>
              <div className="d-flex">
                <Col md={2}></Col>
                <Col>
                  <p className="content-text service-content-text">
                    {service.content}
                  </p>
                </Col>
              </div>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Services;
