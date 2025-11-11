import { CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { getAssetUrl } from "../utils/assets";

const credentials = [
  "Approccio cognitivo-comportamentale, pratico e collaborativo",
  "Percorsi per bambini, adolescenti, adulti, coppie e terza età",
  "Sedute online e in presenza nello studio di Milano, zona Maggiolina",
  "Spazio sicuro, empatico e senza giudizio per riscoprire le proprie risorse"
];

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="Chi sono"
      title="Psicologa cognitivo-comportamentale"
      description="Sono la Dott.ssa Silvia Malandra, Psicologa iscritta all'Ordine della Lombardia. Ho scelto questa professione per comprendere in profondità le esperienze delle persone e accompagnarle con ascolto empatico, strumenti concreti e un'alleanza terapeutica autentica."
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
        <div className="relative hidden md:block">
          <div className="absolute inset-0 -left-6 -top-6 rounded-3xl bg-brand-primary/10" />
          <div className="relative overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft">
            <img
              src={getAssetUrl("images/doctor-paceholder.jpg")}
              alt="Ritratto professionale della Dott.ssa Silvia Malandra, psicologa"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-slate-600">
            Credo che anche nei momenti più complessi ognuno possieda risorse interiori
            che possono essere risvegliate. Nel mio lavoro integro tecniche cognitivo-comportamentali,
            psicoeducazione ed esercizi pratici per favorire consapevolezza, autoregolazione e nuove
            modalità di relazione con se stessi e con gli altri.
          </p>
          <p className="text-lg text-slate-600">
            Ricevo nel mio studio privato in Via Adeodato Ressi 28, a pochi passi dalle fermate MM
            Sondrio e Marche, il mercoledì pomeriggio. Gli altri giorni propongo consulenze online per
            chi desidera un supporto flessibile, mantenendo sempre uno spazio accogliente e senza giudizio.
          </p>
          <ul className="grid gap-4 text-sm text-slate-600">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-shrink-0 text-brand-accent"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
