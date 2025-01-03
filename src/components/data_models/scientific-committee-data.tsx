interface CommitteeMember {
    id: number
    name: string
    title: string
    institution: string
    country: string
    role: string
    expertise: string[]
    image: string
  }
  
 export const committeeMembers: CommitteeMember[] = [
    {
      id: 1,
      name: "Prof. Maria Santos",
      title: "Ph.D.",
      institution: "Stanford University",
      country: "United States",
      role: "Committee Chair",
      expertise: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
      image: "/placeholder.svg?height=150&width=150"
    },
    {
      id: 2,
      name: "Dr. James Chen",
      title: "Ph.D.",
      institution: "MIT",
      country: "United States",
      role: "Technical Program Chair",
      expertise: ["Quantum Computing", "Algorithms", "Complexity Theory"],
      image: "/placeholder.svg?height=150&width=150"
    },
    {
      id: 3,
      name: "Prof. Elena Popov",
      title: "Ph.D.",
      institution: "University of Cambridge",
      country: "United Kingdom",
      role: "Review Committee Head",
      expertise: ["Robotics", "Computer Vision", "Systems Engineering"],
      image: "/placeholder.svg?height=150&width=150"
    },
    {
      id: 4,
      name: "Dr. Akiko Tanaka",
      title: "Ph.D.",
      institution: "University of Tokyo",
      country: "Japan",
      role: "Publications Chair",
      expertise: ["Natural Language Processing", "Deep Learning", "Information Retrieval"],
      image: "/placeholder.svg?height=150&width=150"
    },
    {
      id: 5,
      name: "Prof. Hans Mueller",
      title: "Ph.D.",
      institution: "ETH Zurich",
      country: "Switzerland",
      role: "Awards Committee Chair",
      expertise: ["Distributed Systems", "Cloud Computing", "Security"],
      image: "/placeholder.svg?height=150&width=150"
    },
    {
      id: 6,
      name: "Dr. Sarah O'Connor",
      title: "Ph.D.",
      institution: "University of Melbourne",
      country: "Australia",
      role: "Workshops Chair",
      expertise: ["Human-Computer Interaction", "UX Research", "Cognitive Science"],
      image: "/placeholder.svg?height=150&width=150"
    }
  ]