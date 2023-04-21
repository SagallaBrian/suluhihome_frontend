import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const footerItems = [
  {
    id: 1,
    headings: "Services",
    links: [
      { name: "Web Apps", link: "" },
      { name: "CMS", link: "" },
      { name: "UX & UI Design", link: "" },
      { name: "E-commerce", link: "" },
    ],
  },
  {
    id: 3,
    headings: "Get In Touch",
    links: [
      { name: "Contact Us", link: "" },
      { name: "Blog", link: "" },
      { name: "Careers", link: "" },
      { name: "FAQs", link: "" },
    ],
  },
  {
    id: 2,
    headings: "Social media",
    links: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/brian-sagalla-7a8764117/",
      },
      { name: "Twitter", link: "" },
      { name: "YouTube", link: "" },
    ],
  },
  {
    id: 4,
    headings: "Community",
    links: [
      { name: "Slack", link: "" },
      { name: "GitHub", link: "" },
      { name: "Zoom", link: "" },
      { name: "Teams", link: "" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const renderedItems = footerItems.map((item) => (
    <Col md key={item.id}>
      <div className="pk mb-3">
        <h5 className="sul-semibold">{item.headings}</h5>
        {item.links.map((link) => (
          <div className="p_fonts py-1">{link.name}</div>
        ))}
      </div>
    </Col>
  ));
  return (
    <div className="sul-footer ">
      <Container fluid="lg">
        <div className="pt-5 pb-2">
          <Row className="py-2">
            <Col md>
              <div className="pk">
                <h4 className="sul-semibold">Suluhi</h4>
                <p className="small">
                  Suluhi Technology exists to help business run effectively and
                  hence better sustainable endeavors
                </p>
              </div>
            </Col>
            {renderedItems}
          </Row>
        </div>
      </Container>
      <div className="sul-copyright">
        <Container fluid="lg">
          <div className="py-4">
            Copyright ©{currentYear} All rights reserved.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
