import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const post = {
    titulo: "Descobrindo as praias do nordeste",
    data: "01 de março de 2026",
    conteudo: [
      "O nordeste do Brasil é conhecido por suas praias paradisíacas. Neste artigo, vou compartilhar minha experiência visitando algumas das mais belas praias da região, como Jericoacoara, Praia do Forte e Porto de Galinhas.",
      "Além das praias, o nordeste também oferece uma rica cultura, com festas tradicionais, culinária deliciosa e um povo acolhedor. Não perca a oportunidade de explorar essa região incrível do Brasil!",
    ],
    imagem:
      "https://vivaomundo.com.br/wp-content/uploads/2021/04/sancho-1024x683.jpg",
    legenda: "Praia do Sancho, em Fernando de Noronha",
  };

  return (
    <>
      <Header />

      <main>
        <Article
          titulo={post.titulo}
          data={post.data}
          conteudo={post.conteudo}
          imagem={post.imagem}
          legenda={post.legenda}
        />
      </main>

      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
