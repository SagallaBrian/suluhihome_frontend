import SulCarousel from "./components/acarousel";
import Bareas from "./components/bareas";
import Whoweare from "./components/cwha";
import Ourstaff from "./components/dstaff";
import PortfolioSection from "./components/eportfolio";
import Faq from "./components/faq";
import Testimonial from "./components/gtestimonial";
import "./homestyle.css";

const Home = () => {
  return (
    <div className="roboto">
      <SulCarousel />
      <Bareas />
      <Whoweare />
      <Ourstaff />
      <PortfolioSection />
      <Faq />
      <Testimonial />
    </div>
  );
};

export default Home;
