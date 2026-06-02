/* Oś czasu — horizontal scroll timeline with active card. */

const RM_TL2 = typeof window !== "undefined" && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── styles ──────────────────────────────────────────────────── */
const tlStyles = {
  section: { background: "var(--parchment-200)", padding: "96px 0 88px" },
  inner: { maxWidth: 1280, margin: "0 auto" },

  /* header */
  header: { display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginBottom: 48, padding: "0 64px" },
  headerInner: { gridColumn: "2 / span 5" },
  eyebrow: { fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold-500)", fontWeight: 500, marginBottom: 14, display: "flex", alignItems: "center", gap: 14 },
  rule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-400)" },
  h2: { fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(2.25rem, 4vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.018em", color: "var(--ink-900)", margin: 0 },
  h2i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },

  /* ZONE 1: dot axis scroll container */
  scrollWrap: {
    overflowX: "auto", cursor: "grab",
    padding: "1.5rem 2.5rem 1rem",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(160,120,64,.3) transparent",
    position: "relative",
  },
  scrollRow: {
    display: "flex", alignItems: "flex-start", gap: 0,
    position: "relative",
    minWidth: "max-content",
  },
  item: {
    display: "flex", flexDirection: "column", alignItems: "center",
    position: "relative", cursor: "pointer",
    minWidth: 160, padding: "0 0 8px",
    userSelect: "none",
  },
  /* connecting line via CSS — rendered in the component */
  dot: {
    width: 10, height: 10, borderRadius: "50%",
    border: "1.5px solid rgba(160,120,64,.5)",
    background: "var(--parchment-200)",
    zIndex: 1, marginBottom: 14, flexShrink: 0,
    transition: RM_TL2 ? "none" : "background 250ms ease, border-color 250ms ease, box-shadow 250ms ease",
  },
  dotActive: {
    background: "#c8a060", borderColor: "#c8a060",
    boxShadow: "0 0 0 5px rgba(200,160,96,.15)",
  },
  year: {
    fontFamily: "'Cormorant Garamond', var(--font-display), serif",
    fontSize: 18, fontWeight: 500, color: "#8a5c20",
    marginBottom: 4,
    transition: RM_TL2 ? "none" : "color 220ms ease",
    textAlign: "center",
  },
  yearActive: { color: "#3a2010" },
  label: {
    fontSize: 10, letterSpacing: "0.06em", color: "#9a8a70",
    textAlign: "center", padding: "0 8px", lineHeight: 1.4,
  },

  /* ZONE 2: active card */
  card: {
    background: "rgba(248,243,232,.85)",
    border: ".5px solid rgba(160,120,64,.2)",
    borderTop: "1.5px solid rgba(160,120,64,.25)",
    borderRadius: 12,
    padding: "1.1rem 1.75rem",
    margin: "1.5rem 2.5rem 2rem",
    minHeight: 0,
    transition: RM_TL2 ? "none" : "opacity 180ms ease",
  },
  cardYear: {
    fontFamily: "'Cormorant Garamond', var(--font-display), serif",
    fontSize: 28, color: "#8a5c20", marginBottom: 6, margin: 0,
  },
  cardTitle: {
    fontSize: 15, fontWeight: 500, color: "#2c2010",
    marginBottom: 10, margin: 0, marginTop: 6,
  },
  cardBody: {
    fontSize: 13, fontWeight: 300, color: "#705840",
    lineHeight: 1.7, margin: 0, maxWidth: "64ch",
  },
};

/* ── connecting line pseudo-element (injected as a real div) ── */
const ConnLine = ({ isFirst, isLast }) => (
  <div style={{
    position: "absolute",
    top: 16, /* dot center */
    left: isFirst ? "50%" : 0,
    right: isLast ? "50%" : 0,
    height: 0.5,
    background: "rgba(160,120,64,.25)",
    pointerEvents: "none",
  }}></div>
);

/* ── single dot item ─────────────────────────────────────────── */
const DotItem = ({ year, shortLabel, isActive, isHover, isFirst, isLast, onClick, onHover, onBlur, onKeyDown, idx }) => {
  const lit = isActive || isHover;
  return (
    <div
      style={tlStyles.item}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-label={year + " — " + shortLabel}
      aria-pressed={isActive}
      data-tl-dot={idx}
    >
      <ConnLine isFirst={isFirst} isLast={isLast} />
      <div style={{
        ...tlStyles.dot,
        ...(lit ? tlStyles.dotActive : {}),
      }}></div>
      <div style={{
        ...tlStyles.year,
        ...(lit ? tlStyles.yearActive : {}),
      }}>{year}</div>
      <div style={tlStyles.label}>{shortLabel}</div>
    </div>
  );
};

