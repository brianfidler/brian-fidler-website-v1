'use client';

import { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ReactNode) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-normal text-black hover:text-gray-600 transition-colors">
                Brian Fidler
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="/" className="text-black hover:text-gray-600 transition-colors font-normal text-sm tracking-wide uppercase">Work</a>
              <a href="/about" className="text-black hover:text-gray-600 transition-colors font-normal text-sm tracking-wide uppercase">About</a>
              <a href="/services" className="text-black hover:text-gray-600 transition-colors font-normal text-sm tracking-wide uppercase">Services</a>
              <a href="/contact" className="text-black hover:text-gray-600 transition-colors font-normal text-sm tracking-wide uppercase">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-6">
              <div className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className="text-black hover:text-gray-600 transition-colors font-normal py-2 text-sm tracking-wide uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="/about" 
                  className="text-black hover:text-gray-600 transition-colors font-normal py-2 text-sm tracking-wide uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/services" 
                  className="text-black hover:text-gray-600 transition-colors font-normal py-2 text-sm tracking-wide uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="/contact" 
                  className="text-black hover:text-gray-600 transition-colors font-normal py-2 text-sm tracking-wide uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Brian Fidler</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Transform your digital presence with expert marketing strategies and custom web development. 
                No corporate jargon, just real results.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold text-black mb-3 tracking-wide">Services</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="/services" className="hover:text-black transition-colors">Marketing Strategy</a></li>
                <li><a href="/services" className="hover:text-black transition-colors">Web Development</a></li>
                <li><a href="/services" className="hover:text-black transition-colors">Lead Generation</a></li>
                <li><a href="/services" className="hover:text-black transition-colors">Content Strategy</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-bold text-black mb-3 tracking-wide">Connect</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="/contact" className="hover:text-black transition-colors">Contact</a></li>
                <li><a href="/contact" className="hover:text-black transition-colors">Book Consultation</a></li>
                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-600">&copy; 2024 Brian Fidler. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
