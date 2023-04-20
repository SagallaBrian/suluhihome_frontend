import { Container } from "react-bootstrap";
import {
  MdOutlineBlurOn,
  MdMemory,
  MdOutlineLaptop,
  MdOutlineShoppingCart,
} from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const services = [
  {
    id: 1,
    icons: MdOutlineLaptop,
    headers: "Web application development",
    descrip: `  From idea to launch, we create web applications 
    that are tailored to your business needs. Let us give your business a digital presence`,
  },
  {
    id: 2,
    icons: MdMemory,
    headers: "Content management systems",
    descrip: `  Take control of your website content with our
     easy-to-use and flexible content management systems`,
  },
  {
    id: 3,
    icons: MdOutlineShoppingCart,
    headers: "E-commerce solutions",
    descrip: ` Simplify your online sales process and grow your 
    business with our secure and easy-to-use e-commerce solutions`,
  },
  {
    id: 4,
    icons: MdOutlineBlurOn,
    headers: "UX/ UI Design",
    descrip: ` Create engaging and intuitive web experiences that 
    keep your customers coming back for more 
    with our user experience (UX) design services`,
  },
];

const Bareas = () => {
  const renderedServices = services.map((service) => {
    const Icon = service.icons;
    return (
      <Col lg key={service.id}>
        <div className="p-3 bg-white mb-3">
          <Icon className="display-6 text-info" />
          <h5 className="roboto fw-normal">{service.headers}</h5>
          <p className="p_fonts text-secondary">{service.descrip}</p>
        </div>
      </Col>
    );
  });

  return (
    <div className="bg-light roboto">
      <Container fluid>
        <div className="px-4 py-5">
          <Row>
            <Col className="d-none d-xl-block"></Col>
            {renderedServices}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Bareas;
