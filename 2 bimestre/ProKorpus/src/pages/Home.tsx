import { useEffect, useState } from "react";
import Logo from "../assets/finalLogo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Button from "../components/button";
import Card from "../components/card";
import TestimonialCard from "../components/TestimonialCard";
import chefhat from "../assets/dumbbell.svg";
import moneySign from "../assets/heart-pulse.svg";
import noFood from "../assets/volleyball.svg";
import ProfileImageOne from "../assets/profileImageOne.png";
import HeroBg from "../assets/heroBg.jpg";
import Check from "../assets/check.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContactEmail(e: React.FormEvent) {
    e.preventDefault();

    const idToast = toast.loading("Enviando sua mensagem...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
      }

      toast.update(idToast, {
        render: "Mensagem enviada com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });

      setEmail("");
      setMessage("");
    } catch (error) {
      toast.update(idToast, {
        render: "Houve um erro ao enviar o contato. Tente novamente.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  }

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      {/* HEADER / NAVBAR */}
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo PróKorpus" />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Planos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <Button text="Login" />
              <Button text="Matricule-se" />
            </div>
          </div>

          {/* MENU MOBILE */}
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a onClick={() => setShowMobileMenu(false)} href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#services"
                      >
                        Serviços
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#testimonials"
                      >
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#pricing"
                      >
                        Planos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#login">
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
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        style={{ "--bg-image": `url(${HeroBg})` } as React.CSSProperties}
      >
        {" "}
        <div className="container content">
          <p className="desktop-only">Seja bem-vindo à PróKorpus</p>
          <h1>Mais que uma academia, seu centro de saúde e reabilitação!</h1>
          <p>
            Treine em um ambiente completo com musculação, funcional, quadra de
            vôlei de areia e acompanhamento profissional especializado para
            alcançar seus objetivos e cuidar do seu corpo.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Começar Agora" />
            </span>
            <span className="desktop-only">
              <Button text="Ver Horários" />
            </span>
          </div>
        </div>
      </section>

      {/* SERVIÇOS / SOLUÇÕES */}
      <section className="container" id="solution">
        <header id="services">
          <span>
            <h2>Nossos Diferenciais</h2>
            <span className="desktop-only">
              <h2>Estrutura Sob Medida para Você</h2>
            </span>
          </span>
          <p>
            Na <strong>PróKorpus</strong> você encontra tudo o que precisa para
            cuidar da sua performance e saúde em um único lugar, com suporte de
            professores qualificados.
          </p>
        </header>

        <section className="even-columns">
          <Card
            icon={chefhat}
            title="Musculação & Funcional"
            description="Equipamentos modernos e treinos dinâmicos focados no seu emagrecimento, hipertrofia ou condicionamento físico."
          />
          <Card
            icon={moneySign}
            title="Centro de Reabilitação"
            description="Profissionais capacitados para te auxiliar na recuperação de lesões e fortalecimento muscular seguro."
          />
          <Card
            icon={noFood}
            title="Vôlei de Areia"
            description="Espaço exclusivo de quadra de areia para você praticar esportes, queimar calorias e se divertir com amigos."
          />
        </section>
      </section>

      {/* DEPOIMENTOS */}
      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Quem treina, aprova</p>
            <h2>Cada aluno importa!</h2>
          </span>
          <p>
            Veja o que dizem as pessoas que mudaram de vida e melhoraram sua
            saúde treinando no nosso centro de reabilitação e esportes.
          </p>
        </header>

        <section className="carousel">
          {/* Bloco Primário */}
          <div className="carousel-track">
            <TestimonialCard
              profileImage={ProfileImageOne}
              name="Carlos Silva"
              role="Aluno há 1 ano"
              text="Excelente estrutura! Consegui me recuperar 100% de uma lesão no joelho com a ajuda dos instrutores da reabilitação."
              stars={5}
            />
            <TestimonialCard
              profileImage={ProfileImageOne}
              name="Mariana Costa"
              role="Atleta de Vôlei de Areia"
              text="A quadra de vôlei de areia é sensacional. O ambiente da academia é super familiar e os horários são perfeitos."
              stars={4}
            />
            <TestimonialCard
              profileImage={ProfileImageOne}
              name="Fernando Souza"
              role="Aluno do Funcional"
              text="Melhor custo-benefício do bairro. Professores atenciosos que realmente montam o treino pensando no nosso objetivo."
              stars={5}
            />
          </div>
          {/* Bloco Primário */}
          <div className="carousel-track" aria-hidden="true">
            <TestimonialCard
              profileImage={ProfileImageOne}
              name="Carlos Silva"
              role="Aluno há 1 ano"
              text="Excelente estrutura! Consegui me recuperar 100% de uma lesão no joelho com a ajuda dos instruidores da reabilitação."
              stars={5}
            />
            <TestimonialCard
              profileImage={ProfileImageOne}
              name="Mariana Costa"
              role="Atleta de Vôlei de Areia"
              text="A quadra de vôlei de areia é sensacional. O ambiente da academia é super familiar e os horários são perfeitos."
              stars={4}
            />
            <TestimonialCard
              profileImage={ProfileImageOne}
              name="Fernando Souza"
              role="Aluno do Funcional"
              text="Melhor custo-benefício do bairro. Professores atenciosos que realmente montam o treino pensando no nosso objetivo."
              stars={5}
            />
          </div>
        </section>
      </section>

      {/* PLANOS E PREÇOS */}
      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e Mensalidades</p>
          <h2>Escolha o seu plano</h2>
        </header>
        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Diária</h3>
              <p>Ideal para quem quer conhecer ou treinar em dias avulsos.</p>
            </span>
            <h2>R$ 20,00</h2>
            <Button text="Garantir Aula Experimental" secondary />
            <span className="hr" />
            <ul className="features-list">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Acesso ao espaço</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Avaliação inicial com professor</p>
              </li>
            </ul>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>PLANO MAIS VENDIDO</p>
            </span>
            <span className="plan">
              <h3>Anual</h3>
              <p>Acesso total durante o ano todo.</p>
            </span>
            <span className="price">
              <h2>R$ 999,90</h2>
              <p>/ano</p>
            </span>
            <Button text="Matricule-se Já" />
            <span className="hr" />
            <ul className="features-list">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Musculação e Funcional livre</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Acesso à quadra de Vôlei de Areia</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Acompanhamento de reabilitação</p>
              </li>
            </ul>
          </div>

          <div className="pricing-card">
            <span className="plan">
              <h3>Mensal</h3>
              <p>Flexibilidade para renovar mês a mês.</p>
            </span>
            <span className="price">
              <h2>R$ 110,00</h2>
              <p>/mês</p>
            </span>
            <Button text="Escolher Plano" secondary />
            <span className="hr" />
            <ul className="features-list">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Horário livre de musculação</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Montamos e acompanhamos o seu treino</p>
              </li>
            </ul>
          </div>
        </section>
      </section>

      {/* SEÇÃO CONTATO */}
      <section
        id="contact"
        className="container py-xl"
        style={{ textAlign: "center" }}
      >
        <header
          style={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "var(--primary-color)",
              fontWeight: "var(--fw-bold)",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              textAlign: "center",
            }}
          >
            Envie sua dúvida
          </p>
          <h2
            style={{
              fontSize: "2rem",
              marginTop: "0.5rem",
              textAlign: "center",
            }}
          >
            Entre em contato
          </h2>
          <p
            style={{
              color: "var(--second-text-color)",
              maxWidth: "600px",
              margin: "1rem auto 0",
              textAlign: "center",
            }}
          >
            Ficou com alguma dúvida sobre nossos horários, planos ou tratamentos
            de reabilitação? Mande uma mensagem para nós. Estamos prontos para
            responder!
          </p>
        </header>

        <form
          onSubmit={sendContactEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            placeholder="Seu melhor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ddd",
              background: "#f9f9f9",
              fontSize: "1rem",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <textarea
            placeholder="Motivo do contato. Ex: Gostaria de saber os horários das aulas de funcional..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ddd",
              background: "#f9f9f9",
              fontSize: "1rem",
              fontFamily: "inherit",
              width: "100%",
              boxSizing: "border-box",
              resize: "none",
            }}
          />
          <div className="contact-btn-wrapper">
            <Button text="Enviar" />
          </div>
        </form>
      </section>

      {/* COMPONENTE FOOTER */}
      <footer
        style={{
          background: "#f4f6fa",
          paddingBlock: "4rem 2rem",
          borderTop: "1px solid #e4e4e4",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <h4
              style={{
                fontWeight: "var(--fw-bold)",
                marginBottom: "1rem",
                fontSize: "1.25rem",
              }}
            >
              PróKorpus
            </h4>
            <p
              style={{
                color: "var(--second-text-color)",
                fontSize: "0.875rem",
                marginBottom: "1rem",
              }}
            >
              Seu bem-estar em primeiro lugar.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: "var(--fw-bold)", marginBottom: "1rem" }}>
              A Academia
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                <a href="#services" style={{ fontWeight: "normal" }}>
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#pricing" style={{ fontWeight: "normal" }}>
                  Nossos Planos
                </a>
              </li>
              <li>
                <a href="#contact" style={{ fontWeight: "normal" }}>
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: "var(--fw-bold)", marginBottom: "1rem" }}>
              Modalidades
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                <a href="#services" style={{ fontWeight: "normal" }}>
                  Musculação
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontWeight: "normal" }}>
                  Treino Funcional
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontWeight: "normal" }}>
                  Vôlei de Areia
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: "var(--fw-bold)", marginBottom: "1rem" }}>
              Horários
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                color: "var(--second-text-color)",
                fontSize: "0.875rem",
              }}
            >
              <li>Segunda a Sexta: 06h às 22h</li>
              <li>Sábado: 08h às 14h e 14h às 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            borderTop: "1px solid #ddd",
            paddingTop: "1.5rem",
            fontSize: "0.825rem",
            color: "var(--second-text-color)",
          }}
        >
          ©2026 PróKorpus - Todos os direitos reservados.
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </>
  );
}
