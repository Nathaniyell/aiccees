'use client'
import React, { useEffect, useState } from 'react'
import whatsappIcon from '@/public/images/whatsapp.png'
import logo from '@/public/images/aicess/aicess_aicess.png'
import Image from 'next/image'
import { Send, X } from 'lucide-react'
import { officeNumber } from '@/lib/utils'

const WhatsappLive = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([]);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setIsVisible(scrolled > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChatOpen = () => {
        setIsChatOpen(true);
        setMessages([
            {
                text: "Hi there 👋\n\nWelcome to AICCEES 2025\nHow can we help you?",
                isBot: true
            }
        ]);
        setUserInput('');
    };

    const handleUserMessage = () => {
        if (!userInput.trim()) return;

        // Add user message
        const message = userInput;
        setMessages(prev => [...prev, { text: message, isBot: false }]);
        setUserInput('');

        // Open WhatsApp with the message
        window.open(
            `https://api.whatsapp.com/send/?phone=${officeNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`,
            '_blank'
        );
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleUserMessage();
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-[999] flex flex-col items-start space-y-4">
            {isChatOpen && (
                <div className="w-[330px] max-h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#075e54] text-white p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                                    <Image
                                        src={logo}
                                        alt="AICCEES Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">AICCEES 2025</h3>
                                    <p className="text-[10px] opacity-90">Typically replies in a few hours</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="text-white hover:opacity-80"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="h-[50vh] overflow-y-auto p-4 bg-[#efeae2]">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
                            >
                                <div
                                    className={`rounded-lg px-4 py-2 max-w-[80%] ${message.isBot
                                        ? 'bg-white text-black'
                                        : 'bg-[#dcf8c6] text-black'
                                        }`}
                                >
                                    <p className="whitespace-pre-line">{message.text}</p>
                                    <span className="text-[10px] text-gray-500 flex justify-end">
                                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-[#f0f2f5] flex items-center space-x-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message"
                            className="flex-1 py-2 px-4 rounded-full border-none focus:outline-none bg-white"
                        />
                        <button
                            onClick={handleUserMessage}
                            disabled={!userInput.trim()}
                            className="w-10 h-10 rounded-full bg-[#00a884] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* WhatsApp Icon Button */}
            <button
                onClick={handleChatOpen}
                className="relative bg-[#25d366] rounded-full flex items-center justify-center shadow-lg size-14 hover:bg-[#1ea952] transition-colors"
            >
                <span className="absolute inset-0 bg-[#25d366] rounded-full animate-ping opacity-75"></span>
                <Image
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="object-contain rounded-full relative"
                />
            </button>
        </div>
    );
};

export default WhatsappLive