import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Shield, Heart, Plus } from 'lucide-react';
import FloatingActions from './FloatingActions';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Quality Assurance', path: '/quality' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              {/* <div className="bg-gradient-to-br from-deep-blue to-emerald-green p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <Heart className="h-8 w-8 text-white" />
              </div> */}

              <div className="">
                <img 
                  src="/logo.jpeg" 
                  alt="Logo" 
                  className="h-14 w-14 object-contain" 
                />
              </div>

              <div>
                <div className="text-xl font-bold gradient-text">Care Life Sciences</div>
                
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-deep-blue border-b-2 border-emerald-green'
                      : 'text-gray-700 hover:text-emerald-green'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+919004664055" className="flex items-center space-x-2 text-deep-blue hover:text-emerald-green transition-colors duration-300 btn-3d px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-green-50">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+91 9004664055</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-emerald-green transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-deep-blue bg-gradient-to-r from-blue-50 to-green-50'
                      : 'text-gray-700 hover:text-emerald-green hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-deep-blue to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-green to-light-blue p-3 rounded-xl shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-xl font-bold text-white">Care Life Sciences</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner in pharmaceutical distribution, serving healthcare providers across Maharashtra since 2017.
              </p>
              <div className="flex items-center space-x-3 text-emerald-green">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Licensed & Certified Distributor</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-emerald-green">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-emerald-green transition-colors duration-300">About Us</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-emerald-green transition-colors duration-300">Products</Link></li>
                <li><Link to="/quality" className="text-gray-300 hover:text-emerald-green transition-colors duration-300">Quality</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-emerald-green transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-emerald-green">Contact Info</h3>
<div className="space-y-2 text-gray-300">
  <p className="text-sm">3, Sai Anandi Heights</p>
  <p className="text-sm">Thane, Mumbai</p>
  <p className="text-sm">Maharashtra - 421306</p>
  <p className="text-sm">Phone: +91 9004664055</p>
  <p className="text-sm">Email: info.carelifescience@gmail.com</p>
</div>

            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2024 Care Life Sciences. All Rights Reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="/privacy-policy" className="text-gray-300 hover:text-emerald-green text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/disclaimer" className="text-gray-300 hover:text-emerald-green text-sm transition-colors duration-300">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FloatingActions />
    </div>
  );
};

export default Layout;