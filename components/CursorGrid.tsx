"use client";

import { useEffect, useState } from "react";

interface CursorGridProps {
  color?: string;
  cellSize?: number;
  radius?: number;
  lineWidth?: number;
  [key: string]: any;
}

export default function CursorGrid({
  color = "#E91E63",
  cellSize = 70,
  radius = 140,
  lineWidth = 1.2,
}: CursorGridProps) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${color}40 ${lineWidth}px, transparent ${lineWidth}px),
          linear-gradient(to bottom, ${color}40 ${lineWidth}px, transparent ${lineWidth}px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        // Creates a spotlight effect that follows the cursor
        maskImage: `radial-gradient(${radius}px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(${radius}px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
      }}
    />
  );
}