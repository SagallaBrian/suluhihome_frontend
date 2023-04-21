import { Col, Container, Row } from "react-bootstrap";

const AboutSeca = () => {
  return (
    <div className="roboto">
      <Container fluid="lg">
        <div className="py-3">
          <Row>
            <Col>
              <div className="pt-3 pt-lg-5">
                <h2>About Suluhi Technology</h2>
                <div className="text-secondary sul-small">
                  At Suluhi Technology, we are passionate about creating
                  innovative and effective web solutions for businesses of all
                  sizes. Founded in 2015, our team of experienced developers,
                  designers, and project managers is dedicated to delivering
                  high-quality web applications that help our clients achieve
                  their goals.
                </div>
              </div>
            </Col>
            <Col>
              <div className="diva"></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutSeca;
