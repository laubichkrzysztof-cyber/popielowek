/* Hero — full-bleed drone panorama. Soft scrims preserve natural light. */

const heroStyles = {
  section: {
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: 720,
    overflow: "hidden",
    background: "var(--ink-900)",
  },
  photo: {
    position: "absolute", inset: 0,
    backgroundImage: 'url("../../assets/hero-panorama.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center 38%",
  },
  scrimTop: {
    position: "absolute", inset: 0,
    background: "linear-gradient(180deg, rgba(42,37,29,0.30) 0%, rgba(42,37,29,0.0) 22%)",
    pointerEvents: "none",
  },
  scrimBottom: {
    position: "absolute", inset: 0,
    background: "linear-gradient(0deg, rgba(42,37,29,0.62) 0%, rgba(42,37,29,0.14) 30%, rgba(42,37,29,0) 50%)",
    pointerEvents: "none",
  },
  vignette: {
    position: "absolute", inset: 0,
    background: "radial-gradient(110% 70% at 50% 115%, rgba(42,37,29,0.40) 0%, rgba(42,37,29,0) 50%)",
    pointerEvents: "none",
  },
  content: {
    position: "absolute", left: 0, right: 0, bottom: 0,
    padding: "0 64px 72px",
    display: "grid", gridTemplateColumns: "1fr auto",
    alignItems: "flex-end", gap: 40,
    zIndex: 2,
  },
  eyebrow: {
    fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase",
    color: "var(--gold-200)", fontWeight: 500, marginBottom: 28,
    display: "flex", alignItems: "center", gap: 14,
  },
  eyebrowRule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-200)", opacity: 0.65 },
  h1: {
    margin: 0,
    fontFamily: "var(--font-display)", fontWeight: 300,
    fontSize: "clamp(2.75rem, 6vw, 6rem)",
    lineHeight: 1.0,
    letterSpacing: "-0.018em",
    color: "var(--parchment-50)",
    textWrap: "balance",
  },
  subtitle: {
    margin: "18px 0 0",
    fontFamily: "var(--font-italic)", fontStyle: "italic", fontWeight: 400,
    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
    lineHeight: 1.5,
    color: "rgba(242,235,220,0.72)",
    letterSpacing: "0.01em",
    maxWidth: "38ch",
  },


  scrollStrip: {
    background: "var(--parchment-100)",
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "36px 0 32px",
    gap: 14,
  },
  scrollLabel: {
    fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase",
    color: "var(--stone-500)", fontWeight: 500, whiteSpace: "nowrap",
    fontFamily: "var(--font-sans)",
  },
  scrollMouse: {
    width: 22, height: 34,
    border: "1.5px solid var(--gold-400)",
    borderRadius: 11,
    display: "flex", justifyContent: "center", paddingTop: 6,
    flexShrink: 0,
  },
  /* ─── HOTSPOTS ──────────────────────────────────────────────────────── */
  hotspotWrap: {
    position: "absolute", transform: "translate(-50%,-50%)",
    zIndex: 5, cursor: "pointer",
  },
  hotspotRing: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%,-50%)",
    width: 32, height: 32, borderRadius: 999,
    border: "1px solid rgba(248,244,232,0.55)",
    animation: "hotspotPulse 2.6s ease-out infinite",
    pointerEvents: "none",
  },
  hotspotDot: {
    width: 10, height: 10, borderRadius: 999,
    background: "rgba(248,244,232,0.95)",
    border: "1.5px solid rgba(186,150,72,0.55)",
    boxShadow: "0 0 0 3px rgba(248,244,232,0.22), 0 0 10px 1px rgba(248,244,232,0.18)",
    transition: "transform 320ms, background 320ms",
    position: "relative", zIndex: 1,
  },
  hotspotTip: {
    position: "absolute", width: 210,
    background: "rgba(227,218,203,0.56)",
    backdropFilter: "blur(14px) saturate(110%)",
    WebkitBackdropFilter: "blur(14px) saturate(110%)",
    border: "1px solid rgba(186,150,72,0.18)",
    borderRadius: 2,
    padding: "13px 16px 15px",
    boxShadow: "0 6px 24px -10px rgba(42,37,29,0.14), inset 0 1px 0 rgba(255,255,255,0.28)",
    pointerEvents: "none",
    transition: "opacity 320ms cubic-bezier(0.16,1,0.3,1), transform 320ms cubic-bezier(0.16,1,0.3,1)",
  },
  hotspotTipYear: {
    fontSize: 9.5, letterSpacing: "0.26em", textTransform: "uppercase",
    color: "var(--gold-500)", fontWeight: 500, marginBottom: 8,
    fontFamily: "var(--font-sans)", display: "block",
  },
  hotspotTipTitle: {
    fontFamily: "var(--font-display)", fontWeight: 400,
    fontSize: 17, lineHeight: 1.22, letterSpacing: "-0.008em",
    color: "var(--ink-900)", margin: "0 0 8px",
  },
  hotspotTipSub: {
    fontSize: 12.5, lineHeight: 1.55, color: "var(--stone-600)",
    margin: "0 0 12px", fontFamily: "var(--font-sans)",
  },
  hotspotTipLink: {
    fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
    color: "var(--gold-500)", fontWeight: 500,
    fontFamily: "var(--font-sans)",
  },
};

