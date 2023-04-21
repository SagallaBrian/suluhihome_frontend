import BannerSection from "../../components/banner";

const Portfolio = () => {
  const bannerInfo = {
    name: "Porfolio",
    class: "porfolio",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default Portfolio;
