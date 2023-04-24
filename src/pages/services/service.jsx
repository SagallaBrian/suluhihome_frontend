import BannerSection from "../../components/banner";
import ServiceSecA from "./component/serva";

const Service = () => {
  const bannerInfo = {
    name: "Services",
    class: "service",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
      <ServiceSecA />
    </div>
  );
};

export default Service;
