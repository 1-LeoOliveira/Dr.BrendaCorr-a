import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Conta de 0 até `alvo` quando o elemento entra na viewport.
 * Retorna [ref, valorAtual].
 */
export function useCountUp(alvo, duracao = 1600) {
  const ref = useRef(null);
  const emVista = useInView(ref, { once: true, margin: '-15% 0px' });
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!emVista) return undefined;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) {
      setValor(alvo);
      return undefined;
    }

    let frame;
    const inicio = performance.now();

    const tick = (agora) => {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      setValor(Math.round(easeOut(progresso) * alvo));
      if (progresso < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [emVista, alvo, duracao]);

  return [ref, valor];
}
