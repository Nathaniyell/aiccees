import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '@/public/images/aicess/aicess_aicess.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#themes', label: 'Themes' },
    { href: '#publish', label: 'Publish Paper' },
    { href: '#sponsors', label: 'Cooking Demonstration' },
    { href: '#sponsors', label: 'Sponsors' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-500 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
        <div
          className={`fixed inset-y-0 right-0 top-20 transform bg-green-700/95 h-screen w-screen  shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="block font-medium text-white hover:text-green-600"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
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