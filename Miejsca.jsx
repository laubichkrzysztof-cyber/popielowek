/* Miejsca — "Popielówek na mapie pamięci": where the village is, how it is
   administratively connected, its memory layers, and how the map will grow.
   A living archive locator — not a travel brochure. All facts verified. */

const RM_MIE = typeof window !== "undefined" && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const GLASS_MIE = {
  background: "rgba(242, 235, 220, 0.52)",
  backdropFilter: "blur(16px) saturate(118%)",
  WebkitBackdropFilter: "blur(16px) saturate(118%)",
  border: "1px solid rgba(160, 122, 52, 0.18)",
  boxShadow: "var(--shadow-paper), inset 0 1px 0 0 rgba(255,255,255,0.32)",
};

const miejscaStyles = {
  section: {
    background: "var(--parchment-200)",
    padding: "88px 64px 80px",
    overflow: "hidden",
  },
  inner: { maxWidth: 1280, margin: "0 auto" },

  header: {
    display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginBottom: 56,
  },
  headerInner: { gridColumn: "1 / span 7" },
  eyebrow: {
    fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase",
    color: "var(--gold-500)", fontWeight: 500, marginBottom: 18,
    display: "flex", alignItems: "center", gap: 14,
  },
  rule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-400)" },
  h2: {
    fontFamily: "var(--font-display)", fontWeight: 300,
    fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
    lineHeight: 1.06, letterSpacing: "-0.018em",
    color: "var(--ink-900)", margin: 0, textWrap: "balance",
  },
  h2i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },

  /* Row 1 — panorama + location card */
  topGrid: {
    display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 28,
    alignItems: "stretch", marginBottom: 28,
  },
  imageCol: {
    position: "relative", borderRadius: 12, overflow: "hidden",
    minHeight: 380,
    border: "1px solid var(--hairline)", boxShadow: "var(--shadow-paper)",
  },
  imageFrame: {
    position: "absolute", inset: 0,
    background: 'url("../../assets/hero-panorama.webp") center 48% / cover',
    transition: RM_MIE ? "none" : "transform 1800ms cubic-bezier(0.22,0.61,0.36,1)",
  },
  imageOverlay: {
    position: "absolute", inset: 0,
    background: "linear-gradient(0deg, rgba(42,37,29,0.42) 0%, rgba(42,37,29,0) 52%)",
  },
  imageCaption: {
    position: "absolute", bottom: 26, left: 30, right: 30,
    fontFamily: "var(--font-mono)", fontSize: 11,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "rgba(242,235,220,0.88)", lineHeight: 1.5,
    display: "flex", alignItems: "flex-start", gap: 12,
  },
  imageRule: { width: 28, height: 1, background: "var(--gold-200)", marginTop: 7, flexShrink: 0 },

  locCard: {
    ...GLASS_MIE, borderRadius: 12, padding: "38px 38px 34px",
    display: "flex", flexDirection: "column",
  },
  locLabel: {
    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
    textTransform: "uppercase", color: "var(--gold-500)", marginBottom: 22,
    display: "flex", alignItems: "center", gap: 12,
  },
  locDot: { width: 5, height: 5, borderRadius: 999, background: "var(--gold-400)" },
  locSentence: {
    fontFamily: "var(--font-display)", fontWeight: 300,
    fontSize: 23, lineHeight: 1.34, letterSpacing: "-0.01em",
    color: "var(--ink-900)", margin: 0,
  },
  locStrong: { color: "var(--gold-500)", fontStyle: "italic", fontFamily: "var(--font-italic)" },
  chips: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto", paddingTop: 30 },
  chip: {
    fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "var(--stone-600)",
    border: "1px solid var(--hairline-gold)", borderRadius: 999,
    padding: "7px 13px", background: "rgba(255,255,255,0.28)",
  },

  /* Row 2 — custom archive map module */
  mapPanel: { ...GLASS_MIE, borderRadius: 14, padding: 16, marginBottom: 56 },

  /* The designed locator card (custom SVG cartography — main visual) */
  mapCard: {
    position: "relative",
    borderRadius: 9,
    overflow: "hidden",
    border: "1px solid var(--hairline-gold)",
    height: 380,
    background: "radial-gradient(120% 120% at 50% 35%, #EDE4D2 0%, #E3DACB 55%, #D8CDB8 100%)",
    cursor: "crosshair",
  },
  mapSvg: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" },

  /* HTML overlays — always crisply positioned regardless of SVG slicing */
  mapBadge: {
    position: "absolute", top: 16, left: 18,
    display: "inline-flex", alignItems: "center", gap: 9,
    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.20em",
    textTransform: "uppercase", color: "var(--gold-500)",
    background: "rgba(242,235,220,0.62)",
    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(160,122,52,0.20)", borderRadius: 999,
    padding: "7px 14px 7px 12px",
  },
  mapCoord: {
    position: "absolute", top: 16, right: 18,
    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em",
    color: "var(--stone-500)",
    background: "rgba(242,235,220,0.62)",
    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(160,122,52,0.16)", borderRadius: 999,
    padding: "7px 13px",
  },
  mapPinLabel: {
    position: "absolute", left: "50%", top: "50%",
    transform: "translate(-50%, calc(-50% - 44px))",
    textAlign: "center", pointerEvents: "none", whiteSpace: "nowrap",
  },
  mapPinName: {
    fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400,
    letterSpacing: "0.02em", color: "var(--ink-900)",
    textShadow: "0 1px 0 rgba(255,255,255,0.55)",
  },
  mapPinSub: {
    fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.18em",
    textTransform: "uppercase", color: "var(--gold-500)", marginTop: 5,
  },
  mapContext: {
    position: "absolute", left: 18, bottom: 16,
    fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "var(--stone-500)",
  },

  /* Footer: honest note + external map actions */
  mapFooter: {
    display: "flex", alignItems: "flex-end", justifyContent: "space-between",
    gap: 24, flexWrap: "wrap", padding: "18px 8px 6px",
  },
  mapNote: {
    fontFamily: "var(--font-italic)", fontStyle: "italic",
    fontSize: 13.5, color: "var(--stone-500)", lineHeight: 1.55, maxWidth: "52ch", margin: 0,
  },
  mapActions: { display: "flex", gap: 10, flexShrink: 0 },
  /* ── Reusable "archive pill button" pattern ──────────────────────────────
     Rounded pill · thin antique-gold border · subtle border/lift on hover ·
     small uppercase editorial label · calm transition · optional arrow.
     Reuse for: map actions, archive links, section CTAs, "zobacz więcej",
     secondary nav actions. Not SaaS, not neon. Keep mapAction + MapAction
     together if extracting into a shared component later. */
  mapAction: {
    display: "inline-flex", alignItems: "center", gap: 8,
    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em",
    textTransform: "uppercase", color: "var(--ink-900)",
    textDecoration: "none",
    border: "1px solid var(--hairline-gold)", borderRadius: 999,
    padding: "9px 15px", background: "rgba(255,255,255,0.30)",
    transition: "color 360ms, border-color 360ms, background 360ms, transform 360ms",
  },

  /* Row 3 — memory layers */
  layersHead: {
    display: "flex", alignItems: "baseline", gap: 16, marginBottom: 28,
    flexWrap: "wrap",
  },
  layersTitle: {
    fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 28,
    lineHeight: 1.1, letterSpacing: "-0.012em", color: "var(--ink-900)", margin: 0,
  },
  layersTitleI: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },
  layersGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gridTemplateRows: "auto auto",
    gap: 12,
  },
  layerCard: {
    background: "rgba(248,243,232,.5)",
    border: "1px solid rgba(160,120,64,.2)",
    borderRadius: 12,
    padding: "1.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex", flexDirection: "column", gap: 12,
    transition: "border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease, background 280ms ease",
    minHeight: 168,
  },
  layerNum: {
    fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 15,
    color: "var(--gold-500)",
  },
  layerTitle: {
    fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 19,
    lineHeight: 1.2, letterSpacing: "-0.008em", color: "var(--ink-900)",
  },
  layerDesc: { fontSize: 13.5, lineHeight: 1.55, color: "var(--stone-600)" },
  layerTag: {
    marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--hairline)",
    fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.16em",
    textTransform: "uppercase", color: "var(--stone-400)",
  },
};

