import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdOutlineFlare } from "react-icons/md";

const Whoweare = () => {
  const myfonts = {
    fontSize: "0.8rem",
    fontWeight: "400",
  };

  return (
    <div className="roboto py-5">
      <Container>
        <Row>
          <Col>
            <div className="whoweareleft">
              <div className="mydiva shadow"></div>
              <div className="mydivb shadow"></div>
              <div className="bg-info text-white text-uppercase text-center p-2 yearsdiv shadow">
                <div>
                  <MdOutlineFlare className="display-4" />
                </div>
                <div className="display-4">5</div>
                <div style={myfonts}>
                  years of <br /> Experience
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="whoweareright roboto">
              <h5 className="fw-normal text-primary">Welcome to Suluhi</h5>
              <h2 className="py-4">
                We are A Web Application Development Company
              </h2>
              <p className="p_fonts text-secondary">
                Suluhi Technology is an ERP solution provider to the customer
                offering proprietary enterprise softwares based on
                subscriptions. These are business management information
                softwares focusing on small and medium scale enterprises. The
                objective of the company is to automate key functions like
                accounting, human resource, sales, and operations performed by
                the business. Therefore, allow them to focus on the most
                essential aspects of their business.
              </p>
              <div className="row py-2">
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
              </div>

              <Button
                size="sm"
                className="p-2 text-uppercase fw-bold getintouch"
              >
                Get in touch with us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Whoweare;
