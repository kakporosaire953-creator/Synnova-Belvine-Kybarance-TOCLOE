"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faMinus, 
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { AnimatedSection } from '@/components/animations';

interface FAQItem {
  question: string;
  answer: string;
  icon: any;
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
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
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
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-rose/30"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className="w-5 h-5 text-rose" 
                    />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <FontAwesomeIcon 
                    icon={openIndex === index ? faMinus : faPlus}
                    className="w-5 h-5 text-muted-foreground"
                  />
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
                      <div className="w-full h-px bg-border mb-4 ml-16" />
                      <div className="ml-16">
                        <div className="prose prose-sm max-w-none text-muted-foreground">
                          {item.answer.split('\n\n').map((paragraph, pIndex) => (
                            <div key={pIndex} className="mb-4 last:mb-0">
                              {paragraph.split('\n').map((line, lIndex) => {
                                if (line.startsWith('•')) {
                                  return (
                                    <div key={lIndex} className="flex items-start gap-2 mb-2">
                                      <span className="w-1.5 h-1.5 bg-rose rounded-full mt-2 flex-shrink-0"></span>
                                      <span>{line.substring(2)}</span>
                                    </div>
                                  );
                                } else if (line.match(/^\d+\./)) {
                                  return (
                                    <div key={lIndex} className="flex items-start gap-3 mb-2">
                                      <span className="w-6 h-6 bg-rose/10 text-rose rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        {line.match(/^(\d+)/)?.[1]}
                                      </span>
                                      <span>{line.replace(/^\d+\.\s*/, '')}</span>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <p key={lIndex} className="mb-2 last:mb-0">
                                      {line}
                                    </p>
                                  );
                                }
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose/5 to-indigo/5 rounded-2xl p-8 border border-rose/10">
            <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-rose" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Une autre question ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              N'hésitez pas à me contacter directement pour toute question spécifique sur vos projets d'événements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:synnovatocloe@gmail.com"
                className="bg-rose text-white px-6 py-3 rounded-full font-medium hover:bg-rose-dark transition-colors inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                synnovatocloe@gmail.com
              </a>
              <a 
                href="#"
                className="bg-indigo text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-dark transition-colors inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                WhatsApp : XXXXXXXXXX
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}