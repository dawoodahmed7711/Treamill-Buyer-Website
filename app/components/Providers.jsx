"use client";

import { MotionConfig } from "framer-motion";

// Makes every Framer Motion animation respect the user's reduced-motion setting.
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
