"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { useTranslation } from "@/lib/app-context";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/synnovalumiere",
    icon: Facebook,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@_synnova",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_synnova",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232",
    icon: Linkedin,
  },
];

const footerLinksFr = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "À Propos", href: "/a-propos" },
      { label: "Mes Univers", href: "/univers" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Univers",
    links: [
      { label: "Animation", href: "/univers#animation" },
      { label: "Communication", href: "/univers#communication" },
      { label: "Cinéma", href: "/univers#cinema" },
      { label: "Entrepreneuriat", href: "/univers#entrepreneuriat" },
    ],
  },
];

const footerLinksEn = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/a-propos" },
      { label: "My World", href: "/univers" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Universe",
    links: [
      { label: "Hosting", href: "/univers#animation" },
      { label: "Communication", href: "/univers#communication" },
      { label: "Cinema", href: "/univers#cinema" },
      { label: "Entrepreneurship", href: "/univers#entrepreneuriat" },
    ],
  },
];

const descriptionFr = "Je suis une femme en chemin, portée par la création, la parole et l'engagement. Animatrice, communicatrice, actrice et militante pour des changements positifs.";
const descriptionEn = "I am a woman on a journey, driven by creation, voice and commitment. Host, communicator, actress and advocate for positive change.";

export function Footer() {
  const { language } = useTranslation();
  const footerLinks = language === "fr" ? footerLinksFr : footerLinksEn;
  const description = language === "fr" ? descriptionFr : descriptionEn;
  const rightsText = language === "fr" ? "Tous droits réservés." : "All rights reserved.";

  return (
    <footer className="bg-indigo text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="lg" animated={false} />
            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              {description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-rose transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gold mb-4 uppercase text-sm tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Synnova Tocloe. {rightsText}
          </p>
          <p className="text-white/50 text-sm">
            Grand-Popo, Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}
