"use client"
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className={`
            fixed 
            bottom-4 
            right-4 
            z-50 
            p-2 
            h-10
            w-10
            anima
            rounded-full 
            bg-red-600 
            hover:bg-red-700 
            transition-all 
            duration-300 
            animate-fade-in
          `}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </Button>
      )}
    </>
  )
} 