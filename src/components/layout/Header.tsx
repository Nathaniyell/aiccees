'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '@/public/images/aicess/aicess_aicess.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false) // Close mobile menu regardless of link type
    setOpenDropdown(null) // Close dropdown

    // Only handle smooth scroll for anchor links (those starting with #)
    if (!href.startsWith('#')) return

    e.preventDefault()

    // Remove the # from the href
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      // Update URL without causing a page reload
      window.history.pushState({}, '', href)
    }
  }

  const navLinks = [
    { href: '/registration', label: 'Registration' },
    { href: '/about', label: 'About AICCEES' },
    { href: '/keynote-speakers', label: 'Keynote Speakers' },
    { href: '/conference-program', label: 'Program' },
  ]

  const dropdownMenus = {
    conference: {
      label: 'Conference Info',
      links: [
        { href: '/#about', label: 'About' },
        { href: '/#speakers', label: 'Speakers' },
        { href: '/#submissions', label: 'Submit Paper' },
        { href: '/#participation', label: 'Conference Fees' },
      ]
    },
    resources: {
      label: 'Resources',
      links: [
        { href: '/journal', label: 'Journal' },
        { href: '/gallery', label: 'Gallery' },
      ]
    },
    business: {
      label: 'More Info',
      links: [
        { href: '/exhibitions', label: 'Exhibitions' },
        { href: '/grants', label: 'Grants' },
        { href: '/sponsors', label: 'Sponsorship' },
        { href: '/partners', label: 'Partners' },
      ]
    }
  }

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <header className="sticky top-0 z-[50] border-b border-green-500 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-11/12 mx-auto flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="AICCEES" className='w-16 h-16' />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6 items-center">
          {/* Standalone Registration link */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="font-medium hover:text-green-600 hover:underline underline-offset-4"
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown Menus */}
          {Object.entries(dropdownMenus).map(([key, menu]) => (
            <div key={key} className="relative">
              <button
                className="font-medium hover:text-green-600 flex items-center gap-1"
                onClick={() => toggleDropdown(key)}
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {menu.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Content */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 transition-all duration-200 ${
                  openDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {menu.links.map((link) => (
                  <Link
                    key={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 top-20 z-[50] w-screen h-[calc(100vh-5rem)] bg-green-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          } md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Standalone Registration link */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="block text-xl font-medium text-white hover:text-green-200"
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Dropdown Menus */}
            {Object.entries(dropdownMenus).map(([key, menu]) => (
              <div key={key} className="text-center">
                <div className="text-xl font-medium text-white mb-4">{menu.label}</div>
                <div className="space-y-4">
                  {menu.links.map((link) => (
                    <Link
                      key={link.href}
                      className="block text-lg text-green-200 hover:text-white"
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
} 