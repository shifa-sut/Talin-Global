'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const companyLinks = [
  { name: 'Talin International', href: '/companies#talin-international' },
  { name: 'Utopia Global Trading', href: '/companies#utopia-global' },
  { name: 'Hollywood Cosmetics', href: '/companies#hollywood-cosmetics' },
  { name: 'Talin Properties', href: '/companies#talin-properties' }
]

const factoryLinks = [
  { name: 'Dancon Factory', href: '/factories#dancon' },
  { name: 'Recycle Factory', href: '/factories#recycle' },
  { name: 'Relax Factory', href: '/factories#relax' },
  { name: 'Tancka Factory', href: '/factories#tancka' },
  { name: 'Profile Factory', href: '/factories#profile' }
]

const quickLinks = [
  { name: 'About the Group', href: '/about' },
  { name: 'Our Message', href: '/about#message' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white border-t" style={{backgroundColor: '#1a1a1a', borderColor: 'var(--border)'}}>
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Talin Global Group</h2>
                  <p className="text-blue-400">Building Sustainable Partnerships</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                A diversified conglomerate with operations spanning real estate, manufacturing, 
                cosmetics, trading, and industrial solutions. Creating sustainable value through 
                strategic partnerships across Sudan, UAE, Egypt, Saudi Arabia, and beyond.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Khartoum, Sudan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">+249 XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">info@talinglobal.com</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      {link.name}
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Our Companies */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Companies</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      {link.name}
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Our Factories */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-6">Our Factories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {factoryLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm"
                >
                  {link.name}
                  <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-blue-100 mb-6">
              Discover opportunities for sustainable partnerships and global excellence.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Talin Global Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
