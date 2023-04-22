import "./aboutstyle.css";

import BannerSection from "../../components/banner";
import TwoColumns from "../../components/twocolumns";
import Ourstaff from "../home/components/dstaff";
import Testimonial from "../home/components/gtestimonial";
import ParallaxComp from "../../components/parallax";

const About = () => {
  const bannerInfo = {
    name: "About Us",
    class: "about",
  };

  const AboutCompany = {
    topics: "About Suluhi Technology",
    imgsrc: "img3.jpg",
    bgcolor: "#ffffff",
    imgorder: 3,
    paragr: [
      {
        styles: "",
        class: "",
        text: `At Suluhi Technology, we are passionate about creating
        innovative and effective web solutions for businesses of all
        sizes. Founded in 2015, our team of experienced developers,
        designers, and project managers is dedicated to delivering
        high-quality web applications that help our clients achieve
        their goals.`,
      },
    ],
  };

  const MissionCompany = {
    topics: "Our Mission",
    imgsrc: "imgj.jpg",
    bgcolor: "#f7f7f7",
    imgorder: 1,
    paragr: [
      {
        styles: "",
        class: "",
        text: `Our mission is to provide premium website solutions 
        that streamline our clients' workflows, increase their 
        productivity, and enhance their online presence. We strive 
        to be an industry leader in web application development, 
        and to provide unparalleled customer service and support to 
        our clients..`,
      },
    ],
  };

  return (
    <div className="roboto">
      <BannerSection bannerInfo={bannerInfo} />
      <TwoColumns sectionInfo={AboutCompany} />
      <TwoColumns sectionInfo={MissionCompany} />
      <Ourstaff />
      <ParallaxComp />
      <Testimonial />
    </div>
  );
};

export default About;
