'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  GlobeAltIcon,
  TruckIcon,
  UserGroupIcon,
  ChartBarIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Infrastructure Development',
    description: 'Large-scale infrastructure projects including roads, bridges, and urban development initiatives across Sudan and the region.',
    icon: BuildingOffice2Icon
  },
  {
    title: 'Industrial Manufacturing Partnerships',
    description: 'Strategic collaborations with local and international partners to establish manufacturing facilities and industrial complexes.',
    icon: TruckIcon
  },
  {
    title: 'Strategic Commodity Supply',
    description: 'Comprehensive supply chain management for essential commodities, ensuring reliable distribution networks.',
    icon: GlobeAltIcon
  },
  {
    title: 'International Trade & Logistics',
    description: 'Cross-border trade facilitation and logistics solutions connecting regional and international markets.',
    icon: ChartBarIcon
  },
  {
    title: 'Reconstruction Project Management',
    description: 'Specialized expertise in post-conflict reconstruction and rehabilitation of critical infrastructure.',
    icon: UserGroupIcon
  },
  {
    title: 'Public-Private Partnership Facilitation',
    description: 'Bridging public and private sectors to create sustainable development solutions and investment opportunities.',
    icon: CheckCircleIcon
  }
]

const projects = [
  {
    title: 'Khartoum Infrastructure Development',
    location: 'Khartoum, Sudan',
    year: '2023-2024',
    description: 'Major urban infrastructure project including road networks, utilities, and commercial developments.',
    status: 'In Progress',
    investment: '$50M+',
    image: '/images/projects/khartoum-infrastructure.jpg'
  },
  {
    title: 'Regional Trade Hub',
    location: 'Port Sudan',
    year: '2022-2023',
    description: 'Development of modern logistics and trade facilitation center for regional commerce.',
    status: 'Completed',
    investment: '$25M+',
    image: '/images/projects/trade-hub.jpg'
  },
  {
    title: 'Industrial Complex Partnership',
    location: 'Kassala State',
    year: '2023-2025',
    description: 'Joint venture industrial manufacturing complex with international partners.',
    status: 'Development',
    investment: '$75M+',
    image: '/images/projects/industrial-complex.jpg'
  }
]

const stats = [
  { label: 'Projects Completed', value: '25+', icon: CheckCircleIcon },
  { label: 'Countries Served', value: '4', icon: GlobeAltIcon },
  { label: 'Investment Value', value: '$200M+', icon: ChartBarIcon },
  { label: 'Years of Experience', value: '15+', icon: CalendarIcon }
]

export default function TalinInternationalPage() {
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
          >
            <Link 
              href="/companies"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Our Companies
            </Link>
            
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                <BuildingOffice2Icon className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Talin International</h1>
                <p className="text-xl md:text-2xl text-blue-100">Creating High-Value Investment Opportunities</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Infrastructure Leadership</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Talin International specializes in creating high-value investment opportunities through smart 
                partnership models. Our expertise spans infrastructure, manufacturing, trade, and services, 
                with projects focused on the reconstruction and development of Sudan and the broader region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We bridge the gap between public and private sectors, facilitating sustainable development 
                initiatives that create lasting economic impact. Our approach combines international best 
                practices with deep local knowledge to deliver exceptional results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Explore Partnership Opportunities
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View Our Projects
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Company Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <BuildingOffice2Icon className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-medium text-lg">Talin International</p>
                  <p className="text-sm opacity-75">/images/companies/talin-international/overview.jpg</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
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

      {/* Services */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for infrastructure development, strategic partnerships, 
              and sustainable economic growth across multiple sectors.
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
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our major infrastructure and development initiatives that are 
              transforming communities and driving economic growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BuildingOffice2Icon className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">{project.title}</p>
                    <p className="text-xs">{project.image}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500">Investment</span>
                      <p className="font-bold text-blue-600">{project.investment}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                      <ArrowRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual documentation of our infrastructure projects and partnership initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Infrastructure Projects', category: 'Construction', image: '/images/companies/talin-international/infrastructure.jpg' },
              { title: 'Partnership Meetings', category: 'Business', image: '/images/companies/talin-international/meetings.jpg' },
              { title: 'Project Planning', category: 'Development', image: '/images/companies/talin-international/planning.jpg' },
              { title: 'Site Operations', category: 'Construction', image: '/images/companies/talin-international/operations.jpg' },
              { title: 'Stakeholder Events', category: 'Events', image: '/images/companies/talin-international/events.jpg' },
              { title: 'Completed Projects', category: 'Achievements', image: '/images/companies/talin-international/completed.jpg' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <BuildingOffice2Icon className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs opacity-75">{item.image}</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-200">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Build Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with Talin International to create sustainable infrastructure solutions 
              that drive economic growth and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start a Partnership
              </Link>
              <Link href="/companies" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Other Companies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
