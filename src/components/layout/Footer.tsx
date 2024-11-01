import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-red-200 bg-green-50 py-6">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6 text-center">
        <p className="text-sm text-gray-600">© AICCEES 2024. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm text-gray-600 hover:text-green-600 hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
} 