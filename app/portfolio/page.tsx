"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, Calendar, MapPin, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageLoader } from "@/components/page-loader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations";
import { useTranslation } from "@/lib/app-context";
import { galleryImages, type SynnovaImage } from "@/lib/synnova-images";

const categoriesFr = [
  { id: "all", label: "Tout" },
  { id: "portrait", label: "Portraits" },
  { id: "animation", label: "Animation" },
  { id: "communication", label: "Communication" },
  { id: "engagement", label: "Engagement" },
  { id: "lifestyle", label: "Lifestyle" },
];

const categoriesEn = [
  { id: "all", label: "All" },
  { id: "portrait", label: "Portraits" },
  { id: "animation", label: "Hosting" },
  { id: "communication", label: "Communication" },
  { id: "engagement", label: "Engagement" },
  { id: "lifestyle", label: "Lifestyle" },
];

const portfolioItemsFr = [
  {
    id: 1,
    title: "Festival International des Arts du Bénin",
    category: "animation",
    description: "Animation live et régie plateau lors de cet événement majeur de la culture béninoise. Un moment fort de ma carrière où j'ai pu mettre en valeur mes compétences d'animatrice devant un public de plusieurs milliers de personnes.",
    year: "2023",
    location: "Cotonou, Bénin",
    tags: ["Animation", "Régie", "Culture"],
    imageIndex: 0,
  },
  {
    id: 2,
    title: "UReport Grand-Popo",
    category: "engagement",
    description: "Coordination des activités de communication et d'engagement jeunesse à Grand-Popo. En tant que coordinatrice, je mène des campagnes de sensibilisation et donne une voix aux jeunes de ma communauté.",
    year: "2022-Présent",
    location: "Grand-Popo, Bénin",
    tags: ["Coordination", "Jeunesse", "Engagement"],
    imageIndex: 6,
  },
  {
    id: 3,
    title: "Production Cinématographique",
    category: "portrait",
    description: "Participation en tant qu'actrice et régisseuse plateau dans plusieurs productions locales. Le cinéma est une passion qui me permet d'explorer de nouveaux horizons créatifs.",
    year: "2023",
    location: "Bénin",
    tags: ["Actrice", "Régie", "Cinéma"],
    imageIndex: 4,
  },
  {
    id: 4,
    title: "Emballages Biodégradables",
    category: "lifestyle",
    description: "Création et confection d'emballages éco-responsables pour un avenir durable. Mon engagement pour l'environnement se traduit par cette initiative entrepreneuriale innovante.",
    year: "2023-Présent",
    location: "Grand-Popo, Bénin",
    tags: ["Éco-responsable", "Artisanat", "Innovation"],
    imageIndex: 9,
  },
  {
    id: 5,
    title: "Mairie des Jeunes Grand-Popo",
    category: "communication",
    description: "Ex-Chargée de Communication, développement de la stratégie digitale de la Mairie des Jeunes. Une expérience formatrice qui m'a permis de développer mes compétences en communication institutionnelle.",
    year: "2021-2022",
    location: "Grand-Popo, Bénin",
    tags: ["Communication", "Stratégie", "Digital"],
    imageIndex: 11,
  },
  {
    id: 6,
    title: "Événements Corporate",
    category: "animation",
    description: "Animation d'événements d'entreprise et de séminaires professionnels. Mon approche professionnelle et dynamique garantit le succès de vos événements corporate.",
    year: "2021-Présent",
    location: "Bénin",
    tags: ["Animation", "Corporate", "Professionnel"],
    imageIndex: 17,
  },
];

