import { Button, Col, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaSkype, FaSlack } from "react-icons/fa";

const staff = [
  {
    id: 1,
    name: "Brian Sagalla",
    posi: "Full Stack Developer",
    pict: "",
    github: "",
    linked: "",
    slack: "",
    skype: "",
    divs: "staffa",
  },
  {
    id: 2,
    name: "Ruth Nyatho",
    posi: "Frontend Developer",
    pict: "",
    github: "",
    linked: "",
    slack: "",
    skype: "",
    divs: "staffb",
  },
  {
    id: 3,
    name: "Henry Barasa",
    posi: "Backend Developer",
    pict: "",
    github: "",
    linked: "",
    slack: "",
    skype: "",
    divs: "staffc",
  },
];

const Ourstaff = () => {
  const mystaff = staff.map((oneStaff) => (
    <Col lg key={oneStaff.id}>
      <div className="singStaffdiv text-center mb-3">
        <div className={oneStaff.divs}></div>
        <div className="p-4">
          <div>{oneStaff.name}</div>
          <div className="pb-3">{oneStaff.posi}</div>
          <div>
            <Button size="sm" className="me-2 fw-bold getintouch">
              <FaGithub />
            </Button>
            <Button size="sm" className="ms-1 me-2 fw-bold getintouch">
              <FaSkype />
            </Button>
            <Button size="sm" className="mx-1 fw-bold getintouch">
              <FaSlack />
            </Button>
            <Button size="sm" className="ms-2 fw-bold getintouch">
              <FaLinkedin />
            </Button>
          </div>
        </div>
      </div>
    </Col>
  ));
  return (
    <div className="ourstaff">
      <Container>
        <div className="padStaff">
          <Row>
            <Col md>
              <div className="stafftitle">
                <div className="staftinner">
                  <div>Team & Staff</div>
                  <h4>Our Team </h4>
                  <p className="p_fonts">
                    At Suluhi Technology, we have a team of talented and
                    experienced professionals who are passionate about web
                    development and helping businesses succeed online.
                  </p>
                  <Button
                    size="sm"
                    className="p-2 text-uppercase fw-bold getintouch"
                  >
                    View All Staff
                  </Button>
                </div>
              </div>
            </Col>
            {mystaff}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Ourstaff;
