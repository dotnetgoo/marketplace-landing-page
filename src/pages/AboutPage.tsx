import Header from '../components/Header'
import Footer from '../components/Footer'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

interface Milestone {
  year: string
  title: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '👩‍💼',
    bio: 'Visionary leader with 15+ years in e-commerce'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    image: '👨‍💻',
    bio: 'Tech innovator driving our platform forward'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Head of Marketing',
    image: '👩‍🎨',
    bio: 'Creative strategist connecting brands with customers'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'COO',
    image: '👨‍💼',
    bio: 'Operations expert ensuring seamless delivery'
  }
]

const milestones: Milestone[] = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize online shopping'
  },
  {
    year: '2017',
    title: '1 Million Customers',
    description: 'Reached our first major milestone in customer growth'
  },
  {
    year: '2019',
    title: 'Global Expansion',
    description: 'Expanded operations to 50+ countries worldwide'
  },
  {
    year: '2021',
    title: 'Sustainability Initiative',
    description: 'Launched eco-friendly packaging and carbon-neutral delivery'
  },
  {
    year: '2023',
    title: '10 Million+ Users',
    description: 'Celebrated serving over 10 million happy customers'
  },
  {
    year: '2024',
    title: 'AI-Powered Shopping',
    description: 'Introduced personalized recommendations using AI technology'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow">
              Building the future of e-commerce, one customer at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At Marketplace, we believe that shopping should be simple, enjoyable, and accessible to everyone. Our mission is to connect customers with quality products from trusted sellers around the world.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We are committed to providing an exceptional shopping experience through innovative technology, outstanding customer service, and a carefully curated selection of products that meet the highest standards of quality.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Every day, we work to make online shopping more convenient, secure, and rewarding for millions of customers worldwide.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Quality First</h3>
                  <p className="text-slate-600">Every product is carefully vetted to ensure it meets our high standards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Focused</h3>
                  <p className="text-slate-600">Your satisfaction is our top priority in everything we do</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Global Reach</h3>
                  <p className="text-slate-600">Connecting buyers and sellers across 150+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600 leading-relaxed">We operate with honesty and transparency in all our business dealings, building trust with every interaction.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">We continuously evolve and embrace new technologies to deliver the best shopping experience.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Community</h3>
              <p className="text-slate-600 leading-relaxed">We foster a vibrant community of buyers and sellers, creating value for everyone involved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Milestones that shaped our story</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400 via-purple-400 to-blue-400 hidden md:block"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-slate-100">
                    <div className="text-3xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10"></div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">The passionate people behind Marketplace</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100">
                <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 text-center">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">{member.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">By the Numbers</h2>
            <p className="text-xl text-slate-300">Our impact in the e-commerce world</p>
          </div>
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
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-slate-300 text-lg">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Join Our Journey</h2>
          <p className="text-xl text-white/95 mb-8 drop-shadow">Be part of the marketplace revolution and experience shopping like never before</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-2xl hover:bg-slate-800 transform hover:scale-105 transition-all duration-300">
              Start Shopping
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-50 transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}