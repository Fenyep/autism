"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import React from "react";

export default function Reveal({
  children,
  className,
  parentClassName,
  variant = "to-top",
  once = true,
  duration = 0.5,
  delay = 0.25,
}: {
  children: React.ReactNode;
  parentClassName?: React.ComponentProps<"div">["className"];
  className?: React.ComponentProps<"div">["className"];
  variant?: "to-top" | "to-bottom" | "to-left" | "to-right" | "zoom-out";
  once?: boolean;
  duration?: number;
  delay?: number;
}) {
  const ref = React.useRef(null);

  const isInView = useInView(ref, { once: once });

  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = (): Variants => {
    switch (variant) {
      case "to-top":
        return {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        };
      case "to-bottom":
        return {
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        };
      case "to-left":
        return {
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        };
      case "to-right":
        return {
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom-out":
        return {
          hidden: { opacity: 0, scale: 1.5 },
          visible: { opacity: 1, scale: 1 },
        };

      default:
        return {};
    }
  };

  return (
    <div ref={ref} className={parentClassName}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
