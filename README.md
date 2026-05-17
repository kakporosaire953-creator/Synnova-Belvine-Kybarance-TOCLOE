# Portfolio Synnova Tocloe

Site web professionnel de Synnova Belvine Kybarance TOCLOE - Animatrice, Communicatrice, Actrice et Entrepreneuse au Bénin.

## À propos

Synnova Tocloe est une professionnelle polyvalente basée à Grand-Popo, Bénin, spécialisée dans :

- **Animation d'événements** : Mariages, festivals, événements corporate
- **Communication digitale** : Stratégie, création de contenu, community management
- **Cinéma et régie** : Actrice, coordination artistique
- **Entrepreneuriat social** : Emballages biodégradables éco-responsables

## Fonctionnalités du site

### Design et UX
- Interface moderne et responsive
- Animations cinématiques avec Framer Motion
- Design system cohérent (Rose, Indigo, Gold)
- Navigation intuitive multilingue (FR/EN)

### Sections principales
- **Accueil** : Présentation avec hero cinématique
- **À propos** : Parcours en timeline zigzag
- **Portfolio** : Galerie interactive des réalisations
- **Univers** : 4 domaines d'expertise détaillés
- **Contact** : Formulaire et informations de contact
- **FAQ** : Questions fréquentes avec accordéon animé

### Fonctionnalités avancées
- **Chatbot IA** : Assistant conversationnel intelligent
- **Calculateur de devis** : Estimation personnalisée
- **Galerie infinie** : Défilement automatique des images
- **SEO optimisé** : Structured data, sitemap, robots.txt
- **PWA ready** : Manifest et optimisations mobiles

## Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : Lucide React, FontAwesome
- **Fonts** : Inter, Playfair Display
- **Deployment** : Vercel
- **Analytics** : Vercel Analytics

## Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── a-propos/          # Page À propos
│   ├── api/               # API Routes
│   ├── chat/              # Page chat IA
│   ├── contact/           # Page contact
│   ├── portfolio/         # Page portfolio
│   ├── univers/           # Page univers
│   └── layout.tsx         # Layout principal
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── animations.tsx    # Composants d'animation
│   ├── chatbot.tsx       # Chatbot IA
│   ├── faq-section.tsx   # Section FAQ
│   └── ...
├── lib/                  # Utilitaires et contextes
├── public/               # Assets statiques
│   └── images/          # Images du portfolio
└── styles/              # Styles globaux
```

## Installation et développement

```bash
# Cloner le repository
git clone https://github.com/kakporosaire953-creator/Synnova-Belvine-Kybarance-TOCLOE.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start
```

## Configuration

### Variables d'environnement
Créer un fichier `.env.local` :

```env
# Configuration optionnelle
NEXT_PUBLIC_SITE_URL=https://synnova-belvine-kybarance-tocloe.vercel.app
```

### Personnalisation
- **Images** : Ajouter dans `public/images/`
- **Contenu** : Modifier `lib/translations.ts`
- **Couleurs** : Ajuster dans `tailwind.config.js`
- **Animations** : Personnaliser dans `components/animations.tsx`

## Contact

**Synnova Tocloe**
- **WhatsApp** : XXXXXXXXXX
- **Email** : synnovatocloe@gmail.com
- **Instagram** : @_synnova
- **Facebook** : @synnovalumiere
- **Localisation** : Grand-Popo, Bénin

## Licence

© 2024 Synnova Tocloe. Tous droits réservés.

---

*Site développé avec passion pour mettre en valeur le talent et l'expertise de Synnova Tocloe au Bénin et en Afrique de l'Ouest.*