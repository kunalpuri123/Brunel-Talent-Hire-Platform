// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} /> 
    <Route path="/projects" element={<ProjectsPage />} /> 
        </Routes>

    </BrowserRouter>

  );
}

export default App;
