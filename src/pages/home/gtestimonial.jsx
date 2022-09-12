import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdGrade } from "react-icons/md";

import csa from "../../assets/cs1.webp";

const Testimonial = () => {
  return (
    <div className="testimo-split">
      <Container fluid>
        <div className="py-5">
          <div className="py-3">
            <Row>
              <Col></Col>
              <Col>
                <div className="text-white">
                  <div className="small">Testimonials</div>
                  <h4 className="sul-semibold">What the Clients Say </h4>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </div>

          <Row>
            <Col></Col>
            <Col>
              <div className="p-3 py-4 bg-white rounded shadow">
                <div className="sul-theme-green">
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                </div>
                <div className="text-secondary small py-3">
                  One of the main reasons we switched to Suluhi is how easy it
                  is to use, and even if you get stuck, their customer care team
                  will get you back on track in minutes
                </div>

                <div className="d-flex align-items-center py-2">
                  <div className="pe-2">
                    <img src={csa} alt="" className="customer-image" />
                  </div>
                  <div className="small lh-sm ">
                    <div className="sul-theme-blue">Pradnya Dexlab</div>
                    <div className="sul-theme-green">Managing Director</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="p-3 py-4 bg-white rounded shadow">
                <div className="sul-theme-green">
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                </div>
                <div className="text-secondary small py-3">
                  One of the main reasons we switched to Suluhi is how easy it
                  is to use, and even if you get stuck, their customer care team
                  will get you back on track in minutes
                </div>

                <div className="d-flex align-items-center py-2">
                  <div className="pe-2">
                    <img src={csa} alt="" className="customer-image" />
                  </div>
                  <div className="small lh-sm ">
                    <div className="sul-theme-blue">Pradnya Dexlab</div>
                    <div className="sul-theme-green">Managing Director</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="p-3 py-4 bg-white rounded shadow">
                <div className="sul-theme-green">
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                </div>
                <div className="text-secondary small py-3">
                  One of the main reasons we switched to Suluhi is how easy it
                  is to use, and even if you get stuck, their customer care team
                  will get you back on track in minutes
                </div>

                <div className="d-flex align-items-center py-2">
                  <div className="pe-2">
                    <img src={csa} alt="" className="customer-image" />
                  </div>
                  <div className="small lh-sm ">
                    <div className="sul-theme-blue">Pradnya Dexlab</div>
                    <div className="sul-theme-green">Managing Director</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="p-3 py-4 bg-white rounded shadow">
                <div className="sul-theme-green">
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                  <MdGrade />
                </div>
                <div className="text-secondary small py-3">
                  One of the main reasons we switched to Suluhi is how easy it
                  is to use, and even if you get stuck, their customer care team
                  will get you back on track in minutes
                </div>

                <div className="d-flex align-items-center py-2">
                  <div className="pe-2">
                    <img src={csa} alt="" className="customer-image" />
                  </div>
                  <div className="small lh-sm ">
                    <div className="sul-theme-blue">Pradnya Dexlab</div>
                    <div className="sul-theme-green">Managing Director</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="py-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
