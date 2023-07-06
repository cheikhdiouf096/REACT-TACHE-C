import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../src/components/NavBar"
import { Banner } from "../src/components/Banner"
import { Products } from "../src/components/Products"
import { Pricing } from "../src/components/Pricing"
import { Contact } from "../src/components/Contact"
import { Footer } from "../src/components/Footer"









function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <Products />
      <Pricing />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;

