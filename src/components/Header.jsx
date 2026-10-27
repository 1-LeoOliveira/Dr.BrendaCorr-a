import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { EASE } from '../animations';
import { navLinks, site, whatsappUrl } from '../data/site';

export default function Header() {
  const [compacto, setCompacto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [ativo, setAtivo] = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setCompacto(y > 40));

  // marca o link da seção visível
  useEffect(() => {
    const secoes = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAtivo(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    secoes.forEach((secao) => observer.observe(secao));
    return () => observer.disconnect();
  }, []);

  // trava o scroll do corpo com o menu aberto
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuAberto);
    return () => document.body.classList.remove('menu-open');
  }, [menuAberto]);

  useEffect(() => {
    const fecharNoEsc = (e) => e.key === 'Escape' && setMenuAberto(false);
    window.addEventListener('keydown', fecharNoEsc);
    return () => window.removeEventListener('keydown', fecharNoEsc);
  }, []);

  const marca = (
    <a className="brand" href="#inicio" aria-label={`${site.nome} — início`}>
      <span className="brand__mark">B</span>
      <span className="brand__text">
        <strong>{site.nome}</strong>
        <small>{site.profissao}</small>
      </span>
    </a>
  );

  return (
    <motion.header
      className={`header${compacto ? ' is-compact' : ''}${menuAberto ? ' is-open' : ''}`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.2 }}
    >
      <div className="shell header__row">
        {marca}

        <nav className="nav" aria-label="Navegação principal">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={ativo === href ? 'is-active' : undefined}
            >
              {label}
            </a>
          ))}
          <a className="nav__cta" href={whatsappUrl} target="_blank" rel="noopener">
            Agendar
          </a>
        </nav>

        <button
          type="button"
          className={`burger${menuAberto ? ' is-open' : ''}`}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            className="drawer"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
            animate={{
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              transition: { duration: 0.65, ease: EASE },
            }}
            exit={{
              clipPath: 'inset(0% 0% 100% 0%)',
              opacity: 0,
              transition: { duration: 0.45, ease: EASE },
            }}
          >
            <nav className="drawer__nav" aria-label="Navegação mobile">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMenuAberto(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.12 + i * 0.07 }}
                >
                  <span className="drawer__idx">0{i + 1}</span>
                  {label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="drawer__foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                className="btn btn--gold"
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                onClick={() => setMenuAberto(false)}
              >
                Agendar pelo WhatsApp
              </a>
              <p>
                {site.endereco.linha1}
                <br />
                {site.endereco.linha2}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
