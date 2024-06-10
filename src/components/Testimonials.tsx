import React from "react";
import {
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "../constants/index";
import { testimonials } from "../constants/index";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = testimonials.map((testimonial) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={testimonial.id}
    >
      <div className="testimonial-card">
        <div className="testimonial-img-container">
          <img src={testimonial.img} alt="user-profile" />
        </div>
        <div className="testimonial-text-container">
          <h3>{testimonial.name}</h3>
          <p className="content-text">"{testimonial.testimonial}"</p>
        </div>
      </div>
    </CarouselItem>
  ));

  return (
    <div className="section-container">
      <Col>
        <Row>
          <h1 className="d-flex justify-content-center section-title">
            What they've said
          </h1>
        </Row>
        {/* <Row className="testimonial-card-container d-md-none">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4} className="testimonial-col">
              <div className="testimonial-card">
                <div className="testimonial-img-container">
                  <img src={testimonial.img} alt="user-profile" />
                </div>
                <div className="testimonial-text-container">
                  <h3>{testimonial.name}</h3>
                  <p className="content-text">"{testimonial.testimonial}"</p>
                </div>
              </div>
            </Col>
          ))}
        </Row> */}
        <Row className="testimonial-card-container d-md-none">
          <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false}>
            {slides}
            <div className="custom-carousel-indicators">
              <CarouselIndicators items={testimonials} activeIndex={activeIndex} onClickHandler={goToIndex} />
            </div>
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Row>
        <Row className="testimonial-card-container d-none d-md-flex">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4} className="testimonial-col">
              <div className="testimonial-card">
                <div className="testimonial-img-container">
                  <img src={testimonial.img} alt="user-profile" />
                </div>
                <div className="testimonial-text-container">
                  <h3>{testimonial.name}</h3>
                  <p className="content-text">"{testimonial.testimonial}"</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <div className="d-flex justify-content-center">
            <Button className="btn-orange-2">Get Started</Button>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default Testimonials;
