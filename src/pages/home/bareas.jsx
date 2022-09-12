import { Container } from "react-bootstrap";
import {
  MdOutlineBlurOn,
  MdMemory,
  MdOutlineWbCloudy,
  MdOutlineAccountTree,
} from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bareas = () => {
  return (
    <div className="bg-light roboto">
      <Container fluid>
        <div className="px-4 py-5">
          <Row>
            <Col></Col>
            <Col>
              <div className="p-3 bg-white">
                <MdOutlineBlurOn className="display-4 text-info" />
                <h4 className="roboto fw-normal">UX/ UI Design</h4>
                <p className="p_fonts text-secondary">
                  We provide elegantly designed portfolio websites. This is
                  guaranteed by our team of expert developers and designers who
                  work tirelessly in providing seamless products to the
                  customers. Also, we partner with our clients to understand
                  their needs, provide valuable advice and customized products.
                </p>
              </div>
            </Col>
            <Col>
              <div className="p-3 bg-white">
                <MdOutlineAccountTree className="display-4 text-info" />
                <h4 className="roboto fw-normal">Development</h4>
                <p className="p_fonts text-secondary">
                  We have a well equiped development team that ensures that the
                  development process is efficient and fast while also meeting
                  the clients needs. We have adopted the latest technologies
                  thereby guaranteeing great user experiences on the websites
                  that earn them high traffic. This fosters increased revenues.
                </p>
              </div>
            </Col>
            <Col>
              <div className="p-3 bg-white">
                <MdOutlineWbCloudy className="display-4 text-info" />
                <h4 className="roboto fw-normal">Cloud Computing</h4>
                <p className="p_fonts text-secondary">
                  We ensure availability of time tested and scalable on-premise
                  cloud to our customers. Cloud hosted software service is
                  powered by Heroku Web Services. Doing this provides safety,
                  reliability and comfort to the customer by ensuring that they
                  have a dependable business partner providing critical data
                  protection services
                </p>
              </div>
            </Col>
            <Col>
              <div className="p-3 bg-white">
                <MdMemory className="display-4 text-info" />
                <h4 className="roboto fw-normal">MIS</h4>
                <p className="p_fonts text-secondary">
                  We provide customized management information systems. These
                  are goal oriented systems for small and medium enterprises
                  integrating beneficial and feasible services like inventory
                  management, cash flow analysis, billing, accounting, sales,
                  and HR solutions.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Bareas;
