'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface Tier {
    name: string
    description: string
    priceUSD: number
    priceNGN: number
    benefits: string[]
    featured?: boolean
}

const tiers: Tier[] = [
    {
        name: "Platinum",
        description: "The highest level of sponsorship with maximum visibility",
        priceUSD: 10000,
        priceNGN: 7000000,
        featured: true,
        benefits: [
            "Keynote speaking opportunity",
            "Research paper presentation and publication",
            "Prominent branding on conference materials",
            "Advertising opportunities during event",
            "Recognition in conference materials",
            "Panel discussion opportunity",
            "Direct contact to presenters",
            "Soft copy of Book of Abstract"
        ]
    },
    {
        name: "Gold",
        description: "Premium sponsorship with extensive benefits",
        priceUSD: 5000,
        priceNGN: 4500000,
        benefits: [
            "Research paper presentation and publication",
            "Prominent branding on conference materials",
            "Advertising opportunities during event",
            "Recognition in conference materials",
            "Direct contact to presenters"
        ]
    },
    {
        name: "Silver",
        description: "Mid-tier sponsorship package",
        priceUSD: 3000,
        priceNGN: 1050000,
        benefits: [
            "Research paper presentation and publication",
            "Advertising opportunities during event",
            "Recognition in conference materials"
        ]
    },
    {
        name: "Bronze",
        description: "Entry-level sponsorship opportunity",
        priceUSD: 1500,
        priceNGN: 525000,
        benefits: [
            "Research paper presentation and publication",
            "Recognition in conference materials"
        ]
    },
    {
        name: "Session",
        description: "Sponsor specific conference sessions",
        priceUSD: 500,
        priceNGN: 175000,
        benefits: [
            "Session-specific recognition",
            "Recognition in conference materials"
        ]
    }
]

export default function Partnerships() {
    const [showNGN, setShowNGN] = useState(false)
    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({})

    const toggleCard = (tierName: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [tierName]: !prev[tierName]
        }))
    }

    return (
        <div className="pb-12 bg-gray-50">
            <div className="px-4 md:px-6">
                <div className="text-center space-y-4 mb-4">

                    <div className="flex items-center justify-center space-x-2">
                        <Label htmlFor="currency">Show prices in NGN</Label>
                        <Switch
                            id="currency"
                            checked={showNGN}
                            onCheckedChange={setShowNGN}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {tiers.map((tier) => (
                        <Card
                            key={tier.name}
                            className={`flex flex-col h-full ${tier.featured
                                ? 'border-primary shadow-lg scale-105'
                                : ''
                                }`}
                        >
                            <CardHeader>
                                <CardTitle className="text-green-700">{tier.name} Sponsorship</CardTitle>
                                <CardDescription className="text-slate-500">{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <div className="mb-4">
                                    <span className="text-4xl font-bold">
                                        {showNGN
                                            ? `₦${tier.priceNGN.toLocaleString()}`
                                            : `$${tier.priceUSD.toLocaleString()}`
                                        }
                                    </span>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <ul className={`space-y-2 ${expandedCards[tier.name] ? '' : 'max-h-[100px] overflow-hidden'}`}>
                                        {tier.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {tier.benefits.length >= 3 && (
                                        <div className="mt-4 grid place-items-center pt-2 border-t">
                                            <Button
                                           
                                                className="p-0 h-auto bg-black text-white px-2 py-1"
                                                onClick={() => toggleCard(tier.name)}
                                            >
                                                {expandedCards[tier.name] ? 'Show Less' : 'Read More'}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
         
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">
                        Interested in a custom sponsorship package? Contact us to discuss your needs.
                    </p>
                    <Button variant="outline" size="lg">
                        Contact for Custom Package
                    </Button>
                </div>
            </div>
        </div>
    )
}

