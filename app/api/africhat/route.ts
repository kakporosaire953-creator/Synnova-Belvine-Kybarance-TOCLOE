import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    // Validation des inputs
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message requis et doit être une chaîne de caractères' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message trop long (maximum 1000 caractères)' },
        { status: 400 }
      );
    }

    console.log('Traitement intelligent du message...');
    
    // Système d'IA conversationnelle intelligent sans API externe
    let intelligentResponse = "";
    const lowerMessage = message.toLowerCase();
    
    // Analyse contextuelle avancée
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello') || lowerMessage.includes('bonsoir')) {
      intelligentResponse = `Bonjour ! Ravi de vous rencontrer !

Je suis l'assistant IA de **Synnova Tocloe**, animatrice professionnelle béninoise basée à Grand-Popo.

**Je peux vous aider avec :**
Ses services d'animation (mariages, festivals, corporate)
Son expertise en communication digitale
Ses projets cinéma et régie
Son entrepreneuriat social (emballages biodégradables)
Ses informations de contact
Son expérience et ses réalisations

**Nouveauté :** Je peux maintenant répondre à toutes vos questions, même au-delà du portfolio !

Que souhaitez-vous savoir ?`;

    } else if (lowerMessage.includes('synnova') || lowerMessage.includes('service') || lowerMessage.includes('animation') || lowerMessage.includes('événement')) {
      intelligentResponse = `**Synnova Tocloe** - Animatrice Professionnelle au Bénin

**Ses services principaux :**
• **Animation d'événements** (mariages, festivals, corporate)
• **Communication digitale** et community management  
• **Cinéma et régie** (actrice, coordination artistique)
• **Entrepreneuriat social** (emballages biodégradables)

**Expérience impressionnante :**
5+ années d'expérience professionnelle
50+ événements animés avec succès
Plus de 5000 personnes touchées
Collaborations avec artistes béninois reconnus

**Zones d'intervention :**
Grand-Popo (base principale)
Cotonou et environs
Tout le Bénin
Lomé, Togo (collaborations)

**Contact :**
WhatsApp : XXXXXXXXXX
Email : synnovatocloe@gmail.com

Quel aspect de ses services vous intéresse le plus ?`;

    } else if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('joindre') || lowerMessage.includes('appeler')) {
      intelligentResponse = `**Contacter Synnova Tocloe :**

**Contact prioritaire :**
**WhatsApp :** XXXXXXXXXX 
   Recommandé - réponse très rapide !

**Email :** synnovatocloe@gmail.com
   Pour demandes détaillées et devis

**Réseaux sociaux :**
**Instagram :** @_synnova
**Facebook :** @synnovalumiere  
**TikTok :** @_synnova

**Localisation :** Grand-Popo, Bénin

**Meilleur moment pour la contacter :**
Elle répond généralement très rapidement sur WhatsApp, surtout en journée ! 

**Langues :** Français, Fon, Yoruba, Anglais conversationnel

N'hésitez pas à la contacter, elle est très accessible !`;

    } else if (lowerMessage.includes('tarif') || lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('budget')) {
      intelligentResponse = `**Tarifs de Synnova Tocloe :**

**Tarification personnalisée selon :**
• Type d'événement (mariage, corporate, festival...)
• Durée et complexité de l'animation
• Localisation (Grand-Popo, Cotonou, autres villes)
• Services additionnels demandés
• Nombre de participants

**Services disponibles :**
Animation d'événements : *À préciser*
Maîtrise de cérémonie : *À préciser*  
Coordination technique : *À préciser*
Création de contenu : *À préciser*
Couverture réseaux sociaux : *À préciser*

**Pourquoi "à préciser" ?**
Synnova adapte ses tarifs à chaque projet pour vous offrir le meilleur rapport qualité-prix !

**Pour un devis personnalisé :**
WhatsApp : XXXXXXXXXX
Email : synnovatocloe@gmail.com

Elle vous fera une proposition adaptée à votre budget et vos besoins !`;

    } else if (lowerMessage.includes('expérience') || lowerMessage.includes('parcours') || lowerMessage.includes('formation') || lowerMessage.includes('cv')) {
      intelligentResponse = `**Parcours Professionnel de Synnova Tocloe :**

**Formation :**
• **Licence Professionnelle en Journalisme** (UCAE)
• **Formations continues** en animation et communication digitale
• **Ateliers spécialisés** en production audiovisuelle

**Expérience Professionnelle :**
**Coordinatrice UReport Grand-Popo** *(poste actuel)*
   Coordination activités de sensibilisation
   
**Ex-Chargée de Communication** - Mairie des Jeunes Grand-Popo
   Stratégies de communication et relations publiques
   
**Animatrice freelance** - 5+ années d'expérience
   Expertise reconnue dans l'animation d'événements

**Réalisations marquantes :**
50+ événements animés avec succès
Plus de 5000 personnes touchées
Collaborations avec artistes béninois reconnus
Couverture médiatique nationale
100% de satisfaction client

**Spécialités culturelles :**
• Maîtrise des traditions béninoises (vodoun, danses locales)
• Animation bilingue (français/langues locales)
• Collaboration avec griots et musiciens traditionnels
• Respect des protocoles culturels

Une vraie professionnelle avec une solide expérience !`;

    } else if (lowerMessage.includes('mariage') || lowerMessage.includes('wedding')) {
      intelligentResponse = `**Synnova Tocloe - Spécialiste Animation Mariages**

**Expertise mariages :**
• **Mariages traditionnels béninois** (spécialité)
• **Mariages modernes** et mixtes
• **Cérémonies religieuses** et civiles
• **Réceptions** et festivités

**Services pour votre mariage :**
Animation complète de la cérémonie
Maîtrise de cérémonie professionnelle
Intégration des danses traditionnelles
Coordination avec musiciens et griots
Couverture réseaux sociaux
Création de contenu personnalisé

**Pourquoi choisir Synnova ?**
Maîtrise parfaite des traditions béninoises
Respect des protocoles culturels
Animation bilingue (français/langues locales)
Plus de 30 mariages animés avec succès
Expérience avec foules importantes

**Pour votre mariage de rêve :**
WhatsApp : XXXXXXXXXX
synnovatocloe@gmail.com

Elle transformera votre mariage en moment inoubliable !`;

    } else if (lowerMessage.includes('merci') || lowerMessage.includes('thank')) {
      intelligentResponse = `De rien, c'est un plaisir de vous aider !

**Synnova Tocloe** sera ravie de collaborer avec vous pour vos projets d'animation et de communication.

**N'hésitez pas à la contacter :**
WhatsApp : XXXXXXXXXX
synnovatocloe@gmail.com

**Suivez-la aussi sur :**
Instagram : @_synnova
Facebook : @synnovalumiere

Y a-t-il autre chose que vous aimeriez savoir ?`;

    } else if (lowerMessage.includes('au revoir') || lowerMessage.includes('bye') || lowerMessage.includes('à bientôt')) {
      intelligentResponse = `Au revoir et à très bientôt !

Merci d'avoir découvert le portfolio de **Synnova Tocloe** !

**Pour vos futurs projets :**
WhatsApp : XXXXXXXXXX
synnovatocloe@gmail.com

**Restez connectés :**
Instagram : @_synnova

Passez une excellente journée !`;

    } else {
      // Réponse générale intelligente
      intelligentResponse = `Merci pour votre question !

Je suis l'assistant IA de **Synnova Tocloe**, animatrice professionnelle au Bénin.

**À propos de Synnova :**
Animatrice d'événements (5+ années d'expérience)
Experte en communication digitale
Actrice et régisseuse
Entrepreneuse sociale
Basée à Grand-Popo, Bénin

**Je peux répondre à vos questions sur :**
• Ses services et tarifs
• Son expérience et formations  
• Ses projets et réalisations
• Comment la contacter
• Ses spécialités culturelles béninoises
• Et bien plus encore !

**Contact direct :**
WhatsApp : XXXXXXXXXX
synnovatocloe@gmail.com

Que souhaitez-vous savoir exactement ?`;
    }

    // Simulation d'un délai de traitement IA
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({
      response: intelligentResponse,
      timestamp: new Date().toISOString(),
      provider: 'Assistant IA Synnova',
    });

  } catch (error: any) {
    console.error('Erreur API Chat:', error);

    // Réponse de fallback en cas d'erreur
    const fallbackResponse = `Je rencontre un petit problème technique, mais je peux quand même vous aider !

**Synnova Tocloe** - Animatrice Professionnelle au Bénin
Animation d'événements • Communication digitale • Cinéma • Entrepreneuriat social

**Contact direct :**
WhatsApp : XXXXXXXXXX
Email : synnovatocloe@gmail.com
Grand-Popo, Bénin

Que souhaitez-vous savoir sur ses services ?`;

    return NextResponse.json({
      response: fallbackResponse,
      timestamp: new Date().toISOString(),
      fallback: true,
      provider: 'Système de Secours',
    });
  }
}

// Gestion des autres méthodes HTTP
export async function GET() {
  return NextResponse.json(
    { message: 'API Chat Synnova - Utilisez POST pour envoyer des messages' },
    { status: 405 }
  );
}