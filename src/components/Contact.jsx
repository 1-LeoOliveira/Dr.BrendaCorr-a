import Reveal from './Reveal';
import { IconClock, IconMail, IconPhone, IconPin } from './Icons';
import { mapsEmbedUrl, mapsUrl, site, telUrl, whatsappUrl } from '../data/site';

export default function Contact() {
  return (
    <section className="section section--dark contato" id="contato">
      <div className="shell contato__grid">
        <div className="contato__copy">
          <Reveal as="p" className="eyebrow eyebrow--light">
            <span className="eyebrow__dot" /> Venha nos visitar
          </Reveal>

          <Reveal as="h2" className="h2 h2--light" delay={0.08}>
            Seu novo sorriso começa com <em>uma conversa</em>
          </Reveal>

          <ul className="info">
            <Reveal as="li" delay={0.14}>
              <span className="info__ico">
                <IconPin />
              </span>
              <div>
                <strong>Endereço</strong>
                <a href={mapsUrl} target="_blank" rel="noopener">
                  {site.endereco.linha1}
                  <br />
                  {site.endereco.linha2}
                  <br />
                  <em>{site.endereco.referencia}</em>
                </a>
              </div>
            </Reveal>

            <Reveal as="li" delay={0.2}>
              <span className="info__ico">
                <IconPhone />
              </span>
              <div>
                <strong>Telefone e WhatsApp</strong>
                <a href={telUrl}>{site.telefone.exibicao}</a>
              </div>
            </Reveal>

            <Reveal as="li" delay={0.26}>
              <span className="info__ico">
                <IconMail />
              </span>
              <div>
                <strong>E-mail</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </Reveal>

            <Reveal as="li" delay={0.32}>
              <span className="info__ico">
                <IconClock />
              </span>
              <div>
                <strong>Urgências</strong>
                <span className="info__plain">
                  Atendimento prioritário com valores diferenciados. Chame no WhatsApp
                  e descreva o que está sentindo.
                </span>
              </div>
            </Reveal>
          </ul>

          <Reveal className="contato__actions" delay={0.38}>
            <a className="btn btn--gold" href={whatsappUrl} target="_blank" rel="noopener">
              Agendar pelo WhatsApp
            </a>
            <a
              className="btn btn--ghost btn--light"
              href={site.instagram.url}
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </Reveal>
        </div>

        <Reveal className="contato__map" delay={0.2} y={40}>
          <iframe
            title={`Mapa do consultório da ${site.nome}`}
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
