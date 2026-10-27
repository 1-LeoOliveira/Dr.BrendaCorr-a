import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../animations';
import { site } from '../data/site';

/**
 * Tela de abertura: desenha o dente, conta até 100% e sobe como uma cortina.
 */
export default function Loader({ onFinish }) {
  const [progresso, setProgresso] = useState(0);
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    let carregado = document.readyState === 'complete';
    const marcarCarregado = () => {
      carregado = true;
    };
    window.addEventListener('load', marcarCarregado);

    const inicio = performance.now();
    const minimo = 1500; // tempo mínimo para a animação respirar
    let frame;

    const tick = (agora) => {
      const decorrido = agora - inicio;
      // avança rápido até 85% e segura até os assets terminarem
      const base = Math.min(85, (decorrido / minimo) * 85);
      const alvo = carregado && decorrido >= minimo ? 100 : base;

      setProgresso((atual) => {
        const proximo = atual + (alvo - atual) * 0.12;
        return proximo > 99.4 ? 100 : proximo;
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', marcarCarregado);
    };
  }, []);

  useEffect(() => {
    if (progresso < 100) return undefined;
    const t = setTimeout(() => setVisivel(false), 420);
    return () => clearTimeout(t);
  }, [progresso]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visivel && (
        <motion.div
          className="loader"
          aria-hidden="true"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 1.1, ease: EASE },
          }}
        >
          <motion.div
            className="loader__inner"
            exit={{ opacity: 0, y: -24, transition: { duration: 0.5, ease: EASE } }}
          >
            <div className="loader__mark">
              <svg viewBox="0 0 64 72" fill="none">
                <motion.path
                  d="M32 7C27 7 23.5 4.2 18 4.6 10 5.2 5.5 12 6.5 21c.9 8 3.9 13 6.1 22 1.8 7.5 2.4 22 6.6 22 3.8 0 4.8-10.5 6.6-18 1.2-5 3.2-7.4 6.2-7.4s5 2.4 6.2 7.4c1.8 7.5 2.8 18 6.6 18 4.2 0 4.8-14.5 6.6-22 2.2-9 5.2-14 6.1-22 1-9-3.5-15.8-11.5-16.4C40.5 4.2 37 7 32 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            <motion.p
              className="loader__name"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            >
              {site.nome}
            </motion.p>

            <motion.p
              className="loader__tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            >
              {site.profissao}
            </motion.p>

            <div className="loader__bar">
              <motion.span style={{ width: `${progresso}%` }} />
            </div>

            <span className="loader__pct">{Math.round(progresso)}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
