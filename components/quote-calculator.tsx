"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Check, Clock, Users, Calendar } from "lucide-react";

interface QuoteData {
  eventType: string;
  duration: string;
  participants: string;
  location: string;
  services: string[];
}

const eventTypes = [
  { id: "conference", label: "Conférence/Séminaire", basePrice: 0 },
  { id: "wedding", label: "Mariage", basePrice: 0 },
  { id: "corporate", label: "Événement Corporate", basePrice: 0 },
  { id: "festival", label: "Festival/Concert", basePrice: 0 },
  { id: "birthday", label: "Anniversaire", basePrice: 0 },
  { id: "launch", label: "Lancement Produit", basePrice: 0 },
];

const durations = [
  { id: "2h", label: "2 heures", multiplier: 1 },
  { id: "4h", label: "4 heures", multiplier: 1.5 },
  { id: "6h", label: "6 heures", multiplier: 2 },
  { id: "8h", label: "8 heures", multiplier: 2.5 },
  { id: "full", label: "Journée complète", multiplier: 3 },
];

const participantRanges = [
  { id: "small", label: "Moins de 50", multiplier: 1 },
  { id: "medium", label: "50-150", multiplier: 1.2 },
  { id: "large", label: "150-300", multiplier: 1.5 },
  { id: "xlarge", label: "Plus de 300", multiplier: 2 },
];

const additionalServices = [
  { id: "mc", label: "Maîtrise de cérémonie", price: 0 },
  { id: "sound", label: "Coordination technique", price: 0 },
  { id: "content", label: "Création de contenu", price: 0 },
  { id: "social", label: "Couverture réseaux sociaux", price: 0 },
  { id: "consultation", label: "Consultation pré-événement", price: 0 },
];

