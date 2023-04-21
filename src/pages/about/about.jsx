import BannerSection from "../../components/banner";
import AboutSeca from "./components/absectiona";
import "./aboutstyle.css";

const About = () => {
  const bannerInfo = {
    name: "About Us",
    class: "about",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
      <AboutSeca />
    </div>
  );
};

export default About;
