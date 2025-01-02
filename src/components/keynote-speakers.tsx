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
    return (
        <Card className="max-w-md bg-white/95 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-green-600">
                    {image ? (
                        <AvatarImage
                            src={image}
                            alt={name}
                        />
                    ) : null}
                    <AvatarFallback className="text-lg bg-green-700 text-white">
                        {image ? null : <User className="h-8 w-8" />}
                        <span className="sr-only">{name}</span>
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <h3 className="text-2xl font-semibold leading-none text-green-900">{name}</h3>
                    <p className="text-sm text-green-700">{role}</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                        <Badge
                            key={topic}
                            variant="secondary"
                            className="bg-red-100 text-red-700 hover:bg-red-200"
                        >
                            {topic}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

