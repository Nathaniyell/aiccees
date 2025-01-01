import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from 'lucide-react'

interface KeynoteSpeakerProps {
  name: string
  topics: string[]
  image?: string
  role?: string
}

export default function KeynoteSpeaker({ 
  name, 
  topics, 
  image,
  role = "Keynote Speaker"
}: KeynoteSpeakerProps) {
  // Get initials for avatar fallback
//   const initials = name
//     .split(' ')
//     .map(word => word[0])
//     .join('')
//     .toUpperCase()

  return (
    <Card className="max-w-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          {image ? (
            <AvatarImage 
              src={image} 
              alt={name} 
            />
          ) : null}
          <AvatarFallback className="text-lg">
            {image ? null : <User className="h-8 w-8" />}
            <span className="sr-only">{name}</span>
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold leading-none">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Badge 
              key={topic}
              variant="secondary"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

