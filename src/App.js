// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Navigate } from "react-router-dom";

import HeaderBlock from "./blocks/header";
import NotFound from "./blocks/notfound";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Service from "./pages/services/service";

function App() {
  return (
    <div>
      <HeaderBlock title={"Suluhi"} />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="service" element={<Service />} />
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
