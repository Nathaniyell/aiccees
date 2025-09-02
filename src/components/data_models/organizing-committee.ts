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
    image: "/images/organizing-cttee/esuuk.jpeg",
    affiliation: "Projects Coordinator, Tovero Energy Ltd"
  },
  {
    id: "5",
    name: "Nathaniel Essien",
    role: "AICCEES Conference Manager",
    affiliation: "Conference Management",
    image: "/images/organizing-cttee/NATHANDIEL.jpg"
  },
  {
    id: "4",
    name: "Uwem Johnson",
    role: "Lead, Partnerships",
    affiliation: "Head of Partnerships, Tovero Energy",
    image: "/images/organizing-cttee/uwem2.jpg"
  },
 
  {
    id: "6",
    name: "Peace Godwin",
    role: "Secretary",
    affiliation: "Secretariat, Tovero Energy",
    image: "/images/organizing-cttee/peace-monday.png"
  },
  {
    id: "7",
    name: "Emmanuel Brendan",
    role: "Branding and Design",
    affiliation: "Brand Designer, Tovero Energy",
    image: "/images/organizing-cttee/emma.jpeg"
  },
  {
    id: "12",
    name: "Kentimfon  Akpan",
    role: "Quality Assurance Officer",
    affiliation: "Tovero Energy",
    image: "/images/organizing-cttee/kentimfon.jpeg"
  },
  {
    id: "8",
    name: "Legacy TV",
    role: "Media",
    affiliation: "Media Partner"
  }
]; 