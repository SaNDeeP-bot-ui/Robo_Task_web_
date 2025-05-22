import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import SummerProjects from './components/SummerProjects';
import PositionDetails from './components/PositionDetails';
import ApplySection from './components/ApplySection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          
          const hash = this.getAttribute('href');
          if (hash && history.pushState) {
            history.pushState(null, '', hash);
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />
      <main>
        <Introduction />
        <SummerProjects />
        <PositionDetails />
        <ApplySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;