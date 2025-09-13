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
          A web app for exploring TV series ratings in a grid format — TV episode ratings at a glance. See IMDb ratings for every episode in a clean table.
        </p>
      </section>
    </main>
  );
}

export default App;
