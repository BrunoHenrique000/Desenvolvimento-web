import { useEffect, useState } from "react";
import Logo from "../assets/finalLogo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Button from "../components/button";
import chefhat from "../assets/images/chefHat.svg";
import moneySign from "../assets/images/moneySign.svg";
import noFood from "../assets/images/noFood.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/solution.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);
  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution"
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
        {
          // Essa tag nav fecha lá em baixo com o header
        }
      </header>
      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>
            Comida de mãe direto no seu apê, é só pedir que entregamos para
            você!
          </h1>
          <p>
            Já pensou em matar a saudade daquela comida caseira? O melhor de
            tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>
      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>
          <p>
            Inovação é com a gente! A <strong>DonaFrost </strong>
            já conquistou diversos clientes, seja você mais um deles, veja tudo
            que pode ganhar com nossos serviços.
          </p>
        </header>{" "}
        <section className="even-columns">
          <div className="card">
            <span>
              <img src={chefhat} alt="chefHat" width={64} height={64} />
            </span>
            <div>
              <h3>Produto Vencedor</h3>
              <p>
                Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage.
              </p>
              <hr />
            </div>
          </div>
          <div className="card">
            <span>
              <img src={moneySign} alt="moneySign" width={64} height={64} />
            </span>
            <div>
              <h3>Produto Vencedor</h3>
              <p>
                Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage.
              </p>
              <hr />
            </div>
          </div>
          <div className="card">
            <span>
              <img src={noFood} alt="noFood" width={64} height={64} />
            </span>
            <div>
              <h3>Produto Vencedor</h3>
              <p>
                Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage.
              </p>
              <hr />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
