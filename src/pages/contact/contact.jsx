import BannerSection from "../../components/banner";
import ContactSectionA from "./components/contseca";
import ContactMap from "./components/maps";
import "./contactstyle.css";

const Contact = () => {
  const bannerInfo = {
    name: "Contact Us",
    class: "contact",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
      <ContactSectionA />
      <ContactMap />
    </div>
  );
};

export default Contact;
