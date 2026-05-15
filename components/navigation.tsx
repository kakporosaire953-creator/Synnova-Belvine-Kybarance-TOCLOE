"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo, LogoIcon } from "@/components/logo";
import { ThemeLanguageSwitcher, ThemeLanguageSwitcherCompact } from "@/components/theme-language-switcher";
import { useTranslation } from "@/lib/app-context";

const navItemsFr = [
  { name: "Accueil", href: "/" },
  { name: "A Propos", href: "/a-propos" },
  { name: "Mes Univers", href: "/univers" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const navItemsEn = [
  { name: "Home", href: "/" },
  { name: "About", href: "/a-propos" },
  { name: "My World", href: "/univers" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useTranslation();

  const navItems = language === "fr" ? navItemsFr : navItemsEn;

  // Prefetch all routes on mount for instant navigation
  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router, navItems]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    router.push(href);
  }, [router]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="relative z-10">
              <div className="hidden sm:block">
                <Logo size="md" />
              </div>
              <div className="sm:hidden">
                <LogoIcon size="md" />
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} className="relative px-4 py-2 group">
                    <span
                      className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-rose" : "text-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-rose/10 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-rose scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Theme/Language + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeLanguageSwitcher />
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-rose text-white rounded-full text-sm font-semibold shadow-lg shadow-rose/25 hover:shadow-rose/40 transition-shadow duration-300"
                >
                  {language === "fr" ? "Collaborer" : "Work Together"}
                </motion.button>
              </Link>
            </div>

            {/* Mobile Controls - Right Side */}
            <div className="flex lg:hidden items-center gap-3 ml-auto">
              <ThemeLanguageSwitcherCompact />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 text-foreground"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background"
              onClick={() => setIsOpen(false)}
            />

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-rose/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />

            {/* Menu Content */}
            <div className="relative h-full w-full flex items-center justify-center pt-20">
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col items-center gap-6"
              >
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group relative block text-center"
                      >
                        <span
                          className={`text-3xl sm:text-4xl font-serif font-bold transition-colors duration-300 ${
                            isActive 
                              ? "text-rose" 
                              : "text-foreground group-hover:text-rose"
                          }`}
                        >
                          {item.name}
                        </span>
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-rose rounded-full" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-border/30"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-4 bg-rose text-white rounded-full text-lg font-semibold shadow-xl shadow-rose/30"
                    >
                      {language === "fr" ? "Collaborer" : "Work Together"}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
