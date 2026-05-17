import { NextRequest, NextResponse } from 'next/server';
import { systemPrompt } from '@/lib/africhat-context';

// Clé API directement dans le code pour le déploiement rapide
const AFRICHAT_API_KEY = 'afc_live_AOJ43c6Hp2KG.jwcWWXHQhiFxbr02TQN45UMHvgWLDY0nlG1bu3o3';
const AFRICHAT_API_URL = 'https://my-africhat.vercel.app/api/chat';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

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

    // Construction du contexte complet avec l'historique
    const contextWithHistory = `${systemPrompt}

HISTORIQUE DE CONVERSATION :
${conversationHistory.slice(-5).map((msg: any) => 
  `${msg.isBot ? 'Assistant' : 'Visiteur'}: ${msg.text}`
).join('\n')}

QUESTION ACTUELLE : ${message}

Réponds maintenant à la question en utilisant uniquement les informations du portfolio de Synnova.`;

    console.log('Appel à AfriChat API...');

    // Appel à l'API AfriChat avec fallback intelligent
    try {
      const response = await fetch(AFRICHAT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AFRICHAT_API_KEY}`,
          'X-API-Key': AFRICHAT_API_KEY,
        },
        body: JSON.stringify({
          message: contextWithHistory,
          model: 'gpt-3.5-turbo',
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.response || data.message || data.content;

        if (aiResponse) {
          return NextResponse.json({
            response: aiResponse,
            timestamp: new Date().toISOString(),
            provider: 'AfriChat',
          });
        }
      }
    } catch (apiError) {
      console.log('AfriChat API non disponible, utilisation du fallback intelligent');
    }

    // Fallback intelligent basé sur le contenu
    let intelligentResponse = "";
    
    if (message.toLowerCase().includes('synnova') || message.toLowerCase().includes('service') || message.toLowerCase().includes('animation')) {
      intelligentResponse = `🎤 **Synnova Tocloe** - Animatrice Professionnelle au Bénin

**Ses services :**
• Animation d'événements (mariages, festivals, corporate)
• Communication digitale et community management  
• Cinéma et régie (actrice, coordination)
• Entrepreneuriat social (emballages biodégradables)

**Contact :**
📱 WhatsApp : XXXXXXXXXX
📧 Email : synnovatocloe@gmail.com
📍 Localisation : Grand-Popo, Bénin

**Expérience :** 5+ années, 50+ événements, 5000+ personnes touchées

Que souhaitez-vous savoir de plus spécifique ? 😊`;
    } else if (message.toLowerCase().includes('contact') || message.toLowerCase().includes('téléphone')) {
      intelligentResponse = `📞 **Contact Synnova Tocloe :**

📱 WhatsApp : XXXXXXXXXX
📧 Email : synnovatocloe@gmail.com
🌐 Instagram : @_synnova
📘 Facebook : @synnovalumiere
🎵 TikTok : @_synnova
📍 Grand-Popo, Bénin

Elle répond généralement rapidement sur WhatsApp ! 😊`;
    } else if (message.toLowerCase().includes('tarif') || message.toLowerCase().includes('prix')) {
      intelligentResponse = `💰 **Tarifs de Synnova :**

Les tarifs sont **à préciser** selon :
• Type d'événement
• Durée et complexité
• Localisation
• Services additionnels

📱 Contactez-la directement pour un devis personnalisé :
WhatsApp : XXXXXXXXXX
Email : synnovatocloe@gmail.com

Elle vous fera une proposition adaptée à votre budget ! 😊`;
    } else {
      intelligentResponse = `Merci pour votre question ! 😊

Je suis l'assistant de Synnova Tocloe, animatrice professionnelle au Bénin.

**Je peux vous renseigner sur :**
🎤 Ses services d'animation
📱 Sa communication digitale  
🎬 Ses projets cinéma
🌱 Son entrepreneuriat social
📞 Ses informations de contact

**Contact direct :**
📱 WhatsApp : XXXXXXXXXX
📧 synnovatocloe@gmail.com

Que souhaitez-vous savoir ? 🌟`;
    }

    return NextResponse.json({
      response: intelligentResponse,
      timestamp: new Date().toISOString(),
      provider: 'Fallback Intelligent',
    });

  } catch (error: any) {
    console.error('Erreur API AfriChat:', error);

    // Réponse de fallback professionnelle
    const fallbackResponse = `Je rencontre actuellement un problème technique. 😔

Pour obtenir des informations sur Synnova Tocloe, vous pouvez la contacter directement :

📱 WhatsApp : XXXXXXXXXX
📧 Email : synnovatocloe@gmail.com
🌟 Instagram : @_synnova

Synnova est une animatrice professionnelle béninoise spécialisée dans l'animation d'événements, la communication digitale, le cinéma et l'entrepreneuriat social.`;

    return NextResponse.json({
      response: fallbackResponse,
      timestamp: new Date().toISOString(),
      fallback: true,
      provider: 'AfriChat',
    });
  }
}

// Gestion des autres méthodes HTTP
export async function GET() {
  return NextResponse.json(
    { message: 'API AfriChat Synnova - Utilisez POST pour envoyer des messages' },
    { status: 405 }
  );
}