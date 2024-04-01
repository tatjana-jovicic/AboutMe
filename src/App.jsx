import "./App.css";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Works from "./features/Works/Works";
import Contact from "./features/Contact/Contact";
import Navigation from "./features/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
