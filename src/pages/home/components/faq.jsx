import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import faqimg from "../../assets/img1.jpg";
const faqs = [
  {
    id: 1,
    question: "What services does Suluhi Technology offer?",
    answer: ` Suluhi Technology offers a range of web 
    development services, including custom web application 
    development, website design and development, e-commerce 
    development, content management system development,
     website maintenance and support, and more. 
     We work with clients across a variety of industries to 
    provide tailored solutions that meet their unique needs.`,
  },
  {
    id: 2,
    question: "How long does it take to develop a custom web application?",
    answer: ` The timeline for custom web application development 
    can vary depending on the complexity of the project and the 
    client's specific requirements. Our team will work with you to 
    develop a detailed project plan and timeline that takes into account your 
    business objectives, technical requirements, and budget`,
  },
  {
    id: 3,
    question: "Do you provide ongoing website maintenance and support?",
    answer: `Yes, we offer ongoing website maintenance and support 
    services to ensure that your website is always up-to-date and running 
    smoothly. Our team can handle everything from security updates and backups to 
    content updates and performance optimization.`,
  },
  {
    id: 4,
    question: "How do I get started with Suluhi Technology?",
    answer: `To get started with Suluhi Technology, simply 
    contact us through our website or by phone or email. We'll set up 
    an initial consultation to discuss your business needs and objectives, and to 
    provide you with a detailed proposal for our services.`,
  },
];
const Faq = () => {
  const renderedFaqs = faqs.map((oneFaq, ind) => (
    <Accordion.Item eventKey={`${ind}`} key={oneFaq.id}>
      <Accordion.Header>{oneFaq.question}</Accordion.Header>
      <Accordion.Body className="small text-secondary">
        {oneFaq.answer}
      </Accordion.Body>
    </Accordion.Item>
  ));
  return (
    <Container fluid="lg">
      <div className="py-5">
        <Row>
          <Col md>
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
          <Col md>
            <div className="m">
              <div className="">
                <div className="text-primary small pt-5">Get Answers</div>
                <div className="py-3 sul-dark">
                  <h4>Frequently Ask Question</h4>
                </div>
                <div className="pt-3">
                  <Accordion defaultActiveKey="0">{renderedFaqs}</Accordion>
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
