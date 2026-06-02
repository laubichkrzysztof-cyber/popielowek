/* App — full homepage structure.
   1. Hero
   2. Intro — Popielówek / dawny Hennersdorf
   3. Oś czasu — key historical events
   4. Historia — cinematic chapter narrative
   5. Miejsca — practical village discovery
   6. Zabytki — church, cemetery, radar, crosses
   7. Galeria — photos, maps, documents
   8. Wydarzenia — CMS-ready events & announcements
   9. Kontakt — submit photos, documents, memories
  10. Footer
*/

const App = () => {
  const [activeNav, setActiveNav] = React.useState("os-czasu");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main>
      <Navigation
        active={activeNav}
        onNavigate={(section) => {
          setActiveNav(section);
          scrollTo(section);
        }}
      />
      <Hero />
      <Intro />
      <OsCzasu />
      <Historia />
      <Miejsca />
      <Zabytki />
      <Galeria />
      <Wydarzenia />
      <Kontakt />
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
