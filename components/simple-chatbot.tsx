"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useTranslation } from "@/lib/app-context";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function SimpleChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { language } = useTranslation();

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    setInputValue("");
    
    // Réponse automatique simple
    setTimeout(() => {
      addBotMessage("Merci pour votre message ! Pour une réponse personnalisée, contactez-moi sur WhatsApp : +229 90 12 34 56 ou par email : synnovatocloe@gmail.com");
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Salut ! 👋 Je suis l'assistant de Synnova. Comment puis-je vous aider ?");
      }, 500);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={openChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-rose to-rose-dark text-white rounded-full shadow-2xl shadow-rose/30 flex items-center justify-center"
        style={{ display: isOpen ? "none" : "flex" }}
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Badge de notification */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-gold rounded-full flex items-center justify-center"
        >
          <span className="text-xs font-bold text-indigo">!</span>
        </motion.div>
      </motion.button>

      {/* Interface de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rose to-rose-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistant Synnova</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto h-80 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div className={`max-w-[80%]`}>
                    {message.isBot && (
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-rose/10 rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-rose" />
                        </div>
                        <span className="text-xs text-muted-foreground">Synnova Bot</span>
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl whitespace-pre-line ${
                        message.isBot
                          ? "bg-muted text-foreground rounded-tl-sm"
                          : "bg-rose text-white rounded-tr-sm"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === "fr" ? "Tapez votre message..." : "Type your message..."}
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-full focus:outline-none focus:border-rose text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-rose text-white rounded-full flex items-center justify-center hover:bg-rose-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}