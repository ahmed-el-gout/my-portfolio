import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Capabilities from './components/Capabilities';
import Clientsays from './components/Clientsays';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
    </div>
  );
}

export default App;
