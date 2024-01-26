import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutSection/About";
import Team from "./components/TeamSection/Team";
import Help from "./components/HelpSection/Help";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Team />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
