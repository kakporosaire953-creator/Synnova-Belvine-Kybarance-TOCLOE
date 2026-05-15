"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, ChevronDown, Globe, Check } from "lucide-react";
import { useTheme, useTranslation } from "@/lib/app-context";

const themeOptions = [
  { value: "light", label: { fr: "Clair", en: "Light" }, icon: Sun },
  { value: "dark", label: { fr: "Sombre", en: "Dark" }, icon: Moon },
  { value: "system", label: { fr: "Systeme", en: "System" }, icon: Monitor },
] as const;

const languageOptions = [
  { value: "fr", label: "Francais", flag: "BJ" },
  { value: "en", label: "English", flag: "GB" },
] as const;

export function ThemeLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage } = useTranslation();

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CurrentThemeIcon = themeOptions.find(t => t.value === theme)?.icon || Sun;
  const currentLang = languageOptions.find(l => l.value === language);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Icone theme */}
        <div className="flex items-center justify-center w-6 h-6">
          <CurrentThemeIcon className="w-4 h-4 text-gold" />
        </div>
        
        {/* Separateur */}
        <div className="w-px h-5 bg-border" />
        
        {/* Langue */}
        <div className="flex items-center gap-1.5">
          <span className="text-lg leading-none">{currentLang?.flag === "BJ" ? "🇧🇯" : "🇬🇧"}</span>
          <span className="text-sm font-medium text-foreground">{language.toUpperCase()}</span>
        </div>
        
        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-card border border-border shadow-xl overflow-hidden z-50"
          >
            {/* Section Theme */}
            <div className="p-2 border-b border-border">
              <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {language === "fr" ? "Theme" : "Theme"}
              </p>
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.value;
                return (
                  <motion.button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-rose/10 text-rose" 
                        : "text-foreground hover:bg-muted"
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-rose" : "text-muted-foreground"}`} />
                    <span className="flex-1 text-left text-sm font-medium">
                      {option.label[language]}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <Check className="w-4 h-4 text-rose" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Section Langue */}
            <div className="p-2">
              <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-3 h-3" />
                {language === "fr" ? "Langue" : "Language"}
              </p>
              {languageOptions.map((option) => {
                const isActive = language === option.value;
                return (
                  <motion.button
                    key={option.value}
                    onClick={() => {
                      setLanguage(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-rose/10 text-rose" 
                        : "text-foreground hover:bg-muted"
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="text-lg leading-none">
                      {option.flag === "BJ" ? "🇧🇯" : "🇬🇧"}
                    </span>
                    <span className="flex-1 text-left text-sm font-medium">
                      {option.label}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <Check className="w-4 h-4 text-rose" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Version compacte pour mobile
export function ThemeLanguageSwitcherCompact() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CurrentThemeIcon = themeOptions.find(t => t.value === theme)?.icon || Sun;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border shadow-sm"
        whileTap={{ scale: 0.95 }}
      >
        <CurrentThemeIcon className="w-4 h-4 text-gold" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-card border border-border shadow-xl overflow-hidden z-50"
          >
            {/* Themes */}
            <div className="p-1.5 border-b border-border">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm ${
                      isActive ? "bg-rose/10 text-rose" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{option.label[language]}</span>
                    {isActive && <Check className="w-3 h-3 ml-auto" />}
                  </button>
                );
              })}
            </div>

            {/* Langues */}
            <div className="p-1.5">
              {languageOptions.map((option) => {
                const isActive = language === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      setLanguage(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm ${
                      isActive ? "bg-rose/10 text-rose" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{option.flag === "BJ" ? "🇧🇯" : "🇬🇧"}</span>
                    <span>{option.label}</span>
                    {isActive && <Check className="w-3 h-3 ml-auto" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
