import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AppProvider } from "@/lib/app-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://synnova-belvine-kybarance-tocloe.vercel.app'),
  title: {
    default: "Synnova Tocloe | Animatrice, Communicatrice, Actrice & Entrepreneuse au Bénin",
    template: "%s | Synnova Tocloe"
  },
  description:
    "Synnova Belvine Kybarance TOCLOE — Animatrice professionnelle, communicatrice digitale, actrice de cinéma et entrepreneuse sociale. Coordonnatrice UReport Grand-Popo, créatrice d'emballages biodégradables éco-responsables au Bénin.",
  keywords: [
    "Synnova Tocloe",
    "Synnova Belvine Kybarance TOCLOE",
    "animatrice Bénin",
    "animatrice événements Bénin",
    "communicatrice Grand-Popo",
    "communication digitale Bénin",
    "actrice béninoise",
    "actrice cinéma Bénin",
    "entrepreneuse sociale Bénin",
    "UReport Grand-Popo",
    "UReport Bénin",
    "emballages biodégradables Bénin",
    "emballages éco-responsables",
    "Festival International des Arts du Bénin",
    "Mairie des Jeunes Grand-Popo",
    "journalisme Bénin",
    "UCAE Bénin",
    "Grand-Popo",
    "Bénin Afrique de l'Ouest",
  ],
  authors: [{ name: "Synnova Tocloe", url: "https://synnova-tocloe.vercel.app" }],
  creator: "Synnova Tocloe",
  publisher: "Synnova Tocloe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "fr_BJ"],
    url: "https://synnova-belvine-kybarance-tocloe.vercel.app",
    siteName: "Synnova Tocloe - Portfolio Professionnel",
    title: "Synnova Tocloe | Animatrice, Communicatrice, Actrice & Entrepreneuse au Bénin",
    description:
      "Portfolio professionnel de Synnova Tocloe. Animatrice d'événements majeurs, communicatrice digitale, actrice de cinéma et entrepreneuse sociale engagée pour un Bénin durable.",
    images: [
      {
        url: "/images/file_000000004eec720a99fc1a9510c45e97.png",
        width: 1200,
        height: 630,
        alt: "Synnova Tocloe - Animatrice et Entrepreneuse au Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@_synnova",
    creator: "@_synnova",
    title: "Synnova Tocloe | Portfolio Professionnel",
    description:
      "Animatrice, communicatrice, actrice et entrepreneuse sociale au Bénin. Découvrez mon parcours et mes projets.",
    images: ["/images/file_000000004eec720a99fc1a9510c45e97.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://synnova-belvine-kybarance-tocloe.vercel.app",
    languages: {
      'fr': "https://synnova-belvine-kybarance-tocloe.vercel.app",
      'en': "https://synnova-belvine-kybarance-tocloe.vercel.app",
    },
  },
  category: 'portfolio',
  classification: 'Professional Portfolio',
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C2185B" },
    { media: "(prefers-color-scheme: dark)", color: "#1A237E" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr" 
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="g852qlWEbOFM-af7WZhlrUBgQKZXAIDgvcjrgAEuOfE" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI2IiBmaWxsPSIjQzIxODVCIi8+CiAgPHBhdGggZD0iTTE2IDYgTDI2IDE2IEwxNiAyNiBMNiAxNiBaIiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTTE2IDEwIEwyMiAxNiBMMTYgMTYgWiIgZmlsbD0iIzFBMjM3RSIvPgogIDxwYXRoIGQ9Ik0xNiAxNiBMMTAgMjIgTDE2IDIyIFoiIGZpbGw9IiMxQTIzN0UiLz4KICA8bGluZSB4MT0iMTIiIHkxPSIxNiIgeDI9IjIwIiB5Mj0iMTYiIHN0cm9rZT0iI0Y5QTgyNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iMSIgZmlsbD0iI0Y5QTgyNSIvPgo8L3N2Zz4K" type="image/svg+xml" />
        <link rel="shortcut icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI2IiBmaWxsPSIjQzIxODVCIi8+CiAgPHBhdGggZD0iTTE2IDYgTDI2IDE2IEwxNiAyNiBMNiAxNiBaIiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTTE2IDEwIEwyMiAxNiBMMTYgMTYgWiIgZmlsbD0iIzFBMjM3RSIvPgogIDxwYXRoIGQ9Ik0xNiAxNiBMMTAgMjIgTDE2IDIyIFoiIGZpbGw9IiMxQTIzN0UiLz4KICA8bGluZSB4MT0iMTIiIHkxPSIxNiIgeDI9IjIwIiB5Mj0iMTYiIHN0cm9rZT0iI0Y5QTgyNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iMSIgZmlsbD0iI0Y5QTgyNSIvPgo8L3N2Zz4K" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('synnova-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (theme === 'system' && prefersDark) || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Synnova Belvine Kybarance Tocloe",
              "alternateName": "Synnova Tocloe",
              "url": "https://synnova-belvine-kybarance-tocloe.vercel.app",
              "image": "https://synnova-belvine-kybarance-tocloe.vercel.app/images/file_000000004eec720a99fc1a9510c45e97.png",
              "sameAs": [
                "https://facebook.com/synnovalumiere",
                "https://instagram.com/_synnova",
                "https://tiktok.com/@_synnova",
                "https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232"
              ],
              "jobTitle": [
                "Animatrice",
                "Communicatrice Digitale",
                "Actrice",
                "Entrepreneuse Sociale"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "UReport Grand-Popo"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Union Culturelle et Artistique des Étudiants (UCAE)"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Grand-Popo",
                "addressCountry": "BJ"
              },
              "nationality": {
                "@type": "Country",
                "name": "Bénin"
              },
              "knowsAbout": [
                "Animation d'événements",
                "Communication digitale",
                "Cinéma",
                "Entrepreneuriat social",
                "Développement durable"
              ],
              "description": "Animatrice professionnelle, communicatrice digitale, actrice de cinéma et entrepreneuse sociale au Bénin. Coordonnatrice UReport Grand-Popo et créatrice d'emballages biodégradables éco-responsables."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Synnova Tocloe",
              "url": "https://synnova-belvine-kybarance-tocloe.vercel.app",
              "description": "Portfolio professionnel de Synnova Tocloe - Animatrice, Communicatrice, Actrice et Entrepreneuse au Bénin",
              "inLanguage": ["fr-FR", "en-US"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://synnova-belvine-kybarance-tocloe.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Services d'Animation Événementielle",
              "provider": {
                "@type": "Person",
                "name": "Synnova Tocloe"
              },
              "serviceType": "Animation d'événements",
              "areaServed": {
                "@type": "Country",
                "name": "Bénin"
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://synnova-belvine-kybarance-tocloe.vercel.app/contact",
                "servicePhone": "XXXXXXXXXX",
                "serviceSmsNumber": "XXXXXXXXXX"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Animation Mariages",
                  "description": "Animation complète de mariages traditionnels et modernes au Bénin"
                },
                {
                  "@type": "Offer", 
                  "name": "Événements Corporate",
                  "description": "Animation professionnelle pour séminaires, conférences et lancements"
                },
                {
                  "@type": "Offer",
                  "name": "Festivals Culturels",
                  "description": "Animation de festivals et événements culturels béninois"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Services d'Animation Synnova Tocloe",
              "description": "Animation professionnelle d'événements au Bénin par Synnova Tocloe",
              "performer": {
                "@type": "Person",
                "name": "Synnova Tocloe"
              },
              "location": {
                "@type": "Place",
                "name": "Bénin",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "BJ"
                }
              },
              "organizer": {
                "@type": "Person",
                "name": "Synnova Tocloe",
                "url": "https://synnova-belvine-kybarance-tocloe.vercel.app"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <AppProvider>
          {children}
        </AppProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
