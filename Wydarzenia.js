/* Wydarzenia — village events and announcements. Empty state, CMS-ready. */

const wydarzeniaStyles = {
  section: {
    padding: "88px 64px 80px",
    background: "var(--parchment-100)",
  },
  inner: { maxWidth: 1280, margin: "0 auto" },
  header: {
    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64,
    alignItems: "end", marginBottom: 64,
    paddingBottom: 32, borderBottom: "1px solid var(--hairline)",
  },
  eyebrow: {
    fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase",
    color: "var(--gold-500)", fontWeight: 500, marginBottom: 16,
    display: "flex", alignItems: "center", gap: 14,
  },
  rule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-400)" },
  h2: {
    fontFamily: "var(--font-display)", fontWeight: 300,
    fontSize: 48, lineHeight: 1.06, letterSpacing: "-0.018em",
    color: "var(--ink-900)", margin: 0,
  },
  h2i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },
  dek: { fontSize: 16, lineHeight: 1.65, color: "var(--stone-600)", maxWidth: "44ch", margin: 0 },

  /* Empty state — warm frosted parchment glass panel (intentional, not sketch) */
  empty: {
    padding: "84px 32px 72px",
    display: "grid",
    gridTemplateColumns: "minmax(0,1fr)",
    justifyItems: "center",
    textAlign: "center",
    background: "rgba(242, 235, 220, 0.50)",
    backdropFilter: "blur(16px) saturate(118%)",
    WebkitBackdropFilter: "blur(16px) saturate(118%)",
    border: "1px solid rgba(160,120,64,.2)",
    borderRadius: 12,
    boxShadow: "var(--shadow-paper), inset 0 1px 0 0 rgba(255,255,255,0.30)",
  },
  emptyMark: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: 56,
    lineHeight: 1,
    color: "var(--gold-500)",
    letterSpacing: "-0.02em",
    marginBottom: 28,
  },
  emptyLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: 10.5,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "var(--stone-400)",
    marginBottom: 24,
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  emptyLabelRule: { display: "inline-block", width: 28, height: 1, background: "var(--hairline-gold)" },
  emptyTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: 1.18,
    letterSpacing: "-0.012em",
    color: "var(--ink-900)",
    margin: "0 0 18px",
    maxWidth: "22ch",
  },
  emptyBody: {
    fontSize: 15.5,
    lineHeight: 1.7,
    color: "var(--stone-600)",
    maxWidth: "52ch",
    margin: 0,
  },

  /* Note under empty state */
  note: {
    marginTop: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--stone-400)",
  },
  noteLink: {
    color: "var(--ink-900)",
    borderBottom: "1px solid var(--hairline-gold)",
    paddingBottom: 2,
    textDecoration: "none",
    transition: "color 320ms, border-color 320ms",
  },
};

const Wydarzenia = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  return (
  <section id="wydarzenia" style={wydarzeniaStyles.section}>
    <div style={wydarzeniaStyles.inner}>
      <div className="wd-header" style={wydarzeniaStyles.header}>
        <div>
          <div style={wydarzeniaStyles.eyebrow}><span style={wydarzeniaStyles.rule}></span>{t("wd.eyebrow")}</div>
          <h2 style={wydarzeniaStyles.h2}>{t("wd.h2a")} <span style={wydarzeniaStyles.h2i}>{t("wd.h2b")}</span></h2>
        </div>
        <p style={wydarzeniaStyles.dek}>
          {t("wd.dek")}
        </p>
      </div>

      <div style={wydarzeniaStyles.empty} className="tile-static">
        <span className="tc-c tc-tl"></span><span className="tc-c tc-tr"></span>
        <span className="tc-c tc-bl"></span><span className="tc-c tc-br"></span>
        <span className="tc-line"></span>
        <div style={wydarzeniaStyles.emptyLabel}>
          <span style={wydarzeniaStyles.emptyLabelRule}></span>
          {t("wd.stamp")}
          <span style={wydarzeniaStyles.emptyLabelRule}></span>
        </div>
        <div style={wydarzeniaStyles.emptyMark}>—</div>
        <h3 style={wydarzeniaStyles.emptyTitle}>
          {t("wd.title")}
        </h3>
        <p style={wydarzeniaStyles.emptyBody}>
          {t("wd.body")}
        </p>
      </div>

      <div style={wydarzeniaStyles.note}>
        <span>{t("wd.noteA")}</span>
        <a href="#kontakt" style={wydarzeniaStyles.noteLink}>{t("wd.noteB")}</a>
      </div>
    </div>
  </section>
  );
};

window.Wydarzenia = Wydarzenia;
