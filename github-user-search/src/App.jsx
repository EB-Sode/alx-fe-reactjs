// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>🏠 Welcome to the Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About This App</h2>;
}

function Contact() {
  return <h2>📞 Contact Us</h2>;
}

function App() {
  return (
    <Router>

      <div style={{ padding: "20px" }}>
        
        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

