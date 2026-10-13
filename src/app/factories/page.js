'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CogIcon,
  BeakerIcon,
  ArrowPathIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  TruckIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const factories = [
  {
    id: 'dancon',
    name: 'Dancon Factory',
    tagline: 'Premium Beverages for Every Occasion',
    category: 'Beverages & Drinks',
    description: 'State-of-the-art beverage production facility manufacturing high-quality bottled water, natural juices, soft drinks, and specialty beverages. Our facility adheres to international food safety standards and employs cutting-edge purification and packaging technologies.',
    icon: BeakerIcon,
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-50',
    established: '2011',
    capacity: '50M bottles/year',
    employees: '150+',
    location: 'Khartoum Industrial Zone',
    products: [
      'Pure bottled water',
      'Natural fruit juices',
      'Carbonated soft drinks',
      'Energy drinks',
      'Flavored water',
      'Specialty beverages'
    ],
    certifications: ['ISO 22000', 'HACCP', 'FDA Approved'],
    markets: ['Sudan', 'South Sudan', 'Chad', 'CAR']
  },
  {
    id: 'recycle',
    name: 'Recycle Factory',
    tagline: 'Transforming Waste into Value',
    category: 'Plastic Recycling',
    description: 'Advanced plastic recycling facility converting post-consumer and industrial plastic waste into high-quality recycled materials. We utilize modern sorting, cleaning, and reprocessing technologies to create sustainable plastic products.',
    icon: ArrowPathIcon,
    color: 'from-green-600 to-green-800',
    bgColor: 'bg-green-50',
    established: '2014',
    capacity: '2000 tons/year',
    employees: '80+',
    location: 'Bahri Industrial Area',
    products: [
      'Recycled plastic pellets',
      'Eco-friendly containers',
      'Recycled plastic bags',
      'Construction materials',
      'Garden furniture',
      'Industrial components'
    ],
    certifications: ['ISO 14001', 'Environmental Compliance'],
    markets: ['Sudan', 'Regional Export']
  },
  {
    id: 'relax',
    name: 'Relax Factory',
    tagline: 'Comfort and Care in Every Product',
    category: 'Paper Products & Hygiene',
    description: 'Modern manufacturing facility producing high-quality paper products, hygiene items, and personal care essentials. Our factory combines traditional craftsmanship with modern technology to deliver products that meet everyday needs.',
    icon: BuildingOffice2Icon,
    color: 'from-orange-600 to-orange-800',
    bgColor: 'bg-orange-50',
    established: '2013',
    capacity: '10M units/year',
    employees: '120+',
    location: 'Omdurman Industrial District',
    products: [
      'Baby diapers',
      'Adult hygiene products',
      'Facial tissues',
      'Toilet paper',
      'Paper towels',
      'Napkins and serviettes'
    ],
    certifications: ['CE Marking', 'Quality Assurance'],
    markets: ['Sudan', 'Libya', 'Egypt']
  },
  {
    id: 'tancka',
    name: 'Tancka Factory',
    tagline: 'Reliable Water Storage Solutions',
    category: 'Water Storage Systems',
    description: 'Specialized manufacturing facility producing durable water tanks, storage containers, and industrial vessels. Using advanced rotational molding technology, we create products that ensure safe water storage and distribution.',
    icon: CogIcon,
    color: 'from-cyan-600 to-cyan-800',
    bgColor: 'bg-cyan-50',
    established: '2016',
    capacity: '5000 units/year',
    employees: '60+',
    location: 'Al-Sailiya Industrial Zone',
    products: [
      'Polyethylene water tanks',
      'Underground storage tanks',
      'Industrial containers',
      'Chemical storage vessels',
      'Agricultural water systems',
      'Custom molded products'
    ],
    certifications: ['NSF Certified', 'Food Grade Standards'],
    markets: ['Sudan', 'Chad', 'Ethiopia']
  },
  {
    id: 'profile',
    name: 'Profile Factory',
    tagline: 'Luxury Fragrances and Beauty',
    category: 'Perfumes & Cosmetics',
    description: 'Premium cosmetics and perfume manufacturing facility creating high-end beauty products and fragrances. Our laboratory and production lines meet international cosmetic standards, producing both private label and branded products.',
    icon: SparklesIcon,
    color: 'from-pink-600 to-pink-800',
    bgColor: 'bg-pink-50',
    established: '2015',
    capacity: '1M units/year',
    employees: '90+',
    location: 'Khartoum North',
    products: [
      'Premium perfumes',
      'Eau de toilette',
      'Body lotions',
      'Facial creams',
      'Makeup products',
      'Hair care products'
    ],
    certifications: ['GMP Certified', 'Cosmetic Standards'],
    markets: ['Gulf Countries', 'Sudan', 'Egypt']
  }
]

