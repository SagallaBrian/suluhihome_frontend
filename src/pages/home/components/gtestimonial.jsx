import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdGrade } from "react-icons/md";

import avatar from "../../assets/avatar.jpg";

const testimonies = [
  {
    id: 1,
    ratin: 4,
    name: "Pradnya Lane",
    company: "Aneka Labs",
    remarks: `Suluhi Technology helped us create a custom 
    web application that completely transformed the 
    way we do business. They were professional, 
    responsive, and delivered on time and on budget`,
  },
  {
    id: 2,
    ratin: 4,
    name: "Kevin Kamotho",
    company: "Kirubi Stores",
    remarks: `We worked with Suluhi to develop 
    our website, and we couldn't be happier with the results. 
    They listened to our needs and provided us with a solution that is 
    both user-friendly and visually stunning`,
  },
  {
    id: 3,
    ratin: 4,
    name: "Humphrey Ochieng",
    company: "Betika",
    remarks: `Suluhi Technology's website maintenance and support 
    services have been a lifesaver for our business. Their team is 
    always quick to respond and resolve any issues we encounter, 
    and their proactive approach to website management has 
    saved us time and money`,
  },
  {
    id: 4,
    ratin: 4,
    name: "Peter Korir",
    company: "Carens",
    remarks: `Suluhi Technology's website design and development 
    services completely exceeded our expectations. They took the 
    time to understand our brand and our target audience, and created a website 
    that perfectly represents our business`,
  },
];

const Testimonial = () => {
  const renderedtestimonies = testimonies.map((oneMonial) => (
    <Col lg key={oneMonial.id}>
      <div className="p-3 py-4 bg-white rounded shadow mb-3">
        <div className="sul-theme-green">
          {[...Array(oneMonial.ratin)].map((_, i) => (
            <MdGrade key={i} />
          ))}
        </div>
        <div className="text-secondary small py-3">{oneMonial.remarks}</div>

        <div className="d-flex align-items-center py-2">
          <div className="pe-2">
            <img src={avatar} alt="" className="customer-image" />
          </div>
          <div className="small lh-sm ">
            <div className="sul-theme-blue">{oneMonial.name}</div>
            <div className="sul-theme-green">{oneMonial.company}</div>
          </div>
        </div>
      </div>
    </Col>
  ));
  return (
    <div className="testimo-split">
      <Container fluid>
        <div className="py-5">
          <div className="py-3">
            <Row>
              <Col lg className="d-none d-xl-block"></Col>
              <Col lg>
                <div className="text-white">
                  <div className="small">Testimonials</div>
                  <h4 className="sul-semibold">What the Clients Say </h4>
                </div>
              </Col>
              <Col lg></Col>
              <Col lg></Col>
              <Col lg></Col>
            </Row>
          </div>

          <Row>
            <Col lg className="d-none d-xl-block"></Col>
            {renderedtestimonies}
          </Row>
          <div className="py-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
