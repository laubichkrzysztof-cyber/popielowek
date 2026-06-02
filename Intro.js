/* Intro — Popielówek / dawny Hennersdorf. Brief editorial orientation. */

const introStyles = {
  section: {
    background: "var(--parchment-100)",
    padding: "96px 64px 80px",
  },
  inner: {
    maxWidth: 1280, margin: "0 auto",
    display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, alignItems: "start",
  },
  eyebrowCol: { gridColumn: "2 / span 2", paddingTop: 22 },
  eyebrow: {
    fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase",
    color: "var(--gold-500)", fontWeight: 500,
    borderTop: "1px solid var(--hairline-gold)", paddingTop: 18, lineHeight: 1.75,
  },
  body: { gridColumn: "4 / span 6" },
  names: {
    fontFamily: "var(--font-display)", fontWeight: 300,
    fontSize: "clamp(2.75rem, 5vw, 5rem)",
    lineHeight: 1.04, letterSpacing: "-0.02em",
    color: "var(--ink-900)", margin: "0 0 36px", textWrap: "balance",
  },
  slash: { color: "var(--stone-400)", margin: "0 14px", fontWeight: 200 },
  sub: {
    fontFamily: "var(--font-italic)", fontStyle: "italic",
    fontSize: 20, lineHeight: 1.5, color: "var(--ink-700)",
    margin: "0 0 28px", maxWidth: "50ch",
  },
  para: {
    fontSize: 17, lineHeight: 1.72, color: "var(--stone-600)",
    margin: "0 0 18px", maxWidth: "54ch",
  },
  aside: {
    gridColumn: "11 / span 1",
    paddingTop: 8,
  },
  asideItem: {
    fontFamily: "var(--font-mono)", fontSize: 10.5,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--stone-400)", lineHeight: 2.1,
    borderTop: "1px solid var(--hairline)", paddingTop: 14, marginBottom: 14,
  },
  asideVal: { display: "block", color: "var(--gold-500)", fontWeight: 500, marginTop: 4, letterSpacing: "0.10em" },
};

const Intro = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  return (
  <section id="intro" style={introStyles.section}>
    <div className="intro-inner" style={introStyles.inner}>
      <div className="intro-eyebrow-col" style={introStyles.eyebrowCol}>
        <div style={introStyles.eyebrow}>{t("intro.e1")}<br/>{t("intro.e2")}<br/>{t("intro.e3")}</div>
      </div>
      <div className="intro-body" style={introStyles.body}>
        <h2 style={introStyles.names}>
          Popielówek<span style={introStyles.slash}>/</span>Hennersdorf
        </h2>
        <p style={introStyles.sub}>
          {t("intro.sub")}
        </p>
        <p style={introStyles.para}>
          {t("intro.p1")}
        </p>
        <p style={introStyles.para}>
          {t("intro.p2")}
        </p>
      </div>
      <div className="intro-aside" style={introStyles.aside}>
        <div style={introStyles.asideItem}>{t("intro.aEl")}<span style={introStyles.asideVal}>{t("intro.aElV")}</span></div>
        <div style={introStyles.asideItem}>{t("intro.aCo")}<span style={introStyles.asideVal}>{t("intro.aCoV")}</span></div>
        <div style={introStyles.asideItem}>{t("intro.aFi")}<span style={introStyles.asideVal}>{t("intro.aFiV")}</span></div>
        <div style={introStyles.asideItem}>{t("intro.aNa")}<span style={introStyles.asideVal}>{t("intro.aNaV")}</span></div>
      </div>
    </div>
  </section>
  );
};

window.Intro = Intro;
