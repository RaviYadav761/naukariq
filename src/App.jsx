import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

import CodingArtical from "./pages/homepagecard/Coding";
import Apps from "./pages/homepagecard/Apps";
import AITools from "./pages/homepagecard/AITools";
import Aistudio from "./pages/aitoolscard/Aistudio";
import HistoryOfAI from "./pages/aitoolscard/historyofai/historyofai";
import CodingDay1 from "./pages/codingcard/codingday1";
import About from "./pages/navbarpage/About";
import Contact from "./pages/navbarpage/Contact";
import Aioverview from "./pages/codingcard/Aioverview";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/coding" element={<CodingArtical />} />
          <Route path="/coding-articles" element={<CodingArtical />} />
          <Route path="/CodingArtical" element={<CodingArtical />} />
          <Route path="/codingday1" element={<CodingDay1 />} />
          <Route path="/aioverview" element={<Aioverview/>} />

          <Route path="/apps" element={<Apps />} />
          <Route path="/aistudio" element={<Aistudio />} />
          <Route path="/aitools" element={<AITools />} />
          <Route path="/historyofai" element={<HistoryOfAI />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<HeroSection />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;