const portfolioItemsEn = [
  {
    id: 1,
    title: "Benin International Arts Festival",
    category: "animation",
    description: "Live hosting and stage management during this major event of Beninese culture. A career highlight where I showcased my hosting skills in front of an audience of several thousand people.",
    year: "2023",
    location: "Cotonou, Benin",
    tags: ["Hosting", "Management", "Culture"],
    imageIndex: 0,
  },
  {
    id: 2,
    title: "UReport Grand-Popo",
    category: "engagement",
    description: "Coordination of communication and youth engagement activities in Grand-Popo. As coordinator, I lead awareness campaigns and give a voice to young people in my community.",
    year: "2022-Present",
    location: "Grand-Popo, Benin",
    tags: ["Coordination", "Youth", "Engagement"],
    imageIndex: 6,
  },
  {
    id: 3,
    title: "Film Production",
    category: "portrait",
    description: "Participation as actress and stage manager in several local productions. Cinema is a passion that allows me to explore new creative horizons.",
    year: "2023",
    location: "Benin",
    tags: ["Actress", "Management", "Cinema"],
    imageIndex: 4,
  },
  {
    id: 4,
    title: "Biodegradable Packaging",
    category: "lifestyle",
    description: "Creation and manufacturing of eco-responsible packaging for a sustainable future. My commitment to the environment translates into this innovative entrepreneurial initiative.",
    year: "2023-Present",
    location: "Grand-Popo, Benin",
    tags: ["Eco-friendly", "Crafts", "Innovation"],
    imageIndex: 9,
  },
  {
    id: 5,
    title: "Grand-Popo Youth City Hall",
    category: "communication",
    description: "Former Communication Manager, development of the Youth City Hall's digital strategy. A formative experience that allowed me to develop my institutional communication skills.",
    year: "2021-2022",
    location: "Grand-Popo, Benin",
    tags: ["Communication", "Strategy", "Digital"],
    imageIndex: 11,
  },
  {
    id: 6,
    title: "Corporate Events",
    category: "animation",
    description: "Hosting corporate events and professional seminars. My professional and dynamic approach guarantees the success of your corporate events.",
    year: "2021-Present",
    location: "Benin",
    tags: ["Hosting", "Corporate", "Professional"],
    imageIndex: 17,
  },
];

const testimonialsFr = [
  {
    quote: "Synnova apporte une énergie unique à chaque événement. Son professionnalisme et sa créativité sont remarquables.",
    author: "Organisateur d'événements",
    role: "Festival des Arts",
    initial: "O",
    color: "bg-rose",
  },
  {
    quote: "Une communicatrice exceptionnelle qui comprend les enjeux de la jeunesse béninoise.",
    author: "Partenaire UReport",
    role: "Grand-Popo",
    initial: "P",
    color: "bg-indigo",
  },
];

const testimonialsEn = [
  {
    quote: "Synnova brings unique energy to every event. Her professionalism and creativity are remarkable.",
    author: "Event Organizer",
    role: "Arts Festival",
    initial: "O",
    color: "bg-rose",
  },
  {
    quote: "An exceptional communicator who understands the challenges of Beninese youth.",
    author: "UReport Partner",
    role: "Grand-Popo",
    initial: "P",
    color: "bg-indigo",
  },
];

