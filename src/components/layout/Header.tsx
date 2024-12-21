'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '@/public/images/aicess/aicess_aicess.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false) // Close mobile menu

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
    { href: '#about', label: 'About' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#themes', label: 'Themes' },
    { href: '#publish', label: 'Publish Paper' },
    { href: '#cooking', label: 'Cooking Demonstration' },
    { href: '/partners', label: 'Partners' },
  ]

  return (
    <header className="sticky top-0 z-[50] border-b border-green-500 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-11/12 mx-auto flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="AICCEES" className='w-16 h-16' />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6">
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
        <div className={`fixed inset-0 top-20 z-[50] w-screen h-[calc(100vh-5rem)] bg-green-800 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        } md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
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
          </div>
        </div>
      </div>
    </header>
  )
} 