import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { servicos, whatsappUrl } from '../data/site';
import { EASE, viewportPadrao } from '../animations';

export default function Services() {
  return (
    <section className="section section--dark servicos" id="servicos">
      <div className="shell">
        <header className="section__head">
          <Reveal as="p" className="eyebrow eyebrow--light">
            <span className="eyebrow__dot" /> Tratamentos
          </Reveal>
          <Reveal as="h2" className="h2 h2--light" delay={0.08}>
            Soluções completas para o seu sorriso
          </Reveal>
          <Reveal as="p" className="section__lead" delay={0.14}>
            Do primeiro diagnóstico à manutenção, tudo é conduzido pessoalmente pela
            Dra. Brenda.
          </Reveal>
        </header>

        <motion.div
          className="cards"
          initial="hidden"
          whileInView="show"
          viewport={viewportPadrao}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {servicos.map((servico) => (
            <motion.article
              className="card"
              key={servico.num}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
              }}
            >
              <span className="card__num">{servico.num}</span>
              <h3>{servico.titulo}</h3>
              <p>{servico.texto}</p>
              <span className="card__glow" aria-hidden="true" />
            </motion.article>
          ))}

          <motion.article
            className="card card--cta"
            variants={{
              hidden: { opacity: 0, y: 36 },
              show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
            }}
          >
            <h3>Não sabe por onde começar?</h3>
            <p>
              Mande uma mensagem. A avaliação define o caminho certo para o seu caso
              — sem compromisso.
            </p>
            <a
              className="btn btn--gold btn--sm"
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
            >
              Falar no WhatsApp
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
