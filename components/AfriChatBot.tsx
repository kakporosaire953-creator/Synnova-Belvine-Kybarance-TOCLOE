"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Bot, 
  Sparkles,
  ExternalLink,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export function AfriChatBot() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <>
      {/* Bouton flottant premium */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={togglePreview}
          className="relative w-16 h-16 bg-gradient-to-r from-rose via-rose-dark to-indigo rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Effet de brillance */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          
          {isPreviewOpen ? (
            <X className="w-7 h-7 text-white z-10" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 text-white z-10" />
              {/* Badge IA animé */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <Sparkles className="w-3 h-3 text-indigo" />
              </motion.div>
            </>
          )}
          
          {/* Cercles d'onde */}
          {!isPreviewOpen && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-rose/30"
                animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-indigo/30"
                animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Aperçu du chat */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-28 right-6 z-40 w-80 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header premium */}
            <div className="relative bg-gradient-to-r from-rose via-rose-dark to-indigo p-6 text-white">
              {/* Effet de particules */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Assistant Synnova</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    IA Avancée • Toujours disponible
                  </p>
                </div>
              </div>
            </div>

            {/* Contenu de l'aperçu */}
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-rose to-indigo rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-md p-3 text-sm">
                    Salut ! 👋 Je suis l'assistant IA de Synnova.
                    <br /><br />
                    ✨ <strong>Nouveau :</strong> Je peux maintenant répondre à TOUTES vos questions !
                  </div>
                </div>
              </div>

              {/* Fonctionnalités */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-rose/10 text-rose p-2 rounded-lg text-center">
                  🎤 Portfolio
                </div>
                <div className="bg-indigo/10 text-indigo p-2 rounded-lg text-center">
                  🌍 Questions générales
                </div>
                <div className="bg-gold/10 text-gold p-2 rounded-lg text-center">
                  💬 Discussion libre
                </div>
                <div className="bg-green-500/10 text-green-600 p-2 rounded-lg text-center">
                  🎯 Conseils
                </div>
              </div>

              {/* Bouton d'action principal */}
              <Link href="/chat">
                <motion.button
                  className="w-full bg-gradient-to-r from-rose to-indigo text-white py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Ouvrir le Chat Complet
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </Link>

              <p className="text-xs text-gray-500 text-center">
                Powered by AfriChat • IA Conversationnelle
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}