import { Col, Container, Row } from "react-bootstrap";

const TwoColumns = ({ sectionInfo }) => {
  const bgstyle = {
    backgroundImage: `url(${require("../assets/" + sectionInfo.imgsrc)})`,
  };
  const bgcolor = {
    backgroundColor: sectionInfo.bgcolor,
  };
  return (
    <div className="roboto" style={bgcolor}>
      <Container fluid="lg">
        <div className="py-4">
          <Row>
            <Col lg={{ order: sectionInfo.imgorder, span: 6 }}>
              <div className="divimg pb-4 pb-lg-3" style={bgstyle}></div>
            </Col>
            <Col lg={{ order: "2", span: 6 }}>
              <div className="pt-3 pt-lg-5 pb-4 pb-lg-3">
                <h1 className="sul-black sul-h2">{sectionInfo.topics}</h1>
                <div className="text-secondary sul-small">
                  {sectionInfo.paragr.map((item, ind) => (
                    <div key={ind}>{item.text}</div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default TwoColumns;
