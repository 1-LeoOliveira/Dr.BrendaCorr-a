import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { site, whatsappUrl } from '../data/site';
import { EASE, viewportPadrao } from '../animations';

function Stat({ alvo, sufixo, rotulo }) {
  const [ref, valor] = useCountUp(alvo);
  return (
    <div className="stat" ref={ref}>
      <strong>
        {valor}
        {sufixo}
      </strong>
      <span>{rotulo}</span>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yFoto = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const giro = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section className="section sobre" id="sobre" ref={ref}>
      <div className="shell sobre__grid">
        <motion.div
          className="sobre__media"
          initial={{ opacity: 0, clipPath: 'inset(0% 0% 18% 0%)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={viewportPadrao}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.img
            style={{ y: yFoto }}
            src="./img/dra-brenda-retrato.jpg"
            alt="Retrato da Dra. Brenda Corrêa em seu consultório"
            width="912"
            height="1140"
            loading="lazy"
          />

          <div className="sobre__sticker">
            <motion.svg viewBox="0 0 100 100" style={{ rotate: giro }} aria-hidden="true">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
                />
              </defs>
              <text>
                <textPath href="#circlePath">
                  · IMPLANTODONTIA · REABILITAÇÃO ORAL · ANANINDEUA PA&nbsp;
                </textPath>
              </text>
            </motion.svg>
            <span className="sobre__sticker-core">BC</span>
          </div>
        </motion.div>

        <div className="sobre__copy">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" /> Quem cuida de você
          </Reveal>

          <Reveal as="h2" className="h2" delay={0.08}>
            Odontologia feita com técnica <em>e com carinho</em>
          </Reveal>

          <Reveal as="p" delay={0.16}>
            Sou a <strong>{site.nome}</strong>, implantodontista. Há mais de sete anos
            dedico minha rotina a devolver às pessoas algo que vai muito além dos
            dentes: a vontade de sorrir sem pensar duas vezes.
          </Reveal>

          <Reveal as="p" delay={0.22}>
            No consultório, cada plano de tratamento nasce de uma conversa — sem
            pressa, sem termos difíceis e sem julgamento. Unimos planejamento
            cuidadoso, materiais de alto padrão e um ambiente acolhedor para que a
            experiência seja tão boa quanto o resultado.
          </Reveal>

          <Reveal className="stats" delay={0.3}>
            <Stat alvo={7} sufixo="+" rotulo="anos de experiência" />
            <Stat alvo={100} sufixo="%" rotulo="planejamento individual" />
            <Stat alvo={24} sufixo="h" rotulo="retorno às urgências" />
          </Reveal>

          <Reveal delay={0.38}>
            <a className="btn btn--dark" href={whatsappUrl} target="_blank" rel="noopener">
              Conversar com a Dra. Brenda
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
