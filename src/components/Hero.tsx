import { getAssetUrl } from "../utils/assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-surface"
      aria-labelledby="hero-title"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-24">
        <div className="flex flex-1 flex-col gap-6">
          <blockquote className="text-xl italic text-slate-700">
            “Credo nel cambiamento e nel fatto che ognuno possieda risorse per ritrovare equilibrio e benessere.”
          </blockquote>
          <p className="mb-16 flex w-full max-w-2xl items-center justify-center rounded-full border border-brand-accent/40 bg-brand-accent/10 px-6 py-3 text-center text-base font-semibold text-brand-accent sm:text-lg md:mb-24">
            Psicoterapia cognitivo-comportamentale · Ordine degli Psicologi della Lombardia
          </p>
          <h1
            id="hero-title"
            className="text-2xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Spazio di cura e consapevolezza con la Dott.ssa Silvia Malandra
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">
            Accompagno bambini, adolescenti, adulti e anziani in percorsi psicologici
            pratici e collaborativi. Insieme esploriamo pensieri, emozioni e comportamenti
            per sviluppare strategie concrete e costruire benessere duraturo, in studio a Milano
            e online.
          </p>
          <p className="text-sm uppercase tracking-[0.35em] text-brand-primary">
            Percorsi in studio e online · Disponibilità su appuntamento
          </p>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-0 -translate-x-6 scale-105 rounded-[3rem] bg-brand-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft">
            <img
              src={getAssetUrl("images/doctor-paceholder.jpg")}
              alt="Ritratto professionale della Dott.ssa Silvia Malandra"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
