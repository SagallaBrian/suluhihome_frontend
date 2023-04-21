import "./comp.css";

const BannerSection = ({ bannerInfo }) => {
  return (
    <div className={bannerInfo.class}>
      <div>{bannerInfo.name}</div>
    </div>
  );
};

export default BannerSection;
