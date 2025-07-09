'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Exhibitions from './exhibitions'

interface ParticipationType {
  category: string
  physical: {
    regular: number
    student?: number
  }
  virtual: {
    regular: number
    student?: number
  }
}

const participationTypes: ParticipationType[] = [
  {
    category: "Audience Member Only",
    physical: {
      regular: 30,
      student: 20000
    },
    virtual: {
      regular: 20,
      student: 20000
    }
  },
  {
    category: "Only Paper Presentation",
    physical: {
      regular: 50
    },
    virtual: {
      regular: 40
    }
  },
  {
    category: "Paper Presentation + Abstract Publication",
    physical: {
      regular: 100
    },
    virtual: {
      regular: 100
    }
  },
  {
    category: "Paper Presentation + Paper Publication + Abstract Publication",
    physical: {
      regular: 150
    },
    virtual: {
      regular: 150
    }
  },
  {
    category: "Paper Presentation + Open Access Paper Publication + Abstract Publication",
    physical: {
      regular: 500  // Base fee + Open Access fee
    },
    virtual: {
      regular: 500  // Base fee + Open Access fee
    }
  }
]

export default function ParticipationSection() {
  const [showNGN, setShowNGN] = useState(false)

  const formatPrice = (price: number, isOpenAccess = false) => {
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

  return (
    <div className="py-12 bg-teal-50" id='participation'>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#AA0000]">Conference Fees</h1>
          <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Participation at AICCEES 2025 will be open to all virtually and physically, however this will come with a determined fee.
            Participants can publish a paper, present a paper, or be audience members. Certificate of participation will be given to all conference participants.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Label htmlFor="currency">Show prices in NGN</Label>
            <Switch
              id="currency"
              checked={showNGN}
              onCheckedChange={setShowNGN}
            />
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className='text-green-900'>Conference Participation Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%] text-black">CATEGORY</TableHead>
                  <TableHead className="text-black">PHYSICAL</TableHead>
                  <TableHead className="text-black">VIRTUAL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {participationTypes.map((type) => (
                  <TableRow key={type.category}>
                    <TableCell className="font-medium text-lg">{type.category}</TableCell>
                    <TableCell>
                      {formatPrice(type.physical.regular, type.category.includes('Open Access'))}
                      {type.physical.student && (
                        <div className="text-sm text-gray-500">
                          Students: ₦{type.physical.student.toLocaleString()}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {formatPrice(type.virtual.regular, type.category.includes('Open Access'))}
                      {type.virtual.student && (
                        <div className="text-sm text-gray-500">
                          Students: ₦{type.virtual.student.toLocaleString()}
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Exhibitions />
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#A00] sm:text-4xl md:text-5xl mb-2">Payment Currency and Bank Details</h2>
            <p className="text-gray-600 mb-8">All payments should be made by bank transfer using the details below;</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-[#008751] text-white">
                <CardTitle>Bank Transfer - Nigerian Naira (NGN)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <div className="font-semibold">Bank</div>
                  <div>Guaranty Trust Bank</div>
                </div>
                <div>
                  <div className="font-semibold">Account Name</div>
                  <div>Tovero Energy Ltd</div>
                </div>
                <div>
                  <div className="font-semibold">Account Number</div>
                  <div>0737393294</div>
                </div>
                <div>
                  <div className="font-semibold">Currency</div>
                  <div>NGN</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-[#AA0000] text-white">
                <CardTitle>Bank Transfer - USD</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <div className="font-semibold">Swift Code</div>
                  <div>GTBINGLA</div>
                </div>
                <div>
                  <div className="font-semibold">Account Name</div>
                  <div>Tovero Energy Ltd</div>
                </div>
                <div>
                  <div className="font-semibold">Account Number</div>
                  <div>0737393304</div>
                </div>
                <div>
                  <div className="font-semibold">Sort Code</div>
                  <div>058-083956</div>
                </div>
                <div>
                  <div className="font-semibold">Currency</div>
                  <div>USD</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-2 mt-8">
            <p className="text-gray-600 italic">The sender is solely responsible for the bank fees and transfer fees.</p>
            <p className="text-gray-600">
              For enquiries on payments and invoices, please send an email to{' '}
              <a href="mailto:aiccees@uniport.edu.ng" className="text-blue-600 hover:underline">
                aiccees@uniport.edu.ng
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

