import { motion, useScroll, useSpring } from 'framer-motion';

/** Barra dourada no topo indicando o avanço da leitura. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const largura = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div className="progress" style={{ scaleX: largura }} aria-hidden="true" />
  );
}
