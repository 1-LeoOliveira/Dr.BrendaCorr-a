import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE } from '../animations';
import { site, telUrl, whatsappUrl } from '../data/site';
import { IconPhone, IconWhatsapp } from './Icons';
import { useCountUp } from '../hooks/useCountUp';

const linhas = ['Há mais de 7 anos', 'transformando', 'vidas e sorrisos.'];

export default function Hero({ pronto }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yFoto = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const yBadge = useTransform(scrollYProgress, [0, 1], ['0%', '-38%']);

  const [refAnos, anos] = useCountUp(site.anosExperiencia);

  // só anima depois que o loader sai
  const animar = pronto ? 'show' : 'hidden';

  return (
    <section className="hero" id="inicio" ref={ref}>
      <div className="hero__glow" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__copy">
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate={animar}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.1 } },
            }}
          >
            <span className="eyebrow__dot" /> Ananindeua · Pará
          </motion.p>

          <h1 className="hero__title">
            {linhas.map((linha, i) => (
              <span className="hero__line" key={linha}>
                <motion.span
                  className="hero__line-in"
                  initial="hidden"
                  animate={animar}
                  variants={{
                    hidden: { y: '110%' },
                    show: {
                      y: '0%',
                      transition: { duration: 1.05, ease: EASE, delay: 0.2 + i * 0.12 },
                    },
                  }}
                >
                  {i === 1 ? <em>{linha}</em> : linha}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__lead"
            initial="hidden"
            animate={animar}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.65 } },
            }}
          >
            Implantes dentários, próteses fixas e odontologia clínica com o cuidado
            que você merece. Aqui, sua saúde bucal é a nossa prioridade.
          </motion.p>

          <motion.ul
            className="hero__checks"
            initial="hidden"
            animate={animar}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.8 } },
            }}
          >
            {['Consultas personalizadas', 'Tratamentos modernos', 'Ambiente acolhedor'].map(
              (item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                >
                  {item}
                </motion.li>
              ),
            )}
          </motion.ul>

          <motion.div
            className="hero__actions"
            initial="hidden"
            animate={animar}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 1 } },
            }}
          >
            <a className="btn btn--gold" href={whatsappUrl} target="_blank" rel="noopener">
              <IconWhatsapp className="ico" />
              Agendar pelo WhatsApp
            </a>
            <a className="btn btn--ghost" href={telUrl}>
              <IconPhone className="ico" />
              Ligar agora
            </a>
          </motion.div>

          <motion.p
            className="hero__urgency"
            initial="hidden"
            animate={animar}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.9, ease: EASE, delay: 1.2 } },
            }}
          >
            <strong>Urgências</strong> atendidas com valores diferenciados — você não
            precisa esperar para cuidar do seu sorriso.
          </motion.p>
        </div>

        <div className="hero__media">
          <motion.div
            className="hero__frame"
            style={{ y: yFoto }}
            initial="hidden"
            animate={animar}
            variants={{
              hidden: { opacity: 0, scale: 1.06, clipPath: 'inset(12% 0% 0% 0%)' },
              show: {
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 0% 0%)',
                transition: { duration: 1.4, ease: EASE, delay: 0.3 },
              },
            }}
          >
            <img
              src="./img/dra-brenda-hero.jpg"
              alt="Dra. Brenda Corrêa segurando um modelo de implante dentário no consultório"
              width="928"
              height="1159"
              fetchPriority="high"
            />
            <span className="hero__arc" aria-hidden="true" />
          </motion.div>

          <motion.div
            className="hero__badge"
            ref={refAnos}
            style={{ y: yBadge }}
            initial="hidden"
            animate={animar}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.9, ease: EASE, delay: 1.1 },
              },
            }}
          >
            <span className="hero__badge-num">{anos}+</span>
            <span className="hero__badge-lbl">
              anos de
              <br />
              experiência
            </span>
          </motion.div>
        </div>
      </div>

      <motion.a
        className="hero__scroll"
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={pronto ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        aria-label="Rolar para a próxima seção"
      >
        <span className="hero__scroll-line" />
        role para ver
      </motion.a>
    </section>
  );
}
