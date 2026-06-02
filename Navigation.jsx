/* Navigation — warm milky parchment frosted glass · PL · DE · EN switcher. */

const navStyles = {
  wrap: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    padding: "20px 40px",
    transition: "padding 720ms cubic-bezier(0.22, 0.61, 0.36, 1)",
  },
  bar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "14px 40px 14px 40px",
    background: "rgba(236,228,210,.0)",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    borderBottom: ".5px solid rgba(180,145,80,.0)",
    boxShadow: "none",
    position: "relative",
    transition: "background 380ms cubic-bezier(.4,0,.2,1), backdrop-filter 380ms cubic-bezier(.4,0,.2,1), -webkit-backdrop-filter 380ms cubic-bezier(.4,0,.2,1), border-color 380ms cubic-bezier(.4,0,.2,1), box-shadow 380ms cubic-bezier(.4,0,.2,1)",
    /* overflow must NOT be hidden — dropdown escapes this container */
  },
  /* Subtle grain texture overlay at ~4% opacity */
  grain: {
    position: "absolute", inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    backgroundSize: "200px 200px",
    pointerEvents: "none",
    borderRadius: "inherit",
    mixBlendMode: "multiply",
  },
  brand: { display: "flex", alignItems: "center", gap: 12, textDecoration: "none", position: "relative", zIndex: 1 },
  monogram: {
    width: 28, height: 32,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
  name: {
    fontFamily: "var(--font-display)", fontWeight: 500,
    fontSize: 15, letterSpacing: "0.20em", textTransform: "uppercase",
    color: "#2c2010",
  },
  brandText: { display: "flex", flexDirection: "column", gap: 1 },
  subtitle: {
    fontFamily: "var(--font-sans)", fontWeight: 400,
    fontSize: 8, letterSpacing: "0.20em", textTransform: "uppercase",
    color: "#907050",
  },
  links: { display: "flex", gap: 28, alignItems: "center", position: "relative", zIndex: 1 },
  link: {
    fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase",
    color: "#705840", textDecoration: "none", fontWeight: 500,
    transition: "color 280ms, background 200ms",
    position: "relative", padding: "6px 4px",
    cursor: "pointer", borderRadius: 2,
  },
  linkActive: { color: "#8a5c20" },
  linkActiveUnderline: {
    position: "absolute", left: 0, right: 0, bottom: -2, height: 1,
    background: "#8a5c20",
  },
  /* Language switcher — replaces search + CTA */
  dropdownWrap: {
    position: "relative",
    display: "inline-flex", alignItems: "center",
  },
  dropdownCaret: {
    display: "inline-block", width: 5, height: 5,
    borderRight: "1px solid var(--gold-400)",
    borderBottom: "1px solid var(--gold-400)",
    transform: "translateY(-1px) rotate(45deg)",
    marginLeft: 7, opacity: 0.55, flexShrink: 0,
    transition: "transform 320ms, opacity 320ms",
    /* Fixed vertical position — only rotation changes on open */
  },
  dropdownCaretOpen: {
    transform: "translateY(-1px) rotate(225deg)", opacity: 0.9,
  },
  dropdown: {
    position: "absolute",
    /* Sit just below the trigger — bridge div covers the 2px gap */
    top: "calc(100% + 2px)",
    left: "50%",
    transform: "translateX(-50%)",
    minWidth: 210,
    /* Same warm milky glass as navbar */
    background: "rgba(227, 218, 203, 0.58)",
    backdropFilter: "blur(14px) saturate(110%)",
    WebkitBackdropFilter: "blur(14px) saturate(110%)",
    border: "1px solid rgba(186, 150, 72, 0.18)",
    borderRadius: 2,
    boxShadow: "0 8px 28px -12px rgba(42,37,29,0.12), inset 0 1px 0 rgba(255,255,255,0.26)",
    padding: "8px 0 10px",
    zIndex: 200,
    animation: "dropdownReveal 220ms cubic-bezier(0.16, 1, 0.3, 1) both",
  },
  dropdownBridge: {
    position: "absolute", top: "100%", left: 0, right: 0, height: 4,
    /* Transparent hover bridge — prevents gap from firing mouseleave */
  },
  dropdownItem: {
    display: "block", width: "100%",
    padding: "12px 24px",
    fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
    color: "#705840", background: "transparent", border: 0,
    fontFamily: "var(--font-sans)", fontWeight: 500,
    textAlign: "left", cursor: "pointer",
    transition: "color 280ms, opacity 280ms, padding-left 300ms",
  },
  langDropdownWrap: {
    position: "relative",
    display: "inline-flex", alignItems: "center",
    zIndex: 60,
  },
  langTrigger: {
    display: "inline-flex", alignItems: "center", gap: 7,
    fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase",
    fontWeight: 500, color: "#8a5c20",
    background: "transparent", border: 0,
    fontFamily: "var(--font-sans)", cursor: "pointer",
    padding: "6px 0", transition: "color 280ms",
    position: "relative", zIndex: 1,
  },
  langPanel: {
    position: "absolute", top: "calc(100% + 8px)", right: 0,
    minWidth: 72,
    background: "rgba(42, 37, 29, 0.96)",
    backdropFilter: "blur(12px) saturate(120%)",
    WebkitBackdropFilter: "blur(12px) saturate(120%)",
    border: "1px solid rgba(186, 150, 72, 0.22)",
    borderRadius: 2,
    boxShadow: "0 8px 24px -8px rgba(0,0,0,0.35)",
    zIndex: 200,
  },
  langPanelItem: {
    display: "block", width: "100%",
    padding: "10px 20px",
    fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase",
    color: "#907050",
    background: "transparent", border: 0,
    fontFamily: "var(--font-sans)", fontWeight: 500,
    textAlign: "left", cursor: "pointer",
    transition: "color 200ms",
  },
};

