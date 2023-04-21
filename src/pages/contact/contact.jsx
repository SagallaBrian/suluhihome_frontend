import BannerSection from "../../components/banner";

const Contact = () => {
  const bannerInfo = {
    name: "Contact Us",
    class: "contact",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default Contact;
