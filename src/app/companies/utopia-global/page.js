'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CogIcon,
  TruckIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon,
  CalendarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Complete Factory Setup & Installation',
    description: 'End-to-end factory establishment including site preparation, equipment installation, and commissioning.',
    icon: BuildingOffice2Icon
  },
  {
    title: 'Beverage Production Line Equipment',
    description: 'State-of-the-art machinery for water, juices, soft drinks, and specialized beverage manufacturing.',
    icon: CogIcon
  },
  {
    title: 'Food Processing Machinery',
    description: 'Advanced equipment for food processing, packaging, and quality control across various food products.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Recycling Plant Equipment',
    description: 'Modern recycling machinery for plastic, paper, and material recovery operations.',
    icon: TruckIcon
  },
  {
    title: 'Oil Refinery Machinery',
    description: 'Specialized equipment for oil processing, refining, and petrochemical production facilities.',
    icon: ChartBarIcon
  },
  {
    title: 'Packaging & Bottling Systems',
    description: 'Automated packaging solutions for bottles, containers, and various product packaging needs.',
    icon: CheckCircleIcon
  }
]

const equipment = [
  {
    category: 'Beverage Production',
    items: ['Water Treatment Systems', 'Filling Machines', 'Capping Equipment', 'Labeling Systems'],
    origin: 'Europe & Asia',
    image: '/images/equipment/beverage-line.jpg'
  },
  {
    category: 'Food Processing',
    items: ['Mixing Equipment', 'Cooking Systems', 'Packaging Machines', 'Quality Control'],
    origin: 'Germany & Italy',
    image: '/images/equipment/food-processing.jpg'
  },
  {
    category: 'Recycling Systems',
    items: ['Sorting Equipment', 'Shredders', 'Washing Systems', 'Pelletizing Machines'],
    origin: 'China & Europe',
    image: '/images/equipment/recycling.jpg'
  },
  {
    category: 'Oil & Petrochemical',
    items: ['Distillation Columns', 'Heat Exchangers', 'Pumping Systems', 'Control Systems'],
    origin: 'International',
    image: '/images/equipment/oil-refinery.jpg'
  }
]

const projects = [
  {
    title: 'Dancon Beverage Factory Setup',
    location: 'Khartoum, Sudan',
    year: '2020',
    description: 'Complete installation of beverage production line with capacity of 50M bottles per year.',
    equipment: 'European filling & packaging systems',
    status: 'Operational',
    image: '/images/projects/dancon-setup.jpg'
  },
  {
    title: 'Recycling Plant Installation',
    location: 'Bahri, Sudan',
    year: '2021',
    description: 'Modern plastic recycling facility with advanced sorting and processing equipment.',
    equipment: 'Chinese & European machinery',
    status: 'Operational',
    image: '/images/projects/recycling-plant.jpg'
  },
  {
    title: 'Food Processing Complex',
    location: 'Kassala, Sudan',
    year: '2022',
    description: 'Multi-line food processing facility with automated packaging and quality control.',
    equipment: 'Italian processing lines',
    status: 'In Progress',
    image: '/images/projects/food-complex.jpg'
  }
]

const stats = [
  { label: 'Factories Installed', value: '15+', icon: BuildingOffice2Icon },
  { label: 'Countries Sourced', value: '8', icon: GlobeAltIcon },
  { label: 'Equipment Types', value: '50+', icon: CogIcon },
  { label: 'Years Experience', value: '12+', icon: CalendarIcon }
]

export default function UtopiaGlobalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/companies"
              className="inline-flex items-center text-green-200 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Our Companies
            </Link>
            
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                <CogIcon className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Utopia Global Trading</h1>
                <p className="text-xl md:text-2xl text-green-100">Your Gateway to Industrial Excellence</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industrial Equipment & Installation Specialists</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Utopia Global General Trading imports and installs factories and machinery for beverages, 
                food products, recycling, oil, and packaging industries. We source cutting-edge equipment 
                from China, Europe, and Asia, offering both new and refurbished solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our comprehensive technical support ensures seamless installation, commissioning, and 
                ongoing maintenance. We pride ourselves on delivering turnkey solutions that maximize 
                operational efficiency and return on investment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-green-600 hover:bg-green-700">
                  Request Equipment Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/factories" className="btn-secondary">
                  View Our Installations
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Company Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-green-600">
                  <CogIcon className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-medium text-lg">Equipment & Machinery</p>
                  <p className="text-sm opacity-75">/images/companies/utopia-global/overview.jpg</p>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-xl mb-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to final commissioning, we provide comprehensive solutions 
              for industrial equipment and factory installations.
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
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Equipment Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of industrial equipment sourced from leading manufacturers worldwide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {equipment.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                {/* Equipment Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <CogIcon className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">{category.category}</p>
                    <p className="text-xs">{category.image}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {category.origin}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recent Installations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successful factory setups and equipment installations across various industries
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
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center text-green-600">
                    <CogIcon className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">{project.title}</p>
                    <p className="text-xs">{project.image}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Operational' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
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
                  
                  <div className="border-t pt-4">
                    <span className="text-xs text-gray-500">Equipment Source</span>
                    <p className="font-medium text-gray-900">{project.equipment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Technical Support</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Installation & Commissioning</h4>
                    <p className="text-gray-600">Expert installation teams ensure proper setup and commissioning of all equipment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Training & Operations</h4>
                    <p className="text-gray-600">Comprehensive operator training and operational guidance for optimal performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Maintenance & Support</h4>
                    <p className="text-gray-600">Ongoing maintenance programs and technical support to ensure continuous operation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Spare Parts & Upgrades</h4>
                    <p className="text-gray-600">Reliable spare parts supply and equipment upgrade services for long-term efficiency.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-green-600">
                  <WrenchScrewdriverIcon className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-medium text-lg">Technical Support</p>
                  <p className="text-sm">Service Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Modernize Your Production?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Partner with Utopia Global Trading for world-class industrial equipment 
              and comprehensive installation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Equipment Quote
              </Link>
              <Link href="/companies" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Other Companies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
