"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : 0
        );
      }
    },
    [selectedIndex, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <>
      {/* Gallery Grid with Masonry-like layout */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              index % 5 === 0 ? "row-span-2" : ""
            }`}
            style={{ aspectRatio: index % 5 === 0 ? "3/4" : "1/1" }}
            onMouseEnter={() => setIsHovering(index)}
            onMouseLeave={() => setIsHovering(null)}
            onClick={() => setSelectedIndex(index)}
          >
            {/* Skeleton loader */}
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 bg-gradient-to-br from-cream to-rose/10 animate-pulse" />
            )}
            
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-all duration-500 ${
                loadedImages.has(image.id) ? "opacity-100" : "opacity-0"
              } ${isHovering === index ? "scale-110" : "scale-100"}`}
              onLoad={() => handleImageLoad(image.id)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Hover Overlay */}
            <motion.div
              initial={false}
              animate={{ opacity: isHovering === index ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-indigo/20 to-transparent flex items-end justify-center pb-4"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: isHovering === index ? 0 : 20, 
                  opacity: isHovering === index ? 1 : 0 
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 text-white"
              >
                <ZoomIn size={18} />
                <span className="text-sm font-medium">Voir</span>
              </motion.div>
            </motion.div>

            {/* Category Badge */}
            {image.category && (
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-indigo">
                  {image.category}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-indigo/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null ? (prev - 1 + images.length) % images.length : 0
                );
              }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
              }}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Image Counter */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Main Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Floating Gallery Component - pour affichage hero
export function FloatingGallery({ images }: { images: string[] }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.slice(0, 5).map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          transition={{ 
            delay: index * 0.15,
            duration: 0.8,
          }}
          className="absolute"
          style={{
            top: `${10 + (index % 3) * 25}%`,
            left: `${5 + (index % 4) * 22}%`,
            width: index === 0 ? "45%" : "30%",
            zIndex: index === 0 ? 10 : 5 - index,
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, index % 2 === 0 ? 2 : -2, 0]
            }}
            transition={{ 
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src={src}
              alt={`Synnova ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// Horizontal Scroll Gallery
export function HorizontalScrollGallery({ images }: { images: GalleryImage[] }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      className="flex gap-4 cursor-grab active:cursor-grabbing overflow-x-auto pb-4 scrollbar-hide"
      drag="x"
      dragConstraints={{ left: -((images.length - 2) * 320), right: 0 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative flex-shrink-0 w-72 aspect-[3/4] rounded-2xl overflow-hidden group"
          style={{ pointerEvents: isDragging ? "none" : "auto" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="288px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </motion.div>
  );
}
