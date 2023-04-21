import BannerSection from "../../components/banner";

const About = () => {
  const bannerInfo = {
    name: "About Us",
    class: "about",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default About;
