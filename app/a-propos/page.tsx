"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Heart, Film, Leaf } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { useTranslation } from "@/lib/app-context";
import { aboutImage, galleryImages, universImages } from "@/lib/synnova-images";

const timelineFr = [
  {
    year: "Formation",
    title: "Licence Professionnelle en Journalisme",
    description:
      "Formée à l'Union Culturelle et Artistique des Étudiants (UCAE), j'ai acquis les bases solides du journalisme et de la communication.",
    icon: GraduationCap,
    color: "bg-indigo",
  },
  {
    year: "Engagement",
    title: "Coordonnatrice UReport Grand-Popo",
    description:
      "Je coordonne les activités de UReport à Grand-Popo, donnant une voix à la jeunesse béninoise sur les questions qui les concernent.",
    icon: Heart,
    color: "bg-rose",
  },
  {
    year: "Cinéma",
    title: "Festival International des Arts du Bénin",
    description:
      "Animatrice live, actrice et régisseuse plateau lors d'événements majeurs du cinéma et de la culture béninoise.",
    icon: Film,
    color: "bg-gold",
  },
  {
    year: "Entrepreneuriat",
    title: "Emballages Biodégradables",
    description:
      "Créatrice et confectionneuse d'emballages biodégradables, une démarche entrepreneuriale sociale et éco-responsable.",
    icon: Leaf,
    color: "bg-indigo",
  },
];

const timelineEn = [
  {
    year: "Education",
    title: "Professional Journalism Degree",
    description:
      "Trained at the Union Culturelle et Artistique des Etudiants (UCAE), I acquired solid foundations in journalism and communication.",
    icon: GraduationCap,
    color: "bg-indigo",
  },
  {
    year: "Commitment",
    title: "UReport Grand-Popo Coordinator",
    description:
      "I coordinate UReport activities in Grand-Popo, giving a voice to Beninese youth on issues that concern them.",
    icon: Heart,
    color: "bg-rose",
  },
  {
    year: "Cinema",
    title: "Benin International Arts Festival",
    description:
      "Live host, actress and stage manager at major cinema and cultural events in Benin.",
    icon: Film,
    color: "bg-gold",
  },
  {
    year: "Entrepreneurship",
    title: "Biodegradable Packaging",
    description:
      "Creator and manufacturer of biodegradable packaging, a social and eco-responsible entrepreneurial approach.",
    icon: Leaf,
    color: "bg-indigo",
  },
];

const valeursFr = [
  {
    title: "Création",
    description: "L'art et la création sont au cœur de chaque projet que j'entreprends.",
  },
  {
    title: "Engagement",
    description: "Militante pour des changements positifs dans ma communauté.",
  },
  {
    title: "Authenticité",
    description: "Rester vraie et sincère dans toutes mes interactions.",
  },
  {
    title: "Impact",
    description: "Chaque action doit avoir un impact positif sur la société.",
  },
];

const valeursEn = [
  {
    title: "Creation",
    description: "Art and creation are at the heart of every project I undertake.",
  },
  {
    title: "Commitment",
    description: "Advocating for positive changes in my community.",
  },
  {
    title: "Authenticity",
    description: "Staying true and sincere in all my interactions.",
  },
  {
    title: "Impact",
    description: "Every action must have a positive impact on society.",
  },
];

