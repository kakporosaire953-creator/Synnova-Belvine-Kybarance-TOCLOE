"use client";

import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-rose/20" />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-rose border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-sm font-medium text-foreground/60">Chargement...</span>
      </motion.div>
    </div>
  );
}

// Simple loading skeleton for content
export function ContentSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-card rounded w-3/4" />
      <div className="h-4 bg-card rounded w-full" />
      <div className="h-4 bg-card rounded w-5/6" />
    </div>
  );
}
