import BannerSection from "../../components/banner";
import PortfolioSection from "../home/components/eportfolio";

const Portfolio = () => {
  const bannerInfo = {
    name: "Portfolio",
    class: "porfolio",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
      <PortfolioSection />
    </div>
  );
};

export default Portfolio;
