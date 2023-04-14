import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const SulCarousel = () => {
  return (
    <Carousel fade className="text-white roboto" controls={false}>
      <Carousel.Item>
        <div className="divcaroa">
          <Container>
            <Row>
              <Col md="9">
                <p>Welcome to Suluhi</p>
                <h4 className="display-5">
                  We Offer Premium Website Solutions For Your Business.
                </h4>
                <p>
                  Our goal is to provide your business quality and efficient web
                  applications that enables you meet your business objectives.
                </p>
                <div className="pt-3">
                  <Button
                    variant="primary"
                    size="sm"
                    className="me-2 btnview text-uppercase"
                  >
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white text-dark border-white text-uppercase btnview"
                  >
                    View Portfolio
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="divcarob">
          <Container>
            <Row>
              <Col md="9">
                <p>Premium Solutions</p>
                <h4 className="display-5">
                  Suluhi, Website Application Development Re-Imagined
                </h4>
                <p>
                  We build custom web apps using the right technology stacks
                  that align with your business objectives and help you achieve
                  maximum growth
                </p>
                <div className="pt-3">
                  <Button
                    variant="primary"
                    size="sm"
                    className="me-2 btnview text-uppercase"
                  >
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white text-dark border-white text-uppercase btnview"
                  >
                    View Portfolio
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default SulCarousel;
