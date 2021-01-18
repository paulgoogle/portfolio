import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
