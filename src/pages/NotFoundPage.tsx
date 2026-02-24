import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text mb-4">
              404
            </div>
            <div className="text-6xl mb-4">🔍</div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
            >
              Go to Homepage
            </Link>
            <Link
              to="/deals"
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-semibold text-lg shadow-md hover:bg-slate-50 hover:border-orange-500 transform hover:scale-105 transition-all duration-300"
            >
              Browse Deals
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Home</h3>
              <p className="text-sm text-slate-600">Return to our homepage</p>
            </Link>
            
            <Link
              to="/deals"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Deals</h3>
              <p className="text-sm text-slate-600">Check out hot deals</p>
            </Link>
            
            <Link
              to="/about"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">About Us</h3>
              <p className="text-sm text-slate-600">Learn more about us</p>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}