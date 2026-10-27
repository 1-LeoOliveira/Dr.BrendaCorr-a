import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { IconInstagram } from './Icons';
import { useCountUp } from '../hooks/useCountUp';
import { instagramTiles, site } from '../data/site';
import { EASE, viewportPadrao } from '../animations';

function Seguidores() {
  const [ref, valor] = useCountUp(site.instagram.seguidores, 1900);
  const formatado =
    valor >= 1000 ? `${(valor / 1000).toFixed(1).replace('.', ',')} mil` : valor;
  return (
    <li ref={ref}>
      <b>{formatado}</b> seguidores
    </li>
  );
}

export default function Instagram() {
  return (
    <section className="section instagram" id="instagram">
      <div className="shell">
        <header className="section__head">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" /> @{site.instagram.handle}
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.08}>
            Dicas de saúde bucal <em>todo dia no seu feed</em>
          </Reveal>
          <Reveal as="p" className="section__lead" delay={0.14}>
            É no Instagram que a Dra. Brenda tira dúvidas sobre implantes, mostra os
            bastidores do consultório e compartilha cuidados simples que fazem
            diferença no dia a dia.
          </Reveal>
        </header>

        <div className="ig">
          <Reveal className="ig__profile" delay={0.1}>
            <a
              className="ig__avatar"
              href={site.instagram.url}
              target="_blank"
              rel="noopener"
              aria-label={`Abrir o perfil @${site.instagram.handle} no Instagram`}
            >
              <img
                src="./img/dra-brenda-retrato.jpg"
                alt={`Foto de perfil da ${site.nome}`}
                loading="lazy"
              />
            </a>

            <div className="ig__meta">
              <strong>
                <IconInstagram className="ig__ico" />
                {site.instagram.handle}
              </strong>
              <p>
                {site.instagram.bio}
                <br />
                {site.instagram.chamada}
                <br />
                Ananindeua — PA
              </p>

              <ul className="ig__nums">
                <Seguidores />
                <li>
                  <b>Implante</b> · destaque
                </li>
                <li>
                  <b>Tirando dúvidas</b> · destaque
                </li>
              </ul>

              <a
                className="btn btn--gold btn--sm"
                href={site.instagram.url}
                target="_blank"
                rel="noopener"
              >
                Seguir no Instagram
              </a>
            </div>
          </Reveal>

          <motion.div
            className="ig__grid"
            initial="hidden"
            whileInView="show"
            viewport={viewportPadrao}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {instagramTiles.map((tile) => (
              <motion.a
                className="ig__tile"
                key={tile.src + tile.legenda}
                href={site.instagram.url}
                target="_blank"
                rel="noopener"
                variants={{
                  hidden: { opacity: 0, scale: 0.92 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
                }}
              >
                <img src={tile.src} alt={tile.alt} loading="lazy" />
                <span className="ig__overlay">
                  <IconInstagram />
                  {tile.legenda}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
