import LogoSM from "./LogoSM";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200" aria-labelledby="footer-title">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
              <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/90">
                <LogoSM className="h-14 w-14" />
              </span>
              <div className="max-w-sm">
                <h2 id="footer-title" className="text-lg font-semibold text-white">
                  Studio di Psicologia · Dott.ssa Silvia Malandra
                </h2>
                <p className="text-sm text-slate-400">
                  Spazio sicuro e senza giudizio per esplorare emozioni, pensieri e comportamenti con un approccio cognitivo-comportamentale.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 text-center lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Naviga
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a className="transition hover:text-white" href="#services">
                    Aree di intervento
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#about">
                    Chi sono
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#highlights">
                    Percorso
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#testimonials">
                    Recensioni
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#contact">
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:items-start sm:text-left">
          <p>© {new Date().getFullYear()} Dott.ssa Silvia Malandra · P.IVA 13371560965</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:justify-start">
            <a
              href="https://www.iubenda.com/privacy-policy/93081597"
              className="transition hover:text-white iubenda-white iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/93081597/cookie-policy"
              className="transition hover:text-white iubenda-white iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
            <a className="transition hover:text-white" href="#contact">
              Prenota un colloquio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
