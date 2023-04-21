import BannerSection from "../../components/banner";

const Blog = () => {
  const bannerInfo = {
    name: "Blog is Under Maintenance. We will update Soon!!",
    class: "blog",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default Blog;
