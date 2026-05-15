"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mic,
  MessageCircle,
  Film,
  Leaf,
  CheckCircle,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations";
import { useTranslation } from "@/lib/app-context";
import { universImages, galleryImages } from "@/lib/synnova-images";

const universFr = [
  {
    id: "animation",
    title: "Animation & Événements",
    subtitle: "Animatrice Live",
    description:
      "Animatrice d'événements majeurs au Bénin, j'apporte énergie et professionnalisme à chaque projet. Du Festival International des Arts du Bénin aux événements corporatifs, je crée des expériences mémorables.",
    icon: Mic,
    color: "bg-rose",
    textColor: "text-rose",
    bgLight: "bg-rose/5",
    image: universImages.animation,
    services: [
      "Animation de conférences et séminaires",
      "Animation de festivals et événements culturels",
      "Animation d'événements corporatifs",
      "Maîtrise de cérémonie",
      "Animation live sur scène",
    ],
    references: ["Festival International des Arts du Bénin", "Événements corporatifs majeurs"],
    cta: "Me contacter pour un événement",
  },
  {
    id: "communication",
    title: "Communication Digitale",
    subtitle: "Stratégie & Contenu",
    description:
      "Spécialisée dans la communication digitale, je développe des stratégies de contenu percutantes et authentiques. Mon approche allie créativité et engagement communautaire.",
    icon: MessageCircle,
    color: "bg-indigo",
    textColor: "text-indigo",
    bgLight: "bg-indigo/5",
    image: universImages.communication,
    services: [
      "Stratégie de communication digitale",
      "Création de contenu pour réseaux sociaux",
      "Community management",
      "Relations presse et médias",
      "Conseil en personal branding",
    ],
    references: ["Mairie des Jeunes de Grand-Popo", "UReport Grand-Popo"],
    cta: "Discutons de votre projet",
  },
  {
    id: "cinema",
    title: "Cinéma & Régie",
    subtitle: "Actrice & Régisseuse Plateau",
    description:
      "Passionnée par le 7ème art, j'évolue en tant qu'actrice et régisseuse plateau. Le cinéma est pour moi un moyen puissant de raconter des histoires et de toucher les cœurs.",
    icon: Film,
    color: "bg-gold",
    textColor: "text-gold",
    bgLight: "bg-gold/5",
    image: universImages.cinema,
    services: [
      "Jeu d'actrice pour films et séries",
      "Régie plateau pour productions",
      "Coordination artistique",
      "Direction d'acteurs",
      "Production audiovisuelle",
    ],
    references: ["Festival International des Arts du Bénin", "Productions cinématographiques locales"],
    cta: "Collaborer sur un projet cinéma",
  },
  {
    id: "entrepreneuriat",
    title: "Entrepreneuriat Social",
    subtitle: "Emballages Biodégradables",
    description:
      "Engagée pour l'environnement, je crée et confectionne des emballages biodégradables. Une démarche entrepreneuriale sociale et éco-responsable pour un Bénin plus vert.",
    icon: Leaf,
    color: "bg-rose",
    textColor: "text-rose",
    bgLight: "bg-rose/5",
    image: universImages.entrepreneuriat,
    services: [
      "Conception d'emballages biodégradables",
      "Confection artisanale",
      "Solutions éco-responsables",
      "Conseil en développement durable",
      "Formation à l'éco-entrepreneuriat",
    ],
    references: ["Initiative personnelle éco-responsable", "Impact environnemental local"],
    cta: "Commander des emballages",
  },
];

