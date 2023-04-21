import BannerSection from "../../components/banner";

const Contact = () => {
  const bannerInfo = {
    name: "Contact Us is Under Maintenance. We will update Soon!! ",
    class: "contact",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default Contact;
