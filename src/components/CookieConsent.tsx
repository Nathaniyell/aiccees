"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Shield, Cookie, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("aiccees-cookies-accepted");
    
    if (!hasAcceptedCookies) {
      // Show consent popup after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
        // Add a small delay for smooth animation
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("aiccees-cookies-accepted", "true");
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  const declineCookies = () => {
    localStorage.setItem("aiccees-cookies-declined", "true");
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-end sm:items-center justify-center p-4">
      <Card className={`w-full max-w-md sm:max-w-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Cookie Policy
              </CardTitle>
            </div>
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, 
              analyze site traffic, and personalize content. By continuing to use our site, 
              you consent to our use of cookies.
            </p>
            
            <div className="flex items-start gap-2 text-xs text-gray-500">
              <Cookie className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>
                This website uses essential cookies for functionality and analytics cookies 
                to help us improve your experience. You can learn more in our{" "}
                <Link 
                  href="/" 
                  className="text-green-600 hover:text-green-700 underline inline-flex items-center gap-1"
                >
                  Privacy Policy
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={acceptCookies}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Accept All Cookies
            </Button>
            <Button
              onClick={declineCookies}
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Decline
            </Button>
          </div>

          <div className="text-xs text-gray-400 text-center">
            By clicking "Accept All Cookies", you agree to our use of cookies and 
            data processing as described in our Privacy Policy.
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 