const stats = [
  { label: 'Active Factories', value: '5', icon: BuildingOffice2Icon },
  { label: 'Total Employees', value: '500+', icon: UsersIcon },
  { label: 'Annual Production', value: '60M+', icon: ChartBarIcon },
  { label: 'Export Markets', value: '8+', icon: TruckIcon }
]

export default function FactoriesPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Factories</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art manufacturing facilities producing high-quality products 
              for regional and international markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our factories represent the pinnacle of modern manufacturing, combining cutting-edge 
              technology with sustainable practices to deliver products that meet the highest quality standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CogIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art machinery and automation systems ensure consistent quality 
                and efficient production processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                International certifications and rigorous quality control processes guarantee 
                products that exceed customer expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ArrowPathIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Environmental responsibility drives our operations, from waste reduction 
                to energy-efficient production methods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factories Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Production Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each factory specializes in different product categories while maintaining 
              our unified standards of excellence and innovation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {factories.map((factory, index) => (
              <motion.div
                key={factory.id}
                id={factory.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${factory.bgColor} rounded-3xl p-8 md:p-12`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${factory.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <factory.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{factory.name}</h3>
                        <p className="text-lg text-gray-600 font-medium">{factory.tagline}</p>
                        <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 mt-2">
                          {factory.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {factory.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CalendarIcon className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="font-medium text-gray-900">Established:</span>
                          <span className="ml-2 text-gray-700">{factory.established}</span>
                        </div>
                        <div className="flex items-center">
                          <ChartBarIcon className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="font-medium text-gray-900">Capacity:</span>
                          <span className="ml-2 text-gray-700">{factory.capacity}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <UsersIcon className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="font-medium text-gray-900">Employees:</span>
                          <span className="ml-2 text-gray-700">{factory.employees}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="font-medium text-gray-900">Location:</span>
                          <span className="ml-2 text-gray-700">{factory.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircleIcon className="h-5 w-5 mr-2 text-green-600" />
                        Certifications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {factory.certifications.map((cert) => (
                          <span 
                            key={cert}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TruckIcon className="h-5 w-5 mr-2 text-blue-600" />
                        Export Markets
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {factory.markets.map((market) => (
                          <span 
                            key={market}
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <BeakerIcon className="h-5 w-5 mr-2 text-purple-600" />
                          Product Portfolio
                        </h4>
                        <div className="grid gap-3">
                          {factory.products.map((product) => (
                            <div key={product} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{product}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Placeholder for factory image */}
                      <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <factory.icon className="h-16 w-16 mx-auto mb-3" />
                          <p className="font-medium">{factory.name}</p>
                          <p className="text-sm">Factory Image Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Sustainability */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality & Sustainability
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our commitment to excellence extends beyond production to environmental responsibility 
              and sustainable business practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">International Standards</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">ISO Certifications</h4>
                    <p className="text-gray-600">All facilities maintain ISO 9001, 14001, and industry-specific certifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Food Safety Standards</h4>
                    <p className="text-gray-600">HACCP and FDA compliance across all food and beverage production lines.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Environmental Compliance</h4>
                    <p className="text-gray-600">Adherence to international environmental standards and local regulations.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                              <div className="text-center text-gray-600">
                <ArrowPathIcon className="h-24 w-24 mx-auto mb-4" />
                <p className="font-medium text-lg">Quality & Sustainability</p>
                <p className="text-sm">Visual Placeholder</p>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Partner with Our Factories
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore opportunities for manufacturing partnerships, private labeling, 
              and custom production solutions across our diverse factory network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Discuss Partnership
              </Link>
              <Link href="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Our Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
