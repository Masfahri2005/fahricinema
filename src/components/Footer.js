import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
        <br/>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Fahri Film</h5>
            <p>Menikmati film terbaik dengan kualitas yang tak tertandingi.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>&copy; {new Date().getFullYear()} Fahri Film. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
