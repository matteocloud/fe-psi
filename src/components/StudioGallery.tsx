import Section from "./Section";
import { getAssetUrl } from "../utils/assets";

const galleryImages = [
  {
    src: "images/studio/studio-waiting-room-1.jpg",
    alt: "Sala d'attesa luminosa con poltrone color crema e piante",
    emphasis: true
  },
  {
    src: "images/studio/studio-detail-1.jpg",
    alt: "Dettaglio dello studio con scrivania e sedute per il colloquio"
  },
  {
    src: "images/studio/studio-waiting-room-2.jpg",
    alt: "Ingresso dello studio con luce naturale e arredi moderni"
  },
  {
    src: "images/studio/studio-detail-2.jpg",
    alt: "Particolare delle sedute rivolte verso la scrivania"
  },
  {
    src: "images/studio/studio-waiting-room-3.jpg",
    alt: "Zona relax con tavolino e libri disponibili per i pazienti"
  },
  {
    src: "images/studio/studio-detail-3.jpg",
    alt: "Vista della stanza dedicata alle consulenze private"
  }
];

const StudioGallery = () => {
  return (
    <Section
      id="studio"
      eyebrow="Lo studio"
      title="Un ambiente accogliente in zona Maggiolina"
      description="Lo studio privato della Dott.ssa Silvia Malandra si trova in Via Adeodato Ressi 28, a pochi minuti dalle fermate MM Sondrio e Marche. È uno spazio luminoso, curato nei dettagli e pensato per offrire sicurezza, privacy e comfort durante ogni colloquio."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <figure
            key={image.src}
            className="group relative overflow-hidden rounded-3xl border border-brand-primary/10 bg-white shadow-soft"
          >
            <img
              src={getAssetUrl(image.src)}
              alt={image.alt}
              loading="lazy"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default StudioGallery;
