import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Hogan's React Portfolio</h1>
          <nav>
            <div><a href="/about">About</a></div>
            <div><a href="/contact">Contact</a></div>
            <div><a href="/portfolio">Portfiolio</a></div>
            <div><a href="/resume">Resume</a></div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
