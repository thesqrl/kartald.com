function App() {
  return (
    <main>
      <section className="card" aria-label="Projects">
        <header style={{ marginBottom: 32 }}>
          <div className="muted" style={{ fontSize: 12, letterSpacing: 0.6 }}>
            kartald · projects
          </div>
        </header>
        <a
          className="project"
          href="https://showox.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          showox.xyz
          <span className="arrow" aria-hidden>
            →
          </span>
        </a>
        <p
          className="muted"
          style={{ marginTop: 10, fontSize: 13, lineHeight: 1.5, maxWidth: 560 }}
        >
          Explore TV series ratings in a clean, sortable grid — built on AWS (leveraging multiple services).
        </p>
      </section>
    </main>
  );
}

export default App;
