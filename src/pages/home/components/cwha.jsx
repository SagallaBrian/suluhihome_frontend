import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdOutlineFlare } from "react-icons/md";

const Whoweare = () => {
  const myfonts = {
    fontSize: "0.8rem",
    fontWeight: "400",
  };

  return (
    <div className="roboto py-5">
      <Container fluid="lg">
        <Row>
          <Col lg>
            <div className="whoweareleft">
              <div className="mydiva shadow"></div>
              <div className="mydivb shadow"></div>
              <div className="bg-info text-white text-uppercase text-center p-2 yearsdiv shadow">
                <div>
                  <MdOutlineFlare className="display-4" />
                </div>
                <div className="display-4">5</div>
                <div style={myfonts}>
                  years of <br /> Experience
                </div>
              </div>
            </div>
          </Col>
          <Col lg>
            <div className="whoweareright roboto">
              <h5 className="fw-normal text-primary">Welcome to Suluhi</h5>
              <h2 className="py-4">
                We are A Web Application Development Company
              </h2>
              <p className="p_fonts text-secondary">
                At Suluhi Technology, we are a team of passionate and talented
                web developers who are dedicated to helping businesses succeed
                online. We specialize in developing custom web solutions that
                are tailored to the unique needs of our clients, whether it's a
                simple website or a complex web application.
              </p>
              <p className="p_fonts text-secondary">
                If you're looking for a web development partner who can help
                your business succeed online, look no further than Suluhi
                Technology. Contact us today to learn more about our services
                and how we can help your business grow.
              </p>
              <div className="row py-2">
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
              </div>

              <Button
                size="sm"
                className="p-2 text-uppercase fw-bold getintouch"
              >
                Get in touch with us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Whoweare;
