import Section from "./Section";

const highlightCards = [
  {
    title: "Esperienze e pazienti",
    items: [
      "Studio privato Dott.ssa Silvia Malandra · Via Adeodato Ressi 28, Milano (zona Maggiolina)",
      "Percorsi dedicati a bambini, adolescenti, giovani adulti, coppie e terza età",
      "Consulenze online e telefoniche per tutta Italia, con flessibilità oraria",
      "Mercoledì pomeriggio in presenza vicino alle fermate MM Sondrio e Marche"
    ]
  },
  {
    title: "Formazione",
    items: [
      "Laurea Magistrale in Psicologia Clinica e Promozione della Salute",
      "Specializzazione in Psicoterapia Cognitivo-Comportamentale"
    ]
  },
  {
    title: "Tirocini clinici",
    items: [
      "Ospedale San Carlo · UOC Psicologia",
      "Ospedale Fatebenefratelli · UOC Chirurgia Bariatrica",
      "Esperienze sul campo a contatto con equipe multidisciplinari",
      "Approfondimento di protocolli per obesità, DCA e supporto emotivo"
    ]
  },
  {
    title: "Lingue e modalità",
    items: [
      "Sedute in Italiano e Inglese",
      "Colloqui individuali, di coppia e supporto agli adolescenti",
      "Spazio accogliente e senza giudizio, con strumenti pratici da usare nel quotidiano",
    ]
  },
  {
    title: "Prestazioni e prezzi",
    items: [
      "Colloquio psicologico online · 70 €",
      "Consulenza psicologica individuale · 70 €",
      "Psicoterapia · 70 €",
      "Psicoterapia o colloquio di coppia · 100 €"
    ]
  }
];

const Highlights = () => {
  return (
    <Section
      id="highlights"
      eyebrow="Percorso professionale"
      title="Formazione, esperienze e modalità di lavoro"
      description="Una presenza costante che integra aggiornamento continuo, collaborazione con le strutture sanitarie e un approccio tailor-made per ogni fascia d'età."
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highlightCards.map((card) => (
          <article
            key={card.title}
            className="flex h-full flex-col rounded-3xl border border-brand-primary/10 bg-white p-6 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {card.items.map((item) => (
                <li key={item} className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Highlights;
