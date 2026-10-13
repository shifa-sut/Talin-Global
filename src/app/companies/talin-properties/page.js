'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  HomeIcon,
  LightBulbIcon,
  CogIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon,
  CalendarIcon,
  Squares2X2Icon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Lightweight Brick Technology',
    description: 'Revolutionary construction material that reduces building time by 50% while maintaining superior quality and durability.',
    icon: Squares2X2Icon
  },
  {
    title: 'Luxury Villa Construction',
    description: 'Premium residential developments featuring modern architecture and high-end finishes.',
    icon: HomeIcon
  },
  {
    title: 'Residential Development Projects',
    description: 'Comprehensive community developments with integrated amenities and sustainable design.',
    icon: BuildingOffice2Icon
  },
  {
    title: 'Sustainable Building Solutions',
    description: 'Eco-friendly construction practices that minimize environmental impact while maximizing efficiency.',
    icon: LightBulbIcon
  },
  {
    title: 'Engineering Consultation',
    description: 'Expert engineering services ensuring adherence to global standards and best practices.',
    icon: CogIcon
  },
  {
    title: 'Project Management Services',
    description: 'Comprehensive project oversight from planning through completion ensuring timely delivery.',
    icon: ChartBarIcon
  }
]

const projects = [
  {
    title: 'Al-Riyadh Luxury Villas',
    location: 'Khartoum, Sudan',
    year: '2023-2024',
    status: 'Under Construction',
    units: '50 Villas',
    type: 'Luxury Residential',
    features: ['Lightweight Brick', 'Modern Architecture', 'Private Gardens'],
    description: 'Premium villa community featuring innovative lightweight brick technology and contemporary design.',
    image: '/images/projects/riyadh-villas.jpg'
  },
  {
    title: 'Green Valley Residences',
    location: 'Bahri, Sudan',
    year: '2022-2023',
    status: 'Completed',
    units: '120 Units',
    type: 'Family Housing',
    features: ['Sustainable Design', 'Community Amenities', 'Energy Efficient'],
    description: 'Sustainable residential community with integrated parks and recreational facilities.',
    image: '/images/projects/green-valley.jpg'
  },
  {
    title: 'Modern Heights Complex',
    location: 'Omdurman, Sudan',
    year: '2024-2025',
    status: 'Planning',
    units: '200 Apartments',
    type: 'Mixed Development',
    features: ['High-Rise Living', 'Commercial Spaces', 'Smart Building'],
    description: 'Modern mixed-use development combining residential and commercial spaces.',
    image: '/images/projects/modern-heights.jpg'
  }
]

const innovations = [
  {
    title: 'Lightweight Brick Technology',
    description: 'Our proprietary lightweight brick technology reduces construction time by 50% while providing superior insulation and durability.',
    benefits: ['50% Faster Construction', 'Better Insulation', 'Cost Effective', 'Environmentally Friendly'],
    image: '/images/innovations/lightweight-brick.jpg'
  },
  {
    title: 'Sustainable Construction',
    description: 'Eco-friendly building practices that minimize waste and energy consumption while maximizing comfort and efficiency.',
    benefits: ['Reduced Carbon Footprint', 'Energy Efficiency', 'Waste Minimization', 'Healthy Living'],
    image: '/images/innovations/sustainable.jpg'
  },
  {
    title: 'Smart Building Integration',
    description: 'Modern technology integration for enhanced comfort, security, and energy management in residential developments.',
    benefits: ['Smart Home Systems', 'Security Integration', 'Energy Management', 'Future Ready'],
    image: '/images/innovations/smart-building.jpg'
  }
]

const stats = [
  { label: 'Projects Completed', value: '25+', icon: BuildingOffice2Icon },
  { label: 'Residential Units', value: '1000+', icon: HomeIcon },
  { label: 'Construction Innovation', value: '50%', icon: LightBulbIcon },
  { label: 'Years Experience', value: '8+', icon: CalendarIcon }
]

export default function TalinPropertiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/companies"
              className="inline-flex items-center text-purple-200 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Our Companies
            </Link>
            
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                <BuildingOffice2Icon className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Talin Properties</h1>
                <p className="text-xl md:text-2xl text-purple-100">Building Tomorrow, Today</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Innovative Real Estate Construction</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Talin Properties is a leader in innovative real estate construction in Sudan. We introduced 
                revolutionary lightweight brick technology that enables faster, more cost-effective, and 
                sustainable building solutions without compromising quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our portfolio includes luxury villas and residential developments that adhere to global 
                engineering standards while incorporating local expertise and international innovation. 
                We&apos;re transforming the construction industry with smart, sustainable solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-purple-600 hover:bg-purple-700">
                  Start Your Project
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/gallery" className="btn-secondary">
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
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-purple-600">
                  <BuildingOffice2Icon className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-medium text-lg">Real Estate Innovation</p>
                  <p className="text-sm opacity-75">/images/companies/talin-properties/overview.jpg</p>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Innovations */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Construction Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the construction industry with breakthrough technologies and sustainable building practices
            </p>
          </motion.div>

          <div className="space-y-16">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{innovation.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{innovation.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {innovation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {/* Innovation Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-purple-600">
                      <Squares2X2Icon className="h-16 w-16 mx-auto mb-3" />
                      <p className="font-medium">{innovation.title}</p>
                      <p className="text-sm opacity-75">{innovation.image}</p>
                    </div>
                  </div>
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
              Comprehensive real estate development services from concept to completion
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
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
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
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our innovative residential developments that set new standards in construction
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
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="text-center text-purple-600">
                    <BuildingOffice2Icon className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">{project.title}</p>
                    <p className="text-xs">{project.image}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Under Construction' ? 'bg-blue-100 text-blue-800' :
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
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Type</span>
                      <span className="text-sm font-medium text-gray-900">{project.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Units</span>
                      <span className="text-sm font-medium text-gray-900">{project.units}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual documentation of our construction innovation and completed developments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Villa Construction', category: 'Luxury Homes', image: '/images/gallery/villa-construction.jpg' },
              { title: 'Lightweight Brick Process', category: 'Innovation', image: '/images/gallery/brick-process.jpg' },
              { title: 'Modern Architecture', category: 'Design', image: '/images/gallery/modern-design.jpg' },
              { title: 'Community Development', category: 'Residential', image: '/images/gallery/community.jpg' },
              { title: 'Sustainable Features', category: 'Green Building', image: '/images/gallery/sustainable.jpg' },
              { title: 'Interior Finishing', category: 'Quality', image: '/images/gallery/interiors.jpg' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-purple-100 aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center text-purple-600">
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
      <section className="section-padding bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Dream with Innovation
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Experience the future of construction with Talin Properties&apos; revolutionary 
              lightweight brick technology and sustainable building solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </Link>
              <Link href="/companies" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Other Companies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