const CHIPS = ["Dolny Śląsk", "Powiat lwówecki", "Gmina Lubomierz", "59-623", "dawny Hennersdorf"];

/* Layout-only metadata; visible chip/layer text resolves from i18n (mj.chips / mj.layers). */
const LAYER_META = [
  { num: "01", icon: "church"  },
  { num: "02", icon: "map-pin" },
  { num: "03", icon: "trees"  },
  { num: "04", icon: "radar"  },
  { num: "05", icon: "map"    },
];

/* ── Custom editorial cartography (abstract — not a literal map of buildings) ── */
const POP_LAT = 50.988333, POP_LNG = 15.530556;
const GMAPS_URL = "https://www.google.com/maps/place/Popiel%C3%B3wek";

function smoothClosedPath(pts) {
  const n = pts.length;
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + " Z";
}
function contour(cx, cy, rx, ry, wobble, seed) {
  const N = 16, pts = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const w = 1 + wobble * (Math.sin(a * 3 + seed) * 0.5 + Math.cos(a * 2 + seed * 1.7) * 0.5);
    pts.push([cx + Math.cos(a) * rx * w, cy + Math.sin(a) * ry * w]);
  }
  return smoothClosedPath(pts);
}
const CX = 400, CY = 180;
const CONTOURS = [
  contour(CX, CY, 46, 38, 0.10, 1.2),
  contour(CX, CY, 92, 74, 0.12, 2.6),
  contour(CX, CY, 150, 116, 0.13, 0.7),
  contour(CX, CY, 214, 162, 0.14, 3.9),
  contour(CX, CY, 286, 210, 0.15, 1.9),
];

