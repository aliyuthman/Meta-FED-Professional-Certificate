import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/highlight" element={<Highlights />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Hero />
        <Highlights />
        <Testimonial />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
