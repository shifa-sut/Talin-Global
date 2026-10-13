'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BuildingOfficeIcon,
  GlobeAltIcon,
  CogIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  CheckBadgeIcon,
  UsersIcon,
  TrophyIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Years of Excellence', value: '15+', icon: TrophyIcon },
  { id: 2, name: 'Countries Served', value: '5+', icon: GlobeAltIcon },
  { id: 3, name: 'Active Factories', value: '10+', icon: CogIcon },
  { id: 4, name: 'Team Members', value: '1000+', icon: UsersIcon },
]

const companies = [
  {
    name: 'Talin International',
    description: 'Infrastructure and strategic partnerships',
    icon: BuildingOfficeIcon,
    href: '/companies/talin-international',
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Utopia Global Trading',
    description: 'Factory imports and installations',
    icon: CogIcon,
    href: '/companies/utopia-global',
    color: 'from-green-600 to-green-800'
  },
  {
    name: 'Hollywood Cosmetics',
    description: 'International beauty brands',
    icon: SparklesIcon,
    href: '/companies/hollywood-cosmetics',
    color: 'from-pink-600 to-pink-800'
  },
  {
    name: 'Talin Properties',
    description: 'Innovative real estate solutions',
    icon: BuildingOfficeIcon,
    href: '/companies/talin-properties',
    color: 'from-purple-600 to-purple-800'
  }
]

