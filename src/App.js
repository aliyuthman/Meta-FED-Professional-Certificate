import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
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