/* ── main component ──────────────────────────────────────────── */
const OsCzasu = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  const [active, setActive] = React.useState(0);
  const [hoverIdx, setHoverIdx] = React.useState(-1);
  const [cardOpacity, setCardOpacity] = React.useState(1);
  const [displayIdx, setDisplayIdx] = React.useState(0);
  const scrollRef = React.useRef(null);

  /* drag-to-scroll */
  const dragState = React.useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    dragState.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    dragState.current.isDown = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e) => {
    if (!dragState.current.isDown) return;
    e.preventDefault();
    const el = scrollRef.current;
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX) * 1.2;
  };

  /* select a dot — fade card, swap, fade back */
  const selectDot = React.useCallback((idx) => {
    if (idx === active) return;
    if (RM_TL2) {
      setActive(idx);
      setDisplayIdx(idx);
      return;
    }
    setCardOpacity(0);
    setTimeout(() => {
      setActive(idx);
      setDisplayIdx(idx);
      setTimeout(() => setCardOpacity(1), 30);
    }, 180);

    /* scroll dot into center */
    const el = scrollRef.current;
    if (!el) return;
    const dot = el.querySelector(`[data-tl-dot="${idx}"]`);
    if (dot) {
      el.scrollTo({
        left: dot.offsetLeft - el.offsetWidth / 2 + dot.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  /* keyboard nav */
  const onKeyDown = React.useCallback((e, idx) => {
    if (e.key === "ArrowRight" && idx < 8) { e.preventDefault(); selectDot(idx + 1); }
    if (e.key === "ArrowLeft" && idx > 0) { e.preventDefault(); selectDot(idx - 1); }
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectDot(idx); }
  }, [selectDot]);

  const events = t("tl.e");
  const years = t("tl.years");
  const shortLabels = t("tl.shortLabels");
  const ev = events[displayIdx] || { title: "", desc: "" };

  return (
    <section id="os-czasu" style={tlStyles.section}>
      <style>{`
        .tl-scroll::-webkit-scrollbar { height: 6px; }
        .tl-scroll::-webkit-scrollbar-track { background: transparent; }
        .tl-scroll::-webkit-scrollbar-thumb { background: rgba(160,120,64,.3); border-radius: 3px; }
        .tl-scroll::-webkit-scrollbar-thumb:hover { background: rgba(160,120,64,.5); }
        @media (max-width: 768px) {
          .tl-header-grid { grid-template-columns: 1fr !important; padding: 0 1.5rem !important; }
          .tl-header-inner { grid-column: 1 !important; }
          .tl-scroll { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .tl-card { margin-left: 1rem !important; margin-right: 1rem !important; padding: 1.25rem 1.5rem !important; }
          .tl-scroll [data-tl-dot] { min-width: 130px !important; }
        }
        @media (max-width: 480px) {
          .tl-scroll [data-tl-dot] { min-width: 110px !important; }
          .tl-card { margin-left: .75rem !important; margin-right: .75rem !important; }
        }
      `}</style>
      <div style={tlStyles.inner}>
        {/* Header */}
        <div className="tl-header-grid" style={tlStyles.header}>
          <div className="tl-header-inner" style={tlStyles.headerInner}>
            <div style={tlStyles.eyebrow}><span style={tlStyles.rule}></span>{t("tl.eyebrow")}</div>
            <h2 style={tlStyles.h2}>{t("tl.h2a")} <span style={tlStyles.h2i}>{t("tl.h2b")}</span>.</h2>
          </div>
        </div>

        {/* ZONE 1: horizontal dot axis */}
        <div
          className="tl-scroll"
          ref={scrollRef}
          style={tlStyles.scrollWrap}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <div style={tlStyles.scrollRow}>
            {years.map((year, i) => (
              <DotItem
                key={i}
                idx={i}
                year={year}
                shortLabel={shortLabels[i] || ""}
                isActive={active === i}
                isHover={hoverIdx === i}
                isFirst={i === 0}
                isLast={i === years.length - 1}
                onClick={() => selectDot(i)}
                onHover={() => setHoverIdx(i)}
                onBlur={() => setHoverIdx(-1)}
                onKeyDown={(e) => onKeyDown(e, i)}
              />
            ))}
          </div>
        </div>

        {/* ZONE 2: active card */}
        <div className="tl-card" style={{ ...tlStyles.card, opacity: cardOpacity }}>
          <p style={tlStyles.cardYear}>{years[displayIdx]}</p>
          <p style={tlStyles.cardTitle}>{ev.title}</p>
          <p style={tlStyles.cardBody}>{ev.desc}</p>
        </div>
      </div>
    </section>
  );
};

window.OsCzasu = OsCzasu;
