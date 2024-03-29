import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    divclass: "divcaroa",
    startparag: "Custom Applications",
    sulheading: "Custom Web Applications Built For Your Business",
    subheading: `At Suluhi Technology, we understand that every 
    business is unique, with its own set of needs and challenges. 
    That's why we specialize in creating custom web applications 
    that are tailor-made to streamline your workflow and improve your 
    business processes`,
    learnmore: "portfolio",
  },
  {
    id: 2,
    divclass: "divcarob",
    startparag: "Premium Solutions",
    sulheading: "Expert Web  Services For Your Business Needs",
    subheading: `At Suluhi Technology, we offer expert web development services that 
    are tailored to the unique needs of your business. 
    Our team of experienced developers has the skills and 
    expertise to create custom web solutions that can help your 
    business succeed in today's digital landscape`,
    learnmore: "portfolio",
  },
];

const SulCarousel = () => {
  const renderedBanner = banners.map((banner) => (
    <Carousel.Item key={banner.id}>
      <div className={banner.divclass}>
        <Container fluid="lg">
          <Row>
            <Col md="9">
              <p>{banner.startparag}</p>
              <h4 className="display-5">{banner.sulheading}</h4>
              <p>{banner.subheading}</p>
              <div className="pt-3">
                <Link to="/about">
                  <Button
                    variant="primary"
                    size="sm"
                    className="me-2 btnview text-uppercase"
                  >
                    Learn More
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    size="sm"
                    className="bg-white text-dark border-white text-uppercase btnview"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Carousel.Item>
  ));
  return (
    <Carousel fade className="text-white roboto" controls={false}>
      {renderedBanner}
    </Carousel>
  );
};

export default SulCarousel;
