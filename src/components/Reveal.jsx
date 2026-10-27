import { motion } from 'framer-motion';
import { EASE, viewportPadrao } from '../animations';

/**
 * Revela o conteúdo quando ele entra na viewport.
 * <Reveal delay={0.1} as="h2">...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  duration = 0.9,
  as = 'div',
  className,
  ...resto
}) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportPadrao}
      transition={{ duration, ease: EASE, delay }}
      {...resto}
    >
      {children}
    </Tag>
  );
}
