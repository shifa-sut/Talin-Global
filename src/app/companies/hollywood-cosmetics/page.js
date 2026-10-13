'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon,
  UserGroupIcon,
  GlobeAltIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon,
  CalendarIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const brands = [
  {
    name: "L'Oréal",
    category: 'Premium Beauty',
    description: 'World-renowned cosmetics brand offering comprehensive beauty solutions.',
    products: ['Foundation', 'Skincare', 'Hair Care', 'Color Cosmetics'],
    image: '/images/brands/loreal.jpg'
  },
  {
    name: 'MAC Cosmetics',
    category: 'Professional Makeup',
    description: 'Professional-quality makeup favored by artists and beauty enthusiasts.',
    products: ['Lipstick', 'Eye Shadow', 'Foundation', 'Brushes'],
    image: '/images/brands/mac.jpg'
  },
  {
    name: 'Maybelline',
    category: 'Accessible Beauty',
    description: 'Trend-setting cosmetics that make beauty accessible to everyone.',
    products: ['Mascara', 'Lipstick', 'Foundation', 'Eye Makeup'],
    image: '/images/brands/maybelline.jpg'
  },
  {
    name: 'Max Factor',
    category: 'Classic Beauty',
    description: 'Timeless beauty products with heritage and innovation.',
    products: ['Mascara', 'Foundation', 'Powder', 'Lip Color'],
    image: '/images/brands/maxfactor.jpg'
  }
]

const services = [
  {
    title: 'International Brand Manufacturing',
    description: 'Licensed manufacturing of premium international beauty brands with strict quality standards.',
    icon: SparklesIcon
  },
  {
    title: 'Wholesale Distribution Networks',
    description: 'Comprehensive distribution channels reaching retailers across multiple markets.',
    icon: TruckIcon
  },
  {
    title: 'Retail & Pharmacy Partnerships',
    description: 'Strategic partnerships with retail chains and pharmacy networks for maximum reach.',
    icon: BuildingStorefrontIcon
  },
  {
    title: 'Sales Representative Training',
    description: 'Professional training programs for our extensive network of beauty consultants.',
    icon: UserGroupIcon
  },
  {
    title: 'Beauty Product Import/Export',
    description: 'Efficient import and export operations connecting global beauty markets.',
    icon: GlobeAltIcon
  },
  {
    title: 'Brand Marketing & Promotion',
    description: 'Comprehensive marketing strategies and promotional campaigns for brand awareness.',
    icon: HeartIcon
  }
]

const achievements = [
  {
    title: '50,000+ Sales Representatives',
    description: 'Largest beauty sales network in the region',
    icon: UserGroupIcon,
    value: '50K+'
  },
  {
    title: 'Market Coverage',
    description: 'Serving Gulf countries and North Africa',
    icon: GlobeAltIcon,
    value: '6 Countries'
  },
  {
    title: 'Retail Partnerships',
    description: 'Strategic partnerships with major retailers',
    icon: BuildingStorefrontIcon,
    value: '1000+'
  },
  {
    title: 'Years in Beauty',
    description: 'Expertise in beauty industry operations',
    icon: SparklesIcon,
    value: '12+'
  }
]

const markets = [
  {
    country: 'Sudan',
    status: 'Primary Market',
    representatives: '25,000+',
    coverage: 'Nationwide',
    image: '/images/markets/sudan.jpg'
  },
  {
    country: 'UAE',
    status: 'Strategic Market',
    representatives: '8,000+',
    coverage: 'Major Cities',
    image: '/images/markets/uae.jpg'
  },
  {
    country: 'Saudi Arabia',
    status: 'Growing Market',
    representatives: '12,000+',
    coverage: 'Key Regions',
    image: '/images/markets/saudi.jpg'
  },
  {
    country: 'Egypt',
    status: 'Expansion Market',
    representatives: '5,000+',
    coverage: 'Urban Centers',
    image: '/images/markets/egypt.jpg'
  }
]

