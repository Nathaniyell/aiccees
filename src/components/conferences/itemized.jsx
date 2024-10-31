"use client";

import Image from "next/image";
import svg1 from "../../../public/images/aicess/svg1.png";
import svg2 from "../../../public/images/aicess/svg2.png";
import svg3 from "../../../public/images/aicess/svg3.png";
import svg4 from "../../../public/images/aicess/svg4.png";
import svg5 from "../../../public/images/aicess/svg5.png";
import svg6 from "../../../public/images/aicess/svg6.png";
import svg7 from "../../../public/images/aicess/svg7.png";
import svg8 from "../../../public/images/aicess/svg8.png";
import svg9 from "../../../public/images/aicess/svg9.png";
import { motion } from "framer-motion";

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

function DetailsItemized() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false }}
    >
      <div className="w-full md:w-[70%]">
        <h1 className="text-prigreentext text-3xl font-extrabold ">
          AICCEES 2024
        </h1>
        <br />
        <p className="ptag">
          The scope of the conference includes contemporary and original research, as well as innovative solutions for the clean energy sector and energy storage systems. Manuscripts which cut across the conference sub-themes should be between 6 to 12 pages, including references. Once submitted, papers are promptly forwarded to our reviewers, with decisions typically provided within 48 hours. The sub-themes are:
        </p>

      </div>
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-5">
        {deets.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-2 bxshadow h-16 py-4 pl-4"
          >
            <Image src={card.image} />
            <p className="font-bold text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default DetailsItemized;
