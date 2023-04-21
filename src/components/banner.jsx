import { Container } from "react-bootstrap";
import "./comp.css";

const BannerSection = ({ bannerInfo }) => {
  return (
    <div className={bannerInfo.class}>
      <Container fluid="lg">
        <div className="banner-cont">
          <div className="banner">{bannerInfo.name}</div>
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
