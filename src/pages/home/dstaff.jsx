import { Button, Col, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaSkype, FaSlack } from "react-icons/fa";

const Ourstaff = () => {
  return (
    <div className="ourstaff">
      <Container>
        <div className="padStaff">
          <Row>
            <Col md>
              <div className="stafftitle">
                <div className="staftinner">
                  <div>Team & Staff</div>
                  <h4>Our Team </h4>
                  <p className="p_fonts">
                    Suluhi has a great team of expert developers and designers
                    who work tirelessly in providing seamless products to the
                    customers. It has also an efficient customer service to
                    handle your querries when they arises
                  </p>
                  <Button
                    size="sm"
                    className="p-2 text-uppercase fw-bold getintouch"
                  >
                    View All Staff
                  </Button>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="singStaffdiv text-center">
                <div className="staffone"></div>
                <div className="p-4">
                  <div>Brian Sagalla</div>
                  <div className="pb-3">Website Developer</div>
                  <div>
                    <Button size="sm" className="me-2 fw-bold getintouch">
                      <FaGithub />
                    </Button>
                    <Button size="sm" className="ms-1 me-2 fw-bold getintouch">
                      <FaSkype />
                    </Button>
                    <Button size="sm" className="mx-1 fw-bold getintouch">
                      <FaSlack />
                    </Button>
                    <Button size="sm" className="ms-2 fw-bold getintouch">
                      <FaLinkedin />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="singStaffdiv text-center">
                <div className="staffone"></div>
                <div className="p-4">
                  <div>Brian Sagalla</div>
                  <div className="pb-3">Website Developer</div>
                  <div>
                    <Button size="sm" className="me-2 fw-bold getintouch">
                      <FaGithub />
                    </Button>
                    <Button size="sm" className="ms-1 me-2 fw-bold getintouch">
                      <FaSkype />
                    </Button>
                    <Button size="sm" className="mx-1 fw-bold getintouch">
                      <FaSlack />
                    </Button>
                    <Button size="sm" className="ms-2 fw-bold getintouch">
                      <FaLinkedin />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="singStaffdiv text-center">
                <div className="staffone"></div>
                <div className="p-4">
                  <div>Brian Sagalla</div>
                  <div className="pb-3">Website Developer</div>
                  <div>
                    <Button size="sm" className="me-2 fw-bold getintouch">
                      <FaGithub />
                    </Button>
                    <Button size="sm" className="ms-1 me-2 fw-bold getintouch">
                      <FaSkype />
                    </Button>
                    <Button size="sm" className="mx-1 fw-bold getintouch">
                      <FaSlack />
                    </Button>
                    <Button size="sm" className="ms-2 fw-bold getintouch">
                      <FaLinkedin />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Ourstaff;
