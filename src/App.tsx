import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import DealsPage from './pages/DealsPage'
import AboutPage from './pages/AboutPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Discover Amazing Products
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Shop millions of items with fast, free delivery. Your one-stop marketplace for everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg shadow-2xl hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 hover:shadow-slate-900/50">
                Start Shopping
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg shadow-xl hover:bg-slate-50 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Shop With Us?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Experience the best online shopping with unbeatable benefits</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning Fast Delivery</h3>
            <p className="text-slate-600 leading-relaxed">Get your orders delivered in record time with our optimized logistics network</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Secure Shopping</h3>
            <p className="text-slate-600 leading-relaxed">Shop with confidence knowing your data and transactions are fully protected</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Best Price Guarantee</h3>
            <p className="text-slate-600 leading-relaxed">Enjoy competitive prices and exclusive deals you won't find anywhere else</p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <ProductShowcase />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">10M+</div>
              <div className="text-slate-300 text-lg">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">50M+</div>
              <div className="text-slate-300 text-lg">Products Listed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">150+</div>
              <div className="text-slate-300 text-lg">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-slate-300 text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Start Shopping?</h2>
          <p className="text-xl text-white/95 mb-8 drop-shadow">Join millions of satisfied customers and discover amazing deals today</p>
          <button className="px-10 py-5 bg-slate-900 text-white rounded-xl font-bold text-xl shadow-2xl hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 hover:shadow-slate-900/50">
            Create Free Account
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}