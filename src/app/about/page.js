'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  UserIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  LightBulbIcon,
  HeartIcon,
  TrophyIcon,
  ArrowRightIcon,
  CogIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Innovation',
    description: 'Continuously identifying new trends and innovative solutions to add value to our conglomerate.',
    icon: LightBulbIcon,
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Quality',
    description: 'Believing that the quest for perfection delivers the most profitable results in the long term.',
    icon: TrophyIcon,
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'Sustainability',
    description: 'Creating sustainable economic growth that benefits our partners and communities.',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-purple-700'
  },
  {
    name: 'Partnership',
    description: 'Forging strategic partnerships between public and private sectors for mutual growth.',
    icon: HeartIcon,
    color: 'from-pink-500 to-pink-700'
  }
]

const milestones = [
  {
    year: '2008',
    title: 'Foundation',
    description: 'Talin Global Group was established with a vision to create sustainable partnerships across multiple industries.'
  },
  {
    year: '2012',
    title: 'International Expansion',
    description: 'Extended operations to UAE, Egypt, and Saudi Arabia, establishing strategic regional partnerships.'
  },
  {
    year: '2016',
    title: 'Manufacturing Excellence',
    description: 'Launched multiple factories producing beverages, cosmetics, and consumer goods with international standards.'
  },
  {
    year: '2020',
    title: 'Innovation in Construction',
    description: 'Introduced revolutionary lightweight brick technology through Talin Properties, transforming construction efficiency.'
  },
  {
    year: '2024',
    title: 'Sustainable Future',
    description: 'Continuing to lead in sustainable business practices while expanding our global footprint.'
  }
]

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Talin Global Group</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Building sustainable partnerships and delivering global excellence across diverse industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Placeholder for founder image */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                  <UserIcon className="h-24 w-24 text-gray-400" />
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
              <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-6">
                <UserIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Visionary Leader</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dr. Asaad Eltoum
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-8">Founder & President</h3>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Dr. Asaad Eltoum is a visionary leader in business development, specializing in 
                  forging strategic partnerships between the public and private sectors. With extensive 
                  experience in project management and investment, he has spearheaded the creation of 
                  diversified companies across multiple industries.
                </p>
                <p>
                  His expertise spans real estate, manufacturing, cosmetics, and perfumery, where he 
                  has consistently demonstrated an unwavering commitment to innovation, quality, and 
                  sustainable economic growth. Under his leadership, Talin Global Group has become 
                  a beacon of excellence in the region.
                </p>
                <p>
                  Dr. Eltoum believes that true success comes from building lasting partnerships that 
                  create mutual value, foster innovation, and contribute to the sustainable development 
                  of communities and economies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Group */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Organization</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Talin Global Group operates across multiple sectors to serve local, regional, and 
              international markets with excellence and innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <CogIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Supplying factories, machinery, and equipment for high-efficiency operations across 
                beverages, food products, and consumer goods manufacturing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beauty & Cosmetics</h3>
              <p className="text-gray-600 leading-relaxed">
                Producing and distributing cosmetics and perfumes for Gulf and local markets, 
                featuring internationally recognized brands and quality standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-8"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <BuildingOffice2Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing real estate projects with innovative construction solutions, including 
                revolutionary lightweight brick technology for sustainable building.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decision-making and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 text-center group hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.name}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Message */}
      <section id="message" className="section-padding gradient-bg text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Message</h2>
            <div className="text-xl md:text-2xl leading-relaxed space-y-6 text-blue-100">
              <p>
                At Talin Global Group, our mission is to make inspirational, high-quality products 
                and services accessible to our customers in every aspect of our business.
              </p>
              <p>
                We believe the quest for perfection delivers the most profitable results in the long term. 
                By combining our strengths as a group with the expertise of our teams, we continuously 
                identify new trends and innovative solutions.
              </p>
              <p>
                This approach allows us to add sustained value to our conglomerate and the markets we serve, 
                building lasting partnerships that create mutual benefit and drive sustainable economic growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and expansion across multiple industries and regions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="card p-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-lg z-10" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover partnership opportunities and learn more about how we can work together 
              to create sustainable value and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/companies" className="btn-primary">
                Explore Our Companies
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
