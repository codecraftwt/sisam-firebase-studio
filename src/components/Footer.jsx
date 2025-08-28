import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-surfaceGlass backdrop-blur-lg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-heading font-bold text-accent">SISAM</div>
              <div className="text-sm text-textMuted font-heading">GROUP</div>
            </div>
            <p className="text-textMuted text-sm">
              Delivering excellence in logistics, bulk liquid transportation, and agency services worldwide since 1985.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-surfaceGlass rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200 cursor-pointer">
                <span className="text-xs">LI</span>
              </div>
              <div className="w-8 h-8 bg-surfaceGlass rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200 cursor-pointer">
                <span className="text-xs">TW</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about-us' },
                { name: 'Services', href: '/services' },
                { name: 'Life at Sisam', href: '/life-at-sisam' },
                { name: 'Contact Us', href: '/contact-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-textMuted hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Logistics', href: '/services/logistics' },
                { name: 'Bulk Liquid', href: '/services/bulk-liquid' },
                { name: 'FlexiTank', href: '/services/bulk-liquid/flexi-tank' },
                { name: 'ISO Tanks', href: '/services/bulk-liquid/iso-tanks' },
                { name: 'Agency', href: '/services/agency' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-textMuted hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-accent mt-0.5" />
                <div className="text-textMuted text-sm">
                  123 Business Center<br />
                  Mumbai, India 400001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-accent" />
                <div className="text-textMuted text-sm">+91 22 1234 5678</div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-accent" />
                <div className="text-textMuted text-sm">info@sisamgroup.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-textMuted text-sm">
              © {currentYear} Sisam Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-textMuted hover:text-accent text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-textMuted hover:text-accent text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;