/* Stable section ids decouple navigation from the (translated) display labels. */
const NAV_ITEMS = [
  { tKey: "nav.timeline",  section: "os-czasu"   },
  { tKey: "nav.history",   section: "historia"   },
  { tKey: "nav.places",    section: "miejsca"    },
  { tKey: "nav.monuments", section: "zabytki"    },
  { tKey: "nav.gallery",   section: "galeria"    },
  { tKey: "nav.events",    section: "wydarzenia" },
  { tKey: "nav.contact",   section: "kontakt"    },
];

const MIEJSCA_KEYS = ["drop.getThere", "drop.see", "drop.church", "drop.map"];

/* Graceful fallback if the i18n store somehow failed to load. */
const useNavI18n = (typeof window !== "undefined" && typeof window.useI18n === "function")
  ? window.useI18n
  : function () { return { lang: "PL", setLang: function () {}, t: function (k) { return k; }, langs: ["PL", "DE", "EN"] }; };

const Navigation = ({ active = "os-czasu", onNavigate }) => {
  const { lang, setLang, t, langs } = useNavI18n();
  const [scrolled, setScrolled] = React.useState(false);
  const [miejscaOpen, setMiejscaOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const miejscaRef = React.useRef(null);
  const langRef = React.useRef(null);
  const burgerRef = React.useRef(null);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    /* Single passive listener · rAF-throttled · threshold 60px */
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdowns on outside click or Escape */
  React.useEffect(() => {
    const handler = (e) => {
      if (miejscaRef.current && !miejscaRef.current.contains(e.target)) setMiejscaOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (menuRef.current && !menuRef.current.contains(e.target) &&
          burgerRef.current && !burgerRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") { setMiejscaOpen(false); setLangOpen(false); setMenuOpen(false); } };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const wrapStyle = {
    ...navStyles.wrap,
    padding: 0,
  };

  const barStyle = {
    ...navStyles.bar,
    ...(scrolled ? {
      background: "rgba(236,228,210,.45)",
      backdropFilter: "blur(28px) saturate(1.8) brightness(1.05)",
      WebkitBackdropFilter: "blur(28px) saturate(1.8) brightness(1.05)",
      borderBottom: ".5px solid rgba(180,145,80,.3)",
      boxShadow: "0 1px 0 rgba(180,145,80,.12), 0 8px 32px rgba(80,55,20,.1)",
    } : {}),
  };
  /* Language dropdown panel — inherits navbar state.
     At top of page (over hero photo): dark glass.
     Scrolled (over content):           light parchment glass. */
  const langPanelStyle = !scrolled ? {
    position: "absolute", top: "calc(100% + 8px)", right: 0,
    minWidth: 72,
    background: "rgba(20,16,10,.82)",
    backdropFilter: "blur(16px) saturate(1.4)",
    WebkitBackdropFilter: "blur(16px) saturate(1.4)",
    border: "1px solid rgba(200,160,90,.2)",
    borderRadius: 2,
    boxShadow: "0 4px 16px rgba(0,0,0,.3)",
    zIndex: 200,
    transition: "background 380ms cubic-bezier(.4,0,.2,1), border-color 380ms cubic-bezier(.4,0,.2,1)",
  } : {
    position: "absolute", top: "calc(100% + 8px)", right: 0,
    minWidth: 72,
    background: "rgba(245,238,218,.95)",
    backdropFilter: "blur(14px) saturate(1.4)",
    WebkitBackdropFilter: "blur(14px) saturate(1.4)",
    border: "1px solid rgba(160,120,64,.28)",
    borderRadius: 2,
    boxShadow: "0 4px 16px rgba(100,80,40,.1)",
    zIndex: 200,
    transition: "background 380ms cubic-bezier(.4,0,.2,1), border-color 380ms cubic-bezier(.4,0,.2,1)",
  };
  const langItemBaseCol  = !scrolled ? "#d4cbb0" : "#705840";
  const langItemHoverBg  = !scrolled ? "rgba(255,255,255,.06)" : "rgba(180,140,80,.1)";
  const langItemHoverCol = !scrolled ? "#f2ebd8" : "#2c2010";
  const linkCol       = !scrolled ? "rgba(245,238,218,.88)" : "#705840";
  const linkActiveCol = !scrolled ? "#e8d8a8" : "#8a5c20";
  const logoCol       = !scrolled ? "#f2ebd8" : "#2c2010";
  const logoSubCol    = !scrolled ? "rgba(242,235,216,.7)" : "#907050";
  const iconStroke    = !scrolled ? "#e8d8a8" : "#8a5c20";

  return (
    <header style={wrapStyle}>
      <style>{`
        @keyframes dropdownReveal {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes logoReveal {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes iconGlow {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(200,160,80,0)); }
          50%      { filter: drop-shadow(0 0 4px rgba(200,160,80,.3)); }
        }
        .pp-logo { animation: logoReveal 1000ms cubic-bezier(.22,1,.36,1) 200ms both; }
        .pp-logo-icon {
          animation: iconGlow 4s ease-in-out 2s infinite;
          transition: transform 280ms cubic-bezier(.2,0,.1,1);
        }
        .pp-logo:hover .pp-logo-icon { transform: scale(1.08); }
        .pp-logo-name { transition: letter-spacing 320ms ease-out; }
        .pp-logo:hover .pp-logo-name { letter-spacing: 0.24em; }
        @media (prefers-reduced-motion: reduce) {
          .pp-logo, .pp-logo-icon { animation: none !important; }
          .pp-logo { opacity: 1 !important; transform: none !important; }
          .pp-logo-icon { transform: none !important; filter: none !important; }
          .pp-logo:hover .pp-logo-name { letter-spacing: 0.20em; }
        }
        .pp-nav-link { position: relative; border-bottom: none !important; text-decoration: none !important; }
        .pp-logo { border-bottom: none !important; text-decoration: none !important; }
        .pp-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0; right: 0;
          height: 2.5px;
          background: #c8a060;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 280ms cubic-bezier(.2,0,.1,1);
        }
        .pp-nav-link:hover::after { transform: scaleX(1); }
        .pp-nav-link:hover { background: rgba(180,140,80,.10) !important; color: #2c2010 !important; }
        .pp-nav-link-sc:hover { background: rgba(255,255,255,.06) !important; color: #e0d8c8 !important; }
        .lang-panel {
          max-height: 0; opacity: 0; transform: translateY(-4px);
          transition: max-height 180ms ease-in, opacity 180ms ease-in, transform 180ms ease-in;
          overflow: hidden;
        }
        .lang-panel--open {
          max-height: 120px; opacity: 1; transform: translateY(0);
          transition: max-height 220ms ease-out, opacity 220ms ease-out, transform 220ms ease-out;
        }
        .lang-trigger:focus-visible { outline: 2px solid var(--gold-400); outline-offset: 4px; border-radius: 2px; }
        .lang-panel-btn:focus-visible { outline: 2px solid var(--gold-400); outline-offset: -2px; }
        @keyframes mobileMenuReveal {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="nav-bar" style={barStyle}>
        <div style={{ ...navStyles.grain, opacity: scrolled ? 1 : 0, transition: "opacity 380ms cubic-bezier(.4,0,.2,1)" }}></div>

        <a href="#" className="pp-logo" style={navStyles.brand}>
          <span style={navStyles.monogram}>
            <svg className="pp-logo-icon" width="28" height="32" viewBox="0 0 28 32" fill="none"
              stroke={iconStroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              {/* tower */}
              <rect x="10" y="10" width="8" height="18" rx=".5"/>
              {/* cross */}
              <line x1="14" y1="2" x2="14" y2="8"/>
              <line x1="11.5" y1="5" x2="16.5" y2="5"/>
              {/* spire */}
              <path d="M10 10 L14 4 L18 10"/>
              {/* door */}
              <path d="M12 28 L12 23 A2 2 0 0 1 16 23 L16 28"/>
              {/* window */}
              <circle cx="14" cy="16" r="1.5"/>
              {/* nave left */}
              <rect x="3" y="18" width="7" height="10" rx=".5"/>
              <path d="M3 18 L6.5 14 L10 18"/>
              {/* nave right */}
              <rect x="18" y="18" width="7" height="10" rx=".5"/>
              <path d="M18 18 L21.5 14 L25 18"/>
            </svg>
          </span>
          <span style={navStyles.brandText}>
            <span className="pp-logo-name" style={{ ...navStyles.name, color: logoCol }}>Popielówek</span>
          </span>
        </a>

        <nav className="nav-links" style={navStyles.links}>
          {NAV_ITEMS.map((item, i) => {
            const label = t(item.tKey);
            const isActive = item.section === active;
            if (item.section === "miejsca") {
              return (
                <div
                  key={item.section}
                  ref={miejscaRef}
                  style={navStyles.dropdownWrap}
                  onMouseEnter={() => setMiejscaOpen(true)}
                  onMouseLeave={() => setMiejscaOpen(false)}
                >
                  <a
                    className={!scrolled ? "pp-nav-link pp-nav-link-sc" : "pp-nav-link"}
                    style={{ ...navStyles.link, color: isActive ? linkActiveCol : linkCol, display: "inline-flex", alignItems: "center", cursor: "pointer", userSelect: "none" }}
                    onClick={(e) => { e.preventDefault(); setMiejscaOpen(o => !o); }}
                    aria-haspopup="true"
                    aria-expanded={miejscaOpen}
                  >
                    {label}
                    <span style={{ ...navStyles.dropdownCaret, ...(miejscaOpen ? navStyles.dropdownCaretOpen : {}) }}></span>
                  </a>
                  {/* Transparent bridge — keeps dropdown open across the 2px gap */}
                  <div style={navStyles.dropdownBridge}></div>
                  {miejscaOpen && (
                    <div style={navStyles.dropdown}>
                      {MIEJSCA_KEYS.map((dKey) => (
                        <button
                          key={dKey}
                          style={navStyles.dropdownItem}
                          onMouseEnter={(e) => { e.currentTarget.style.color = "#8a5c20"; e.currentTarget.style.paddingLeft = "30px"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "#705840"; e.currentTarget.style.paddingLeft = "24px"; }}
                          onClick={() => { setMiejscaOpen(false); onNavigate && onNavigate("miejsca"); }}
                        >{t(dKey)}</button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={item.section}
                className={!scrolled ? "pp-nav-link pp-nav-link-sc" : "pp-nav-link"}
                style={{ ...navStyles.link, color: isActive ? linkActiveCol : linkCol }}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(item.section); }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="nav-lang-wrap" style={navStyles.langDropdownWrap} ref={langRef}>
          <button
            className="lang-trigger"
            style={{ ...navStyles.langTrigger, color: linkActiveCol }}
            onClick={() => setLangOpen(o => !o)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-label={t("lang.label")}
          >
            {lang}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
              stroke="currentColor" strokeWidth="1.2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="8" cy="8" r="6.5"/>
              <path d="M8 1.5C8 1.5 5.5 4 5.5 8s2.5 6.5 2.5 6.5"/>
              <path d="M8 1.5C8 1.5 10.5 4 10.5 8s-2.5 6.5-2.5 6.5"/>
              <line x1="1.5" y1="8" x2="14.5" y2="8"/>
              <line x1="2" y1="5" x2="14" y2="5"/>
              <line x1="2" y1="11" x2="14" y2="11"/>
            </svg>
          </button>
          <div
            className={`lang-panel${langOpen ? " lang-panel--open" : ""}`}
            style={langPanelStyle}
            role="listbox"
            aria-label={t("lang.label")}
          >
            {langs.filter(l => l !== lang).map(l => (
              <button
                key={l}
                className="lang-panel-btn"
                style={{ ...navStyles.langPanelItem, color: langItemBaseCol }}
                role="option"
                aria-selected={false}
                onClick={() => { setLang(l); setLangOpen(false); }}
                onMouseEnter={(e) => { e.currentTarget.style.color = langItemHoverCol; e.currentTarget.style.background = langItemHoverBg; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = langItemBaseCol; e.currentTarget.style.background = "transparent"; }}
              >{l}</button>
            ))}
          </div>
        </div>
        {/* Hamburger button — CSS shows it only on mobile */}
        <button
          ref={burgerRef}
          className="nav-burger"
          style={{ display: "none", alignItems: "center", justifyContent: "center",
            width: 40, height: 40, background: "transparent", border: "none",
            cursor: "pointer", padding: 4, position: "relative", zIndex: 1, flexShrink: 0 }}
          aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
            stroke={linkCol} strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="19" y2="6"
              style={{ opacity: menuOpen ? 0 : 1, transition: "opacity 200ms ease" }} />
            <line x1="3" y1="11" x2="19" y2="11"
              style={{ transform: menuOpen ? "rotate(45deg) translate(3.5px,-3.5px)" : "none",
                transformOrigin: "center center", transition: "transform 220ms ease" }} />
            <line x1="3" y1="16" x2="19" y2="16"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(3.5px,3.5px)" : "none",
                transformOrigin: "center center", transition: "transform 220ms ease" }} />
          </svg>
        </button>
      </div>
      {/* Mobile slide-down panel */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(28,24,20,.97)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            padding: "1.5rem 2rem 2rem",
            borderTop: "1px solid rgba(200,160,90,.15)",
            animation: "mobileMenuReveal 280ms ease both",
            zIndex: 48,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.section}
              style={{
                display: "block", padding: "12px 0",
                fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase",
                color: "#c8a060", textDecoration: "none", fontWeight: 500,
                borderBottom: "1px solid rgba(200,160,90,.1)",
                cursor: "pointer", transition: "color 200ms",
              }}
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); onNavigate && onNavigate(item.section); }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f2ebd8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#c8a060"; }}
            >{t(item.tKey)}</a>
          ))}
          <div style={{ display: "flex", gap: 20, marginTop: "1.5rem", paddingTop: "1rem" }}>
            {langs.map(l => (
              <button
                key={l}
                onClick={() => { setLang(l); setMenuOpen(false); }}
                style={{
                  fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase",
                  color: l === lang ? "#c8a060" : "#705840",
                  background: "transparent", border: "none",
                  borderBottom: l === lang ? "1px solid #c8a060" : "1px solid transparent",
                  fontFamily: "var(--font-sans)", fontWeight: 500,
                  cursor: l === lang ? "default" : "pointer", padding: "4px 0",
                }}
              >{l}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

window.Navigation = Navigation;
