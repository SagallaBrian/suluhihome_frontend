import BannerSection from "../../components/banner";

const Portfolio = () => {
  const bannerInfo = {
    name: "Portfolio is Under Maintenance. We will update Soon!!",
    class: "porfolio",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default Portfolio;