const InteractiveMapCard = ({ t }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const mapRef = React.useRef(null);

  const leafletCallbackRef = React.useCallback((node) => {
    if (!node || mapRef.current) return;
    const L = window.L;
    if (!L) { console.warn("Leaflet not loaded"); return; }
    const m = L.map(node, {
      center: [POP_LAT, POP_LNG], zoom: 14,
      scrollWheelZoom: false, zoomControl: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "\u00a9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
      maxZoom: 19,
    }).addTo(m);
    L.control.zoom({ position: "topright" }).addTo(m);
    L.marker([POP_LAT, POP_LNG]).addTo(m).bindPopup("Popiel\u00f3wek (Hennersdorf)").openPopup();
    mapRef.current = m;
  }, []);

  React.useEffect(() => {
    if (expanded && mapRef.current) {
      const id = setTimeout(() => mapRef.current.invalidateSize(), 380);
      return () => clearTimeout(id);
    }
  }, [expanded]);

  const handleExpand = () => { setExpanded(true); if (!initialized) setInitialized(true); };
  const handleCollapse = (e) => { e.stopPropagation(); setExpanded(false); };
  const shift = hover && !RM_MIE && !expanded;

  return (
    <div
      className={`map-container${expanded ? " map-expanded" : ""}`}
      onClick={!expanded ? handleExpand : undefined}
      onMouseEnter={() => !expanded && setHover(true)}
      onMouseLeave={() => setHover(false)}
      role={!expanded ? "button" : undefined}
      tabIndex={!expanded ? 0 : undefined}
      onKeyDown={!expanded ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleExpand(); } } : undefined}
      aria-expanded={expanded}
    >
      <div className="map-static">
        <svg style={miejscaStyles.mapSvg} viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <radialGradient id="popVignette" cx="50%" cy="42%" r="70%">
              <stop offset="55%" stopColor="#000" stopOpacity="0"/>
              <stop offset="100%" stopColor="#5a4a2e" stopOpacity="0.16"/>
            </radialGradient>
            <filter id="popGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <text x={CX} y="330" textAnchor="middle"
            fontFamily="var(--font-display)" fontSize="58" fill="#A07A34" opacity="0.06"
            style={{ letterSpacing: "0.12em" }}>{String(t("mj.chips")[0]).toUpperCase()}</text>
          <g stroke="#A07A34" strokeWidth="1" opacity="0.10">
            {[100, 200, 300, 400, 500, 600, 700].map((x) => <line key={"v"+x} x1={x} y1="0" x2={x} y2="360"/>)}
            {[60, 120, 180, 240, 300].map((y) => <line key={"h"+y} x1="0" y1={y} x2="800" y2={y}/>)}
          </g>
          <g fill="none" stroke="#9C7836"
            style={{ transform: shift ? "translate(-7px,-5px)" : "translate(0,0)", transition: RM_MIE ? "none" : "transform 900ms cubic-bezier(0.22,0.61,0.36,1)" }}>
            {CONTOURS.map((d, i) => <path key={i} d={d} strokeWidth={i === 0 ? 1.4 : 1} opacity={0.42 - i * 0.055}/>)}
          </g>
          <path d="M 60 250 C 220 210, 300 250, 400 180 S 600 120, 745 150" fill="none"
            stroke="#B8893A" strokeWidth="1.4" opacity="0.30" strokeDasharray="2 7" strokeLinecap="round"
            style={{ transform: shift ? "translate(5px,3px)" : "translate(0,0)", transition: RM_MIE ? "none" : "transform 900ms cubic-bezier(0.22,0.61,0.36,1)" }}/>
          <g stroke="#B8893A" opacity="0.45" strokeDasharray="3 6">
            <line x1="0" y1={CY} x2={CX - 26} y2={CY}/>
            <line x1={CX + 26} y1={CY} x2="800" y2={CY}/>
            <line x1={CX} y1="0" x2={CX} y2={CY - 26}/>
            <line x1={CX} y1={CY + 26} x2={CX} y2="360"/>
          </g>
          {!RM_MIE && (
            <g>
              <circle className="popPulse" cx={CX} cy={CY} r="14" fill="none" stroke="#B8893A" strokeWidth="1.5"/>
              <circle className="popPulse popPulse2" cx={CX} cy={CY} r="14" fill="none" stroke="#B8893A" strokeWidth="1.5"/>
            </g>
          )}
          <circle cx={CX} cy={CY} r="13" fill="none" stroke="#B8893A" strokeWidth="1.5" opacity="0.55"/>
          <circle cx={CX} cy={CY} r="6" fill="#9C6F22" filter="url(#popGlow)"/>
          <circle cx={CX} cy={CY} r="2" fill="#F2EBDC"/>
          <rect x="0" y="0" width="800" height="360" fill="url(#popVignette)"/>
        </svg>
        <div style={miejscaStyles.mapBadge}><Icon name="map-pin" size={13} stroke={1.6}/> {t("mj.mapLabel")}</div>
        <div style={miejscaStyles.mapCoord}>50.9883° N · 15.5306° E</div>
        <div style={miejscaStyles.mapPinLabel}>
          <div style={miejscaStyles.mapPinName}>Popielówek</div>
          <div style={miejscaStyles.mapPinSub}>{t("mj.chips")[4]}</div>
        </div>
        <div style={miejscaStyles.mapContext}>gm. Lubomierz · pow. lwówecki · 59-623</div>
        <div className="map-hover-hint">{t("mj.mapClickHint")}</div>
      </div>
      {initialized && <div className="map-leaflet" ref={leafletCallbackRef}></div>}
      <button className="map-collapse-btn btn-archival btn-archival--dark" onClick={handleCollapse} aria-label={t("mj.mapCollapse")}>
        {t("mj.mapCollapse")}
      </button>
    </div>
  );
};

