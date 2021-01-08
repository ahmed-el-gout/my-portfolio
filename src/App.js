import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Capabilities from './components/Capabilities';
import Clientsays from './components/Clientsays';
import Contact from './components/Contact';
import Footer from './components/Footer';


// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Newroute from './components/Newroute';



function App() {
  return (
    <div className="app" >
      <Home />
      <About />
      <Portfolio />
      <Capabilities />
      <Clientsays />
      <Contact />
      <Footer  />
      {/* <BrowserRouter>
      <Route path="/newRoute" component={Newroute}/>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
