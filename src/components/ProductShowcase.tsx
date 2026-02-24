import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 199.99,
    rating: 4.8,
    reviews: 1523,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    badge: 'New Arrival'
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.3,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    badge: 'Hot Deal'
  },
  {
    id: 4,
    name: 'Laptop Stand Ergonomic',
    price: 34.99,
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'USB-C Hub Multi-Port',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviews: 1654,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
    badge: 'Deal'
  },
  {
    id: 6,
    name: 'Mechanical Keyboard RGB',
    price: 89.99,
    rating: 4.7,
    reviews: 2103,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    badge: 'Popular'
  },
  {
    id: 7,
    name: 'Wireless Mouse Gaming',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    name: '4K Webcam HD',
    price: 69.99,
    rating: 4.6,
    reviews: 967,
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop',
    badge: 'Trending'
  }
];

export default function ProductShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
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
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items, handpicked for quality and value
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-gray-100">
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    <span>Add to Cart</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-1">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-700 font-medium">In Stock</span>
                </div>

                <div className="mt-2 flex items-center gap-1 text-xs text-gray-600">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span>Free shipping over $25</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-orange-600 border-2 border-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
            View All Products
            <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}