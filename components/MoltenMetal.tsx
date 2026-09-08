"use client";

import { motion } from "framer-motion";

// We define the interface to accept all the WebGL props you passed, 
// even if this CSS version only strictly uses the colors.
interface MoltenMetalProps {
  color1?: string;
  color2?: string;
  color3?: string;
  [key: string]: any; 
}

export default function MoltenMetal({
  color1 = "#E91E63",
  color2 = "#B497CF",
  color3 = "#F2EFE9",
}: MoltenMetalProps) {
  return (
    <div className="absolute inset-0 overflow-hidden blur-[100px] pointer-events-none z-0">
      {/* Primary Blob */}
      <motion.div
        animate={{
          x: ["-10%", "20%", "-10%"],
          y: ["-20%", "10%", "-20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundColor: color1, opacity: 0.6 }}
      />
      
      {/* Secondary Blob */}
      <motion.div
        animate={{
          x: ["20%", "-10%", "20%"],
          y: ["10%", "-20%", "10%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundColor: color2, opacity: 0.5 }}
      />

      {/* Core Highlight Blob */}
      <motion.div
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[40%] w-[35vw] h-[35vw] rounded-full mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundColor: color3, opacity: 0.4 }}
      />
    </div>
  );
}