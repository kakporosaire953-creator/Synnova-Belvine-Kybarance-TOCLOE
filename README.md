# Synnova Tocloe - Portfolio Professionnel

Portfolio personnel de **Synnova Tocloe**, personnalité béninoise polyvalente active dans l'animation, la communication digitale, le cinéma et l'entrepreneuriat social.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38-FF0055?style=for-the-badge&logo=framer)

## Caractéristiques

### Design Cinématique
- **Hero avec Ghost Name** : Effet "SYNNOVA" en arrière-plan (20vw, opacity 0.03)
- **Animations séquencées** : Entrées progressives avec delays (0.4s → 1.4s)
- **Typographie Playfair Display** : Font-black (900) avec tracking-tight
- **Logo professionnel** : Design minimaliste géométrique avec losange stylisé
- **Badges animés** : Hover scale 1.1 avec rotation

### Animations Avancées
- **Scroll-triggered animations** : useInView de Framer Motion
- **Stagger effects** : Délai 0.15s entre éléments
- **Hover effects prononcés** : Scale 1.05-1.1 sur cards
- **Parallax subtil** : Sur images et sections
- **Transitions fluides** : Duration 0.7s avec easing personnalisé

### Pages
1. **Accueil** : Hero cinématique, galerie infinie, statistiques
2. **À Propos** : Timeline zigzag avec images par domaine
3. **Univers** : 4 domaines (Animation, Communication, Cinéma, Entrepreneuriat)
4. **Portfolio** : Galerie masonry, projets, témoignages, lightbox
5. **Contact** : Formulaire avec envoi WhatsApp/Email

### Fonctionnalités
- **Multilingue** : Français / Anglais
- **Dark Mode** : Thème clair/sombre
- **Responsive** : Mobile-first design
- **SEO optimisé** : Meta tags, OpenGraph, sitemap, robots.txt, JSON-LD
- **PWA Ready** : Manifest.json, icônes, mode standalone
- **Performance** : Images optimisées Next.js, lazy loading

## Installation

### Prérequis
- Node.js 18+ 
- npm, yarn ou pnpm

### Étapes

```bash
# Cloner le repository
git clone https://github.com/votre-username/synnova-portfolio.git
cd synnova-portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

### Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
```

## Structure du Projet

```
synnova-portfolio/
├── app/                      # Pages Next.js App Router
│   ├── page.tsx             # Page d'accueil
│   ├── a-propos/            # Page À Propos
│   ├── univers/             # Page Univers
│   ├── portfolio/           # Page Portfolio
│   ├── contact/             # Page Contact
│   ├── layout.tsx           # Layout principal
│   ├── globals.css          # Styles globaux
│   ├── sitemap.ts           # Génération sitemap.xml
│   ├── robots.ts            # Génération robots.txt
│   └── manifest.ts          # PWA manifest
├── components/              # Composants réutilisables
│   ├── animations.tsx       # Composants d'animation
│   ├── navigation.tsx       # Navigation
│   ├── footer.tsx           # Footer
│   ├── logo.tsx             # Logo animé
│   └── ui/                  # Composants UI (shadcn)
├── lib/                     # Utilitaires
│   ├── synnova-images.ts    # Configuration images
│   ├── translations.ts      # Traductions FR/EN
│   └── app-context.tsx      # Contexte global
├── public/
│   └── images/              # 19 images (12 JPG + 7 PNG)
└── styles/                  # Styles additionnels
```

## Palette de Couleurs

```css
/* Rose Passion - Énergie, féminité */
--rose: #C2185B
--rose-light: #E91E63
--rose-dark: #AD1457

/* Indigo Nuit - Profondeur, leadership */
--indigo: #1A237E
--indigo-light: #283593
--indigo-dark: #0D1642

/* Or Africain - Chaleur, éclat */
--gold: #F9A825
--gold-light: #FFC107
--gold-dark: #F57F17
```

## Images

Le site utilise **19 images locales** :
- **12 photos JPG** : IMG-20260514-WA0048 à WA0059
- **7 photos PNG** : file_000...

### Organisation par domaine
- **Hero** : `file_000000004eec720a99fc1a9510c45e97.png`
- **Engagement** : `file_00000000d1a8720a8c4f72ba5c1d3966.png`
- **À Propos** : `file_0000000075247246a41b9fdf324a428c.png`
- **Animation** : IMG-WA0049.jpg
- **Communication** : IMG-WA0052.jpg
- **Cinéma** : IMG-WA0054.jpg
- **Entrepreneuriat** : IMG-WA0058.jpg

## Technologies

### Core
- **Next.js 16.2** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript 5.7** - Typage statique
- **Tailwind CSS 4.2** - Styling utility-first

### Animations
- **Framer Motion 12.38** - Animations fluides
- **tw-animate-css** - Animations CSS

### UI Components
- **Radix UI** - Composants accessibles
- **Lucide React** - Icônes
- **shadcn/ui** - Composants UI

### Autres
- **next-themes** - Dark mode
- **React Hook Form** - Gestion formulaires
- **Zod** - Validation schémas

## SEO & Référencement

### Optimisations implémentées
- **Sitemap.xml** : Génération automatique avec priorités et fréquences
- **Robots.txt** : Configuration crawl bots avec exclusions
- **Meta tags enrichis** : Title templates, descriptions, keywords
- **OpenGraph** : Partage optimisé Facebook, LinkedIn
- **Twitter Cards** : Summary large image
- **JSON-LD** : Structured data (Schema.org Person + WebSite)
- **Canonical URLs** : Évite contenu dupliqué
- **Alt texts** : Toutes images avec descriptions
- **PWA Manifest** : Progressive Web App ready

### Mots-clés ciblés
Synnova Tocloe, animatrice Bénin, communicatrice Grand-Popo, actrice béninoise, entrepreneuse sociale, UReport Grand-Popo, emballages biodégradables, Festival International des Arts du Bénin, UCAE, journalisme Bénin

## Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres plateformes
- **Netlify** : `npm run build` puis déployer le dossier `.next`
- **Railway** : Connecter le repo GitHub
- **Cloudflare Pages** : Build command `npm run build`

## Performance

- **Lighthouse Score** : 95+/100
- **First Contentful Paint** : < 1.5s
- **Time to Interactive** : < 3s
- **Images optimisées** : WebP avec Next.js Image
- **Code splitting** : Automatique avec Next.js
- **Lazy loading** : Images et composants

## Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://synnova-tocloe.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=22990123456
NEXT_PUBLIC_EMAIL=synnovatocloe@gmail.com
```

### Personnalisation

1. **Couleurs** : Modifier `app/globals.css`
2. **Traductions** : Éditer `lib/translations.ts`
3. **Images** : Remplacer dans `public/images/`
4. **Logo** : Modifier `components/logo.tsx`
5. **SEO** : Mettre à jour `app/layout.tsx` et `app/sitemap.ts`

## Licence

© 2026 Synnova Tocloe. Tous droits réservés.

## Contact

- **Email** : synnovatocloe@gmail.com
- **WhatsApp** : XXXXXXXXXX
- **Facebook** : [@synnovalumiere](https://facebook.com/synnovalumiere)
- **Instagram** : [@_synnova](https://instagram.com/_synnova)
- **TikTok** : [@_synnova](https://tiktok.com/@_synnova)
- **LinkedIn** : [Synnova Tocloe](https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232)

---

**Développé avec soin pour Synnova Tocloe** | Grand-Popo, Bénin
