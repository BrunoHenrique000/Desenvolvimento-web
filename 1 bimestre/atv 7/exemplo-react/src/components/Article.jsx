function Article({ titulo, data, conteudo, imagem, legenda }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <time>{data}</time>

      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img src={imagem} alt={legenda} />
        <figcaption>{legenda}</figcaption>
      </figure>
    </article>
  );
}

export default Article;
