import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Services Overview', href: '/services' },
        { name: 'Logistics', href: '/services/logistics' },
        { name: 'Bulk Liquid', href: '/services/bulk-liquid' },
        { name: 'FlexiTank', href: '/services/bulk-liquid/flexi-tank' },
        { name: 'ISO Tanks', href: '/services/bulk-liquid/iso-tanks' },
        { name: 'Agency', href: '/services/agency' },
      ]
    },
    { name: 'Life at Sisam', href: '/life-at-sisam' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-lg bg-surfaceGlass border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-heading font-bold text-accent">
              SISAM
            </div>
            <div className="text-sm text-textMuted font-heading">GROUP</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-text hover:text-accent transition-colors duration-200"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-surfaceGlass backdrop-blur-lg border border-border rounded-lg shadow-xl py-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-text hover:text-accent hover:bg-surfaceGlass transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-text hover:text-accent transition-colors duration-200 ${
                      location.pathname === link.href ? 'text-accent' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-accent to-primaryLight px-6 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text hover:text-accent transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-surfaceGlass backdrop-blur-lg border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="block px-3 py-2 text-text hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.slice(1).map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-3 py-2 text-sm text-textMuted hover:text-accent transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;