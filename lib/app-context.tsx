"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { translations, Locale, getTranslation } from "@/lib/translations";

type Theme = "light" | "dark" | "system";

interface AppContextType {
  // Language
  language: Locale;
  setLanguage: (locale: Locale) => void;
  t: (key: string) => string;
  
  // Theme
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>("fr");
  const [theme, setThemeState] = useState<Theme>("light");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Translation function
  const t = useCallback((key: string): string => {
    return getTranslation(language, key);
  }, [language]);

  // Initialize from localStorage on mount
  useEffect(() => {
    setMounted(true);
    
    // Get saved locale
    const savedLocale = localStorage.getItem("synnova-locale") as Locale;
    if (savedLocale && (savedLocale === "fr" || savedLocale === "en")) {
      setLanguageState(savedLocale);
    }
    
    // Get saved theme
    const savedTheme = localStorage.getItem("synnova-theme") as Theme;
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        root.classList.add("dark");
        setResolvedTheme("dark");
      } else {
        root.classList.remove("dark");
        setResolvedTheme("light");
      }
    };

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mediaQuery.matches);
      
      const handler = (e: MediaQueryListEvent) => applyTheme(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      applyTheme(theme === "dark");
    }
  }, [theme, mounted]);

  // Handle locale changes
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = language;
  }, [language, mounted]);

  const setLanguage = (newLocale: Locale) => {
    setLanguageState(newLocale);
    localStorage.setItem("synnova-locale", newLocale);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("synnova-theme", newTheme);
  };

  // Prevent hydration mismatch by using consistent initial values
  const value: AppContextType = {
    language: mounted ? language : "fr",
    setLanguage: mounted ? setLanguage : () => {},
    t: mounted ? t : (key: string) => getTranslation("fr", key),
    theme: mounted ? theme : "light",
    setTheme: mounted ? setTheme : () => {},
    resolvedTheme: mounted ? resolvedTheme : "light",
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

// Convenience hooks
export function useTranslation() {
  const { t, language, setLanguage } = useApp();
  return { t, language, setLanguage };
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useApp();
  return { theme, setTheme, resolvedTheme };
}
