import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Footer } from "./components/Footer";
// import  Navbar  from "./components/NavBar";
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;

 

