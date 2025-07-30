import React from 'react'
import { GoogleForm } from './ui/iframe'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface GoogleFormExampleProps {
  formUrl: string
  title?: string
  description?: string
  height?: string | number
}

const GoogleFormExample: React.FC<GoogleFormExampleProps> = ({
  formUrl,
  title = "Registration Form",
  description = "Please fill out the form below to register for the event.",
  height = "600"
}) => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        {description && (
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <GoogleForm
          formUrl={formUrl}
          height={height}
          showTitle={false}
          className="w-full"
        />
      </CardContent>
    </Card>
  )
}

export default GoogleFormExample 