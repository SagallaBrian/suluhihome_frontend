import { Container } from "react-bootstrap";
import {
  MdOutlineBlurOn,
  MdMemory,
  MdOutlineLaptop,
  MdOutlineShoppingCart,
  MdOutlineMiscellaneousServices,
  MdOutlineSystemUpdate,
  MdOutlineQueryStats,
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
  {
    id: 6,
    icons: MdOutlineMiscellaneousServices,
    headers: "Website maintenance and support",
    descrip: `Keep your website running smoothly with our 
    reliable and proactive website maintenance and support services`,
  },
  {
    id: 7,
    icons: MdOutlineQueryStats,
    headers: "Search engine optimization (SEO)",
    descrip: ` Get found online with our expert SEO services 
    that boost your website's visibility and search engine rankings`,
  },
  {
    id: 8,
    icons: MdOutlineSystemUpdate,
    headers: "Progressive Web app development",
    descrip: ` Put your business in the palm of your customers' 
    hands with our custom Progressive Web app development`,
  },
];

const ServiceSecA = () => {
  const renderedServices = services.map((service) => {
    const Icon = service.icons;
    return (
      <Col lg="3" key={service.id}>
        <div className="p-3 bg-white mb-3 shadow-sm">
          <Icon className="display-5 text-info" />
          <h2 className="sul-h3">{service.headers}</h2>
          <p className="sul-small text-secondary">{service.descrip}</p>
        </div>
      </Col>
    );
  });

  return (
    <div className="bg-light">
      <Container fluid="lg">
        <div className="py-5">
          <div className="text-center py-3">
            <h2 className="sul-h3 sul-theme-blue">Suluhi Services</h2>
            <h1 className="sul-h2 sul-black">
              Customized Solution for Your Business
            </h1>
          </div>
          <Row>{renderedServices}</Row>
        </div>
      </Container>
    </div>
  );
};

export default ServiceSecA;
