import Companies from "./Components/Companies/Companies";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero"
import Slider from "./Components/Slider/Slider";
import Value from "./Components/Value/Value";

function App() {
  return (
     <div className="App">
      <div className="Home">
        <div className="white-circle"></div>
        <Header/>
        <Hero />
      </div>
      <Companies/>
      <Slider/>
      <Value/>
      <Contact/>
     </div>
  );
}

export default App;