export function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    eventType: "",
    duration: "",
    participants: "",
    location: "",
    services: [],
  });
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const eventType = eventTypes.find(e => e.id === quoteData.eventType);
    const duration = durations.find(d => d.id === quoteData.duration);
    const participants = participantRanges.find(p => p.id === quoteData.participants);
    
    if (!eventType || !duration || !participants) return 0;

    let basePrice = eventType.basePrice;
    basePrice *= duration.multiplier;
    basePrice *= participants.multiplier;

    // Location multiplier
    const locationMultiplier = quoteData.location === "outside" ? 1.3 : 1;
    basePrice *= locationMultiplier;

    // Additional services
    const servicesPrice = quoteData.services.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    return Math.round(basePrice + servicesPrice);
  };

  const formatPrice = (price: number) => {
    return 'À préciser';
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
    else setShowResult(true);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetCalculator = () => {
    setStep(1);
    setQuoteData({
      eventType: "",
      duration: "",
      participants: "",
      location: "",
      services: [],
    });
    setShowResult(false);
  };

  const handleServiceToggle = (serviceId: string) => {
    setQuoteData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return quoteData.eventType !== "";
      case 2: return quoteData.duration !== "";
      case 3: return quoteData.participants !== "";
      case 4: return quoteData.location !== "";
      case 5: return true;
      default: return false;
    }
  };

  if (showResult) {
    const finalPrice = calculatePrice();
    const eventTypeLabel = eventTypes.find(e => e.id === quoteData.eventType)?.label;
    const durationLabel = durations.find(d => d.id === quoteData.duration)?.label;
    const participantsLabel = participantRanges.find(p => p.id === quoteData.participants)?.label;

    return (
      <div className="bg-card rounded-3xl p-8 border border-border">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Check className="w-10 h-10 text-rose" />
          </motion.div>
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Devis Personnalisé
          </h3>
          <p className="text-muted-foreground mt-2">
            Voici une estimation pour votre événement
          </p>
        </div>

        <div className="bg-background rounded-2xl p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-rose" />
              <div>
                <p className="font-medium text-foreground">{eventTypeLabel}</p>
                <p className="text-sm text-muted-foreground">Type d'événement</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-indigo" />
              <div>
                <p className="font-medium text-foreground">{durationLabel}</p>
                <p className="text-sm text-muted-foreground">Durée</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gold" />
              <div>
                <p className="font-medium text-foreground">{participantsLabel} participants</p>
                <p className="text-sm text-muted-foreground">Audience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full" />
              <div>
                <p className="font-medium text-foreground">
                  {quoteData.location === "cotonou" ? "Cotonou/Grand-Popo" : "Hors région"}
                </p>
                <p className="text-sm text-muted-foreground">Localisation</p>
              </div>
            </div>
          </div>

          {quoteData.services.length > 0 && (
            <div className="mb-6">
              <p className="font-medium text-foreground mb-3">Services additionnels :</p>
              <div className="flex flex-wrap gap-2">
                {quoteData.services.map(serviceId => {
                  const service = additionalServices.find(s => s.id === serviceId);
                  return (
                    <span key={serviceId} className="px-3 py-1 bg-rose/10 text-rose rounded-full text-sm">
                      {service?.label}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <div className="border-t border-border pt-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-foreground">Prix estimé :</span>
              <span className="font-serif text-3xl font-bold text-rose">
                {formatPrice(finalPrice)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              *Prix indicatif - Devis final après discussion des détails
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const message = `Bonjour Synnova,

Je souhaite un devis pour :
- Événement : ${eventTypeLabel}
- Durée : ${durationLabel}
- Participants : ${participantsLabel}
- Localisation : ${quoteData.location === "cotonou" ? "Cotonou/Grand-Popo" : "Hors région"}
${quoteData.services.length > 0 ? `- Services : ${quoteData.services.map(s => additionalServices.find(srv => srv.id === s)?.label).join(", ")}` : ""}

Prix estimé : ${formatPrice(finalPrice)}

Pouvons-nous discuter des détails ?`;
              
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/22990123456?text=${encodedMessage}`, "_blank");
            }}
            className="flex-1 bg-rose text-white py-3 px-6 rounded-full font-medium flex items-center justify-center gap-2 group"
          >
            Confirmer via WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <button
            onClick={resetCalculator}
            className="flex-1 border-2 border-border text-foreground py-3 px-6 rounded-full font-medium hover:bg-muted transition-colors"
          >
            Nouveau calcul
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-3xl p-8 border border-border">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-rose" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Calculateur de Devis
          </h3>
          <p className="text-muted-foreground">
            Obtenez une estimation personnalisée en quelques clics
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Étape {step} sur 5</span>
          <span>{Math.round((step / 5) * 100)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            className="bg-rose h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {step === 1 && (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Type d'événement</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {eventTypes.map((type) => (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setQuoteData(prev => ({ ...prev, eventType: type.id }))}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    quoteData.eventType === type.id
                      ? "border-rose bg-rose/5 text-rose"
                      : "border-border hover:border-rose/30"
                  }`}
                >
                  <p className="font-medium">{type.label}</p>
                  <p className="text-sm text-muted-foreground">
                    À partir de {formatPrice(type.basePrice)}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Durée de l'événement</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {durations.map((duration) => (
                <motion.button
                  key={duration.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setQuoteData(prev => ({ ...prev, duration: duration.id }))}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    quoteData.duration === duration.id
                      ? "border-rose bg-rose/5 text-rose"
                      : "border-border hover:border-rose/30"
                  }`}
                >
                  <p className="font-medium">{duration.label}</p>
                  <p className="text-sm text-muted-foreground">
                    Coefficient: ×{duration.multiplier}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Nombre de participants</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {participantRanges.map((range) => (
                <motion.button
                  key={range.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setQuoteData(prev => ({ ...prev, participants: range.id }))}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    quoteData.participants === range.id
                      ? "border-rose bg-rose/5 text-rose"
                      : "border-border hover:border-rose/30"
                  }`}
                >
                  <p className="font-medium">{range.label}</p>
                  <p className="text-sm text-muted-foreground">
                    Coefficient: ×{range.multiplier}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Localisation</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setQuoteData(prev => ({ ...prev, location: "cotonou" }))}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  quoteData.location === "cotonou"
                    ? "border-rose bg-rose/5 text-rose"
                    : "border-border hover:border-rose/30"
                }`}
              >
                <p className="font-medium">Cotonou / Grand-Popo</p>
                <p className="text-sm text-muted-foreground">Tarif standard</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setQuoteData(prev => ({ ...prev, location: "outside" }))}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  quoteData.location === "outside"
                    ? "border-rose bg-rose/5 text-rose"
                    : "border-border hover:border-rose/30"
                }`}
              >
                <p className="font-medium">Autres régions</p>
                <p className="text-sm text-muted-foreground">+30% (déplacement)</p>
              </motion.button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services additionnels (optionnel)</h4>
            <div className="space-y-3">
              {additionalServices.map((service) => (
                <motion.button
                  key={service.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleServiceToggle(service.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    quoteData.services.includes(service.id)
                      ? "border-rose bg-rose/5 text-rose"
                      : "border-border hover:border-rose/30"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{service.label}</p>
                      <p className="text-sm text-muted-foreground">
                        +{formatPrice(service.price)}
                      </p>
                    </div>
                    {quoteData.services.includes(service.id) && (
                      <Check className="w-5 h-5 text-rose" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="px-6 py-3 border-2 border-border text-foreground rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
        >
          Précédent
        </button>
        <button
          onClick={nextStep}
          disabled={!canProceed()}
          className="px-6 py-3 bg-rose text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
        >
          {step === 5 ? "Voir le devis" : "Suivant"}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}