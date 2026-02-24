import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  description: string
  inStock: boolean
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation',
    inStock: true
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 199.99,
    rating: 4.8,
    reviews: 1523,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'Feature-rich smartwatch with health tracking',
    inStock: true
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.3,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'Waterproof portable speaker with amazing sound',
    inStock: true
  },
  {
    id: 4,
    name: 'Laptop Stand Ergonomic',
    price: 34.99,
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'Office',
    description: 'Adjustable aluminum laptop stand for better posture',
    inStock: true
  },
  {
    id: 5,
    name: 'USB-C Hub Multi-Port',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviews: 1654,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: '7-in-1 USB-C hub with multiple connectivity options',
    inStock: true
  },
  {
    id: 6,
    name: 'Mechanical Keyboard RGB',
    price: 89.99,
    rating: 4.7,
    reviews: 2103,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    category: 'Gaming',
    description: 'RGB mechanical keyboard with customizable switches',
    inStock: true
  },
  {
    id: 7,
    name: 'Wireless Mouse Gaming',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
    category: 'Gaming',
    description: 'High-precision wireless gaming mouse',
    inStock: true
  },
  {
    id: 8,
    name: '4K Webcam HD',
    price: 69.99,
    rating: 4.6,
    reviews: 967,
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: '4K webcam with auto-focus and low-light correction',
    inStock: true
  },
  {
    id: 9,
    name: 'Monitor 27" 4K UHD',
    price: 299.99,
    originalPrice: 449.99,
    rating: 4.8,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'Professional 4K monitor with HDR support',
    inStock: true
  },
  {
    id: 10,
    name: 'Laptop Backpack',
    price: 44.99,
    rating: 4.4,
    reviews: 756,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Accessories',
    description: 'Water-resistant laptop backpack with USB charging port',
    inStock: true
  },
  {
    id: 11,
    name: 'Desk Lamp LED',
    price: 24.99,
    rating: 4.3,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    category: 'Office',
    description: 'Adjustable LED desk lamp with touch control',
    inStock: true
  },
  {
    id: 12,
    name: 'Wireless Earbuds Pro',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'Premium wireless earbuds with active noise cancellation',
    inStock: true
  }
]

const categories = ['All', 'Electronics', 'Gaming', 'Office', 'Accessories']

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState<'relevance' | 'price-low' | 'price-high' | 'rating'>('relevance')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])

  const filteredProducts = allProducts
    .filter(product => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) ||
                          product.description.toLowerCase().includes(query.toLowerCase()) ||
                          product.category.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesQuery && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

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

      {/* Search Results Header */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white font-medium">Search Results</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {query ? `Search results for "${query}"` : 'All Products'}
          </h1>
          <p className="text-slate-300 text-lg">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-slate-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2].map(rating => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-orange-500 focus:ring-orange-500" />
                      <span className="ml-2 flex items-center gap-1">
                        {renderStars(rating)}
                        <span className="text-sm text-slate-600 ml-1">& Up</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setPriceRange([0, 500])
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-600">
                  Showing {filteredProducts.length} results
                </p>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-slate-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="px-4 py-2 border-2 border-slate-200 rounded-lg font-medium text-slate-700 bg-white hover:border-orange-500 focus:border-orange-500 focus:outline-none transition-colors duration-200"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600 mb-6">Try adjusting your filters or search query</p>
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  Browse All Products
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-3 right-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-medium text-orange-600 mb-1">{product.category}</div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center gap-1 mb-3">
                        {renderStars(product.rating)}
                        <span className="text-xs text-slate-600 ml-1">({product.reviews})</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}