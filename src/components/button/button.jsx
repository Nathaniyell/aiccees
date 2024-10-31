"use client";

import { motion } from "framer-motion";

function CustomButton({ children, variant = "primary", className = "" }) {
  const buttonClasses = `
  py-2.5 px-6 rounded-[20px] font-bold bg-btn text-white text-[14px]
        ${variant === "primary" ? " w-fit" : ""}
        ${variant === "secondary" ? "w-full" : ""}
        ${className}
        
    `;
  return (
    <motion.button whileTap={{ scale: 0.95 }} className={buttonClasses}>
      {children}
    </motion.button>
  );
}

export default CustomButton;
