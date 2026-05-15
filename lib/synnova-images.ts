// Images locales de Synnova Tocloe
// Toutes les photos sont dans /images/

export interface SynnovaImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

// Les 12 photos WhatsApp récentes (portraits, lifestyle, animation)
const localImages: SynnovaImage[] = [
  { id: "img-48", src: "/images/IMG-20260514-WA0048.jpg", alt: "Synnova Tocloe", category: "portrait" },
  { id: "img-49", src: "/images/IMG-20260514-WA0049.jpg", alt: "Synnova Tocloe - Animation", category: "animation" },
  { id: "img-50", src: "/images/IMG-20260514-WA0050.jpg", alt: "Synnova Tocloe - Engagement", category: "engagement" },
  { id: "img-51", src: "/images/IMG-20260514-WA0051.jpg", alt: "Synnova Tocloe - Portrait", category: "portrait" },
  { id: "img-52", src: "/images/IMG-20260514-WA0052.jpg", alt: "Synnova Tocloe - Communication", category: "communication" },
  { id: "img-53", src: "/images/IMG-20260514-WA0053.jpg", alt: "Synnova Tocloe - Lifestyle", category: "lifestyle" },
  { id: "img-54", src: "/images/IMG-20260514-WA0054.jpg", alt: "Synnova Tocloe - Animation", category: "animation" },
  { id: "img-55", src: "/images/IMG-20260514-WA0055.jpg", alt: "Synnova Tocloe - Portrait", category: "portrait" },
  { id: "img-56", src: "/images/IMG-20260514-WA0056.jpg", alt: "Synnova Tocloe - Engagement", category: "engagement" },
  { id: "img-57", src: "/images/IMG-20260514-WA0057.jpg", alt: "Synnova Tocloe - Communication", category: "communication" },
  { id: "img-58", src: "/images/IMG-20260514-WA0058.jpg", alt: "Synnova Tocloe - Lifestyle", category: "lifestyle" },
  { id: "img-59", src: "/images/IMG-20260514-WA0059.jpg", alt: "Synnova Tocloe - Portrait", category: "portrait" },
];

// Les 7 images PNG supplémentaires
const pngImages: SynnovaImage[] = [
  { id: "png-1", src: "/images/file_0000000001d072468a9d88364c8c8e6d.png", alt: "Synnova Tocloe", category: "portrait" },
  { id: "png-2", src: "/images/file_00000000076c7246b3eeff638c3fcf99.png", alt: "Synnova Tocloe - Animation", category: "animation" },
  { id: "png-3", src: "/images/file_000000004eec720a99fc1a9510c45e97.png", alt: "Synnova Tocloe - Engagement", category: "engagement" },
  { id: "png-4", src: "/images/file_000000006fd4724684bd66db2dbfdc9f.png", alt: "Synnova Tocloe - Communication", category: "communication" },
  { id: "png-5", src: "/images/file_0000000075247246a41b9fdf324a428c.png", alt: "Synnova Tocloe - Portrait", category: "portrait" },
  { id: "png-6", src: "/images/file_000000008678724685b0852c42d0c362.png", alt: "Synnova Tocloe - Lifestyle", category: "lifestyle" },
  { id: "png-7", src: "/images/file_00000000d1a8720a8c4f72ba5c1d3966.png", alt: "Synnova Tocloe - Animation", category: "animation" },
];

// Galerie complète — 19 images uniques, PAS de duplication
export const galleryImages: SynnovaImage[] = [...localImages, ...pngImages];

// Image hero principale (page d'accueil)
export const heroImage: SynnovaImage = pngImages[2]; // file_000000004eec720a99fc1a9510c45e97

// 2ème image page d'accueil (section engagement)
export const engagementImage: SynnovaImage = pngImages[6]; // file_00000000d1a8720a8c4f72ba5c1d3966

// Image page À Propos (Mon Histoire)
export const aboutImage: SynnovaImage = pngImages[4]; // file_0000000075247246a41b9fdf324a428c

// Image artistique
export const artisticImage: SynnovaImage = localImages[6];

// Images par univers (bien organisées par domaine)
export const universImages = {
  animation: localImages[1],        // IMG-WA0049 - Animation
  communication: localImages[4],    // IMG-WA0052 - Communication
  cinema: localImages[6],           // IMG-WA0054 - Cinéma
  entrepreneuriat: localImages[10], // IMG-WA0058 - Entrepreneuriat/Lifestyle
  engagement: localImages[2],       // IMG-WA0050 - Engagement
};
