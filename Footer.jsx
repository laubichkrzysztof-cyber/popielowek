/* Footer — compact 3-zone layout: logo+nav / legal / copyright+back-to-top */

const footerStyles = {
  footer: {
    background: "#1c1814",
    color: "#e0d8c8",
    display: "flex",
    flexDirection: "column",
  },

  /* ── ZONE 1: top bar ─────────────────────────────── */
  zone1: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    gap: "2rem",
    padding: "2.5rem 2.5rem 2rem",
    maxWidth: 1280,
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },

  /* brand column */
  brandCol: {},
  brandLockup: {
    display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
  },
  brandIcon: {
    width: 22, height: 25, color: "#c8a060", flexShrink: 0,
  },
  brandName: {
    fontFamily: "var(--font-display)", fontWeight: 500,
    fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase",
    color: "#e0d8c8",
  },
  brandDesc: {
    fontSize: 12, color: "rgba(200,185,160,.6)", lineHeight: 1.6,
    marginTop: 8, maxWidth: "30ch", fontFamily: "var(--font-sans)",
  },

  /* nav columns */
  colLabel: {
    fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
    color: "rgba(200,185,160,.45)", fontWeight: 600, marginBottom: 10,
    fontFamily: "var(--font-sans)",
  },
  colLink: {
    display: "block", padding: "4px 0",
    fontSize: 11, color: "rgba(200,185,160,.75)", textDecoration: "none",
    transition: "color 200ms", cursor: "pointer",
    fontFamily: "var(--font-sans)", border: "none",
    borderBottom: "none",
  },

  /* ── ZONE 2: legal ───────────────────────────────── */
  zone2: {
    borderTop: ".5px solid rgba(200,160,90,.1)",
    padding: "1.25rem 2.5rem",
    maxWidth: 640,
  },
  legalText: {
    fontSize: 11, color: "rgba(200,185,160,.65)", lineHeight: 1.7,
    margin: 0, fontFamily: "var(--font-sans)",
  },
  legalText2: {
    fontSize: 11, color: "rgba(200,185,160,.65)", lineHeight: 1.7,
    margin: 0, marginTop: 10, fontFamily: "var(--font-sans)",
  },

  /* ── ZONE 3: copyright + back to top ─────────────── */
  zone3: {
    borderTop: ".5px solid rgba(200,160,90,.08)",
    padding: "12px 2.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
  },
  copyright: {
    fontSize: 11, color: "rgba(200,185,160,.55)",
    letterSpacing: "0.03em", margin: 0,
    fontFamily: "var(--font-sans)",
  },
  backToTop: {
    fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
    color: "#6a6050", background: "none", border: "none",
    cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)",
    transition: "color 200ms",
  },
};

/* Church SVG icon — same as navbar */
const ChurchIcon = ({ size = 22, color = "#c8a060" }) => (
  <svg width={size} height={size * (32/28)} viewBox="0 0 28 32" fill="none"
    stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="10" width="8" height="18" rx=".5"/>
    <line x1="14" y1="2" x2="14" y2="8"/>
    <line x1="11.5" y1="5" x2="16.5" y2="5"/>
    <path d="M10 10 L14 4 L18 10"/>
    <path d="M12 28 L12 23 A2 2 0 0 1 16 23 L16 28"/>
    <circle cx="14" cy="16" r="1.5"/>
    <rect x="3" y="18" width="7" height="10" rx=".5"/>
    <path d="M3 18 L6.5 14 L10 18"/>
    <rect x="18" y="18" width="7" height="10" rx=".5"/>
    <path d="M18 18 L21.5 14 L25 18"/>
  </svg>
);

const FooterLink = ({ children }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" className="footer-link footer-nav-link"
      style={{ ...footerStyles.colLink, color: hover ? "#c8a060" : "rgba(200,185,160,.75)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {children}
    </a>
  );
};

const Footer = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  const [topHover, setTopHover] = React.useState(false);

  return (
    <footer style={footerStyles.footer}>
      <style>{`
        .footer-link:focus-visible {
          outline: 2px solid #c8a060;
          outline-offset: 3px;
          border-radius: 2px;
        }
        .footer-nav-link {
          border-bottom: none !important;
          text-decoration: none !important;
        }
        @media (max-width: 768px) {
          .ft-zone1 {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 2rem 1.5rem 1.5rem !important;
          }
          .ft-zone2 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .ft-zone3 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }
      `}</style>

      {/* ── ZONE 1: Brand + nav columns ── */}
      <div className="ft-zone1" style={footerStyles.zone1}>
        <div className="ft-brand-col" style={footerStyles.brandCol}>
          <div style={footerStyles.brandLockup}>
            <ChurchIcon />
            <span style={footerStyles.brandName}>Popielówek</span>
          </div>
          <p style={footerStyles.brandDesc}>{t("ft.ftDesc")}</p>
        </div>

        <div>
          <div style={footerStyles.colLabel}>{t("ft.cArchive")}</div>
          <FooterLink>{t("nav.timeline")}</FooterLink>
          <FooterLink>{t("nav.history")}</FooterLink>
          <FooterLink>{t("nav.monuments")}</FooterLink>
          <FooterLink>{t("nav.gallery")}</FooterLink>
        </div>

        <div>
          <div style={footerStyles.colLabel}>{t("ft.cPlaces")}</div>
          <FooterLink>{t("drop.getThere")}</FooterLink>
          <FooterLink>{t("drop.see")}</FooterLink>
          <FooterLink>{t("drop.church")}</FooterLink>
          <FooterLink>{t("drop.map")}</FooterLink>
        </div>

        <div>
          <div style={footerStyles.colLabel}>{t("ft.cCommunity")}</div>
          <FooterLink>{t("nav.events")}</FooterLink>
          <FooterLink>{t("ft.announcements")}</FooterLink>
          <FooterLink>{t("ft.submit")}</FooterLink>
          <FooterLink>{t("nav.contact")}</FooterLink>
        </div>
      </div>

      {/* ── ZONE 2: Legal text ── */}
      <div className="ft-zone2" style={footerStyles.zone2}>
        <p style={footerStyles.legalText}>{t("ft.legal1")}</p>
        <p style={footerStyles.legalText2}>{t("ft.legal2")}</p>
      </div>

      {/* ── ZONE 3: Copyright + back to top ── */}
      <div className="ft-zone3" style={footerStyles.zone3}>
        <span style={footerStyles.copyright}>
          © {new Date().getFullYear()} Krzysztof Laubich. {t("ft.signatureRole")} {t("ft.rights")}
        </span>
        <button
          className="ft-back-top"
          style={{ ...footerStyles.backToTop, color: topHover ? "#c8a060" : "rgba(200,185,160,.55)" }}
          onMouseEnter={() => setTopHover(true)}
          onMouseLeave={() => setTopHover(false)}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Wróć na górę strony"
        >
          ↑ NA GÓRĘ
        </button>
      </div>
    </footer>
  );
};

window.Footer = Footer;
