/* Zabytki — heritage objects. Layout/style unchanged. All visible text via i18n. */

const RM_ZAB = typeof window !== "undefined" && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const zabytkiStyles = {
  section: { padding: "88px 64px 80px", background: "var(--parchment-100)" },
  inner: { maxWidth: 1280, margin: "0 auto" },
  header: { display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginBottom: 56 },
  headerInner: { gridColumn: "2 / span 6" },
  eyebrow: { fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold-500)", fontWeight: 500, marginBottom: 18, display: "flex", alignItems: "center", gap: 14 },
  rule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-400)" },
  h2: { fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(2.25rem, 4vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.018em", color: "var(--ink-900)", margin: "0 0 18px" },
  h2i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },
  sub: { fontSize: 16, lineHeight: 1.62, color: "var(--stone-600)", maxWidth: "48ch" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  card: {
    background: "rgba(248,243,232,.5)",
    border: "1px solid rgba(160,120,64,.2)", borderRadius: 12, padding: "28px 32px",
    boxShadow: "var(--shadow-paper), inset 0 1px 0 0 rgba(255,255,255,0.30)",
    display: "flex", flexDirection: "column", gap: 14, cursor: "pointer",
    transition: "border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease, background 280ms ease",
  },
  cardKicker: { fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold-500)", fontWeight: 500 },
  cardTitle: { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 27, lineHeight: 1.14, letterSpacing: "-0.01em", color: "var(--ink-900)" },
  cardDesc: { fontSize: 14, lineHeight: 1.62, color: "var(--stone-600)" },
  cardMeta: { marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--hairline)", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--stone-400)", display: "flex", justifyContent: "space-between", transition: "border-color 640ms" },
};

/* Card layout metadata: wide/narrow. Text comes from t("zb.cards")[i]. */
const CARD_ICONS = ["church", "grave", "cross", "radar"];


const ZabytkiCard = ({ card, icon }) => (
  <div className="tile-interactive" style={zabytkiStyles.card}>
    <span className="tc-c tc-tl"></span><span className="tc-c tc-tr"></span>
    <span className="tc-c tc-bl"></span><span className="tc-c tc-br"></span>
    <span className="tc-line"></span>
    <span className="bento-icon"><Icon name={icon} size={24} stroke={1.3} /></span>
    <div style={zabytkiStyles.cardKicker}>{card.kicker}</div>
    <div style={zabytkiStyles.cardTitle}>{card.title}</div>
    <div style={zabytkiStyles.cardDesc}>{card.desc}</div>
    <div style={zabytkiStyles.cardMeta}>
      <span>{card.meta}</span>
      <span>→</span>
    </div>
  </div>
);

const Zabytki = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  const cards = t("zb.cards");
  return (
    <section id="zabytki" style={zabytkiStyles.section}>
      <div style={zabytkiStyles.inner}>
        <div className="zb-header" style={zabytkiStyles.header}>
          <div className="zb-header-inner" style={zabytkiStyles.headerInner}>
            <div style={zabytkiStyles.eyebrow}><span style={zabytkiStyles.rule}></span>{t("zb.eyebrow")}</div>
            <h2 style={zabytkiStyles.h2}>{t("zb.h2a")} <span style={zabytkiStyles.h2i}>{t("zb.h2b")}</span>.</h2>
            <p style={zabytkiStyles.sub}>{t("zb.sub")}</p>
          </div>
        </div>
        <div className="zb-grid" style={zabytkiStyles.grid}>
          {CARD_ICONS.map((icon, i) => (
            <ZabytkiCard key={i} card={cards[i] || {}} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

window.Zabytki = Zabytki;
