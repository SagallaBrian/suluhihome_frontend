import { Col, Container, Row } from "react-bootstrap";

const portfolios = [
  {
    id: 1,
    category: "CMS",
    productn: "Suluhi Accounting",
    imgbackg: "portfo1",
  },
  {
    id: 2,
    category: "CMS",
    productn: "Chicken Farm",
    imgbackg: "portfo2",
  },
  {
    id: 3,
    category: "E-commerce",
    productn: "Suluhi Market",
    imgbackg: "portfo3",
  },
  {
    id: 4,
    category: "UX Design",
    productn: "General Motors",
    imgbackg: "portfo4",
  },
  {
    id: 5,
    category: "UX Design",
    productn: "Pharmaceutical",
    imgbackg: "portfo5",
  },
  {
    id: 6,
    category: "",
    productn: "",
    imgbackg: "portfo6",
  },
];
const Portfolio = () => {
  const renderedportfolio = portfolios.map((onePort) => (
    <Col md={4} key={onePort.id}>
      <div className={`${onePort.imgbackg} mb-3`}>
        <div className="innerPort p-3">
          <div className="sul-theme-green">{onePort.category}</div>
          <h5 className="fw-normal py-0 my-0">{onePort.productn}</h5>
        </div>
      </div>
    </Col>
  ));
  return (
    <div>
      <Container fluid="lg">
        <div className="text-center porfConta">
          <div className="py-3 text-primary">Recent Portfolio</div>
          <h3 className="fw-normal">Our Exceptional Work</h3>
          <Row className="justify-content-md-center">
            <Col lg="10">
              <Row className="pt-4 text-white text-start">
                {renderedportfolio}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
