import React from 'react';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Erro404 from "././Pages/Error/Erro404";

function App() {
    return (
        <ResumeState>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="*" element={<Erro404 />} />
                </Routes>
            </div>
        </ResumeState>
    );
}

export default App;
