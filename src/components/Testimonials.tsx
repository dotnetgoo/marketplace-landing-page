import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content: 'This marketplace has transformed how I source products for my business. The variety and quality are unmatched, and the delivery is always on time.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'E-commerce Manager',
    content: 'Outstanding platform! The user experience is seamless, and customer support is incredibly responsive. I highly recommend it to anyone looking for reliable marketplace solutions.',
    rating: 5,
    image: '👨‍💻'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content: 'We have been using this marketplace for over a year now, and it continues to exceed our expectations. Great prices, fast shipping, and excellent product selection.',
    rating: 5,
    image: '👩‍🎨'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Retail Manager',
    content: 'The best marketplace experience I have had. Easy to navigate, secure transactions, and amazing deals. It has become my go-to platform for all business needs.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Startup Founder',
    content: 'As a startup, finding the right suppliers is crucial. This marketplace made it incredibly easy to discover quality products at competitive prices. Highly satisfied!',
    rating: 5,
    image: '👩‍🔬'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Operations Lead',
    content: 'Fantastic platform with a wide range of products. The ordering process is straightforward, and I appreciate the transparency in pricing and shipping.',
    rating: 5,
    image: '👨‍🏫'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const visibleTestimonials = testimonials.slice(activeIndex * 3, activeIndex * 3 + 3);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust our marketplace for their business needs
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Purchase
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => {
                setActiveIndex((current) => (current - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
                setIsAutoPlaying(false);
              }}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'bg-orange-500 w-8 h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                  }`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setActiveIndex((current) => (current + 1) % Math.ceil(testimonials.length / 3));
                setIsAutoPlaying(false);
              }}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lg px-12 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">4.9</div>
              <div className="flex justify-center mb-1">
                {renderStars(5)}
              </div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">50K+</div>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}