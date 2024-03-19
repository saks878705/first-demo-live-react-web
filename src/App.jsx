import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from './Service';
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import Navbar from './Navbar'

const App =  () => {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="*" element={<Navigate to="/" replace />} /> {/* The replace prop ensures that the URL is replaced in the history stack, preventing the user from navigating back to the invalid URL using the browser's back button. */}
                </Routes>
            </Router>
        </>
    )
}

export default App;