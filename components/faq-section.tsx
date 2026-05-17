"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/animations';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQSection({ 
  title = "Questions Fréquentes", 
  subtitle = "Tout ce que vous devez savoir",
  items, 
  className = "" 
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-rose font-medium tracking-widest uppercase text-sm">
            FAQ
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mt-4 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-foreground text-lg pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-rose" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="w-full h-px bg-border mb-4" />
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimatedSection className="text-center mt-12">
          <div className="bg-gradient-to-r from-rose/10 to-indigo/10 rounded-2xl p-8 border border-rose/20">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Une autre question ?
            </h3>
            <p className="text-muted-foreground mb-6">
              N'hésitez pas à me contacter directement pour toute question spécifique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:synnovatocloe@gmail.com"
                className="bg-rose text-white px-6 py-3 rounded-full font-medium hover:bg-rose-dark transition-colors inline-flex items-center justify-center"
              >
                📧 synnovatocloe@gmail.com
              </a>
              <a 
                href="#"
                className="bg-indigo text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-dark transition-colors inline-flex items-center justify-center"
              >
                📱 WhatsApp : XXXXXXXXXX
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}