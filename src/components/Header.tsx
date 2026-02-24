import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded p-2 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"/>
                <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/>
              </svg>
            </div>
            <span className="text-xl font-bold">Marketplace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-orange-400 transition-colors duration-200">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-orange-400 transition-colors duration-200">
              Products
            </Link>
            <Link to="/deals" className="text-sm font-medium hover:text-orange-400 transition-colors duration-200">
              Deals
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-orange-400 transition-colors duration-200">
              Categories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-orange-400 transition-colors duration-200">
              About
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 hover:bg-slate-800 rounded-full transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative p-2 hover:bg-slate-800 rounded-full transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-sm font-medium hover:text-orange-400 transition-colors duration-200 py-2">
              Home
            </Link>
            <Link to="/products" className="block text-sm font-medium hover:text-orange-400 transition-colors duration-200 py-2">
              Products
            </Link>
            <Link to="/deals" className="block text-sm font-medium hover:text-orange-400 transition-colors duration-200 py-2">
              Deals
            </Link>
            <Link to="/categories" className="block text-sm font-medium hover:text-orange-400 transition-colors duration-200 py-2">
              Categories
            </Link>
            <Link to="/about" className="block text-sm font-medium hover:text-orange-400 transition-colors duration-200 py-2">
              About
            </Link>
            <div className="pt-4 border-t border-slate-700 flex items-center space-x-3">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Sign In
              </button>
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="relative p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}