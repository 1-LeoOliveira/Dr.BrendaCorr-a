import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { IconGoogle, IconStar } from './Icons';
import { avaliacoes, site } from '../data/site';
import { EASE, viewportPadrao } from '../animations';

const Estrelas = ({ nota = 5 }) => (
  <span className="estrelas" aria-label={`${nota} de 5 estrelas`}>
    {Array.from({ length: 5 }, (_, i) => (
      <IconStar key={i} className={i < nota ? 'is-on' : undefined} />
    ))}
  </span>
);

export default function Reviews() {
  const temAvaliacoes = avaliacoes.length > 0;

  return (
    <section className="section section--sand avaliacoes" id="avaliacoes">
      <div className="shell">
        <header className="section__head">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" /> Avaliações
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.08}>
            O que dizem <em>quem já sentou na cadeira</em>
          </Reveal>
        </header>

        <Reveal className="google" delay={0.12}>
          <div className="google__brand">
            <IconGoogle width="36" height="36" />
            <div>
              <strong>Avaliações no Google</strong>
              <span>
                {site.nome} — {site.subtitulo}
              </span>
            </div>
          </div>

          <Estrelas nota={5} />

          <a className="btn btn--dark btn--sm" href={site.google.url} target="_blank" rel="noopener">
            Ler e deixar sua avaliação
          </a>
        </Reveal>

        {temAvaliacoes && (
          <motion.div
            className="depoimentos"
            initial="hidden"
            whileInView="show"
            viewport={viewportPadrao}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {avaliacoes.map((avaliacao, i) => (
              <motion.blockquote
                className="depoimento"
                key={`${avaliacao.autor}-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 34 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
                }}
              >
                <Estrelas nota={avaliacao.nota ?? 5} />
                <p>{avaliacao.texto}</p>
                <footer>
                  <span className="depoimento__avatar" aria-hidden="true">
                    {avaliacao.autor.charAt(0)}
                  </span>
                  <span>
                    <strong>{avaliacao.autor}</strong>
                    {avaliacao.data && <small>{avaliacao.data}</small>}
                  </span>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
