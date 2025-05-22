import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu, mobileMenuOpen }) => {
  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Robotics Club</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#intro" className="hover:text-blue-200 transition-colors">Introduction</a>
          <a href="#projects" className="hover:text-blue-200 transition-colors">Summer Projects</a>
          <a href="#position" className="hover:text-blue-200 transition-colors">Position Details</a>
          <a href="#apply" className="hover:text-blue-200 transition-colors">Apply Now</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-blue-800 px-4 py-4 flex flex-col space-y-4 animate-fadeIn">
          <a href="#intro" className="hover:text-blue-200 transition-colors" onClick={toggleMobileMenu}>Introduction</a>
          <a href="#projects" className="hover:text-blue-200 transition-colors" onClick={toggleMobileMenu}>Summer Projects</a>
          <a href="#position" className="hover:text-blue-200 transition-colors" onClick={toggleMobileMenu}>Position Details</a>
          <a href="#apply" className="hover:text-blue-200 transition-colors" onClick={toggleMobileMenu}>Apply Now</a>
        </nav>
      )}
    </header>
  );
};

export default Header;