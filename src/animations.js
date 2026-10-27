/* Presets de movimento usados em todo o site. */

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: EASE } },
};

export const stagger = (escalonamento = 0.1, atraso = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: escalonamento, delayChildren: atraso },
  },
});

export const viewportPadrao = { once: true, margin: '-12% 0px -10% 0px' };
