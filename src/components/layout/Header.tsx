import Link from 'next/link'
// import { Globe } from 'lucide-react'
import logo from '@/public/images/aicess/aicess_aicess.png'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-500 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-11/12 mx-auto flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="AICCEES" className='w-12 h-12' />
          {/* <span className="font-bold text-green-600">AICCEES</span> */}
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="font-medium hover:text-green-600 hover:underline underline-offset-4" href="#about">About</Link>
          <Link className="font-medium hover:text-green-600 hover:underline underline-offset-4" href="#speakers">Speakers</Link>
          <Link className="font-medium hover:text-green-600 hover:underline underline-offset-4" href="#themes">Themes</Link>
          <Link className="font-medium hover:text-green-600 hover:underline underline-offset-4" href="#sponsors">Sponsors</Link>
        </nav>
      </div>
    </header>
  )
} 