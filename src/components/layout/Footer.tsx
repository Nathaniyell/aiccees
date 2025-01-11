import Link from 'next/link'
import logo from '@/public/images/aicess/aicess_aicess.png'
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-red-200 bg-green-50 py-12">
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="AICCEES" className='w-16 h-16' />
        </Link>
          <p className="text-sm text-gray-600">© {currentYear}. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg text-green-800 mb-2">Legal</h3>
          <nav className="flex flex-col items-center gap-2">
            <Link className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4"
              href="https://docs.google.com/document/d/1vGj2MvQZk-rigl6zlAEZW-J_mRo19fp_/edit?usp=sharing&ouid=103583805913807710533&rtpof=true&sd=true">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4"
              href="https://docs.google.com/document/d/1vGj2MvQZk-rigl6zlAEZW-J_mRo19fp_/edit?usp=sharing&ouid=103583805913807710533&rtpof=true&sd=true">
              Terms of Service
            </Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold text-lg text-green-800 mb-2">Contact Us</h3>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="mailto:aiccees@uniport.edu.ng"
              className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4">
              aiccees@uniport.edu.ng
            </a>
            <a href="tel:+2348037641860"
              className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4">
              +2348037641860
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 