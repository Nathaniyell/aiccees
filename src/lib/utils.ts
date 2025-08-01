import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const officeNumber = '+2348037641860'
export const formatPrice = (price: number, isOpenAccess = false, showNGN = false) => {
  if (showNGN) {
    if (isOpenAccess) {
      return `₦400,000.00`
    }
    return `₦${(price * 1000).toLocaleString()}`
  }
  if (isOpenAccess) {
    return `$400.00`
  }
  return `$${price.toLocaleString()}`
}