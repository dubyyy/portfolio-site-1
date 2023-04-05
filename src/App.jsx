import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Experties from "./components/Experties/Experties.jsx";
import Works from "./components/Works/Works.jsx";
import css from "./styles/App.module.scss"
const App = () => {
  //don't forget to add font link in index.html
  return  <div className={`bg-primary ${css.container}`}>
          <Header/>
          <Hero/>
          <Experties/>
          <Works/>
          
                  </div>
};

export default App;
