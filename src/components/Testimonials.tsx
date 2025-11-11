import { Star } from "lucide-react";
import Section from "./Section";

const testimonials = [
  {
    name: "Aurora",
    context: "Colloquio psicoterapeutico · Studio privato · 5 giugno 2025",
    text:
      "Mi sono sentita da subito accolta. La dottoressa mi ha aiutata ad acquisire strumenti e consapevolezze per attraversare un forte momento di crisi, finalmente comprendendo il mio funzionamento."
  },
  {
    name: "G.R.",
    context: "Psicoterapia individuale · Consulenza online · 4 giugno 2025",
    text:
      "Collaborativa ed empatica. Ho sentito di avere strumenti efficaci per capire come funziono e metterli in pratica nel mio quotidiano."
  },
  {
    name: "Costanza",
    context: "Psicoterapia · Consulenza online · 4 giugno 2025",
    text:
      "Questo è stato il mio primo percorso e non sapevo cosa aspettarmi. Mi sono sentita compresa, accolta e con tanti nuovi strumenti a disposizione."
  },
  {
    name: "L.M.",
    context: "Colloquio psicologico · Studio privato · 5 marzo 2025",
    text:
      "Accogliente ed empatica, mi ha fatta sentire a mio agio sin dal primo incontro. Ora sto imparando a conoscermi di più e ne sono felice."
  },
  {
    name: "F.",
    context: "Colloquio psicologico · Studio privato · 5 marzo 2025",
    text:
      "Professionista attenta e competente. Con delicatezza propone strategie utili alla gestione dei momenti difficili e all'osservazione delle dinamiche personali."
  },
  {
    name: "Cristina",
    context: "Recensione verificata · 2025",
    text:
      "Attenta, competente e accogliente. La consiglierei a chiunque cerchi un supporto professionale e gentile."
  }
];

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      eyebrow="Recensioni"
      title="Le parole di chi ha intrapreso un percorso insieme a me"
      description="Tutte le recensioni sono verificate e raccontano esperienze di pazienti che hanno intrapreso un percorso psicologico in studio oppure online."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((review) => (
          <article
            key={review.name}
            className="flex h-full flex-col rounded-3xl border border-brand-primary/10 bg-white p-6 shadow-soft"
          >
            <div className="flex items-center gap-1 text-brand-accent">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-base font-medium text-slate-700">“{review.text}”</p>
            <div className="mt-4 text-sm text-slate-500">
              <p className="font-semibold text-slate-700">{review.name}</p>
              <p>{review.context}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
