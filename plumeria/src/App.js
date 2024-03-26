
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home'
import Locations from './Locations'
import Menu from './Menu'
import Order from './Order'
import About from './About'
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Locations" element={<Locations />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Order" element={<Order />} />
        <Route path="About" element={<About />} />

      </Routes>
    </Router>


  );
}

export default App;
