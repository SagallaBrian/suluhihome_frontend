import { Container } from "react-bootstrap";
import {
  MdOutlineBlurOn,
  MdMemory,
  MdOutlineLaptop,
  MdOutlineShoppingCart,
} from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const sulservice = [
  {
    id: 1,
    icons: "MdOutlineBlurOn",
    headers: "Web application development",
    descrip: `  From idea to launch, we create web applications 
    that are tailored to your business needs. Let us give your business a digital presence`,
  },
  {
    id: 2,
    headers: "Content management systems",
    descrip: `  Take control of your website content with our
     easy-to-use and flexible content management systems`,
  },
  {
    id: 3,
    headers: "E-commerce solutions",
    descrip: ` Simplify your online sales process and grow your 
    business with our secure and easy-to-use e-commerce solutions`,
  },
  {
    id: 4,
    headers: "UX/ UI Design",
    descrip: ` Create engaging and intuitive web experiences that 
    keep your customers coming back for more 
    with our user experience (UX) design services`,
  },
];

const Bareas = () => {
  const myservices = sulservice.map((oneItem) => (
    <Col lg key={oneItem.id}>
      <div className="p-3 bg-white mb-3">
        {oneItem.id === 1 && (
          <MdOutlineLaptop className="display-6 text-info" />
        )}
        {oneItem.id === 2 && <MdMemory className="display-6 text-info" />}
        {oneItem.id === 3 && (
          <MdOutlineShoppingCart className="display-6 text-info" />
        )}
        {oneItem.id === 4 && (
          <MdOutlineBlurOn className="display-6 text-info" />
        )}
        <h5 className="roboto fw-normal">{oneItem.headers}</h5>
        <p className="p_fonts text-secondary">{oneItem.descrip}</p>
      </div>
    </Col>
  ));

  return (
    <div className="bg-light roboto">
      <Container fluid>
        <div className="px-4 py-5">
          <Row>
            <Col className="d-none d-xl-block"></Col>
            {myservices}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Bareas;
