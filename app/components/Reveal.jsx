"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Slide-up + fade-in when scrolled into view.
export function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

// Staggered container + items for card grids.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Stagger({ children, className, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}
