import logo1 from "@/public/images/aicess/logo1.png";
import logo2 from "@/public/images/aicess/logo2.png";
import logo3 from "@/public/images/aicess/logo3.png";
import logo4 from "@/public/images/aicess/logo4.png";
import logo5 from "@/public/images/aicess/logo5.png";
import logo6 from "@/public/images/aicess/logo6.png"
import svg1 from "@/public/images/aicess/svg1.png";
import svg2 from "@/public/images/aicess/svg2.png";
import svg3 from "@/public/images/aicess/svg3.png";
import svg4 from "@/public/images/aicess/svg4.png";
import svg5 from "@/public/images/aicess/svg5.png";
import svg6 from "@/public/images/aicess/svg6.png";
import svg7 from "@/public/images/aicess/svg7.png";
import svg8 from "@/public/images/aicess/svg8.png";
import svg9 from "@/public/images/aicess/svg9.png";
import mecs from "@/public/images/home/mecs.svg";
import asteven from "@/public/images/home/asteven.svg";
import enerpro from "@/public/images/home/enerpro.svg";
import trans from "@/public/images/home/trans.svg";
import uniport from "@/public/images/home/unipor.svg";


export const aicess = {
  aicessInfo: [
    {
      title: "ABOUT AICCEES",
      paragraph1:
        "More than 600 million people in Sub-Saharan Africa are living without electricity according to World Bank research. While countries in the African continent are committed to achieving SDG7 which is ensuring access to affordable, reliable, sustainable, and modern energy for all by 2030, various studies have shown that the major challenges in the renewable energy sector include the high cost of renewable energy solutions, the lack of knowledge about them, the absence of technologies that are suitable to the local context, low research and development efforts, and technical skills gap in the field of clean energy. ",
      paragraph2:
        "In order to achieve the Sustainable Development Goals in Africa, effective collaboration between academia and industry is necessary to create a sustainable and transformative win-win situation for all stakeholders. However, research conducted by African institutions addressing the unique challenges faced by the continent often ends up in academic libraries with little or no impact on society. To address this issue, the Africa International Conference on Clean Energy and Energy Storage (AICCEES) aims to bring together researchers and industry experts to share knowledge and discuss innovative solutions for the clean energy transition in Africa. The conference will feature industry leaders, experts, researchers, government agencies, regulators, multilateral organizations, industry bodies, and more in the field of clean energy and energy storage.",
    },
  ],
  aicessStats: [
    {
        id: 1,
        logo: logo1,
        number: "1,173",
        description: "Participant",
      },
      {
        id: 2,
        logo: logo2,
        number: "86",
        description: "Abstract Submissions",
      },
      {
        id: 3,
        logo: logo3,
        number: "21",
        description: "Full Paper Accepted",
      },
      {
        id: 4,
        logo: logo4,
        number: "17",
        description: "Paper Presentation",
      },
      {
        id: 5,
        logo: logo5,
        number: "4",
        description: "Panel Sessions",
      },
      {
        id: 6,
        logo: logo6,
        number: "2",
        description: "Keynote Speakers",
      },
  ]
};



export const deets = [
  {
    id: 1,
    image: svg1,
    text: "Energy Supply & Energy Access in Africa",
    color: "border-red-600",
    textColor: "text-green-700"
  },
  {
    id: 2,
    image: svg2,
    text: "Hydrogen Development in Africa",
    color: "border-green-600",
    textColor: "text-red-700"
  },
  {
    id: 3,
    image: svg3,
    text: "Energy Storage and Sustainable Battery Manufacturing in Africa",
    color: "border-red-600",
    textColor: "text-green-700"
  },
  {
    id: 4,
    image: svg4,
    text: "Renewable Energy Systems", 
    color: "border-green-600",
    textColor: "text-red-700"
  },
  {
    id: 5,
    image: svg5,
    text: "Mini - grids & Hydropower Development",
    color: "border-red-600",
    textColor: "text-green-700"
  },
  {
    id: 6,
    image: svg6,
    text: "Clean Cooking",  
    color: "border-green-600",
    textColor: "text-red-700"
  },
  {
    id: 7,
    image: svg7,
    text: "Clean Mobility",
    color: "border-red-600",
    textColor: "text-green-700"
  },
  {
    id: 8,
    image: svg8,
    text: "Energy Transition Finance",
    color: "border-green-600",
    textColor: "text-red-700"
  },
  {
    id: 9,
    image: svg1,
    text: "Waste to Energy",
    color: "border-red-600",
    textColor: "text-green-700"
  },
  {
    id: 10,
    image: svg9,
    text: "Energy Efficiency & Smart Systems",
    color: "border-green-600",
    textColor: "text-red-700"
    },
];


export const sponsors_list = [
  { id: 1, image: mecs },
  { id: 2, image: asteven },
  { id: 3, image: enerpro },
  { id: 4, image: trans },
  { id: 5, image: uniport },
];

export const partners = [
  {
    name: "Modern Energy Cooking Services",
    logo: mecs,
  },
  {
    name: "Transforming Energy Learning Partners",
    logo: trans,
  },
  {
    name: "Asteven Group",
    logo: asteven,
  },
  {
    name: "EnergyPro",
    logo: enerpro,
  },
  {
    name: "University of Port Harcourt",
    logo: uniport,
  },
]

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}