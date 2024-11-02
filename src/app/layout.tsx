import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop"

export const metadata: Metadata = {
  metadataBase: new URL('https://toveroenergy.com'), // Replace with your actual domain
  title: {
    default: "Africa International Conference on Clean Energy & Energy Storage",
    template: "%s | AICEES",
  },
  description: "Africa International Conference on Clean Energy & Energy Storage - Empowering Africa's Future Through Clean Energy Innovation and Sustainable Storage Solutions",
  keywords: [
    "Clean Energy Conference",
    "Energy Storage",
    "African Energy",
    "Renewable Energy",
    "Sustainable Energy",
    "Energy Innovation",
    "African Conference",
    "Clean Technology",
    "Energy Solutions",
    "Sustainable Development",
    "Green Energy",
    "Energy Transition",
  ],
  authors: [{ name: "Nathaniel Essien", url: "https://nathanielessien.vercel.app" }],
  creator: "Nathaniel Essien",
  publisher: "AICEES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toveroenergy.com",
    siteName: "AICEES",
    title: "Africa International Conference on Clean Energy & Energy Storage",
    description: "Africa International Conference on Clean Energy & Energy Storage - Empowering Africa's Future Through Clean Energy Innovation and Sustainable Storage Solutions",
    images: [
      {
        url: "../../public/images/herobg2.jpg",
        width: 1200,
        height: 630,
        alt: "AICEES Conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa International Conference on Clean Energy & Energy Storage",
    description: "Africa International Conference on Clean Energy & Energy Storage - Empowering Africa's Future Through Clean Energy Innovation and Sustainable Storage Solutions",
    creator: "@ToveroEnergy", // Replace with actual Twitter handle
    images: ["../../public/images/herobg2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Replace with actual verification code
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  alternates: {
    canonical: "https://toveroenergy.com",
    languages: {
      'en-US': 'https://toveroenergy.com',
      // Add other language versions if available
    },
  },
  category: "Conference",
};

// Add JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Africa International Conference on Clean Energy & Energy Storage",
  description: "Empowering Africa's Future Through Clean Energy Innovation and Sustainable Storage Solutions",
  startDate: "2024-03-18", // Replace with actual date
  endDate: "2025-12-25", // Replace with actual date
  location: {
    "@type": "Place",
    name: "Conference Venue Name",
    address: {
      "@type": "PostalAddress",
      streetAddress: "University of Port Hacourt",
      addressLocality: "Port Harcourt",
      addressRegion: "Rivers",
      postalCode: "Postal Code",
      addressCountry: "Nigeria"
    }
  },
  organizer: {
    "@type": "Organization",
    name: "AICEES",
    url: "https://toveroenergy.com"
  },
  // Add more structured data as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
