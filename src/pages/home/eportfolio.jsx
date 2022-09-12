import { Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div>
      <Container>
        <div className="text-center porfConta">
          <div className="py-3 text-primary">Recent Portfolio</div>
          <h3 className="fw-normal">Our Exceptional Work</h3>
          <Row className="pt-4 text-white text-start">
            <Col>
              <div className="portfo1">
                <div className="innerPort p-3">
                  <div className="text-warning">MIS</div>
                  <h5 className="fw-normal py-0 my-0">Accounting Software</h5>
                </div>
              </div>
            </Col>
            <Col>
              <div className="portfo2">
                <div className="innerPort p-3">
                  <div className="text-warning">Development</div>
                  <h5 className="fw-normal py-0 my-0">E-Commerce</h5>
                </div>
              </div>
            </Col>
            <Col>
              <div className="portfo3">
                <div className="innerPort p-3">
                  <div className="text-warning">Development</div>
                  <h5 className="fw-normal py-0 my-0">Product Showcase</h5>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="pt-4 text-white text-start">
            <Col>
              <div className="portfo4">
                <div className="innerPort p-3">
                  <div className="text-warning">Development</div>
                  <h5 className="fw-normal py-0 my-0">Automobile Showcase</h5>
                </div>
              </div>
            </Col>
            <Col>
              <div className="portfo6">
                <div className="innerPort p-3">
                  <div className="text-warning">MIS</div>
                  <h5 className="fw-normal py-0 my-0">Forex Software</h5>
                </div>
              </div>
            </Col>
            <Col>
              <div className="portfo5">
                <div className="innerPort p-3">
                  <div className="text-warning">MIS</div>
                  <h5 className="fw-normal py-0 my-0">
                    Pharmaceutical Software
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