const universEn = [
  {
    id: "animation",
    title: "Event Hosting",
    subtitle: "Live Host",
    description:
      "Host of major events in Benin, I bring energy and professionalism to every project. From the Benin International Arts Festival to corporate events, I create memorable experiences.",
    icon: Mic,
    color: "bg-rose",
    textColor: "text-rose",
    bgLight: "bg-rose/5",
    image: universImages.animation,
    services: [
      "Conference and seminar hosting",
      "Festival and cultural event hosting",
      "Corporate event hosting",
      "Master of ceremonies",
      "Live on-stage hosting",
    ],
    references: ["Benin International Arts Festival", "Major corporate events"],
    cta: "Contact me for an event",
  },
  {
    id: "communication",
    title: "Digital Communication",
    subtitle: "Strategy & Content",
    description:
      "Specialized in digital communication, I develop impactful and authentic content strategies. My approach combines creativity and community engagement.",
    icon: MessageCircle,
    color: "bg-indigo",
    textColor: "text-indigo",
    bgLight: "bg-indigo/5",
    image: universImages.communication,
    services: [
      "Digital communication strategy",
      "Social media content creation",
      "Community management",
      "Press and media relations",
      "Personal branding consulting",
    ],
    references: ["Grand-Popo Youth City Hall", "UReport Grand-Popo"],
    cta: "Let's discuss your project",
  },
  {
    id: "cinema",
    title: "Cinema & Production",
    subtitle: "Actress & Stage Manager",
    description:
      "Passionate about the 7th art, I evolve as an actress and stage manager. Cinema is for me a powerful way to tell stories and touch hearts.",
    icon: Film,
    color: "bg-gold",
    textColor: "text-gold",
    bgLight: "bg-gold/5",
    image: universImages.cinema,
    services: [
      "Acting for films and series",
      "Stage management for productions",
      "Artistic coordination",
      "Actor direction",
      "Audiovisual production",
    ],
    references: ["Benin International Arts Festival", "Local film productions"],
    cta: "Collaborate on a cinema project",
  },
  {
    id: "entrepreneuriat",
    title: "Social Entrepreneurship",
    subtitle: "Biodegradable Packaging",
    description:
      "Committed to the environment, I create and manufacture biodegradable packaging. A social and eco-responsible entrepreneurial approach for a greener Benin.",
    icon: Leaf,
    color: "bg-rose",
    textColor: "text-rose",
    bgLight: "bg-rose/5",
    image: universImages.engagement,
    services: [
      "Biodegradable packaging design",
      "Artisanal manufacturing",
      "Eco-responsible solutions",
      "Sustainable development consulting",
      "Eco-entrepreneurship training",
    ],
    references: ["Personal eco-responsible initiative", "Local environmental impact"],
    cta: "Order packaging",
  },
];

export default function UniversPage() {
  const { language, t } = useTranslation();
  const univers = language === "fr" ? universFr : universEn;

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-background via-background to-gold/5">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 1 }}
              className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gold blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                {t("univers.label")}
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4 tracking-tight leading-[0.95]">
                {t("univers.title")}
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("univers.subtitle")}
              </p>
            </AnimatedSection>

            {/* Quick Nav */}
            <AnimatedSection delay={0.3} className="mt-12">
              <div className="flex flex-wrap justify-center gap-3">
                {univers.map((u) => (
                  <a
                    key={u.id}
                    href={`#${u.id}`}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${u.bgLight} ${u.textColor} hover:scale-105 border border-transparent hover:border-current`}
                  >
                    {u.title.split(" ")[0]}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Univers Sections */}
        {univers.map((u, index) => (
          <section
            key={u.id}
            id={u.id}
            className={`py-24 ${index % 2 === 0 ? "bg-card" : "bg-background"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <AnimatedSection
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={index % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 ${u.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <u.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className={`${u.textColor} font-medium text-sm uppercase tracking-wider`}>
                        {u.subtitle}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                        {u.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {u.description}
                  </p>

                  {/* Services */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-foreground mb-4">Services</h3>
                    <StaggerContainer className="space-y-3">
                      {u.services.map((service) => (
                        <StaggerItem key={service} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 ${u.textColor} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground">{service}</span>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>

                  {/* References */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-foreground mb-3">
                      {language === "fr" ? "References" : "References"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {u.references.map((ref) => (
                        <span
                          key={ref}
                          className={`px-3 py-1.5 ${u.bgLight} ${u.textColor} rounded-full text-sm border border-current/20`}
                        >
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`${u.color} text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 group shadow-lg`}
                      >
                        {u.cta}
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </motion.button>
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Visual */}
                <AnimatedSection
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.2}
                  className={index % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.03 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                    >
                      {/* Real Image */}
                      <Image
                        src={u.image}
                        alt={u.title}
                        fill
                        className="object-cover object-top"
                        quality={95}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 500px"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`} />
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-6 left-6">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-16 h-16 ${u.color} rounded-2xl flex items-center justify-center shadow-xl cursor-pointer`}
                        >
                          <u.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className={`absolute -bottom-4 ${
                        index % 2 === 0 ? "-right-4" : "-left-4"
                      } bg-card rounded-xl p-4 shadow-xl border border-border`}
                    >
                      <p className={`${u.textColor} font-bold text-lg`}>
                        {u.subtitle}
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">Grand-Popo, Benin</p>
                    </motion.div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-24 bg-rose text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5"
            />
          </div>
          <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {language === "fr" ? "Un projet en tête ?" : "Have a project in mind?"}
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              {language === "fr" 
                ? "Que ce soit pour un événement, une collaboration cinéma, une stratégie de communication ou des emballages éco-responsables, je suis là pour vous accompagner."
                : "Whether it's for an event, a cinema collaboration, a communication strategy or eco-responsible packaging, I'm here to support you."
              }
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-rose px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 group shadow-lg"
                >
                  {language === "fr" ? "Me contacter" : "Contact me"}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  {language === "fr" ? "Voir mon portfolio" : "View my portfolio"}
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
