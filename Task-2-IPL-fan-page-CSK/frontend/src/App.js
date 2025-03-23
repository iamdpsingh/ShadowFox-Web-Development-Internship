import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PlayerCollection from "./components/PlayerCollection";
import PlayerProfile from "./components/PlayerProfile";
import SchedulePage from "./pages/SchedulePage";

function App() {
    return (
        <Router>
            {/* ✅ Added padding to push content below the fixed navbar */}
            <div className="bg-csk-blue min-h-screen pt-[5rem]">
                <Navbar />
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                
                </br>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/players" element={<PlayerCollection />} />
                    <Route path="/players/:playerName" element={<PlayerProfile />} />
                    <Route path="/schedule" element={<SchedulePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
