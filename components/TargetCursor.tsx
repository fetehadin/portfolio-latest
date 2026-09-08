"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  parallaxOn?: boolean;
  hoverDuration?: number;
  cursorColor?: string;
  cursorColorOnTarget?: string;
}

export default function TargetCursor({
  spinDuration = 2,
  hideDefaultCursor = true,
  parallaxOn = true,
  hoverDuration = 0.2,
  cursorColor = "#161211",
  cursorColorOnTarget = "#E91E63",
}: TargetCursorProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring physics for the cursor movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (hideDefaultCursor) {
      document.body.style.cursor = "none";
    }

    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Hook into the elements with the 'cursor-target' class
      const cursorTarget = target.closest(".cursor-target") as HTMLElement;

      if (cursorTarget) {
        setIsHovering(true);
        const rect = cursorTarget.getBoundingClientRect();
        
        // Find exact center of the button/link
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        if (parallaxOn) {
          // Creates a slight magnetic "pull" towards the mouse while snapped
          const distanceX = e.clientX - centerX;
          const distanceY = e.clientY - centerY;
          cursorX.set(centerX - 16 + distanceX * 0.15);
          cursorY.set(centerY - 16 + distanceY * 0.15);
        } else {
          // Locks dead-center
          cursorX.set(centerX - 16);
          cursorY.set(centerY - 16);
        }
      } else {
        setIsHovering(false);
        // Follows mouse normally (offset by 16px to center the 32x32 cursor)
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (hideDefaultCursor) {
        document.body.style.cursor = "auto";
      }
    };
  }, [cursorX, cursorY, hideDefaultCursor, parallaxOn]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 items-center justify-center rounded-full border-2 md:flex"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        borderColor: isHovering ? cursorColorOnTarget : cursorColor,
        backgroundColor: isHovering ? `${cursorColorOnTarget}15` : "transparent",
        scale: isHovering ? 1.5 : 1,
      }}
      animate={{
        rotate: isHovering ? 360 : 0,
      }}
      transition={{
        rotate: {
          duration: spinDuration,
          repeat: Infinity,
          ease: "linear",
        },
        scale: { duration: hoverDuration },
      }}
    >
      {/* Inner solid dot */}
      <motion.div
        className="h-2 w-2 rounded-full"
        style={{
          backgroundColor: isHovering ? cursorColorOnTarget : cursorColor,
        }}
        transition={{ duration: hoverDuration }}
      />
    </motion.div>
  );
}