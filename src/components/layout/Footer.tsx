import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-red-200 bg-green-50 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">AICCEES</h3>
          <p className="text-sm text-gray-600">© {currentYear}. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Legal</h3>
          <nav className="flex flex-col gap-2">
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
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Contact Us</h3>
          <div className="flex flex-col gap-2">
            <a href="mailto:contact@aiccees.com"
              className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4">
              contact@aiccees.com
            </a>
            <a href="tel:+1234567890"
              className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 