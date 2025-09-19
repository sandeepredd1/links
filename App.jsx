import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomeContent from "./components/Home";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import LoginForm from "./components/LoginForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

     { /* Mobile Menu */}
      {menuOpen && (
        <ul className="port">
           <li onClick={() => setMenuOpen(false)}><a href="#home">Home</a></li> 
          <li onClick={() => setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#gallery">Gallery</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#login">Login</a></li>
        </ul>
      )}

      
      <section id="portfolio" className="portfolio">
        <Portfolio />
      </section>

      <section id="gallery" className="gallery1">
        <Gallery />
      </section>

      <section id="login" className="login-form">
        <LoginForm />
      </section>


 <section id="about" className="about1">
        <About />
      </section>

 <section id="contact" className="contact-form">
        <Contact />
      </section>

       <section id="project" className="project-form">
        <Projects />
      </section>


      


      <footer className="bg-green-600 text-white p-4 text-center">
        &copy; 2025 My Website. All rights reserved.
      </footer>
    </div>
  );
}