const MapAction = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="btn-archival btn-archival--arrow"
  >{children}</a>
);

const LayerCard = ({ layer, gridRow, gridColumn }) => (
  <div className="bento-card mj-layer-card" style={{ ...miejscaStyles.layerCard, gridRow, gridColumn }}>
    <span className="tc-tl"></span><span className="tc-tr"></span>
    <span className="tc-bl"></span><span className="tc-br"></span>
    <span className="tc-line"></span>
    <span className="bento-icon"><Icon name={layer.icon} size={26} stroke={1.2} /></span>
    <span style={miejscaStyles.layerNum}>{layer.num}</span>
    <span style={miejscaStyles.layerTitle}>{layer.title}</span>
    <span style={miejscaStyles.layerDesc}>{layer.desc}</span>
    <span style={miejscaStyles.layerTag}>{layer.tag}</span>
  </div>
);

const Miejsca = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  const [imgHover, setImgHover] = React.useState(false);
  const chips = t("mj.chips");
  const layerText = t("mj.layers");
  const layers = LAYER_META.map((m, i) => ({ ...m, ...(layerText[i] || {}) }));
  const layerSpans = [
    { gridRow: "span 2" },
    {}, {}, {},
    { gridColumn: "span 2" },
  ];
  return (
    <section id="miejsca" style={miejscaStyles.section}>
      <div style={miejscaStyles.inner}>
        <div style={miejscaStyles.header}>
          <div style={miejscaStyles.headerInner}>
            <div style={miejscaStyles.eyebrow}><span style={miejscaStyles.rule}></span>{t("mj.eyebrow")}</div>
            <h2 style={miejscaStyles.h2}>{t("mj.h2a")} <span style={miejscaStyles.h2i}>{t("mj.h2b")}</span>.</h2>
          </div>
        </div>

        <div className="mj-top-grid" style={miejscaStyles.topGrid}>
          <div
            className="mj-image-col"
            style={miejscaStyles.imageCol}
            onMouseEnter={() => setImgHover(true)} onMouseLeave={() => setImgHover(false)}
          >
            <div style={{ ...miejscaStyles.imageFrame, transform: imgHover && !RM_MIE ? "scale(1.04)" : "scale(1)" }}></div>
            <div style={miejscaStyles.imageOverlay}></div>
            <div style={miejscaStyles.imageCaption}>
              <span style={miejscaStyles.imageRule}></span>
              {t("mj.imgCaption")}
            </div>
          </div>

          <div style={miejscaStyles.locCard}>
            <div style={miejscaStyles.locLabel}><span style={miejscaStyles.locDot}></span>{t("mj.locLabel")}</div>
            <p style={miejscaStyles.locSentence}>
              {t("mj.locA")} <span style={miejscaStyles.locStrong}>{t("mj.locStrong1")}</span>{t("mj.locB")} <span style={miejscaStyles.locStrong}>{t("mj.locStrong2")}</span>{t("mj.locC")}
            </p>
            <div style={miejscaStyles.chips}>
              {chips.map((c) => <span key={c} style={miejscaStyles.chip}>{c}</span>)}
            </div>
          </div>
        </div>

        <div style={miejscaStyles.mapPanel}>
          <style>{`
            @keyframes popPulse { 0%{ transform:scale(0.5); opacity:0.55 } 70%{ opacity:0 } 100%{ transform:scale(2.6); opacity:0 } }
            .popPulse { transform-box: fill-box; transform-origin: center; animation: popPulse 3.4s cubic-bezier(0.22,0.61,0.36,1) infinite; }
            .popPulse2 { animation-delay: 1.7s; }
            @media (prefers-reduced-motion: reduce) { .popPulse { animation: none; opacity: 0; } }
            .map-container {
              position: relative; border-radius: 9px; overflow: hidden;
              border: 1px solid var(--hairline-gold);
              background: radial-gradient(120% 120% at 50% 35%, #EDE4D2 0%, #E3DACB 55%, #D8CDB8 100%);
              max-height: 400px;
              transition: max-height 350ms ease-out, transform 300ms ease-out, box-shadow 300ms ease-out;
            }
            .map-container:not(.map-expanded) { cursor: pointer; }
            .map-container:not(.map-expanded):hover { transform: scale(1.01); box-shadow: 0 0 0 2px rgba(138,92,32,.25); }
            .map-container.map-expanded { max-height: 600px; cursor: default; }
            .map-static { position: relative; height: 380px; transition: opacity 180ms ease-out; }
            .map-leaflet { opacity: 0; height: 500px; transition: opacity 200ms ease-out 100ms; }
            .map-expanded .map-static { opacity: 0; pointer-events: none; position: absolute; top: 0; left: 0; right: 0; }
            .map-expanded .map-leaflet { opacity: 1; }
            .map-hover-hint {
              position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); opacity: 0;
              transition: opacity 200ms ease-out;
              font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase;
              color: rgba(255,255,255,0.88); background: rgba(42,37,29,.58);
              backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
              border: .5px solid rgba(180,155,100,.28); border-radius: 999px;
              padding: 6px 16px; white-space: nowrap; pointer-events: none; z-index: 10;
            }
            .map-container:not(.map-expanded):hover .map-hover-hint { opacity: 1; }
            .map-collapse-btn {
              position: absolute; top: 12px; right: 12px; z-index: 20;
              background: rgba(22,18,12,.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
              border: .5px solid rgba(200,160,90,.22); border-radius: 2px;
              color: rgba(227,218,203,0.80); font-family: var(--font-mono); font-size: 10px;
              letter-spacing: 0.16em; text-transform: uppercase; padding: 7px 12px; cursor: pointer;
              opacity: 0; pointer-events: none;
              transition: opacity 200ms ease-out 150ms, color 200ms, background 200ms;
            }
            .map-expanded .map-collapse-btn { opacity: 1; pointer-events: auto; }
            .map-collapse-btn:hover { color: #e0d8c8; background: rgba(22,18,12,.90); }
            .map-collapse-btn:focus-visible { outline: 2px solid rgba(138,92,32,.60); outline-offset: 2px; }
          `}</style>
          <InteractiveMapCard t={t} />
          <div style={miejscaStyles.mapFooter}>
            <p style={miejscaStyles.mapNote}>
              {t("mj.mapNote")}
            </p>
            <div style={{ ...miejscaStyles.mapActions, justifyContent: "center" }}>
              <MapAction href={GMAPS_URL}>Google Maps</MapAction>
            </div>
          </div>
        </div>

        <div style={miejscaStyles.layersHead}>
          <h3 style={miejscaStyles.layersTitle}>{t("mj.layersTa")} <span style={miejscaStyles.layersTitleI}>{t("mj.layersTb")}</span></h3>
        </div>
        <div className="mj-layers-grid" style={miejscaStyles.layersGrid}>
          {layers.map((l, i) => (
            <LayerCard key={l.num} layer={l} gridRow={layerSpans[i]?.gridRow} gridColumn={layerSpans[i]?.gridColumn} />
          ))}
        </div>
      </div>
    </section>
  );
};

window.Miejsca = Miejsca;
