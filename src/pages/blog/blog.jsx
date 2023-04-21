import BannerSection from "../../components/banner";

const Blog = () => {
  const bannerInfo = {
    name: "Blog",
    class: "blog",
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
    </div>
  );
};

export default Blog;
