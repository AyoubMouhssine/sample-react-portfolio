import "normalize.css";
import "./index.css";
import Header from "./views/Header";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import About from "./views/About";
import Work from "./views/Work";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
};

export default App;
