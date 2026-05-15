"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle,
  MessageCircle,
  X,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations";
import { useTranslation } from "@/lib/app-context";

const demandTypesFr = [
  "Animation d'événement",
  "Collaboration cinéma",
  "Communication digitale",
  "Emballages biodégradables",
  "Autre",
];

const demandTypesEn = [
  "Event hosting",
  "Cinema collaboration",
  "Digital communication",
  "Biodegradable packaging",
  "Other",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/synnovalumiere",
    icon: Facebook,
    handle: "@synnovalumiere",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@_synnova",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    handle: "@_synnova",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_synnova",
    icon: Instagram,
    handle: "@_synnova",
  },
  {
    name: "LinkedIn",
    href: "https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232",
    icon: Linkedin,
    handle: "Synnova Tocloe",
  },
];

// Numero WhatsApp de Synnova (format international)
const WHATSAPP_NUMBER = "22990123456"; // A remplacer par le vrai numero
const EMAIL_ADDRESS = "synnovatocloe@gmail.com";

export default function ContactPage() {
  const { language } = useTranslation();
  const demandTypes = language === "fr" ? demandTypesFr : demandTypesEn;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    demandType: "",
    message: "",
  });
  const [showSendOptions, setShowSendOptions] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.demandType &&
      formData.message
    );
  };

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSendOptions(true);
    }
  };

  const sendViaWhatsApp = () => {
    const message = `Bonjour Synnova,

Je suis ${formData.firstName} ${formData.lastName}.

*Type de demande:* ${formData.demandType}

*Message:*
${formData.message}

*Email:* ${formData.email}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    setShowSendOptions(false);
    setIsSubmitted(true);
    resetForm();
  };

  const sendViaEmail = () => {
    const subject = `[Contact Site] ${formData.demandType} - ${formData.firstName} ${formData.lastName}`;
    const body = `Bonjour Synnova,

Je suis ${formData.firstName} ${formData.lastName}.

Type de demande: ${formData.demandType}

Message:
${formData.message}

---
Email: ${formData.email}`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.open(`mailto:${EMAIL_ADDRESS}?subject=${encodedSubject}&body=${encodedBody}`, "_blank");
    setShowSendOptions(false);
    setIsSubmitted(true);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      demandType: "",
      message: "",
    });
  };

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-background via-background to-gold/5">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1 }}
              className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gold blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-rose font-medium tracking-widest uppercase text-sm">
                Contact
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4 tracking-tight leading-[0.95]">
                {language === "fr" ? "Travaillons ensemble" : "Let's work together"}
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {language === "fr" 
                  ? "Une idée, un projet, une collaboration ? N'hésitez pas à me contacter."
                  : "An idea, a project, a collaboration? Don't hesitate to contact me."
                }
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <AnimatedSection direction="left" className="lg:col-span-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-foreground mb-8 tracking-tight">
                  {language === "fr" ? "Informations" : "Information"}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-rose" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {language === "fr" ? "Localisation" : "Location"}
                      </h3>
                      <p className="text-muted-foreground mt-1">Grand-Popo, Bénin</p>
                    </div>
                  </div>

                  <a 
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-rose transition-colors">Email</h3>
                      <p className="text-muted-foreground mt-1">{EMAIL_ADDRESS}</p>
                    </div>
                  </a>

                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-rose transition-colors">WhatsApp</h3>
                      <p className="text-muted-foreground mt-1">+229 90 12 34 56</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="font-semibold text-foreground mb-4">
                    {language === "fr" ? "Suivez mon quotidien" : "Follow my daily life"}
                  </h3>
                  <StaggerContainer className="space-y-3">
                    {socialLinks.map((social) => (
                      <StaggerItem key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-background transition-colors group"
                        >
                          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-rose group-hover:text-white transition-colors">
                            <social.icon />
                          </div>
                          <div>
                            <p className="font-medium text-foreground group-hover:text-rose transition-colors">
                              {social.name}
                            </p>
                            <p className="text-muted-foreground text-sm">{social.handle}</p>
                          </div>
                        </a>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
                <div className="bg-background rounded-3xl p-8 sm:p-10 border border-border">
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-foreground mb-2 tracking-tight">
                    {language === "fr" ? "Envoyez un message" : "Send a message"}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {language === "fr" 
                      ? "Remplissez le formulaire et choisissez comment m'envoyer votre message."
                      : "Fill out the form and choose how to send me your message."
                    }
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-20 h-20 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-rose" />
                      </motion.div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {language === "fr" ? "Message pret !" : "Message ready!"}
                      </h3>
                      <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                        {language === "fr" 
                          ? "Votre application de messagerie s'est ouverte. Envoyez le message pour me contacter."
                          : "Your messaging app has opened. Send the message to contact me."
                        }
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 text-rose font-medium hover:underline"
                      >
                        {language === "fr" ? "Envoyer un autre message" : "Send another message"}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmitClick} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            {language === "fr" ? "Prenom" : "First name"} *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-foreground"
                            placeholder={language === "fr" ? "Votre prenom" : "Your first name"}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            {language === "fr" ? "Nom" : "Last name"} *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-foreground"
                            placeholder={language === "fr" ? "Votre nom" : "Your last name"}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-foreground"
                          placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="demandType"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          {language === "fr" ? "Type de demande" : "Request type"} *
                        </label>
                        <select
                          id="demandType"
                          name="demandType"
                          required
                          value={formData.demandType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-foreground appearance-none cursor-pointer"
                        >
                          <option value="">{language === "fr" ? "Selectionnez une option" : "Select an option"}</option>
                          {demandTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-foreground resize-none"
                          placeholder={language === "fr" ? "Decrivez votre projet ou demande..." : "Describe your project or request..."}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-rose text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-rose-dark transition-colors shadow-lg shadow-rose/25"
                      >
                        {language === "fr" ? "Choisir comment envoyer" : "Choose how to send"}
                        <Send size={18} />
                      </motion.button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Send Options Modal */}
        <AnimatePresence>
          {showSendOptions && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSendOptions(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {language === "fr" ? "Envoyer via" : "Send via"}
                  </h3>
                  <button
                    onClick={() => setShowSendOptions(false)}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  >
                    <X size={20} className="text-muted-foreground" />
                  </button>
                </div>

                <p className="text-muted-foreground mb-8">
                  {language === "fr" 
                    ? "Choisissez comment vous souhaitez m'envoyer votre message."
                    : "Choose how you want to send me your message."
                  }
                </p>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={sendViaWhatsApp}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-lg">WhatsApp</p>
                      <p className="text-white/80 text-sm">
                        {language === "fr" ? "Reponse rapide garantie" : "Quick response guaranteed"}
                      </p>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={sendViaEmail}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-indigo text-white hover:bg-indigo-light transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-white/80 text-sm">
                        {language === "fr" ? "Pour les demandes detaillees" : "For detailed requests"}
                      </p>
                    </div>
                  </motion.button>
                </div>

                <p className="text-center text-muted-foreground text-sm mt-6">
                  {language === "fr" 
                    ? "Votre application s'ouvrira automatiquement"
                    : "Your app will open automatically"
                  }
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map / Location Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                {language === "fr" ? "Basée à Grand-Popo" : "Based in Grand-Popo"}
              </h2>
              <p className="text-muted-foreground mt-2">
                {language === "fr" ? "Au cœur du Bénin, près de l'océan Atlantique" : "In the heart of Benin, near the Atlantic Ocean"}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-card border border-border shadow-xl">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31712.449897460938!2d1.8225100000000001!3d6.280360000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9c8c8c8c8c8%3A0x1234567890abcdef!2sGrand-Popo%2C%20Benin!5e0!3m2!1sfr!2s!4v1640995200000!5m2!1sfr!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grand-Popo, Bénin - Localisation de Synnova Tocloe"
                  className="w-full h-full"
                />
                
                {/* Overlay avec informations */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-rose rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-serif text-lg font-bold text-foreground">Grand-Popo</p>
                      <p className="text-muted-foreground text-sm">Bénin, Afrique de l'Ouest</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {language === "fr" 
                      ? "Ville côtière historique du Bénin, connue pour sa culture et ses traditions."
                      : "Historic coastal city of Benin, known for its culture and traditions."
                    }
                  </p>
                </div>

                {/* Badge distance depuis Cotonou */}
                <div className="absolute bottom-6 right-6 bg-indigo/95 backdrop-blur-sm text-white rounded-xl p-3 shadow-lg">
                  <p className="text-sm font-medium">
                    {language === "fr" ? "À 1h30 de Cotonou" : "1h30 from Cotonou"}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Informations supplémentaires */}
            <AnimatedSection delay={0.4} className="mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-rose" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Localisation" : "Location"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === "fr" 
                      ? "Département du Mono, région côtière du Bénin"
                      : "Mono Department, coastal region of Benin"
                    }
                  </p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Patrimoine" : "Heritage"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === "fr" 
                      ? "Riche histoire culturelle et traditions ancestrales"
                      : "Rich cultural history and ancestral traditions"
                    }
                  </p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 bg-indigo/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-indigo" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Accessibilité" : "Accessibility"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === "fr" 
                      ? "Facilement accessible depuis Cotonou et Lomé"
                      : "Easily accessible from Cotonou and Lomé"
                    }
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-indigo text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
            />
          </div>
          <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {language === "fr" ? "Rejoignez l'aventure" : "Join the adventure"}
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
              {language === "fr" 
                ? "Suivez mon quotidien sur les réseaux sociaux et restez informés de mes derniers projets et événements."
                : "Follow my daily life on social media and stay informed about my latest projects and events."
              }
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/10 hover:bg-rose px-5 py-3 rounded-full transition-colors"
                >
                  <social.icon />
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
