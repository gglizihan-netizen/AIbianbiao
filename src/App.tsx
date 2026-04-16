import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTechnicalBid from './pages/CreateTechnicalBid';
import ConfirmRequirements from './pages/ConfirmRequirements';
import GenerateDirectory from './pages/GenerateDirectory';
import GenerateContent from './pages/GenerateContent';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-technical-bid" element={<CreateTechnicalBid />} />
        <Route path="/confirm-requirements" element={<ConfirmRequirements />} />
        <Route path="/generate-directory" element={<GenerateDirectory />} />
        <Route path="/generate-content" element={<GenerateContent />} />
      </Routes>
    </Router>
  );
}
