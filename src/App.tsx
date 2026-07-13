
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Brotherhood from './pages/Brotherhood';
import Events from './pages/Events';
import Philanthropy from './pages/Philanthropy';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import BackgroundImage from './Lambda/Background.jpg';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brotherhood" element={<Brotherhood />} />
            <Route path="/events" element={<Events />} />
            <Route path="/philanthropy" element={<Philanthropy />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;