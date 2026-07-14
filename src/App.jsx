import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

import CodingArtical from "./pages/homepagecard/Coding";
import Apps from "./pages/homepagecard/Apps";
import AITools from "./pages/homepagecard/AITools";
import Aistudio from "./pages/aitoolscard/Aistudio";
import CodingDay1 from "./pages/codingcard/codingday1";

import About from "./pages/navbarpage/About";
import Contact from "./pages/navbarpage/Contact";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/CodingArtical" element={<CodingArtical />} />
        <Route path="/codingday1" element={<CodingDay1 />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/aistudio" element={<Aistudio/>} />
        <Route path="/aitools" element={<AITools/>} />
             <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;