import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="sul-footer ">
      <Container>
        <div className="py-5">
          <Row className="py-5">
            <Col>
              <div className="pk">
                <h4 className="sul-semibold">Suluhi</h4>
                <p className="small">
                  Suluhi Technology exists to help business run effectively and
                  hence better sustainable endeavors
                </p>
              </div>
            </Col>
            <Col>
              <div className="pk">
                <h4 className="sul-semibold">Services</h4>
                <div className="small py-1">Cloud Computing</div>
                <div className="small py-1">Accounting</div>
                <div className="small py-1">Portfolio Websites</div>
                <div className="small py-1">E-commerce</div>
                <div className="small py-1">Pharmaceutical</div>
              </div>
            </Col>
            <Col>
              <div className="pk">
                <h4 className="sul-semibold">Community</h4>
                <div className="small py-1">Stack Overflow</div>
                <div className="small py-1">GitHub</div>
                <div className="small py-1">Slack</div>
                <div className="small py-1">Open Source</div>
              </div>
            </Col>
            <Col>
              <div className="pk">
                <h4 className="sul-semibold">Social</h4>
                <div className="small py-1">LinkedIn</div>
                <div className="small py-1">Twitter</div>
                <div className="small py-1">Facebook</div>
                <div className="small py-1">YouTube</div>
              </div>
            </Col>
            <Col>
              <div className="pk">
                <h4 className="sul-semibold">Company</h4>
                <div className="small py-1">About Us</div>
                <div className="small py-1">Contact</div>
                <div className="small py-1">Blog</div>
                <div className="small py-1">Partners</div>
                <div className="small py-1">Career</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        Copyright ©2022 All rights reserved | This template is made with by
        Colorlib
      </Container>
    </div>
  );
};

export default Footer;
