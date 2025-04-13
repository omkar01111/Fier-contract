"use client";

import React from "react";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredChildrenProps {
  children: React.ReactNode;
  childVariants: Record<string, any>;
  className?: string;
  staggerDelay?: number;
  childrenDelay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function StaggeredChildren({
  children,
  className,
  staggerDelay = 0.1,
  childrenDelay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  childVariants: customChildVariants, 
}: StaggeredChildrenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once, threshold]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childrenDelay,
      },
    },
  };

  const defaultChildVariants  = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  const childVariants = customChildVariants || defaultChildVariants;
  return (
    <div ref={ref} className={cn(className)}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className={cn("w-full h-full flex items-center flex-wrap gap-7", className)}

      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}