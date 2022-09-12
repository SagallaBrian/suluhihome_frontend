import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import faqimg from "../../assets/img1.jpg";

const Faq = () => {
  return (
    <Container>
      <div className="py-5">
        <Row>
          <Col>
            <div className="py-2">
              <img src={faqimg} alt="No FAQ" className="img-fluid " />
            </div>
            <div className="py-2 px-1">
              <h4 className="mel-semibold text-primary">
                Why Choose us For Your Next Project ?
              </h4>
            </div>
            <div className="my-2 shadow  rounded p-3">
              <h5 className="sul-dark">App Development Re-Imagined</h5>
              <p className="small text-secondary">
                We provide elegantly designed portfolio websites. This is
                guaranteed by our team of expert developers and designers who
                work tirelessly in providing seamless products to the customers
              </p>
            </div>
          </Col>
          <Col>
            <div className="m">
              <div className="">
                <div className="text-primary small pt-5">Get Answers</div>
                <div className="py-3 sul-dark">
                  <h4>Frequently Ask Question</h4>
                </div>
                <div className="pt-3">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        What are the types of Applications Developed?
                      </Accordion.Header>
                      <Accordion.Body className="small text-secondary">
                        Suluhi Technology purely focuses on building fully
                        functional, robust, and scalable web applications. This
                        applications may range from Portfolio Websites,
                        E-Commerce Platforms, Mangament Information Systems,
                        Products Showcase and many others
                        <br />
                        We build custom web apps using the right technology
                        stacks that align with your business objectives and help
                        you achieve maximum growth.Our end goal is to build
                        quality web applications for you that maximize resource
                        utilization at a low cost.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How do I get Started?</Accordion.Header>
                      <Accordion.Body className="small text-secondary">
                        Suluhi Has various platforms that allow new users to be
                        able to reach out. These includes our vibrant social
                        media plaftorms, our 24/7 customer care contact ,
                        website forms etc.
                        <br />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        What are the types of Applications Developed?
                      </Accordion.Header>
                      <Accordion.Body className="small text-secondary">
                        Suluhi Technology purely focuses on building fully
                        functional, robust, and scalable web applications. This
                        applications may range from Portfolio Websites,
                        E-Commerce Platforms, Mangament Information Systems,
                        Products Showcase and many others
                        <br />
                        We build custom web apps using the right technology
                        stacks that align with your business objectives and help
                        you achieve maximum growth.Our end goal is to build
                        quality web applications for you that maximize resource
                        utilization at a low cost.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        What are the prerequisite to enrol?
                      </Accordion.Header>
                      <Accordion.Body className="small text-secondary">
                        Suluhi Technology purely focuses on building fully
                        functional, robust, and scalable web applications. This
                        applications may range from Portfolio Websites,
                        E-Commerce Platforms, Mangament Information Systems,
                        Products Showcase and many others
                        <br />
                        We build custom web apps using the right technology
                        stacks that align with your business objectives and help
                        you achieve maximum growth.Our end goal is to build
                        quality web applications for you that maximize resource
                        utilization at a low cost.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Faq;
