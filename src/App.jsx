import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  function toggleFaq(index) {
    setFaqOpen(faqOpen === index ? null : index);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const msg = e.target.msg.value;

    if (!name || !email || !msg) {
      alert("Preencha todos os campos!");
      return;
    }

    if (!email.includes("@")) {
      alert("Digite um email válido!");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    e.target.reset();
  }

  return (
    <div className={dark ? "dark" : ""}>
      <header className="header">
        <h1>Glória Contabilidade</h1>
        <p>Soluções inteligentes para sua empresa crescer.</p>

        <nav className="menu">
          <a href="#hero">Início</a>
          <a href="#services">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contato</a>
          <button onClick={() => setDark(!dark)}>🌙</button>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div>
          <h2>Contabilidade simples e digital</h2>
          <p>Cuidamos dos seus números para você focar no seu negócio.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818" />
      </section>

      <section className="cards" id="services">
        <h2>O que fazemos</h2>

        <div className="grid">
          <div className="card">
            <h3>Abertura de Empresa</h3>
            <p>Regularizamos seu negócio com rapidez.</p>
          </div>

          <div className="card">
            <h3>Contabilidade Mensal</h3>
            <p>Controle financeiro e fiscal completo.</p>
          </div>

          <div className="card">
            <h3>Consultoria</h3>
            <p>Decisões estratégicas baseadas em dados.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>Sobre nós</h2>
        <p>A Glória Contabilidade nasceu para simplificar a vida dos empreendedores.</p>
        <p>Nossa missão é garantir segurança, transparência e crescimento.</p>
      </section>

      <section className="faq" id="faq">
        <h2>Perguntas Frequentes</h2>

        {[
          "Vocês atendem MEI?",
          "Como funciona a consultoria?",
          "Quais serviços são oferecidos?"
        ].map((q, i) => (
          <div key={i} className="faq-item">
            <h4 onClick={() => toggleFaq(i)}>{q}</h4>
            {faqOpen === i && <p>Resposta da pergunta {i + 1}.</p>}
          </div>
        ))}
      </section>

      <section className="contact" id="contact">
        <h2>Contato</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Nome" />
          <input name="email" type="email" placeholder="Email" />
          <textarea name="msg" placeholder="Mensagem"></textarea>
          <button>Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 - Glória Contabilidade</p>
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/5500000000000"
        target="_blank"
      >
        💬
      </a>
    </div>
  );
}

export default App;
