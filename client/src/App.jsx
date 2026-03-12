import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import CommercialCleaning from './pages/CommercialCleaning';
import ResidentialCleaning from './pages/ResidentialCleaning';
import DeepClean from './pages/DeepClean';
import AirbnbClean from './pages/AirbnbClean';
import AdminDashboard from './pages/AdminDashboard';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/services/commercial" element={<CommercialCleaning />} />
                        <Route path="/services/residential" element={<ResidentialCleaning />} />
                        <Route path="/services/deep-clean" element={<DeepClean />} />
                        <Route path="/services/airbnb" element={<AirbnbClean />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
