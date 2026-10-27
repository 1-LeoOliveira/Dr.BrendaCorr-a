import { navLinks, site, telUrl, whatsappUrl } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <a className="brand brand--footer" href="#inicio">
            <span className="brand__mark">B</span>
            <span className="brand__text">
              <strong>{site.nome}</strong>
              <small>{site.subtitulo}</small>
            </span>
          </a>

          <nav className="footer__nav" aria-label="Rodapé">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a href={site.instagram.url} target="_blank" rel="noopener">
              Instagram
            </a>
          </nav>
        </div>

        <div className="footer__contato">
          <a href={telUrl}>{site.telefone.exibicao}</a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span aria-hidden="true">·</span>
          <a href={whatsappUrl} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            © {new Date().getFullYear()} {site.nome} · {site.endereco.linha1} —
            Ananindeua/PA
          </p>
          <p className="footer__note">
            As imagens de casos clínicos são de pacientes reais, publicadas com
            autorização. Resultados variam conforme cada caso.
          </p>
        </div>
      </div>
    </footer>
  );
}
