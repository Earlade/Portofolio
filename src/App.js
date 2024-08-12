import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout.js';
import Introduction from './Introduction.js';
import About from './About.js';
import Projects from './Projects.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Introduction />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
