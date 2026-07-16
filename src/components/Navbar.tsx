import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Crescent from '../Lambda/crescent.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Brotherhood', path: '/brotherhood' },
    { name: 'Philanthropy', path: '/Philanthropy' },
    { name: 'Events', path: '/events' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img
                  src={Crescent}
                  alt="Crescent logo"
                  className={`h-8 w-8 transition-all duration-300 ${
                    scrolled ? '' : ''
                  }`}
                />
              </div>
              <div className="ml-3">
                <div className={`text-xl font-light transition-all duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Lambda Chi Alpha
                </div>
                <div className={`text-sm transition-all duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  Delta-Phi Chapter
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? scrolled
                        ? 'text-gray-900 border-b border-gray-900'
                        : 'text-white border-b border-white'
                      : scrolled
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-gray-200 hover:text-white'
                  } pb-1`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-900 hover:text-gray-600' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg border-b border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-base font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-gray-900 border-l-4 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;