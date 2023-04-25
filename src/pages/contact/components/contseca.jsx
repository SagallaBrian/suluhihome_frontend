import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import ContactForm from "./contactform";

const ContactSectionA = () => {
  return (
    <div className="roboto">
      <Container fluid="lg">
        <div className="py-4">
          <Row>
            <Col lg="8">
              <ContactForm />
            </Col>
            <Col lg="4">
              <div className="querydiv p-3 mt-2 mt-lg-5">
                <div className="sul-h3">
                  Thank you for your interest in Suluhi.
                </div>
                <div className="sul-small">
                  If you have any questions or feedback, please feel free to
                  reach out to us using the information below
                </div>

                <div>
                  <div className="d-flex my-4">
                    <div className="inner-info">
                      <MdOutlinePhone />
                    </div>
                    <div className="flex-grow-1">
                      <div>Phone Number</div>
                      <div>+254705161125 </div>
                    </div>
                  </div>

                  <div className="d-flex my-4 py-4">
                    <div className="inner-info">
                      <MdOutlineEmail />
                    </div>
                    <div className="flex-grow-1">
                      <div>Email Address</div>
                      <div>briansagalla@gmail.com</div>
                    </div>
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

export default ContactSectionA;
