"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mic, MessageCircle, Film, Leaf } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageLoader } from "@/components/page-loader";
import { FAQSection } from "@/components/faq-section";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
} from "@/components/animations";
import { useTranslation } from "@/lib/app-context";
import { galleryImages, heroImage, engagementImage } from "@/lib/synnova-images";

const facettesFr = [
  {
    title: "Animatrice",
    description: "Animation live d'événements majeurs au Bénin",
    icon: Mic,
    color: "bg-rose",
  },
  {
    title: "Communicatrice",
    description: "Stratégie digitale et création de contenu",
    icon: MessageCircle,
    color: "bg-indigo",
  },
  {
    title: "Actrice",
    description: "Cinéma et régie plateau au Festival des Arts",
    icon: Film,
    color: "bg-gold",
  },
  {
    title: "Entrepreneuse",
    description: "Emballages biodégradables éco-responsables",
    icon: Leaf,
    color: "bg-rose",
  },
];

const facettesEn = [
  {
    title: "Host",
    description: "Live hosting of major events in Benin",
    icon: Mic,
    color: "bg-rose",
  },
  {
    title: "Communicator",
    description: "Digital strategy and content creation",
    icon: MessageCircle,
    color: "bg-indigo",
  },
  {
    title: "Actress",
    description: "Cinema and stage management at Arts Festival",
    icon: Film,
    color: "bg-gold",
  },
  {
    title: "Entrepreneur",
    description: "Eco-friendly biodegradable packaging",
    icon: Leaf,
    color: "bg-rose",
  },
];

const highlightsFr = [
  { number: "5+", label: "Années d'expérience" },
  { number: "50+", label: "Événements animés" },
  { number: "1000+", label: "Personnes touchées" },
];

const highlightsEn = [
  { number: "5+", label: "Years of experience" },
  { number: "50+", label: "Events hosted" },
  { number: "1000+", label: "People reached" },
];

const faqItems = [
  {
    question: "Quels types d'événements Synnova anime-t-elle ?",
    answer: "Synnova anime une grande variété d'événements :\n\n• Mariages traditionnels béninois et modernes\n• Festivals culturels et concerts\n• Événements corporate et séminaires\n• Conférences et lancements de produits\n• Anniversaires et célébrations privées\n\nAvec plus de 5 années d'expérience, elle s'adapte à tous types d'événements, des plus intimes (50 personnes) aux plus grands (5000+ spectateurs)."
  },
  {
    question: "Comment obtenir un devis pour mes événements ?",
    answer: "Pour obtenir un devis personnalisé :\n\n1. Contactez Synnova par WhatsApp (XXXXXXXXXX) ou email (synnovatocloe@gmail.com)\n2. Décrivez votre événement (type, date, lieu, nombre d'invités)\n3. Précisez les services souhaités (animation, MC, coordination technique...)\n4. Vous recevrez un devis détaillé sous 24h\n\nLes tarifs sont adaptés selon le type d'événement, la durée, la localisation et les services additionnels demandés."
  },
  {
    question: "Synnova se déplace-t-elle en dehors de Grand-Popo ?",
    answer: "Oui, Synnova intervient dans plusieurs zones :\n\n• Grand-Popo (base principale) - pas de frais de déplacement\n• Cotonou et environs - frais de transport inclus\n• Tout le Bénin - supplément de 30% pour les frais de déplacement\n• Lomé, Togo - collaborations spéciales\n• Autres pays de la région - sur demande\n\nElle privilégie les événements de qualité et s'adapte à votre localisation pour vous offrir le meilleur service."
  },
  {
    question: "Quelles sont les spécialités culturelles de Synnova ?",
    answer: "Synnova maîtrise parfaitement la culture béninoise :\n\n• Traditions vodoun et danses locales (Adjogan, Sakpata, Tchinkounmé)\n• Animation bilingue (français et langues locales : Fon, Yoruba)\n• Collaboration avec griots et musiciens traditionnels\n• Respect des protocoles culturels béninois\n• Intégration harmonieuse des traditions dans les événements modernes\n\nCette expertise culturelle unique fait d'elle la référence pour les événements authentiquement béninois."
  },
  {
    question: "Synnova propose-t-elle d'autres services que l'animation ?",
    answer: "Oui, Synnova offre une gamme complète de services :\n\n🎤 Animation & Événements\n• Maîtrise de cérémonie\n• Coordination technique\n• Gestion de foules importantes\n\n📱 Communication Digitale\n• Stratégie de communication\n• Création de contenu\n• Community management\n• Couverture réseaux sociaux\n\n🎬 Cinéma & Régie\n• Actrice (films béninois)\n• Coordination artistique\n• Direction d'acteurs\n\n🌱 Entrepreneuriat Social\n• Emballages biodégradables\n• Solutions éco-responsables"
  },
  {
    question: "Comment se déroule la préparation d'un événement avec Synnova ?",
    answer: "Le processus de collaboration est structuré :\n\n1. **Contact initial** - WhatsApp/Email pour premier échange\n2. **Brief créatif** - Discussion détaillée de vos besoins et attentes\n3. **Devis personnalisé** - Proposition sous 24h avec tarifs transparents\n4. **Rencontre de préparation** - Si nécessaire, pour finaliser les détails\n5. **Confirmation** - Signature et acompte de 30%\n6. **Préparation** - Coordination avec vos équipes et prestataires\n7. **Exécution** - Animation professionnelle le jour J\n8. **Suivi** - Retour post-événement et satisfaction client\n\nDélai minimum : 48h (urgences possibles selon disponibilité)"
  }
];

