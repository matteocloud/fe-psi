import type { ContactInfo } from "./types";

export const CONTACT_DETAILS: ContactInfo = {
  phone: "+39 353 467 2259",
  whatsappNumber: "+39 353 467 2259",
  email: "silviamalandra.psi@gmail.com",
  locations: [
    {
      label: "Studio privato Dott.ssa Silvia Malandra",
      shortLabel: "Apri studio Milano",
      address: "Via Adeodato Ressi 28, 20125 Milano (zona Maggiolina)",
      mapsUrl:
        "https://maps.google.com/?q=Via%20Adeodato%20Ressi%2028%2C%2020125%20Milano",
      embedUrl:
        "https://maps.google.com/maps?q=Via%20Adeodato%20Ressi%2028%2C%2020125%20Milano&output=embed"
    }
  ],
  hours: [
    {
      label: "Lunedì",
      value: "14:00 – 18:00"
    },
    {
      label: "Martedì",
      value: "14:00 – 19:30"
    },
    {
      label: "Mercoledì",
      value: "14:00 – 19:30"
    },
    {
      label: "Giovedì",
      value: "14:00 – 16:30"
    },
    {
      label: "Venerdì",
      value: "09:00 – 11:30"
    }
  ]
};

export const WHATSAPP_MESSAGE =
  "Ciao Dott.ssa Malandra, vorrei ricevere informazioni sulle consulenze.";
