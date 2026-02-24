import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Deal {
  id: number
  name: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
  discount: number
  category: string
  endsAt: Date
  stock: number
  featured?: boolean
}

const deals: Deal[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    discount: 38,
    category: 'Electronics',
    endsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    stock: 23,
    featured: true
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 1523,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    discount: 33,
    category: 'Electronics',
    endsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    stock: 45,
    featured: true
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.3,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    discount: 38,
    category: 'Electronics',
    endsAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    stock: 12
  },
  {
    id: 4,
    name: 'Laptop Stand Ergonomic',
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    discount: 42,
    category: 'Office',
    endsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    stock: 67
  },
  {
    id: 5,
    name: 'USB-C Hub Multi-Port',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviews: 1654,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
    discount: 40,
    category: 'Electronics',
    endsAt: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    stock: 89
  },
  {
    id: 6,
    name: 'Mechanical Keyboard RGB',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 2103,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    discount: 40,
    category: 'Gaming',
    endsAt: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    stock: 34
  },
  {
    id: 7,
    name: 'Wireless Mouse Gaming',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
    discount: 33,
    category: 'Gaming',
    endsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    stock: 56
  },
  {
    id: 8,
    name: '4K Webcam HD',
    price: 69.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviews: 967,
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop',
    discount: 42,
    category: 'Electronics',
    endsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    stock: 28
  }
]

const categories = ['All', 'Electronics', 'Gaming', 'Office']

function CountdownTimer({ endsAt }: { endsAt: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endsAt.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [endsAt])

  return (
    <div className="flex gap-2 justify-center">
      <div className="bg-slate-900 text-white rounded px-2 py-1 min-w-[40px] text-center">
        <div className="text-lg font-bold">{timeLeft.days}</div>
        <div className="text-[10px] uppercase">Days</div>
      </div>
      <div className="bg-slate-900 text-white rounded px-2 py-1 min-w-[40px] text-center">
        <div className="text-lg font-bold">{timeLeft.hours}</div>
        <div className="text-[10px] uppercase">Hrs</div>
      </div>
      <div className="bg-slate-900 text-white rounded px-2 py-1 min-w-[40px] text-center">
        <div className="text-lg font-bold">{timeLeft.minutes}</div>
        <div className="text-[10px] uppercase">Min</div>
      </div>
      <div className="bg-slate-900 text-white rounded px-2 py-1 min-w-[40px] text-center">
        <div className="text-lg font-bold">{timeLeft.seconds}</div>
        <div className="text-[10px] uppercase">Sec</div>
      </div>
    </div>
  )
}

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState<'discount' | 'price' | 'ending'>('discount')

  const filteredDeals = deals
    .filter(deal => selectedCategory === 'All' || deal.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'discount') return b.discount - a.discount
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'ending') return a.endsAt.getTime() - b.endsAt.getTime()
      return 0
    })

  const featuredDeals = deals.filter(deal => deal.featured)

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-amber-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#half-fill)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white font-semibold">Limited Time Offers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Today's Hot Deals
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow">
              Save up to 70% on your favorite products. Deals end soon!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">⚡ Flash Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredDeals.map(deal => (
            <div key={deal.id} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-orange-200">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 h-48 bg-white rounded-xl overflow-hidden flex-shrink-0">
                    <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-slate-900">{deal.name}</h3>
                      <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">-{deal.discount}%</span>
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(deal.rating)}
                      <span className="text-sm text-slate-600 ml-1">({deal.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-4xl font-bold text-red-600">${deal.price.toFixed(2)}</span>
                      <span className="text-xl text-slate-500 line-through">${deal.originalPrice.toFixed(2)}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-slate-600">Only {deal.stock} left in stock</span>
                        <span className="text-slate-600">{Math.round((deal.stock / 100) * 100)}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${(deal.stock / 100) * 100}%` }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-slate-600 mb-2">Deal ends in:</p>
                      <CountdownTimer endsAt={deal.endsAt} />
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Grab This Deal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter and Sort */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'discount' | 'price' | 'ending')}
                className="px-4 py-2 border-2 border-slate-200 rounded-lg font-medium text-slate-700 bg-white hover:border-orange-500 focus:border-orange-500 focus:outline-none transition-colors duration-200"
              >
                <option value="discount">Highest Discount</option>
                <option value="price">Lowest Price</option>
                <option value="ending">Ending Soon</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Deals */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">All Deals ({filteredDeals.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeals.map(deal => (
            <div key={deal.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-3 right-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  -{deal.discount}%
                </div>
                {deal.stock < 30 && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                    Low Stock
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {deal.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(deal.rating)}
                  <span className="text-xs text-slate-600 ml-1">({deal.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-red-600">${deal.price.toFixed(2)}</span>
                  <span className="text-sm text-slate-500 line-through">${deal.originalPrice.toFixed(2)}</span>
                </div>
                <div className="mb-3">
                  <div className="text-xs text-slate-600 mb-1">Ends in:</div>
                  <CountdownTimer endsAt={deal.endsAt} />
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}