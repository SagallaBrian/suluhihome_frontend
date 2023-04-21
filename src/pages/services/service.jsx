import BannerSection from "../../components/banner";

const Service = () => {
  const bannerInfo = {
    name: "Service",
    class: "service",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default Service;
