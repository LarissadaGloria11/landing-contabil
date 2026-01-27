import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>Glória Contabilidade</h1>
        <p>Soluções inteligentes para sua empresa crescer.</p>
      </header>

      <section className="hero">
        <div>
          <h2>Contabilidade simples e digital</h2>
          <p>Cuidamos dos seus números para você focar no seu negócio.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818" />
      </section>

      <section className="cards">
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

      <section className="about">
        <h2>Sobre nós</h2>
        <p>A Glória Contabilidade nasceu para simplificar a vida dos empreendedores.</p>
        <p>Nossa missão é garantir segurança, transparência e crescimento.</p>
      </section>

      <section className="contact">
        <h2>Contato</h2>

        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <button>Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 - Glória Contabilidade</p>
      </footer>
    </>
  )
}

export default App
