import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}

export default App;
