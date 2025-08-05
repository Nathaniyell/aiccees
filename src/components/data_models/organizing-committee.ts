export interface OrganizingCommitteeMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  image?: string;
}

export const organizingCommitteeMembers: OrganizingCommitteeMember[] = [
  {
    id: "1",
    name: "Dr. Veronica Akpasoh",
    role: "Chairman",
    affiliation: "CEO, Tovero Energy Ltd",
    image: "/images/conference-chairs/verro.jpg"

  },
  {
    id: "2",
    name: "Engr. Anthony Akpasoh",
    role: "Co-Chairman",
    affiliation: "COO, Tovero Energy Ltd",
    image: "/images/organizing-cttee/anthony.jpg"
  },
  {
    id: "3",
    name: "Peace Esuuk Ikpokonte",
    role: "Technicals and Logistics",
    affiliation: "Projects Coordinator, Tovero Energy Ltd"
  },
  {
    id: "4",
    name: "Uwem Johnson",
    role: "Lead, Partnerships",
    affiliation: "Head of Partnerships, Tovero Energy"
  },
  {
    id: "5",
    name: "Nathaniel Essien",
    role: "AICCEES Conference Manager",
    affiliation: "Conference Management",
    image: "/images/organizing-cttee/NATHANDIEL.jpg"
  },
  {
    id: "6",
    name: "Peace Godwin",
    role: "Secretary",
    affiliation: "Secretariat, Tovero Energy"
  },
  {
    id: "7",
    name: "Emmanuel Brendan",
    role: "Branding and Design",
    affiliation: "Brand Designer, Tovero Energy"
  },
  {
    id: "8",
    name: "Legacy TV",
    role: "Media",
    affiliation: "Media Partner"
  }
]; 