"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/app-context";

interface LogoProps {
  variant?: "default" | "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showText?: boolean;
}

export function Logo({ 
  variant = "auto", 
  size = "md", 
  animated = true,
  showText = true 
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  
  const effectiveVariant = variant === "auto" 
    ? (resolvedTheme === "dark" ? "light" : "default")
    : variant;

  const sizeConfig = {
    sm: { icon: 38, text: "text-base sm:text-lg", gap: "gap-2 sm:gap-3" },
    md: { icon: 46, text: "text-lg sm:text-xl", gap: "gap-3" },
    lg: { icon: 54, text: "text-xl sm:text-2xl", gap: "gap-4" },
    xl: { icon: 70, text: "text-2xl sm:text-3xl", gap: "gap-4" },
  };

  const colors = {
    default: {
      primary: "#C2185B",
      secondary: "#1A237E",
      accent: "#F9A825",
      text: "#1A237E",
    },
    light: {
      primary: "#C2185B",
      secondary: "#1A237E",
      accent: "#F9A825",
      text: "#FFFFFF",
    },
    dark: {
      primary: "#E91E63",
      secondary: "#283593",
      accent: "#FFC107",
      text: "#FFFFFF",
    },
  };

  const c = colors[effectiveVariant];
  const s = sizeConfig[size];

  return (
    <Link href="/" className={`flex items-center ${s.gap} group`}>
      {/* Logo Mark - Design minimaliste et élégant */}
      <motion.div
        className="relative flex-shrink-0"
        style={{ width: s.icon, height: s.icon }}
        whileHover={animated ? { scale: 1.05 } : undefined}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Forme géométrique principale - Losange stylisé */}
          <motion.path
            d="M50 8 L88 50 L50 92 L12 50 Z"
            fill={c.primary}
            initial={animated ? { scale: 0.9, opacity: 0 } : undefined}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Forme intérieure - Triangle inversé pour créer le S */}
          <motion.path
            d="M50 20 L75 45 L50 45 Z"
            fill={c.secondary}
            initial={animated ? { scale: 0, opacity: 0 } : undefined}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Forme inférieure - Triangle pour compléter le S */}
          <motion.path
            d="M50 55 L25 80 L50 80 Z"
            fill={c.secondary}
            initial={animated ? { scale: 0, opacity: 0 } : undefined}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Ligne centrale dorée - Signature visuelle */}
          <motion.line
            x1="30"
            y1="50"
            x2="70"
            y2="50"
            stroke={c.accent}
            strokeWidth="3"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Point d'accent - Détail raffiné */}
          <motion.circle
            cx="70"
            cy="50"
            r="2.5"
            fill={c.accent}
            initial={animated ? { scale: 0 } : undefined}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 10 }}
          />
        </svg>
      </motion.div>

      {/* Texte du logo - Typographie professionnelle */}
      {showText && (
        <motion.div
          className="flex flex-col leading-none"
          initial={animated ? { opacity: 0, x: -8 } : undefined}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <span
            className={`font-serif font-black ${s.text}`}
            style={{ 
              color: c.text,
              letterSpacing: '-0.03em',
              lineHeight: 1
            }}
          >
            SYNNOVA
          </span>
          <span
            className="text-[0.65em] font-medium tracking-[0.15em] uppercase mt-0.5 min-w-0"
            style={{ 
              color: c.accent,
              opacity: 0.9
            }}
          >
            TOCLOE
          </span>
        </motion.div>
      )}
    </Link>
  );
}

export function LogoIcon({ 
  variant = "auto", 
  size = "md" 
}: Omit<LogoProps, "animated" | "showText">) {
  const { resolvedTheme } = useTheme();
  
  const effectiveVariant = variant === "auto" 
    ? (resolvedTheme === "dark" ? "light" : "default")
    : variant;

  const sizeClasses = {
    sm: 34,
    md: 42,
    lg: 50,
    xl: 62,
  };

  const colors = {
    default: { primary: "#C2185B", secondary: "#1A237E", accent: "#F9A825" },
    light: { primary: "#C2185B", secondary: "#1A237E", accent: "#F9A825" },
    dark: { primary: "#E91E63", secondary: "#283593", accent: "#FFC107" },
  };

  const c = colors[effectiveVariant];

  return (
    <Link href="/">
      <motion.div
        style={{ width: sizeClasses[size], height: sizeClasses[size] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M50 8 L88 50 L50 92 L12 50 Z" fill={c.primary} />
          <path d="M50 20 L75 45 L50 45 Z" fill={c.secondary} />
          <path d="M50 55 L25 80 L50 80 Z" fill={c.secondary} />
          <line x1="30" y1="50" x2="70" y2="50" stroke={c.accent} strokeWidth="3" strokeLinecap="round" />
          <circle cx="70" cy="50" r="2.5" fill={c.accent} />
        </svg>
      </motion.div>
    </Link>
  );
}
