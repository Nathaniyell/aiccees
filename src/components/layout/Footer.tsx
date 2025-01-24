import Link from 'next/link'
import logo from '@/public/images/aicess/aicess_aicess.png'
import ToveroLogo from '@/public/tovero-logo.png'
import Image from 'next/image';
import {Mail, Phone} from 'lucide-react'
import uniport from "@/public/images/home/unipor.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-green-200 bg-green-50">
      {/* Main Footer Content */}
      <div className="w-11/12 md:w-10/12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-6">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="transition-transform hover:scale-105">
              <Image src={logo} alt="AICCEES" className="w-20 h-20" />
            </Link>
            <p className="text-sm text-gray-600 font-medium">© {currentYear}. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-xl text-green-800 mb-4">Legal</h3>
            <nav className="flex flex-col items-center gap-3">
              <Link 
                className="text-sm text-gray-600 hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4"
                href="https://docs.google.com/document/d/1vGj2MvQZk-rigl6zlAEZW-J_mRo19fp_/edit?usp=sharing&ouid=103583805913807710533&rtpof=true&sd=true">
                Privacy Policy
              </Link>
              <Link 
                className="text-sm text-gray-600 hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4"
                href="https://docs.google.com/document/d/1vGj2MvQZk-rigl6zlAEZW-J_mRo19fp_/edit?usp=sharing&ouid=103583805913807710533&rtpof=true&sd=true">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-xl text-green-800 mb-4">Contact Us</h3>
            <div className="flex flex-col items-center md:items-end gap-3">
              <a href="mailto:aiccees@uniport.edu.ng"
                className="text-sm text-gray-600 hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4 flex items-center gap-2">
                <Mail className='w-4 h-4 text-green-700' />
                aiccees@uniport.edu.ng
              </a>
              <a href="tel:+2348037641860"
                className="text-sm text-gray-600 hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4 flex items-center gap-2">
                <Phone className='w-4 h-4 text-green-700' />
                +2348037641860
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Organizer Section */}
      <div className="w-full py-6 border-t border-t-red-600">
        <div className="w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 md">
          <h5 className="text-lg font-medium">Organized by:</h5>
          <Link href="https://toveroenergy.com" target="_blank" className="transition-transform hover:scale-105">
            <Image 
              src={ToveroLogo} 
              alt="Tovero Energy Limited"
              className="max-h-8 w-auto" 
            />
          </Link>
          <p>in Collaboration with </p>
          <Image 
              src={uniport}
              alt="Uniport"
              className="max-h-8 w-auto" 
            />
          <span className='font-medium text-green-800 flex items-center'>University of Port Harcourt</span> 
        </div>
      </div>
    </footer>
  )
}