import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink } from "lucide-react"

interface Author {
  name: string
  institution: string
}

interface Publication {
  id: string
  title: string
  authors: Author[]
  abstract: string
  category: string
  date: string
  doi?: string
  pdfUrl?: string
}

export default function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-bold leading-tight">{publication.title}</CardTitle>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline">{publication.category}</Badge>
          <Badge variant="secondary">{publication.date}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-1">Authors:</p>
          <ul className="text-sm">
            {publication.authors.map((author, index) => (
              <li key={index} className="mb-1">
                {author.name} <span className="text-muted-foreground">({author.institution})</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm line-clamp-4">{publication.abstract}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/publications/${publication.id}`}>
            Read More
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {publication.pdfUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
              PDF
              <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

