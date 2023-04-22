import { Col, Container, Row } from "react-bootstrap";

const ParallaxComp = () => {
  return (
    <div className="parallax">
      <Container fluid="lg">
        <div className="py-4">
          <Row>
            <Col lg="10">
              <h1 className="sul-h2">Social Responsibility</h1>
              <p className="sul-small">
                At Suluhi Technology, we are committed to making a positive
                impact in the world through our social responsibility
                initiatives. We believe that businesses have a responsibility to
                give back to the communities they serve, and we take that
                responsibility seriously. To that end, we have implemented a
                number of programs to reduce our environmental impact, such as
                using renewable energy sources and reducing waste. We also
                believe in supporting local organizations and charities, and
                regularly donate our time, resources, and money to causes that
                we care about.
              </p>
              <p className="sul-small">
                But our commitment to social responsibility extends beyond just
                our local community. We also believe in making a positive impact
                on a global scale. That's why we have partnered with several
                international organizations to support causes such as education,
                healthcare, and environmental conservation. We believe that
                everyone has the right to a healthy and sustainable future, and
                we are dedicated to doing our part to help create that future.
                At Suluhi Technology, we believe that social responsibility is
                not just a buzzword, but a way of life, and we are proud to be
                making a difference in the world.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ParallaxComp;
