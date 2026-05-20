import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tema, setTema] = useLocalStorage('tema', 'dark');
  const toggleTema = () => setTema(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="pf-root">
      <Navbar tema={tema} toggleTema={toggleTema} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
