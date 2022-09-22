import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hogan's React Portfolio</h1>
        <nav>

        </nav>
      </header>
      <main>
        <About />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
