import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { EASE, viewportPadrao } from '../animations';

/**
 * Comparador antes/depois: arraste, use as setas do teclado ou toque.
 */
export default function BeforeAfter({ antes, depois, altAntes, altDepois, legenda }) {
  const ref = useRef(null);
  const arrastando = useRef(false);
  const [pos, setPos] = useState(50);

  const atualizar = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const valor = ((clientX - left) / width) * 100;
    setPos(Math.min(100, Math.max(0, valor)));
  }, []);

  useEffect(() => {
    const mover = (e) => {
      if (!arrastando.current) return;
      e.preventDefault();
      atualizar(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const soltar = () => {
      arrastando.current = false;
      ref.current?.classList.remove('is-dragging');
    };

    window.addEventListener('pointermove', mover);
    window.addEventListener('pointerup', soltar);
    window.addEventListener('touchmove', mover, { passive: false });
    window.addEventListener('touchend', soltar);

    return () => {
      window.removeEventListener('pointermove', mover);
      window.removeEventListener('pointerup', soltar);
      window.removeEventListener('touchmove', mover);
      window.removeEventListener('touchend', soltar);
    };
  }, [atualizar]);

  const iniciar = (e) => {
    arrastando.current = true;
    ref.current?.classList.add('is-dragging');
    atualizar(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const teclado = (e) => {
    const passo = e.shiftKey ? 10 : 3;
    if (e.key === 'ArrowLeft') setPos((v) => Math.max(0, v - passo));
    if (e.key === 'ArrowRight') setPos((v) => Math.min(100, v + passo));
    if (e.key === 'Home') setPos(0);
    if (e.key === 'End') setPos(100);
  };

  return (
    <>
      <motion.div
        className="ba"
        ref={ref}
        onPointerDown={iniciar}
        onTouchStart={iniciar}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportPadrao}
        transition={{ duration: 1, ease: EASE }}
      >
        <img className="ba__img" src={depois} alt={altDepois} loading="lazy" />

        <div className="ba__clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img className="ba__img" src={antes} alt={altAntes} loading="lazy" />
        </div>

        <span className="ba__tag ba__tag--before" style={{ opacity: pos > 14 ? 1 : 0 }}>
          Antes
        </span>
        <span className="ba__tag ba__tag--after" style={{ opacity: pos < 86 ? 1 : 0 }}>
          Depois
        </span>

        <div
          className="ba__handle"
          style={{ left: `${pos}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Comparar antes e depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={teclado}
        >
          <span className="ba__grip">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10 8-4 4 4 4m4-8 4 4-4 4"
              />
            </svg>
          </span>
        </div>
      </motion.div>

      {legenda && <p className="ba__caption">{legenda}</p>}
    </>
  );
}
