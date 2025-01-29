'use client'
import React, { useEffect, useState } from 'react'
import whatsappIcon from '@/public/images/whatsapp.png'
import Image from 'next/image'

const WhatsappLive = () => {
    const [isVisible, setIsVisible] = useState(false);
    const whatsappNumber = '+2347035151088'
    const whatsappMessage = 'Dear Dr. Veronica, I want to enquire about AICCEES 2025'

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setIsVisible(scrolled > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="relative">
            <a href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${whatsappMessage}&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer"
                className="fixed bottom-20 left-4 z-[9999]"
            >
                <span className='absolute left-0 top-0 size-16 animate-pulse'>
                    <span className='flex size-full items-center justify-center bg-green-500 rounded-full opacity-75 shadow-lg'>
                        <Image
                            src={whatsappIcon}
                            alt="Whatsapp"
                            className="size-14 rounded-full p-2 hover:scale-110 transition-transform duration-300"
                        />
                    </span>
                </span>
            </a>
        </div>
    )
}

export default WhatsappLive