const HOTSPOTS = [
  {
    id: "kosciol", x: 56, y: 62,
    year: "1581 · 1766–1767",
    titleKey: "hero.churchTitle",
    subKey: "hero.churchSub",
    tipDir: "right",
    noLink: true,
  },
  {
    id: "gory", x: 33, y: 45,
    yearKey: "hero.goryYear",
    title: "",
    subKey: "hero.gorySub",
    tipDir: "right",
    tipUp: true,
    noLink: true,
  },
];

const Hotspot = ({ spot, t }) => {
  const [hovered, setHovered] = React.useState(false);
  const tipStyle = {
    ...heroStyles.hotspotTip,
    ...(spot.tipDir === "left" ? { right: 20, left: "auto" } : { left: 20, right: "auto" }),
    // tipUp forces tooltip above dot (toward sky); otherwise use y > 50 heuristic
    ...(spot.tipUp || spot.y > 50 ? { bottom: 20, top: "auto" } : { top: 20, bottom: "auto" }),
    opacity: hovered ? 1 : 0,
    transform: hovered ? "translateY(0) scale(1)" : "translateY(6px) scale(0.97)",
  };
  return (
    <div
      className="hero-hotspot"
      style={{ ...heroStyles.hotspotWrap, left: `${spot.x}%`, top: `${spot.y}%` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={heroStyles.hotspotRing}></div>
      <div style={{
        ...heroStyles.hotspotDot,
        transform: hovered ? "scale(1.3)" : "scale(1)",
        background: hovered ? "rgba(248,244,232,1)" : "rgba(248,244,232,0.95)",
      }}></div>
      <div style={tipStyle}>
        <span style={heroStyles.hotspotTipYear}>{spot.yearKey ? t(spot.yearKey) : spot.year}</span>
        <div style={heroStyles.hotspotTipTitle}>{spot.titleKey ? t(spot.titleKey) : spot.title}</div>
        <p style={heroStyles.hotspotTipSub}>{spot.subKey ? t(spot.subKey) : spot.sub}</p>
        {!spot.noLink && <span style={heroStyles.hotspotTipLink}>Poznać historię →</span>}
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  return (
  <React.Fragment>
  <section className="hero-section" style={heroStyles.section}>
    <style>{`
      @keyframes hotspotPulse {
        0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.8; }
        70%  { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
        100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
      }
      @keyframes mouseFloat {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-10px); }
      }
      @keyframes scrollDot {
        0%   { opacity: 0;   transform: translateY(0px); }
        20%  { opacity: 1;   transform: translateY(2px); }
        70%  { opacity: 0.2; transform: translateY(12px); }
        100% { opacity: 0;   transform: translateY(14px); }
      }
    `}</style>
    <div className="hero-photo" style={heroStyles.photo}></div>
    <div className="hero-bg" style={heroStyles.scrimTop}></div>
    <div className="hero-bg" style={heroStyles.scrimBottom}></div>
    <div className="hero-bg" style={heroStyles.vignette}></div>

    {/* Hotspots — interactive landmarks on the panorama */}
    {HOTSPOTS.map(spot => <Hotspot key={spot.id} spot={spot} t={t} />)}

    <div className="hero-content" style={heroStyles.content}>
      <div>
        <div className="hero-eyebrow" style={heroStyles.eyebrow}>
          <span style={heroStyles.eyebrowRule}></span>
          {t("hero.eyebrow")}
        </div>
        <h1 className="hero-h1" style={heroStyles.h1}>{t("hero.title")}</h1>
        <p className="hero-sub" style={heroStyles.subtitle}>{t("hero.sub1")}</p>
      </div>
    </div>


  </section>

  {/* Scroll cue — parchment strip below hero */}
  <div className="hero-scroll" style={heroStyles.scrollStrip}>
    <div style={{
      ...heroStyles.scrollMouse,
      animation: "mouseFloat 1.8s ease-in-out infinite",
    }}>
      <span style={{
        width: 2, height: 8, borderRadius: 1,
        background: "var(--gold-400)",
        display: "block",
        animation: "scrollDot 1.6s ease-in-out infinite",
      }}></span>
    </div>
    <span style={heroStyles.scrollLabel}>{t("hero.scroll")}</span>
  </div>

  </React.Fragment>
  );
};

window.Hero = Hero;
