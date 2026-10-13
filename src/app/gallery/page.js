'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOfficeIcon,
  UsersIcon,
  SparklesIcon,
  CogIcon,
  PhotoIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const categories = [
  { id: 'all', name: 'All', icon: PhotoIcon },
  { id: 'projects', name: 'Projects', icon: BuildingOfficeIcon },
  { id: 'events', name: 'Events', icon: UsersIcon },
  { id: 'products', name: 'Products', icon: SparklesIcon },
  { id: 'factories', name: 'Factories', icon: CogIcon }
]

// Placeholder images - in real implementation, these would be actual project images
const galleryItems = [
  // Projects
  {
    id: 1,
    category: 'projects',
    title: 'Luxury Villa Development',
    description: 'Modern residential complex featuring lightweight brick technology',
    image: '/images/projects/villa-1.jpg',
    thumbnail: '/images/projects/villa-1-thumb.jpg'
  },
  {
    id: 2,
    category: 'projects',
    title: 'Industrial Complex Construction',
    description: 'Multi-purpose industrial facility with sustainable design',
    image: '/images/projects/industrial-1.jpg',
    thumbnail: '/images/projects/industrial-1-thumb.jpg'
  },
  {
    id: 3,
    category: 'projects',
    title: 'Commercial Building',
    description: 'State-of-the-art office complex in Khartoum',
    image: '/images/projects/commercial-1.jpg',
    thumbnail: '/images/projects/commercial-1-thumb.jpg'
  },
  {
    id: 4,
    category: 'projects',
    title: 'Residential Community',
    description: 'Sustainable housing development with modern amenities',
    image: '/images/projects/residential-1.jpg',
    thumbnail: '/images/projects/residential-1-thumb.jpg'
  },
  
  // Events
  {
    id: 5,
    category: 'events',
    title: 'Annual Partnership Summit',
    description: 'Key stakeholders gathering for strategic planning',
    image: '/images/events/summit-1.jpg',
    thumbnail: '/images/events/summit-1-thumb.jpg'
  },
  {
    id: 6,
    category: 'events',
    title: 'Factory Opening Ceremony',
    description: 'Grand opening of our latest manufacturing facility',
    image: '/images/events/opening-1.jpg',
    thumbnail: '/images/events/opening-1-thumb.jpg'
  },
  {
    id: 7,
    category: 'events',
    title: 'Trade Exhibition',
    description: 'Showcasing our products at international trade fair',
    image: '/images/events/exhibition-1.jpg',
    thumbnail: '/images/events/exhibition-1-thumb.jpg'
  },
  {
    id: 8,
    category: 'events',
    title: 'Team Building Event',
    description: 'Annual employee engagement and recognition ceremony',
    image: '/images/events/team-1.jpg',
    thumbnail: '/images/events/team-1-thumb.jpg'
  },
  
  // Products
  {
    id: 9,
    category: 'products',
    title: 'Premium Cosmetics Line',
    description: 'Hollywood Cosmetics signature beauty products',
    image: '/images/products/cosmetics-1.jpg',
    thumbnail: '/images/products/cosmetics-1-thumb.jpg'
  },
  {
    id: 10,
    category: 'products',
    title: 'Beverage Collection',
    description: 'Dancon Factory premium drink selection',
    image: '/images/products/beverages-1.jpg',
    thumbnail: '/images/products/beverages-1-thumb.jpg'
  },
  {
    id: 11,
    category: 'products',
    title: 'Water Storage Tanks',
    description: 'Tancka Factory industrial storage solutions',
    image: '/images/products/tanks-1.jpg',
    thumbnail: '/images/products/tanks-1-thumb.jpg'
  },
  {
    id: 12,
    category: 'products',
    title: 'Recycled Materials',
    description: 'Eco-friendly products from our recycling facility',
    image: '/images/products/recycled-1.jpg',
    thumbnail: '/images/products/recycled-1-thumb.jpg'
  },
  
  // Factories
  {
    id: 13,
    category: 'factories',
    title: 'Dancon Production Line',
    description: 'State-of-the-art beverage manufacturing equipment',
    image: '/images/factories/dancon-1.jpg',
    thumbnail: '/images/factories/dancon-1-thumb.jpg'
  },
  {
    id: 14,
    category: 'factories',
    title: 'Hollywood Cosmetics Lab',
    description: 'Quality control and research facility',
    image: '/images/factories/hollywood-1.jpg',
    thumbnail: '/images/factories/hollywood-1-thumb.jpg'
  },
  {
    id: 15,
    category: 'factories',
    title: 'Recycle Factory Operations',
    description: 'Advanced plastic recycling and processing',
    image: '/images/factories/recycle-1.jpg',
    thumbnail: '/images/factories/recycle-1-thumb.jpg'
  },
  {
    id: 16,
    category: 'factories',
    title: 'Relax Factory Floor',
    description: 'Paper products and hygiene items production',
    image: '/images/factories/relax-1.jpg',
    thumbnail: '/images/factories/relax-1-thumb.jpg'
  }
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (item, index) => {
    setSelectedImage(item)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentFilteredItems = filteredItems
    let newIndex
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % currentFilteredItems.length
    } else {
      newIndex = currentImageIndex === 0 ? currentFilteredItems.length - 1 : currentImageIndex - 1
    }
    setCurrentImageIndex(newIndex)
    setSelectedImage(currentFilteredItems[newIndex])
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our projects, events, products, and facilities through this 
              comprehensive visual showcase of Talin Global Group&apos;s achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const isActive = activeCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <category.icon className="h-5 w-5 mr-2" />
                    {category.name}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-square">
                  {/* Placeholder for actual images */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <PhotoIcon className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <PhotoIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
              <p className="text-gray-600">Try selecting a different category to view more content.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Images', value: galleryItems.length.toString() },
              { label: 'Project Photos', value: galleryItems.filter(item => item.category === 'projects').length.toString() },
              { label: 'Event Coverage', value: galleryItems.filter(item => item.category === 'events').length.toString() },
              { label: 'Product Showcase', value: galleryItems.filter(item => item.category === 'products').length.toString() }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Placeholder for actual image */}
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <PhotoIcon className="h-24 w-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">{selectedImage.title}</p>
                </div>
              </div>
              
              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">
                  {selectedImage.category}
                </span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} of {filteredItems.length}
            </div>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interested in Our Work?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how our projects, products, and facilities can contribute 
              to your business success. Let&apos;s discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Link>
              <Link href="/companies" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Our Companies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
