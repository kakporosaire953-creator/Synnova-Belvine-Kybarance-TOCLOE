"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles,
  ArrowLeft,
  Mic,
  Paperclip,
  MoreVertical
} from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

const quickSuggestions = [
  "Présente-toi",
  "Quels sont les services de Synnova ?",
  "Parle-moi de son expérience",
  "Comment la contacter ?",
  "Où est-elle basée ?",
  "Quels sont ses tarifs ?",
  "Ses spécialités culturelles ?",
  "Raconte-moi une blague",
  "Quel temps fait-il ?",
  "Conseils pour réussir un événement"
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Message de bienvenue
    const welcomeMessage: Message = {
      id: 'welcome',
      text: "Salut ! Je suis l'assistant IA de Synnova Tocloe.\n\nJe peux maintenant répondre à TOUTES vos questions !\n\nPortfolio de Synnova\nQuestions générales\nDiscussions libres\nConseils personnalisés\n\nQue voulez-vous savoir ?",
      isBot: true,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend || isLoading) return;

    // Créer un ID unique pour le message utilisateur avec timestamp + random
    const userMessageId = `user-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    
    // Ajouter le message utilisateur avec ID unique
    const userMessage: Message = {
      id: userMessageId,
      text: textToSend,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    setInputValue('');
    setShowSuggestions(false);
    setIsLoading(true);

    // Attendre un petit délai pour éviter les conflits d'ID
    await new Promise(resolve => setTimeout(resolve, 50));

    // Ajouter un message de typing avec ID unique différent
    const typingId = `bot-typing-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const typingMessage: Message = {
      id: typingId,
      text: '',
      isBot: true,
      timestamp: new Date(),
      isTyping: true,
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      const response = await fetch('/api/africhat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: messages.slice(-10),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erreur ${response.status}`);
      }

      const data = await response.json();
      
      // Simuler l'effet de typing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Remplacer le message de typing par la réponse
      setMessages(prev => 
        prev.map(msg => 
          msg.id === typingId 
            ? { ...msg, text: data.response, isTyping: false }
            : msg
        )
      );

    } catch (error: any) {
      console.error('Erreur chat:', error);
      // Remplacer le message de typing par l'erreur
      setMessages(prev => 
        prev.map(msg => 
          msg.id === typingId 
            ? { 
                ...msg, 
                text: `Désolé, je rencontre un problème technique.\n\nVous pouvez contacter Synnova directement :\nWhatsApp : XXXXXXXXXX\nEmail : synnovatocloe@gmail.com`,
                isTyping: false 
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose/5 via-white to-indigo/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-rose to-indigo rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
                <div>
                  <h1 className="font-bold text-lg">Assistant Synnova</h1>
                  <p className="text-sm text-muted-foreground">En ligne • Powered by AfriChat</p>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="max-w-4xl mx-auto px-4 pb-32">
        <div className="space-y-6 py-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-4 ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              {message.isBot && (
                <div className="w-8 h-8 bg-gradient-to-r from-rose to-indigo rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`max-w-[70%] ${message.isBot ? '' : 'order-first'}`}>
                <div
                  className={`p-4 rounded-2xl text-sm whitespace-pre-wrap ${
                    message.isBot
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-md shadow-lg border border-gray-100 dark:border-gray-700'
                      : 'bg-gradient-to-r from-rose to-indigo text-white rounded-tr-md shadow-lg'
                  }`}
                >
                  {message.isTyping ? (
                    <div className="flex space-x-2 items-center">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">Assistant réfléchit...</span>
                    </div>
                  ) : (
                    message.text
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-2 px-2">
                  {message.timestamp.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
              
              {!message.isBot && (
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Suggestions rapides */}
          {showSuggestions && messages.length <= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium text-center">
                Suggestions pour commencer :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickSuggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-left text-sm rounded-xl transition-all duration-200 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:scale-[1.02]"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-rose" />
                      {suggestion}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input fixe en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-end gap-3">
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Paperclip className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                placeholder="Tapez votre message..."
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose/50 disabled:opacity-50 pr-12"
                maxLength={1000}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                <Mic className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            
            <button
              onClick={() => sendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="p-3 bg-gradient-to-r from-rose to-indigo text-white rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            Assistant IA • Peut faire des erreurs • Vérifiez les informations importantes
          </p>
        </div>
      </div>
    </div>
  );
}