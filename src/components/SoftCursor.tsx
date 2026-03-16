"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = { stiffness: 100, damping: 20, mass: 1 };

export function SoftCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("[data-cursor-image]")) {
        setIsHovering(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("[data-cursor-image]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY]);

  const size = isHovering ? 56 : 16;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full border border-white/70 bg-white/20 backdrop-blur-sm mix-blend-difference"
      style={{
        x,
        y,
        top: 0,
        left: 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ width: size, height: size, opacity: isHovering ? 1 : 0.6 }}
      transition={springConfig}
    >
      {isHovering && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={springConfig}
          className="absolute inset-0 flex items-center justify-center text-white text-[8px] uppercase tracking-[0.15em]"
        >
          View
        </motion.span>
      )}
    </motion.div>
  );
}
