const itens = [
  'Implantes dentários',
  'Prótese protocolo',
  'Coroas e facetas',
  'Clínico geral',
  'Urgência odontológica',
];

/** Faixa infinita entre as seções. */
export default function Marquee() {
  const sequencia = [...itens, ...itens];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copia) => (
          <div className="marquee__group" key={copia}>
            {sequencia.map((item, i) => (
              <span className="marquee__item" key={`${copia}-${item}-${i}`}>
                {item}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
