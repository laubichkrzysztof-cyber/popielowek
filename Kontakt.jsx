/* Kontakt — a quiet invitation to help build the living archive.
   Compact editorial layout · unified frosted contribution panel · soft bridge into the footer. */

const RM_KON = typeof window !== "undefined" && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const kontaktStyles = {
  section: {
    padding: "80px 64px 0",
    background: "var(--parchment-200)",
  },
  inner: { maxWidth: 1280, margin: "0 auto" },

  grid: {
    display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 56,
    alignItems: "stretch",
  },

  /* Left — editorial invitation */
  leftCol: { gridColumn: "2 / span 5", display: "flex", flexDirection: "column" },
  eyebrow: {
    fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase",
    color: "var(--gold-500)", fontWeight: 500, marginBottom: 20,
    display: "flex", alignItems: "center", gap: 14,
  },
  rule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-400)" },
  h2: {
    fontFamily: "var(--font-display)", fontWeight: 300,
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)",
    lineHeight: 1.07, letterSpacing: "-0.018em",
    color: "var(--ink-900)", margin: "0 0 24px", textWrap: "balance",
  },
  h2i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },
  para: { fontSize: 15.5, lineHeight: 1.68, color: "var(--stone-600)", margin: "0 0 18px", maxWidth: "40ch" },
  closingLine: {
    marginTop: "auto", paddingTop: 28,
    fontFamily: "var(--font-italic)", fontStyle: "italic",
    fontSize: 15, lineHeight: 1.6, color: "var(--stone-500)",
    display: "flex", alignItems: "center", gap: 14,
  },
  closingRule: { display: "inline-block", width: 28, height: 1, background: "var(--hairline-gold)", flexShrink: 0 },

  /* Right — unified frosted contribution panel */
  panelCol: { gridColumn: "8 / span 4", display: "flex" },
  panel: {
    flex: 1,
    background: "rgba(242, 235, 220, 0.52)",
    backdropFilter: "blur(16px) saturate(118%)",
    WebkitBackdropFilter: "blur(16px) saturate(118%)",
    border: "1px solid rgba(160,120,64,.2)",
    borderRadius: 14,
    padding: "38px 38px 32px",
    boxShadow: "var(--shadow-paper), inset 0 1px 0 0 rgba(255,255,255,0.32)",
    display: "flex", flexDirection: "column",
  },
  panelLabel: {
    fontFamily: "var(--font-mono)", fontSize: 10,
    letterSpacing: "0.22em", textTransform: "uppercase",
    color: "var(--gold-500)", marginBottom: 26,
    display: "flex", alignItems: "center", gap: 12,
  },
  panelDot: { width: 5, height: 5, borderRadius: 999, background: "var(--gold-400)", flexShrink: 0 },

  contactRow: {
    display: "flex", alignItems: "flex-start", gap: 16,
    padding: "16px 0", borderBottom: "1px solid var(--hairline)",
  },
  contactIcon: { color: "var(--gold-500)", display: "flex", alignItems: "center", flexShrink: 0, marginTop: 2 },
  contactLabel: { fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-400)", fontWeight: 500, marginBottom: 5, display: "block", fontFamily: "var(--font-sans)" },
  contactText: { fontSize: 14, color: "var(--stone-600)", lineHeight: 1.5 },

  soon: {
    marginTop: 26, paddingTop: 22,
    borderTop: "1px solid var(--hairline-gold)",
  },
  soonLabel: {
    fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
    color: "var(--stone-400)", fontWeight: 500, marginBottom: 10,
  },
  soonText: {
    fontFamily: "var(--font-italic)", fontStyle: "italic",
    fontSize: 15, lineHeight: 1.55, color: "var(--stone-500)",
  },

  /* Bridge — parchment pours into the dark footer */
  bridge: {
    marginTop: 64,
    marginLeft: -64, marginRight: -64,
    height: 0,
    borderTop: "1px solid var(--hairline-gold)",
    position: "relative",
  },
  bridgeHair: {
    position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)",
    width: 1, height: 56,
    background: "linear-gradient(180deg, var(--gold-400), transparent)",
  },
};

const ContactLink = ({ children, href }) => {
  const [h, setH] = React.useState(false);
  return (
    <a href={href}
      style={{ ...kontaktStyles.contactText, color: h ? "var(--gold-500)" : "var(--stone-600)", textDecoration: "none", transition: "color 360ms" }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      {children}
    </a>
  );
};

const Kontakt = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  const [panelHover, setPanelHover] = React.useState(false);
  return (
    <section id="kontakt" style={kontaktStyles.section}>
      <div style={kontaktStyles.inner}>
        <div className="kt-grid" style={kontaktStyles.grid}>
          <div className="kt-left" style={kontaktStyles.leftCol}>
            <div style={kontaktStyles.eyebrow}><span style={kontaktStyles.rule}></span>{t("kt.eyebrow")}</div>
            <h2 style={kontaktStyles.h2}>{t("kt.h2a")} <span style={kontaktStyles.h2i}>{t("kt.h2b")}</span>.</h2>
            <p style={kontaktStyles.para}>
              {t("kt.p1")}
            </p>
            <p style={kontaktStyles.para}>
              {t("kt.p2")}
            </p>
            <div style={kontaktStyles.closingLine}>
              <span style={kontaktStyles.closingRule}></span>
              {t("kt.closing")}
            </div>
          </div>

          <div className="kt-panel-col" style={kontaktStyles.panelCol}>
            <div
              style={{
                ...kontaktStyles.panel,
                transform: panelHover && !RM_KON ? "translateY(-4px)" : "translateY(0)",
                boxShadow: panelHover
                  ? "var(--shadow-lift), inset 0 1px 0 0 rgba(255,255,255,0.42)"
                  : "var(--shadow-paper), inset 0 1px 0 0 rgba(255,255,255,0.32)",
                borderColor: panelHover ? "rgba(160,120,64,.45)" : "rgba(160,120,64,.2)",
                transition: "transform 600ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 600ms, border-color 600ms",
              }}
              className="tile-interactive"
              onMouseEnter={() => setPanelHover(true)} onMouseLeave={() => setPanelHover(false)}
            >
              <span className="tc-c tc-tl"></span><span className="tc-c tc-tr"></span>
              <span className="tc-c tc-bl"></span><span className="tc-c tc-br"></span>
              <span className="tc-line"></span>
              <div style={kontaktStyles.panelLabel}><span style={kontaktStyles.panelDot}></span>{t("kt.panelLabel")}</div>

              <div style={kontaktStyles.contactRow}>
                <span style={kontaktStyles.contactIcon}><Icon name="mail" size={18} stroke={1.4}/></span>
                <div><span style={kontaktStyles.contactLabel}>{t("kt.emailLabel")}</span><ContactLink href="mailto:archiwum@popielowek.pl">archiwum@popielowek.pl</ContactLink></div>
              </div>
              <div style={{ ...kontaktStyles.contactRow, borderBottom: "none" }}>
                <span style={kontaktStyles.contactIcon}><Icon name="map-pin" size={18} stroke={1.4}/></span>
                <div><span style={kontaktStyles.contactLabel}>{t("kt.addrLabel")}</span><span style={kontaktStyles.contactText}>{t("kt.addr1")}<br/>{t("kt.addr2")}</span></div>
              </div>

              <div style={kontaktStyles.soon}>
                <div style={kontaktStyles.soonLabel}>{t("kt.soonLabel")}</div>
                <p style={kontaktStyles.soonText}>
                  {t("kt.soon")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kt-bridge" style={kontaktStyles.bridge}></div>
    </section>
  );
};

window.Kontakt = Kontakt;
