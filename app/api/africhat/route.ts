import { NextRequest, NextResponse } from 'next/server';
import { systemPrompt } from '@/lib/africhat-context';

const AFRICHAT_API_KEY = process.env.AFRICHAT_API_KEY;
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

    // Vérification de la clé API
    if (!AFRICHAT_API_KEY) {
      console.error('AFRICHAT_API_KEY manquante');
      return NextResponse.json(
        { error: 'Configuration IA manquante' },
        { status: 500 }
      );
    }

    console.log('Appel à AfriChat API...');

    // Appel à l'API AfriChat
    const response = await fetch(AFRICHAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AFRICHAT_API_KEY}`,
        'X-API-Key': AFRICHAT_API_KEY,
      },
      body: JSON.stringify({
        message: contextWithHistory,
        model: 'gpt-3.5-turbo', // ou le modèle disponible sur AfriChat
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error('Erreur AfriChat API:', response.status, response.statusText);
      throw new Error(`Erreur API AfriChat: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.response || data.message || data.content;

    if (!aiResponse) {
      throw new Error('Réponse vide de AfriChat');
    }

    console.log('Réponse AfriChat reçue avec succès');

    return NextResponse.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
      provider: 'AfriChat',
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