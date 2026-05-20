import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tema, setTema] = useLocalStorage('tema', 'light');
  const toggleTema = () => setTema(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={`min-vh-100 ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Navbar tema={tema} toggleTema={toggleTema} />
      <div className="container mt-4 pb-5">
        <Routes>
          <Route path="/" element={<HomePage tema={tema} />} />
          <Route path="/about" element={<AboutPage tema={tema} />} />
          <Route path="/projects" element={<ProjectsPage tema={tema} />} />
          <Route path="/contact" element={<ContactPage tema={tema} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