const features = [
  {
    name: 'Sustainable Partnerships',
    description: 'Building long-term relationships that create mutual value and drive sustainable growth.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Global Excellence',
    description: 'Delivering world-class quality and innovation across all our business ventures.',
    icon: TrophyIcon,
  },
  {
    name: 'Local Expertise',
    description: 'Deep understanding of regional markets combined with international best practices.',
    icon: UsersIcon,
  },
  {
    name: 'Diversified Portfolio',
    description: 'Strategic presence across multiple industries ensuring stability and growth.',
    icon: GlobeAltIcon,
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroSlides = [
    {
      title: "Building Sustainable Partnerships",
      subtitle: "Delivering Global Excellence",
      description: "A diversified conglomerate creating sustainable value through strategic partnerships across multiple industries.",
      image: "/images/hero/factories-collage.jpg", // Collage of factories, real estate projects, cosmetics brands
      cta: "Discover Our Story"
    },
    {
      title: "Manufacturing Excellence",
      subtitle: "Quality Without Compromise",
      description: "State-of-the-art factories producing beverages, cosmetics, and consumer goods for regional and international markets.",
      image: "/images/hero/industrial-panoramic.jpg", // Panoramic industrial site photo
      cta: "Explore Our Factories"
    },
    {
      title: "Innovation in Real Estate",
      subtitle: "Building the Future",
      description: "Revolutionary construction solutions with lightweight brick technology for sustainable and efficient building.",
      image: "/images/hero/real-estate-projects.jpg", // Real estate projects showcase
      cta: "View Our Projects"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
              
              {/* Background Image Placeholder */}
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
                {/* Image placeholder with proper structure for actual images */}
                <div className="absolute inset-0 bg-gray-600 flex items-center justify-center opacity-30">
                  <div className="text-center text-white/60">
                    <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">IMG</span>
                    </div>
                    <p className="text-sm">{slide.image}</p>
                    <p className="text-xs mt-1">Hero Image Placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container-max text-center text-white px-4">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-200">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/about" className="btn-primary text-lg px-8 py-4">
                {heroSlides[currentSlide].cta}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <button className="flex items-center text-white text-lg hover:text-blue-200 transition-colors duration-200">
                <PlayCircleIcon className="h-8 w-8 mr-3" />
                Watch Our Story
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding section-bg-muted">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--foreground)'}}>{stat.value}</div>
                <div style={{color: 'var(--muted-foreground)'}}>{stat.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Highlight Section */}
      <section className="section-padding section-bg">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Founder Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">DA</span>
                    </div>
                    <p className="font-medium">Dr. Asaad Eltoum</p>
                    <p className="text-sm">Founder Portrait</p>
                    <p className="text-xs text-gray-400 mt-2">/images/founder/dr-asaad-eltoum.jpg</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <TrophyIcon className="h-12 w-12 text-white" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{backgroundColor: 'var(--accent)'}}>
                <UsersIcon className="h-5 w-5 mr-2" style={{color: 'var(--primary)'}} />
                <span className="font-medium" style={{color: 'var(--primary)'}}>Visionary Leadership</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--foreground)'}}>
                Dr. Asaad Eltoum
              </h2>
              <h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--primary)'}}>Founder & President</h3>
              
              <p className="text-lg leading-relaxed mb-6" style={{color: 'var(--muted-foreground)'}}>
                A visionary leader in business development, specializing in forging strategic partnerships 
                between the public and private sectors. With extensive experience in project management 
                and investment, Dr. Eltoum has spearheaded the creation of diversified companies across 
                multiple industries.
              </p>
              
              <div className="mt-6">
                <Link href="/about#founder" className="btn-primary whitespace-nowrap">
                  Meet Our Leadership
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Creating Sustainable Value Through Innovation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Talin Global Group is a diversified conglomerate with operations spanning real estate, 
                manufacturing, cosmetics, trading, and industrial solutions. Our mission is to create 
                sustainable value by combining local expertise with international innovation. Through 
                strategic partnerships with public and private sectors, we deliver high-quality products 
                and services to markets across Sudan, the UAE, Egypt, Saudi Arabia, and beyond.
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{feature.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Companies</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover our diverse portfolio of companies, each specializing in different sectors 
                while maintaining our commitment to excellence and innovation.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={company.href} className="card-hover p-8 group h-full flex flex-col">
                  {/* Company Image Placeholder */}
                  <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6 flex items-center justify-center flex-shrink-0">
                    <div className="text-center text-gray-400 dark:text-gray-500">
                      <company.icon className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-xs">Company Logo</p>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${company.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                    <company.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{company.description}</p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-200 mt-auto">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our World in Pictures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From state-of-the-art facilities to strategic partnerships, explore the visual story 
              of Talin Global Group&apos;s diverse operations and achievements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Factories Collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-hover p-6"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <CogIcon className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Factories Collage</p>
                  <p className="text-sm opacity-75">/images/factories/collage.jpg</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Manufacturing Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">State-of-the-art production facilities</p>
            </motion.div>

            {/* Real Estate Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-hover p-6"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-purple-600">
                  <BuildingOfficeIcon className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Real Estate Projects</p>
                  <p className="text-sm opacity-75">/images/projects/real-estate.jpg</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Construction Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Revolutionary building solutions</p>
            </motion.div>

            {/* Cosmetics Brands */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-hover p-6"
            >
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-pink-600">
                  <SparklesIcon className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Cosmetics Brands</p>
                  <p className="text-sm opacity-75">/images/products/cosmetics.jpg</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Beauty Products</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">International beauty brands</p>
            </motion.div>

            {/* Team Meetings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-hover p-6"
            >
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-green-600">
                  <UsersIcon className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Team Meetings</p>
                  <p className="text-sm opacity-75">/images/events/team-meetings.jpg</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Strategic Partnerships</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Leadership and collaboration</p>
            </motion.div>

            {/* Panoramic Industrial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card p-6 lg:col-span-2"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <GlobeAltIcon className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Panoramic Industrial Site</p>
                  <p className="text-sm opacity-75">/images/industrial/panoramic-site.jpg</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Industrial Operations</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Comprehensive view of our manufacturing capabilities and infrastructure</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary">
              View Complete Gallery
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Our World</h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
                Take a deeper dive into our organization, from our leadership and values 
                to our cutting-edge facilities and innovative projects.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'About the Group', href: '/about', icon: UsersIcon },
              { name: 'Our Factories', href: '/factories', icon: CogIcon },
              { name: 'Project Gallery', href: '/gallery', icon: ShoppingBagIcon },
              { name: 'Contact Us', href: '/contact', icon: GlobeAltIcon }
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="block bg-white/10 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                >
                  <link.icon className="h-8 w-8 text-blue-200 dark:text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-lg font-semibold mb-2">{link.name}</h3>
                  <div className="flex items-center text-blue-200 dark:text-blue-300 group-hover:translate-x-2 transition-transform duration-200">
                    Explore
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Join us in building sustainable partnerships that create lasting value. 
              Discover opportunities for collaboration and growth across our diverse portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-200 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Link>
              <Link href="/about" className="border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 hover:bg-white dark:hover:bg-gray-200 hover:text-blue-600 dark:hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}