import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { EASE } from '../animations';
import { telUrl, whatsappUrl } from '../data/site';
import { IconWhatsapp } from './Icons';

/** Botão flutuante do WhatsApp + barra fixa de ações no mobile. */
export default function FloatingCTA() {
  const [visivel, setVisivel] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setVisivel(y > 420));

  return (
    <AnimatePresence>
      {visivel && (
        <>
          <motion.a
            className="float-wpp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            aria-label="Falar no WhatsApp"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <IconWhatsapp />
            <span>Agendar</span>
          </motion.a>

          <motion.div
            className="mobile-bar"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            exit={{ y: '110%' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <a className="mobile-bar__btn" href={telUrl}>
              Ligar
            </a>
            <a
              className="mobile-bar__btn mobile-bar__btn--gold"
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
