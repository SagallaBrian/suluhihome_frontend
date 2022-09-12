import SulCarousel from "./acarousel";
import Bareas from "./bareas";
import Whoweare from "./cwha";
import Ourstaff from "./dstaff";
import Portfolio from "./eportfolio";
import Faq from "./faq";
import Testimonial from "./gtestimonial";
import Footer from "./hfooter";
import "./homestyle.css";

const Home = () => {
  return (
    <div className="roboto">
      <SulCarousel />
      <Bareas />
      <Whoweare />
      <Ourstaff />
      <Portfolio />
      <Faq />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
