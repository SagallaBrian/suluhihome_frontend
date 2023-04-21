import Footer from "../../components/footer";
import SulCarousel from "./components/acarousel";
import Bareas from "./components/bareas";
import Whoweare from "./components/cwha";
import Ourstaff from "./components/dstaff";
import Portfolio from "./components/eportfolio";
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
      <Portfolio />
      <Faq />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
