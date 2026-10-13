'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'The Group', href: '/about' },
      { name: 'Our Founder', href: '/about#founder' },
      { name: 'Our Message', href: '/about#message' }
    ]
  },
  { 
    name: 'Our Companies', 
    href: '/companies',
    dropdown: [
      { name: 'Talin International', href: '/companies/talin-international' },
      { name: 'Utopia Global Trading', href: '/companies/utopia-global' },
      { name: 'Hollywood Cosmetics', href: '/companies/hollywood-cosmetics' },
      { name: 'Talin Properties', href: '/companies/talin-properties' }
    ]
  },
  { name: 'Our Factories', href: '/factories' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
  const headerRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile dropdown when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setActiveMobileDropdown(null)
    }
  }, [mobileMenuOpen])

  return (
    <header className="section-bg border-b sticky top-0 z-50 backdrop-blur-md" ref={headerRef} style={{backgroundColor: 'var(--background)', borderColor: 'var(--border)'}}>
      <nav className="container-max flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Talin Global Group</span>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{color: 'var(--foreground)'}}>Talin Global Group</h1>
                <p className="text-xs" style={{color: 'var(--muted-foreground)'}}>Building Sustainable Partnerships</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            style={{color: 'var(--foreground)'}}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative"
            >
              {item.dropdown ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="nav-link flex items-center leading-6"
                >
                  {item.name}
                  <ChevronDownIcon 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="nav-link flex items-center leading-6"
                >
                  {item.name}
                </Link>
              )}
              
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-xl ring-1 ring-opacity-5 animate-fade-in z-50" style={{backgroundColor: 'var(--popover)', borderColor: 'var(--border)'}}>
                  <div className="py-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-4 py-2 text-sm transition-colors duration-200"
                        style={{color: 'var(--popover-foreground)'}}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'var(--accent)'
                          e.target.style.color = 'var(--primary)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent'
                          e.target.style.color = 'var(--popover-foreground)'
                        }}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-10 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{backgroundColor: 'var(--background)', borderColor: 'var(--border)'}}>
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <span className="text-lg font-bold" style={{color: 'var(--foreground)'}}>Talin Global</span>
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5"
                  style={{color: 'var(--foreground)'}}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <button
                          onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.name ? null : item.name)}
                          className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200"
                          style={{color: 'var(--foreground)'}}
                          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent)'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                          {item.name}
                          <ChevronDownIcon 
                            className={`h-5 w-5 transition-transform duration-200 ${
                              activeMobileDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200"
                          style={{color: 'var(--foreground)'}}
                          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent)'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.dropdown && activeMobileDropdown === item.name && (
                        <div className="ml-6 space-y-1 mt-2">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="-mx-3 block rounded-lg px-3 py-1 text-sm leading-7 transition-colors duration-200"
                              style={{color: 'var(--muted-foreground)'}}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'var(--accent)'
                                e.target.style.color = 'var(--primary)'
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                                e.target.style.color = 'var(--muted-foreground)'
                              }}
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setActiveMobileDropdown(null)
                              }}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
