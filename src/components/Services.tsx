import { Brain, Feather, Heart, Layers, ShieldCheck, Users } from "lucide-react";
import Section from "./Section";
import type { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    title: "Ansia e gestione emotiva",
    description:
      "Percorsi per ansia generalizzata, attacchi di panico, ansia sociale e da prestazione, con strategie concrete per regolare pensieri ed emozioni.",
    icon: Brain,
    href: "#contact"
  },
  {
    title: "Umore e depressione",
    description:
      "Trattamento dei disturbi dell'umore e della depressione con strumenti cognitivo-comportamentali orientati al cambiamento graduale.",
    icon: Heart,
    href: "#contact"
  },
  {
    title: "Relazioni e dipendenza affettiva",
    description:
      "Supporto a coppie e individui nelle difficoltà relazionali, crisi di coppia e dinamiche di dipendenza emotiva.",
    icon: Users,
    href: "#contact"
  },
  {
    title: "Autostima e sviluppo personale",
    description:
      "Percorsi per rafforzare autostima, consapevolezza e gestione della rabbia, con focus su risorse personali e nuovi schemi di pensiero.",
    icon: Feather,
    href: "#contact"
  },
  {
    title: "Alimentazione e immagine corporea",
    description:
      "Sostegno in caso di disturbi del comportamento alimentare, sovrappeso e obesità con interventi mirati e coordinati.",
    icon: Layers,
    href: "#contact"
  },
  {
    title: "Età evolutiva e DSA",
    description:
      "Consultazioni per bambini, adolescenti e giovani adulti, inclusi percorsi per DSA, regolazione emotiva e gestione scolastica.",
    icon: ShieldCheck,
    href: "#contact"
  }
];

const Services = () => {
  return (
    <Section
      id="services"
      eyebrow="Aree di intervento"
      title="Supporto psicologico personalizzato"
      description="Ogni percorso nasce da un ascolto empatico e dall'analisi dei pensieri che alimentano il disagio. Lavoriamo insieme su emozioni, comportamenti e strategie pratiche per stare meglio nella quotidianità."
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-brand-primary/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg"
          >
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-brand-primary/10 p-3 text-brand-primary">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
            <a
              href={service.href}
              className="mt-6 inline-flex items-center text-sm font-semibold text-brand-primary transition group-hover:translate-x-1"
            >
              Scopri di più
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Services;
