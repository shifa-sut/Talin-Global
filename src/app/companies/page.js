'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  CogIcon,
  SparklesIcon,
  TruckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const companies = [
  {
    id: 'talin-international',
    name: 'Talin International',
    tagline: 'Creating High-Value Investment Opportunities',
    description: 'Specializes in creating high-value investment opportunities through smart partnership models. Our expertise spans infrastructure, manufacturing, trade, and services, with projects focused on reconstruction and development.',
    icon: BuildingOffice2Icon,
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-50',
    services: [
      'Infrastructure development partnerships',
      'Industrial manufacturing collaborations',
      'Strategic commodity supply chains',
      'International trade and logistics',
      'Reconstruction project management',
      'Public-private partnership facilitation'
    ],
    markets: ['Sudan', 'UAE', 'Egypt', 'Saudi Arabia'],
    established: '2008',
    focus: 'Infrastructure & Strategic Partnerships'
  },
  {
    id: 'utopia-global',
    name: 'Utopia Global General Trading',
    tagline: 'Your Gateway to Industrial Excellence',
    description: 'Imports and installs factories and machinery for beverages, food products, recycling, oil, and packaging. We source cutting-edge equipment from China, Europe, and Asia, offering both new and refurbished solutions with comprehensive technical support.',
    icon: CogIcon,
    color: 'from-green-600 to-green-800',
    bgColor: 'bg-green-50',
    services: [
      'Complete factory setup and installation',
      'Beverage production line equipment',
      'Food processing machinery',
      'Recycling plant equipment',
      'Oil refinery machinery',
      'Packaging and bottling systems'
    ],
    markets: ['China', 'Europe', 'Asia', 'Middle East'],
    established: '2010',
    focus: 'Industrial Equipment & Installation'
  },
  {
    id: 'hollywood-cosmetics',
    name: 'Hollywood Cosmetics',
    tagline: 'Beauty Without Boundaries',
    description: 'Manufactures and imports international beauty brands including L\'Oréal, MAC, Maybelline, and Max Factor. We distribute through extensive wholesale networks, pharmacies, and retail stores, supported by a team of over 50,000 sales representatives.',
    icon: SparklesIcon,
    color: 'from-pink-600 to-pink-800',
    bgColor: 'bg-pink-50',
    services: [
      'International brand manufacturing',
      'Wholesale distribution networks',
      'Retail and pharmacy partnerships',
      'Sales representative training',
      'Beauty product import/export',
      'Brand marketing and promotion'
    ],
    markets: ['Gulf Countries', 'Sudan', 'Egypt', 'Libya'],
    established: '2012',
    focus: 'Cosmetics & Beauty Products'
  },
  {
    id: 'talin-properties',
    name: 'Talin Properties',
    tagline: 'Building Tomorrow, Today',
    description: 'A leader in innovative real estate construction, introducing revolutionary lightweight brick technology for faster, cost-effective, and sustainable building. Our portfolio includes luxury villas and residential developments adhering to global engineering standards.',
    icon: BuildingOffice2Icon,
    color: 'from-purple-600 to-purple-800',
    bgColor: 'bg-purple-50',
    services: [
      'Lightweight brick technology',
      'Luxury villa construction',
      'Residential development projects',
      'Sustainable building solutions',
      'Engineering consultation',
      'Project management services'
    ],
    markets: ['Sudan', 'Regional Expansion'],
    established: '2015',
    focus: 'Real Estate & Construction Innovation'
  }
]

const stats = [
  { label: 'Active Companies', value: '4+', icon: BuildingOffice2Icon },
  { label: 'Countries Served', value: '8+', icon: GlobeAltIcon },
  { label: 'Sales Representatives', value: '50K+', icon: UserGroupIcon },
  { label: 'Years Combined Experience', value: '60+', icon: ChartBarIcon }
]

export default function CompaniesPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Companies</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover our diverse portfolio of companies, each specializing in different sectors 
              while maintaining our commitment to excellence and innovation
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

      {/* Companies Overview */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Diversified Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our companies operate across multiple sectors, each bringing specialized expertise 
              and innovative solutions to their respective markets while maintaining the highest 
              standards of quality and service.
            </p>
          </motion.div>

          <div className="space-y-24">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                id={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${company.bgColor} rounded-3xl p-8 md:p-12`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <company.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{company.name}</h3>
                        <p className="text-lg text-gray-600 font-medium">{company.tagline}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {company.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <LightBulbIcon className="h-5 w-5 mr-2 text-blue-600" />
                          Focus Area
                        </h4>
                        <p className="text-gray-700">{company.focus}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <ChartBarIcon className="h-5 w-5 mr-2 text-blue-600" />
                          Established
                        </h4>
                        <p className="text-gray-700">{company.established}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <GlobeAltIcon className="h-5 w-5 mr-2 text-blue-600" />
                        Markets Served
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {company.markets.map((market) => (
                          <span 
                            key={market}
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href={`/companies/${company.id}`}
                      className="inline-flex items-center bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <CheckCircleIcon className="h-5 w-5 mr-2 text-green-600" />
                          Key Services
                        </h4>
                        <div className="space-y-3">
                          {company.services.map((service) => (
                            <div key={service} className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Placeholder for company image */}
                      <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <company.icon className="h-16 w-16 mx-auto mb-3" />
                          <p className="font-medium">{company.name}</p>
                          <p className="text-sm">Company Image Placeholder</p>
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

      {/* Synergies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Synergistic Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our companies work together to create comprehensive solutions, leveraging each other&apos;s 
              strengths to deliver unparalleled value to our clients and partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Supply Chain</h3>
              <p className="text-gray-600 leading-relaxed">
                Our trading and manufacturing companies work together to create efficient, 
                cost-effective supply chains that benefit all stakeholders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <LightBulbIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shared Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Technologies and innovations developed by one company often benefit others, 
                creating a multiplier effect across our portfolio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-Company Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Our teams collaborate across companies, sharing knowledge and best practices 
                to deliver superior results for every project.
              </p>
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
              Partner with Excellence
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how our companies can work together to create innovative solutions 
              for your business needs. Let&apos;s build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start a Partnership
              </Link>
              <Link href="/factories" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Our Factories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
