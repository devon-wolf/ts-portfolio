import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  COPYRIGHT,
  FOOTER_NAV,
  HEADER_NAV,
  NAME,
} from './constants/siteContent';
import Bio from './pages/Bio';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header headerTitle={NAME} headerNavLinks={HEADER_NAV} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer copyright={COPYRIGHT} footerNavLinks={FOOTER_NAV} />
      </BrowserRouter>
    </div>
  );
}

export default App;