export default function HollywoodCosmeticsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/companies"
              className="inline-flex items-center text-pink-200 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Our Companies
            </Link>
            
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                <SparklesIcon className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Hollywood Cosmetics</h1>
                <p className="text-xl md:text-2xl text-pink-100">Beauty Without Boundaries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading Beauty Brand Distribution</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hollywood Cosmetics manufactures and imports international beauty brands including L&apos;Oréal, 
                MAC, Maybelline, and Max Factor. We distribute through extensive wholesale networks, 
                pharmacies, and retail stores across the Gulf and North African markets.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Supported by a team of over 50,000 sales representatives, we ensure comprehensive market 
                coverage and personalized customer service. Our commitment to beauty excellence drives 
                our expansion across regional markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-pink-600 hover:bg-pink-700">
                  Become a Partner
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/products" className="btn-secondary">
                  View Our Brands
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Company Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-pink-600">
                  <SparklesIcon className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-medium text-lg">Beauty Products</p>
                  <p className="text-sm opacity-75">/images/companies/hollywood-cosmetics/overview.jpg</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-600 rounded-xl mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <div className="text-gray-600 font-medium mb-1">{achievement.title}</div>
                <div className="text-gray-500 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Brands */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Brands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive distribution of world-renowned beauty brands, bringing international 
              quality to regional markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                {/* Brand Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-pink-600">
                    <SparklesIcon className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">{brand.name}</p>
                    <p className="text-xs">{brand.image}</p>
                  </div>
                </div>
                
                <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4">
                  {brand.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{brand.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{brand.description}</p>
                
                <div className="space-y-2">
                  {brand.products.map((product, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <CheckCircleIcon className="h-4 w-4 text-pink-600 mr-2" />
                      <span className="text-gray-700 text-sm">{product}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive beauty industry services from manufacturing to retail distribution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Presence */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Regional Market Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic presence across key markets with dedicated sales teams and distribution networks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {markets.map((market, index) => (
              <motion.div
                key={market.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                {/* Market Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <div className="text-center text-pink-600">
                    <MapPinIcon className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium">{market.country}</p>
                    <p className="text-xs">{market.image}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{market.country}</h3>
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium">
                      {market.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-gray-500">Representatives</span>
                      <p className="font-semibold text-gray-900">{market.representatives}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Coverage</span>
                      <p className="font-semibold text-gray-900">{market.coverage}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Network */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Exceptional Sales Network</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our success is built on the dedication of over 50,000 trained sales representatives 
                who bring beauty expertise directly to customers across our markets.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Training Programs</h4>
                    <p className="text-gray-600">Comprehensive beauty education and product knowledge training.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nationwide Coverage</h4>
                    <p className="text-gray-600">Extensive reach ensuring product availability in urban and rural areas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customer Relationship Focus</h4>
                    <p className="text-gray-600">Building lasting relationships through personalized beauty consultation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Digital Integration</h4>
                    <p className="text-gray-600">Modern sales tools and digital platforms for enhanced customer experience.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-pink-600">
                  <UserGroupIcon className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-medium text-lg">Sales Network</p>
                  <p className="text-sm">50,000+ Representatives</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Product Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive range of beauty products from world-renowned brands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Foundation Collection', category: 'Base Makeup', image: '/images/products/foundation.jpg' },
              { title: 'Lipstick Range', category: 'Color Cosmetics', image: '/images/products/lipstick.jpg' },
              { title: 'Eye Makeup', category: 'Eyes', image: '/images/products/eyemakeup.jpg' },
              { title: 'Skincare Products', category: 'Skincare', image: '/images/products/skincare.jpg' },
              { title: 'Hair Care Line', category: 'Hair', image: '/images/products/haircare.jpg' },
              { title: 'Beauty Tools', category: 'Accessories', image: '/images/products/tools.jpg' }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-pink-100 aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                    <div className="text-center text-pink-600">
                      <SparklesIcon className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{product.title}</p>
                      <p className="text-xs opacity-75">{product.image}</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center">
                      <p className="font-medium">{product.title}</p>
                      <p className="text-sm text-gray-200">{product.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Beauty Revolution
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Partner with Hollywood Cosmetics to bring world-class beauty products 
              to your market and customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </Link>
              <Link href="/companies" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Other Companies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
