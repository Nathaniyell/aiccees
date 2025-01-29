import React from 'react'
import whatsappIcon from '@/public/images/whatsapp.png'
import Image from 'next/image'

const WhatsappLive = () => {
    return (
        <div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                className="fixed bottom-8 left-4 z-50"
            >
                <span className='absolute left-[7px] top-[7px] size-10 -z-50'>
                    <span className='flex size-full items-center justify-center bg-green-500 rounded-full opacity-75'>

                        <Image src={whatsappIcon} alt="Whatsapp" className="w-16 h-16 z-50" />
                    </span>

                </span>
            </a>
        </div>
    )
}

export default WhatsappLive