export default function AProposPage() {
  const { language, t } = useTranslation();
  const timeline = language === "fr" ? timelineFr : timelineEn;
  const valeurs = language === "fr" ? valeursFr : valeursEn;

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-rose/5">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="text-rose font-medium tracking-widest uppercase text-sm">
                  {t("about.label")}
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4 leading-[0.95] tracking-tight">
                  {t("about.title")}
                </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  {t("about.subtitle")}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="right">
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-gold/10 rounded-3xl rotate-2" 
                  />
                  <motion.div 
                    animate={{ rotate: [0, -2, 0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-rose/10 rounded-3xl -rotate-2" 
                  />
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-card border-4 border-card shadow-2xl">
                    <Image
                      src={aboutImage.src}
                      alt={aboutImage.alt}
                      fill
                      className="object-cover object-top"
                      quality={95}
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 500px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo/30 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -left-4 bottom-12 bg-rose text-white rounded-2xl p-4 shadow-xl"
                  >
                    <p className="font-bold text-lg">Grand-Popo</p>
                    <p className="text-white/80 text-xs">Benin, Afrique de l&apos;Ouest</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === "fr" ? (
                  <>
                    Titulaire d&apos;une <strong className="text-foreground">licence professionnelle en journalisme</strong>,
                    formée à l&apos;<strong className="text-rose">Union Culturelle et Artistique des Étudiants (UCAE)</strong>,
                    je suis une personnalité béninoise polyvalente active dans l&apos;animation,
                    la communication digitale, le cinéma et l&apos;entrepreneuriat social.
                  </>
                ) : (
                  <>
                    Holder of a <strong className="text-foreground">professional degree in journalism</strong>,
                    trained at the <strong className="text-rose">Union Culturelle et Artistique des Etudiants (UCAE)</strong>,
                    I am a versatile Beninese personality active in hosting,
                    digital communication, cinema and social entrepreneurship.
                  </>
                )}
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                {language === "fr" ? (
                  <>
                    Je suis <strong className="text-foreground">Coordonnatrice de UReport Grand-Popo</strong> et
                    ex-Chargée de Communication de la Mairie des Jeunes de Grand-Popo.
                    J&apos;ai travaillé sur des événements majeurs comme le{" "}
                    <strong className="text-rose">Festival International des Arts du Bénin</strong> en tant
                    qu&apos;animatrice live, actrice de cinéma et régisseuse plateau.
                  </>
                ) : (
                  <>
                    I am the <strong className="text-foreground">UReport Grand-Popo Coordinator</strong> and
                    former Communication Manager of the Grand-Popo Youth City Hall.
                    I have worked on major events such as the{" "}
                    <strong className="text-rose">Benin International Arts Festival</strong> as
                    a live host, film actress and stage manager.
                  </>
                )}
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                {language === "fr" ? (
                  <>
                    Je suis également <strong className="text-gold">créatrice et confectionneuse d&apos;emballages
                    biodégradables</strong> — une démarche entrepreneuriale sociale et
                    éco-responsable qui reflète mon engagement pour un avenir durable.
                  </>
                ) : (
                  <>
                    I am also a <strong className="text-gold">creator and manufacturer of biodegradable
                    packaging</strong> — a social and eco-responsible entrepreneurial approach
                    that reflects my commitment to a sustainable future.
                  </>
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline Section - Zigzag Layout */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {language === "fr" ? "Parcours" : "Journey"}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mt-4 tracking-tight">
                {language === "fr" ? "Mon Histoire" : "My Story"}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {language === "fr" 
                  ? "Un parcours fait de passion, d'engagement et de créativité"
                  : "A journey made of passion, commitment and creativity"
                }
              </p>
            </AnimatedSection>

            <div className="space-y-24">
              {timeline.map((item, index) => {
                // Sélection d'images pertinentes par domaine
                const imageMap = {
                  0: universImages.communication,  // Formation en Journalisme
                  1: universImages.engagement,     // UReport Grand-Popo
                  2: universImages.cinema,         // Cinéma
                  3: universImages.entrepreneuriat // Entrepreneuriat
                };
                const itemImage = imageMap[index as keyof typeof imageMap] || aboutImage;
                
                return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.2}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}>
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <motion.div
                        animate={{ rotate: [0, 2, 0, -2, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute -inset-4 ${item.color}/10 rounded-3xl ${
                          index % 2 === 0 ? "rotate-2" : "-rotate-2"
                        }`}
                      />
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-card shadow-xl">
                        <Image
                          src={itemImage.src}
                          alt={item.title}
                          fill
                          className="object-cover"
                          quality={90}
                          sizes="(max-width: 768px) 90vw, 500px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo/50 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-2`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <span className="inline-block px-4 py-2 bg-rose/10 text-rose rounded-full text-sm font-bold mb-4">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="w-12 h-0.5 bg-gold" />
                        <span className="text-gold font-medium text-sm uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
              })}
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {language === "fr" ? "Valeurs" : "Values"}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mt-4 tracking-tight">
                {language === "fr" ? "Ce qui me définit" : "What defines me"}
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {valeurs.map((valeur, index) => (
                <StaggerItem key={valeur.title}>
                  <motion.div
                    whileHover={{ y: -12, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-center p-8 rounded-2xl bg-background hover:bg-rose/5 transition-colors duration-300 shadow-sm hover:shadow-xl"
                  >
                    <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <span className="font-serif text-2xl text-gold font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {valeur.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {valeur.description}
                    </p>
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
              {language === "fr" ? "Découvrez mes univers" : "Discover my worlds"}
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              {language === "fr" 
                ? "Animation, communication, cinéma, entrepreneuriat — explorez les différentes facettes de ma personnalité."
                : "Hosting, communication, cinema, entrepreneurship — explore the different facets of my personality."
              }
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/univers">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-rose text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 group"
                >
                  {language === "fr" ? "Explorer mes univers" : "Explore my worlds"}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  {language === "fr" ? "Me contacter" : "Contact me"}
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
