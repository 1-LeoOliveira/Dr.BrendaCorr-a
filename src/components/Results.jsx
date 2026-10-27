import { motion } from 'framer-motion';
import Reveal from './Reveal';
import BeforeAfter from './BeforeAfter';
import { casoDestaque, galeria } from '../data/site';
import { EASE, viewportPadrao } from '../animations';

export default function Results() {
  return (
    <section className="section resultados" id="resultados">
      <div className="shell">
        <header className="section__head">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" /> Resultados reais
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.08}>
            Antes e depois de <em>pacientes do consultório</em>
          </Reveal>
          <Reveal as="p" className="section__lead" delay={0.14}>
            Casos clínicos reais, publicados com autorização. Arraste a barra para
            comparar.
          </Reveal>
        </header>

        <BeforeAfter
          antes={casoDestaque.antes}
          depois={casoDestaque.depois}
          altAntes={casoDestaque.altAntes}
          altDepois={casoDestaque.altDepois}
          legenda={casoDestaque.legenda}
        />

        <motion.div
          className="galeria"
          initial="hidden"
          whileInView="show"
          viewport={viewportPadrao}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {galeria.map((caso) => (
            <motion.figure
              className="galeria__item"
              key={caso.src}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.95, ease: EASE },
                },
              }}
            >
              <div className="galeria__media">
                <img src={caso.src} alt={caso.alt} loading="lazy" />
                <span className="galeria__split" aria-hidden="true" />
              </div>
              <figcaption>{caso.legenda}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
