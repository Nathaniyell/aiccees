import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PublicationCard from "@/components/publication-card"
import { publications } from "@/components/data_models/publications"

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 md:px-6">
      <div className="space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Journal of Clean Energy, Circular 
        Economy and Digitalisation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Browse all papers submitted to the 2024 International Conference on Technology and Innovation
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search papers by title, author, or keywords..." className="pl-8" />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="ai">Artificial Intelligence</SelectItem>
              <SelectItem value="ml">Machine Learning</SelectItem>
              <SelectItem value="hci">Human-Computer Interaction</SelectItem>
              <SelectItem value="security">Security & Privacy</SelectItem>
              <SelectItem value="systems">Systems & Networks</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="az">A-Z</SelectItem>
              <SelectItem value="za">Z-A</SelectItem>
              <SelectItem value="citations">Most Cited</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <nav className="flex items-center gap-1">
          <Button variant="outline" size="icon" disabled>
            <span className="sr-only">Previous page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="font-medium">
            1
          </Button>
          <Button variant="outline" size="sm" className="font-medium">
            2
          </Button>
          <Button variant="outline" size="sm" className="font-medium">
            3
          </Button>
          <Button variant="outline" size="sm" className="font-medium">
            4
          </Button>
          <Button variant="outline" size="sm" className="font-medium">
            5
          </Button>
          <Button variant="outline" size="icon">
            <span className="sr-only">Next page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </nav>
      </div>
    </div>
  )
}

