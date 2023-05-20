import Companies from "./Components/Companies/Companies";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero"
import Slider from "./Components/Slider/Slider";

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
     </div>
  );
}

export default App;