export default function HomePage() {
  const { language, t } = useTranslation();
  const facettes = language === "fr" ? facettesFr : facettesEn;
  const highlights = language === "fr" ? highlightsFr : highlightsEn;

  return (
    <PageLoader>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-rose/5">
          {/* Ghost Name Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-serif text-[20vw] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-foreground select-none"
            >
              SYNNOVA
            </motion.h1>
          </div>

          {/* Decorative Elements - Animated */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-rose opacity-[0.08]"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gold opacity-[0.04]"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-rose font-medium tracking-widest uppercase text-sm mb-4"
                >
                  {t("hero.subtitle")}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tight"
                >
                  Synnova
                  <span className="block text-rose"> Tocloe</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
                >
                  {t("hero.description")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <MagneticButton>
                    <Link href="/a-propos">
                      <button className="bg-rose text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 group shadow-lg shadow-rose/25 hover:shadow-rose/40 transition-shadow">
                        {t("hero.cta.discover")}
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <Link href="/contact">
                      <button className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full font-medium hover:bg-foreground hover:text-background transition-colors duration-300">
                        {t("hero.cta.contact")}
                      </button>
                    </Link>
                  </MagneticButton>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] max-w-md mx-auto">
                  {/* Background Shape - Animated */}
                  <motion.div
                    animate={{ rotate: [0, -6, 0, -6] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-4 bg-rose/20 rounded-3xl -rotate-6"
                  />
                  <motion.div
                    animate={{ rotate: [0, 3, 0, 3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-4 bg-gold/20 rounded-3xl rotate-3"
                  />

                  {/* Image Container */}
                  <div className="relative h-full rounded-3xl overflow-hidden border-4 border-card shadow-2xl">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      className="object-cover"
                      priority
                      quality={95}
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo/30 via-transparent to-transparent" />
                  </div>

                  {/* Floating Badge - Animated */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute -right-4 top-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border cursor-pointer"
                  >
                    <p className="text-gold font-bold text-2xl">5+</p>
                    <p className="text-muted-foreground text-xs">
                      {language === "fr" ? "ans d'expérience" : "years experience"}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="absolute -left-4 bottom-1/4 bg-rose text-white rounded-2xl p-4 shadow-xl cursor-pointer"
                  >
                    <p className="font-bold text-lg">Grand-Popo</p>
                    <p className="text-white/80 text-xs">Benin</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-rose rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Citation Section */}
        <section className="py-24 bg-indigo text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
          </div>
          <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="inline-block text-gold text-8xl font-serif leading-none mb-4">
              &ldquo;
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-relaxed italic">
              {t("quote.text")}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Synnova Tocloe
              </span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
          </AnimatedSection>
        </section>

        {/* Facettes Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-16">
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {t("facettes.label")}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mt-4 tracking-tight leading-tight">
                {language === "fr" ? "Une personnalité" : "A versatile"}
                <span className="text-rose"> {language === "fr" ? "polyvalente" : "personality"}</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t("facettes.description")}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facettes.map((facette) => (
                <StaggerItem key={facette.title}>
                  <Link href="/univers">
                    <motion.div
                      whileHover={{ y: -12, scale: 1.05 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="group bg-background rounded-2xl p-6 border border-border hover:border-rose/30 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-rose/10"
                    >
                      <div
                        className={`w-14 h-14 ${facette.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <facette.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                        {facette.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {facette.description}
                      </p>
                      <div className="mt-4 flex items-center text-rose font-medium text-sm group-hover:gap-2 transition-all">
                        {t("facettes.learnMore")}
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats Section - REMOVED: Stats non sourcées */}

        {/* Photo Gallery Section */}
        <section className="py-20 bg-card overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {language === "fr" ? "Galerie" : "Gallery"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mt-2 tracking-tight">
                {language === "fr" ? "Moments capturés" : "Captured moments"}
              </h2>
            </AnimatedSection>
          </div>
          
          {/* Infinite Scroll Gallery */}
          <div className="relative">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              className="flex gap-4"
            >
              {galleryImages.slice(0, 9).map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="relative flex-shrink-0 w-56 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    quality={95}
                    sizes="(max-width: 768px) 224px, 288px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                    <span className="text-white/70 text-xs capitalize">{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-rose text-white rounded-full font-medium inline-flex items-center gap-2 group"
              >
                {language === "fr" ? "Voir le portfolio" : "View portfolio"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Engagement Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <span className="text-rose font-medium tracking-widest uppercase text-sm">
                  {t("engagement.label")}
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 leading-tight">
                  {t("engagement.title")}
                  <span className="text-rose"> UReport</span>
                  <br />
                  Grand-Popo
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {t("engagement.description")}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["UReport", language === "fr" ? "Société civile" : "Civil society", language === "fr" ? "Jeunesse" : "Youth", "Grand-Popo"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-8">
                  <MagneticButton>
                    <Link href="/a-propos">
                      <button className="bg-foreground text-background px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 group hover:bg-rose hover:text-white transition-colors">
                        {t("engagement.cta")}
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </Link>
                  </MagneticButton>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-rose/10 rounded-3xl rotate-3" 
                  />
                  <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-card shadow-xl">
                    <Image
                      src={engagementImage.src}
                      alt="Synnova Tocloe - UReport"
                      fill
                      className="object-cover"
                      quality={90}
                      sizes="(max-width: 768px) 90vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-4 py-2 bg-gold text-indigo rounded-full text-sm font-bold mb-2">
                        UReport
                      </span>
                      <p className="text-white font-serif text-xl font-bold">Grand-Popo</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          title="Questions Fréquentes"
          subtitle="Tout ce que vous devez savoir sur mes services d'animation et de communication"
          items={faqItems}
          className="bg-background"
        />

        {/* CTA Section */}
        <section className="py-24 bg-rose relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] border border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] border border-white/10 rounded-full"
            />
          </div>
          <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="mt-8">
              <MagneticButton>
                <Link href="/contact">
                  <button className="bg-white text-rose px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 group hover:bg-gold hover:text-indigo transition-colors duration-300">
                    {t("cta.button")}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </PageLoader>
  );
}