export default function PortfolioPage() {
  const { language, t } = useTranslation();
  const categories = language === "fr" ? categoriesFr : categoriesEn;
  const portfolioItems = language === "fr" ? portfolioItemsFr : portfolioItemsEn;
  const testimonials = language === "fr" ? testimonialsFr : testimonialsEn;
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "animation":
        return "bg-rose text-white";
      case "portrait":
        return "bg-gold text-indigo";
      case "communication":
        return "bg-indigo text-white";
      case "lifestyle":
        return "bg-green-500 text-white";
      case "engagement":
        return "bg-gold text-indigo";
      default:
        return "bg-indigo text-white";
    }
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === "Escape") setLightboxIndex(null);
    if (e.key === "ArrowRight") setLightboxIndex((prev) => prev !== null ? (prev + 1) % filteredImages.length : 0);
    if (e.key === "ArrowLeft") setLightboxIndex((prev) => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0);
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <PageLoader>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-hero">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 1 }}
              className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-rose blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {t("portfolio.label")}
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-indigo mt-4 tracking-tight leading-[0.95]">
                {t("portfolio.title")}
              </h1>
              <p className="mt-6 text-xl text-indigo/70 max-w-2xl mx-auto leading-relaxed">
                {t("portfolio.subtitle")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-border sticky top-16 md:top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-rose text-white"
                      : "bg-cream text-indigo hover:bg-rose/10"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {language === "fr" ? "Galerie Photo" : "Photo Gallery"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-indigo mt-2 tracking-tight">
                {language === "fr" ? "Moments capturés" : "Captured moments"}
              </h2>
            </AnimatedSection>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setLightboxIndex(index)}
                    className={`relative cursor-pointer group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                      index % 5 === 0 ? "row-span-2" : ""
                    }`}
                    style={{ aspectRatio: index % 5 === 0 ? "3/4" : "1/1" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      quality={95}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-indigo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4">
                      <ZoomIn className="text-white mb-2" size={24} />
                      <span className="text-white text-sm font-medium">{language === "fr" ? "Voir" : "View"}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                        {categories.find(c => c.id === image.category)?.label || image.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {language === "fr" ? "Projets" : "Projects"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-indigo mt-2 tracking-tight">
                {language === "fr" ? "Expériences marquantes" : "Remarkable experiences"}
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <StaggerItem key={item.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -12, scale: 1.05 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => setSelectedItem(item)}
                      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-border hover:border-rose/30 hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={galleryImages[item.imageIndex]?.src || galleryImages[0].src}
                          alt={item.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          quality={95}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {categories.find((c) => c.id === item.category)?.label}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-serif text-xl font-bold text-indigo group-hover:text-rose transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-indigo/60 text-sm mt-2 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 mt-4 text-xs text-indigo/50">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {item.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </AnimatePresence>
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {language === "fr" ? "Témoignages" : "Testimonials"}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-indigo mt-4 tracking-tight">
                {language === "fr" ? "Ce qu'ils disent" : "What they say"}
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <div className="text-gold text-4xl font-serif leading-none mb-4">
                      &ldquo;
                    </div>
                    <p className="text-indigo/80 text-lg leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-xl">
                          {testimonial.initial}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-indigo">
                          {testimonial.author}
                        </p>
                        <p className="text-indigo/50 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-indigo text-white">
          <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {language === "fr" ? "Envie de collaborer ?" : "Want to collaborate?"}
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Discutons de votre projet et voyons comment je peux vous accompagner.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-rose text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 group"
                >
                  {language === "fr" ? "Me contacter" : "Contact me"}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <div className="absolute inset-0 bg-indigo/80 backdrop-blur-sm" />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-indigo hover:bg-rose hover:text-white transition-colors z-10"
                >
                  <X size={20} />
                </button>

                <div className="aspect-video relative">
                  <Image
                    src={galleryImages[selectedItem.imageIndex]?.src || galleryImages[0].src}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo/60 to-transparent" />
                </div>

                <div className="p-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedItem.category)} mb-3`}>
                    {categories.find((c) => c.id === selectedItem.category)?.label}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                    {selectedItem.title}
                  </h2>

                  <div className="flex items-center gap-4 mt-4 text-sm text-indigo/60">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedItem.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {selectedItem.location}
                    </span>
                  </div>

                  <p className="text-indigo/70 mt-6 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-cream text-indigo rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                      <button className="w-full bg-rose text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 group">
                        {language === "fr" ? "Me contacter" : "Contact me"}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="flex-1 border-2 border-border text-indigo py-3 rounded-full font-medium hover:bg-cream transition-colors"
                    >
                      {language === "fr" ? "Fermer" : "Close"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Photo Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-indigo/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                onClick={() => setLightboxIndex(null)}
              >
                <X size={24} />
              </button>

              <button
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0);
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => prev !== null ? (prev + 1) % filteredImages.length : 0);
                }}
              >
                <ChevronRight size={24} />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="flex flex-col items-center gap-6 max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={filteredImages[lightboxIndex].src}
                    alt={filteredImages[lightboxIndex].alt}
                    fill
                    className="object-cover"
                    sizes="90vw"
                    priority
                  />
                </div>

                {/* Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full border border-white/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-white font-serif text-xl font-bold mb-3">
                        {filteredImages[lightboxIndex].alt}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(filteredImages[lightboxIndex].category)}`}>
                          {categories.find(c => c.id === filteredImages[lightboxIndex].category)?.label || filteredImages[lightboxIndex].category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/70 text-sm font-medium">
                        {lightboxIndex + 1} / {filteredImages.length}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </PageLoader>
  );
}
