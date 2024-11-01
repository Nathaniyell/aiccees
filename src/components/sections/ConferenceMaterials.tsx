"use client"
import {  motion } from "framer-motion";
import { ExternalLink, LucideIcon } from "lucide-react";
import Link from "next/link";
import { containerVariants, itemVariants } from "../data_models/conferences";


interface Material {
  id: number;
  header: string;
  link: string;
  icon: LucideIcon;
  description: string;
  color: string;
  bgColor: string;
  iconBgColor?: string;
  iconColor?: string;
}

interface ConferenceMaterialsProps {
  year: number | string;
  materials: Material[];
  title?: string;
  className?: string;
  titleColor?: string;
  descColor?: string;
}



export function ConferenceMaterials({ 
  year, 
  materials, 
  title = "Conference Materials",
  className = "space-y-8",
  titleColor = "text-white",
  descColor
}: ConferenceMaterialsProps) {
  return (
    <motion.div
      variants={containerVariants}
      className={className}
    >
      <motion.h3
        variants={itemVariants}
        className={`text-2xl md:text-3xl font-bold text-center ${titleColor}`}
      >
        {year} {title}
      </motion.h3>
      
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {materials.map((material) => (
          <motion.div
            key={material.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Link 
              href={material.link}
              target="_blank"
              className="block"
            >
              <div className={`p-6 rounded-xl ${material.bgColor} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <div className={`${material.color} ${material.iconBgColor ? material.iconBgColor : "bg-white"} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <material.icon className={`w-6 h-6  ${material.iconColor ? material.iconColor : "text-black"}`} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-semibold ${material.color}`}>
                          {material.header}
                        </h4>
                        <ExternalLink className={`w-4 h-4 ${descColor? descColor: "text-gray-400"}`} />
                      </div>
                      <p className={`text-sm ${descColor? descColor: "text-gray-600"}`}>
                        {material.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 