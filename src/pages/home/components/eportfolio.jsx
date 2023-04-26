import { Col, Container, Row } from "react-bootstrap";

const portfolios = [
  {
    id: 1,
    category: "MIS",
    productn: "Accounting Software",
    imgbackg: "portfo1",
    links: "https://accounts-suluhi.onrender.com/",
  },
  {
    id: 2,
    category: "MIS",
    productn: "Poultry Management",
    imgbackg: "portfo3",
    links: "https://poultry-suluhi.onrender.com/",
  },
  {
    id: 3,
    category: "E-commerce",
    productn: "Suluhi Market",
    imgbackg: "portfo2",
    links: "https://commerce-suluhi.onrender.com/",
  },
  // {
  //   id: 4,
  //   category: "UX Design",
  //   productn: "General Motors",
  //   imgbackg: "portfo4",
  // },
  // {
  //   id: 5,
  //   category: "UX Design",
  //   productn: "Pharmaceutical",
  //   imgbackg: "portfo5",
  // },
  // {
  //   id: 6,
  //   category: "",
  //   productn: "",
  //   imgbackg: "portfo6",
  // },
];
const PortfolioSection = () => {
  const renderedportfolio = portfolios.map((onePort, ind) => (
    <Col md={4} key={ind}>
      <a
        href={onePort.links}
        target={"_blank"}
        rel="noreferrer"
        className="text-light"
      >
        <div className={`${onePort.imgbackg} mb-3`}>
          <div className="innerPort p-3">
            <div className="sul-theme-green">{onePort.category}</div>
            <h5 className="fw-normal py-0 my-0">{onePort.productn}</h5>
          </div>
        </div>
      </a>
    </Col>
  ));
  return (
    <div>
      <Container fluid="lg">
        <div className="text-center porfConta">
          <h2 className="sul-h3 sul-theme-blue">Recent Portfolio</h2>
          <h3 className="sul-h2 sul-black">Our Exceptional Work</h3>
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

export default PortfolioSection;
