/* Galeria & Archiwum — layout/style unchanged. All visible text via i18n. */

const RM_GAL = typeof window !== "undefined" && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Error boundary — keeps page alive if carousel throws ──── */
class CarouselBoundary extends React.Component {
  constructor(props) { super(props); this.state = { err: null }; }
  static getDerivedStateFromError(e) { return { err: e }; }
  render() {
    if (this.state.err) {
      return React.createElement("div", {
        style: { padding: "2rem", color: "#8a5c20", fontFamily: "var(--font-sans)",
          fontSize: 14, opacity: 0.7 }
      }, "Galeria chwilowo niedostępna.");
    }
    return this.props.children;
  }
}

/* ── Circular Carousel ───────────────────────────────────────── */

const CircularCarousel = () => {
  const { t, lang } = window.useI18n ? window.useI18n() : { t: k => k, lang: "PL" };
  const [active, setActive] = React.useState(0);
  const imgRefs  = React.useRef([]);
  const nameRef  = React.useRef(null);
  const desigRef = React.useRef(null);
  const quoteRef = React.useRef(null);
  const textRef  = React.useRef(null);
  const timerRef = React.useRef(null);
  const N   = 6;
  const GAP = 80;

  /* Slides — recomputed when language changes */
  const slides = React.useMemo(() => [
    { src: "", name: t("gl.s1.name"), designation: t("gl.s1.desig"), quote: t("gl.s1.quote") },
    { src: "", name: t("gl.s2.name"), designation: t("gl.s2.desig"), quote: t("gl.s2.quote") },
    { src: "", name: t("gl.s3.name"), designation: t("gl.s3.desig"), quote: t("gl.s3.quote") },
    { src: "", name: t("gl.s4.name"), designation: t("gl.s4.desig"), quote: t("gl.s4.quote") },
    { src: "", name: t("gl.s5.name"), designation: t("gl.s5.desig"), quote: t("gl.s5.quote") },
    { src: "", name: t("gl.s6.name"), designation: t("gl.s6.desig"), quote: t("gl.s6.quote") },
  ], [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const getImgStyle = (i, act) => {
    const isActive = i === act;
    const isLeft   = (act - 1 + N) % N === i;
    const isRight  = (act + 1)     % N === i;
    if (isActive) return { zIndex: "3", opacity: "1", pointerEvents: "auto",
      transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)" };
    if (isLeft)   return { zIndex: "2", opacity: "1", pointerEvents: "auto",
      transform: `translateX(-${GAP}px) translateY(-${GAP * 0.8}px) scale(0.85) rotateY(15deg)` };
    if (isRight)  return { zIndex: "2", opacity: "1", pointerEvents: "auto",
      transform: `translateX(${GAP}px) translateY(-${GAP * 0.8}px) scale(0.85) rotateY(-15deg)` };
    return { zIndex: "1", opacity: "0", pointerEvents: "none", transform: "scale(0.75)" };
  };

  const applyImageStyles = act => {
    imgRefs.current.forEach((el, i) => {
      if (!el) return;
      Object.assign(el.style, getImgStyle(i, act));
    });
  };

  const animateContent = slide => {
    const textEl = textRef.current;
    if (!textEl || !slide) return;
    textEl.style.transition = "none";
    textEl.style.opacity    = "0";
    textEl.style.transform  = "translateY(20px)";
    setTimeout(() => {
      if (nameRef.current)  nameRef.current.textContent  = slide.name;
      if (desigRef.current) desigRef.current.textContent = slide.designation;
      const qEl = quoteRef.current;
      if (qEl) {
        qEl.innerHTML = "";
        slide.quote.split(" ").forEach((word, i) => {
          const span = document.createElement("span");
          span.textContent = word + "\u00a0";
          span.style.cssText =
            "display:inline-block;filter:blur(10px);opacity:0;transform:translateY(5px);" +
            `transition:filter 220ms ease ${i * 25}ms,opacity 220ms ease ${i * 25}ms,transform 220ms ease ${i * 25}ms;`;
          qEl.appendChild(span);
          requestAnimationFrame(() => requestAnimationFrame(() => {
            span.style.filter    = "blur(0)";
            span.style.opacity   = "1";
            span.style.transform = "translateY(0)";
          }));
        });
      }
      textEl.style.transition = "opacity 300ms ease, transform 300ms ease";
      textEl.style.opacity    = "1";
      textEl.style.transform  = "translateY(0)";
    }, 200);
  };

  /* Image positions — before paint to avoid flash */
  React.useLayoutEffect(() => { applyImageStyles(active); }, [active]);

  /* Text — after paint; re-runs on slide change OR language switch */
  React.useEffect(() => { animateContent(slides[active]); }, [active, lang]); // eslint-disable-line

  /* Autoplay */
  React.useEffect(() => {
    timerRef.current = setInterval(() => setActive(a => (a + 1) % N), 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  /* Keyboard */
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "ArrowLeft")  { clearInterval(timerRef.current); setActive(a => (a - 1 + N) % N); }
      if (e.key === "ArrowRight") { clearInterval(timerRef.current); setActive(a => (a + 1)     % N); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <React.Fragment>
      <style>{`
        .ct-wrap  { width:100%; max-width:56rem; margin:32px auto 40px; padding:0 .5rem; }
        .ct-grid  { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
        @media(max-width:768px){ .ct-grid{ grid-template-columns:1fr; gap:2.5rem; } }
        .ct-images { position:relative; width:100%; height:24rem; perspective:1000px; }
        .ct-slide-wrap {
          position:absolute; width:100%; height:100%;
          border-radius:1.5rem; overflow:hidden;
          transition:all 0.8s cubic-bezier(.4,2,.3,1);
          border:.5px solid rgba(160,120,64,.25);
          box-shadow:0 10px 30px rgba(0,0,0,.2);
          opacity:0;
        }
        .ct-slide-ph {
          width:100%; height:100%;
          background:linear-gradient(135deg,rgba(160,120,64,.14) 0%,rgba(220,190,140,.1) 50%,rgba(160,120,64,.07) 100%);
          display:flex; align-items:center; justify-content:center;
          color:rgba(138,92,32,.3);
        }
        .ct-content { display:flex; flex-direction:column; justify-content:center; }
        .ct-name {
          font-family:var(--font-display); font-size:1.5rem; font-weight:500;
          color:#2c2010; margin:0 0 4px; letter-spacing:-.01em;
        }
        .ct-designation { font-size:.925rem; color:#8a5c20; margin:0 0 2rem; letter-spacing:.03em; }
        .ct-quote { font-size:1.1rem; color:#705840; line-height:1.75; font-weight:300; margin:0; }
        .ct-arrows { display:flex; gap:1.5rem; padding-top:3rem; }
        .ct-btn {
          width:2.7rem; height:2.7rem; border-radius:50%;
          background:#1c1814; color:#c8a060; border:none;
          font-size:1.1rem; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:background 280ms ease;
        }
        .ct-btn:hover { background:#8a5c20; }
      `}</style>
      <div className="ct-wrap">
        <div className="ct-grid">
          <div className="ct-images">
            {slides.map((slide, i) => (
              <div key={i} ref={el => { imgRefs.current[i] = el; }} className="ct-slide-wrap">
                <div className="ct-slide-ph">
                  <Icon name="camera" size={24} stroke={1.2} />
                </div>
                {slide.src && (
                  <img src={slide.src} alt={slide.name}
                    style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
                )}
              </div>
            ))}
          </div>
          <div className="ct-content">
            <div ref={textRef} style={{ opacity: 0 }}>
              <h3 className="ct-name" ref={nameRef}></h3>
              <p className="ct-designation" ref={desigRef}></p>
              <p className="ct-quote" ref={quoteRef}></p>
            </div>
            <div className="ct-arrows">
              <button className="ct-btn" aria-label="Poprzednie"
                onClick={() => { clearInterval(timerRef.current); setActive(a => (a - 1 + N) % N); }}>
                ←
              </button>
              <button className="ct-btn" aria-label="Następne"
                onClick={() => { clearInterval(timerRef.current); setActive(a => (a + 1) % N); }}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const galeriaStyles = {
  section: { padding: "88px 64px 80px", background: "var(--parchment-200)" },
  inner: { maxWidth: 1280, margin: "0 auto" },
  header: { paddingBottom: 32, marginBottom: 48, borderBottom: "1px solid var(--hairline)" },
  eyebrow: { fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold-500)", fontWeight: 500, marginBottom: 14, display: "flex", alignItems: "center", gap: 14 },
  rule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-400)" },
  h2: { fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, lineHeight: 1.06, letterSpacing: "-0.018em", color: "var(--ink-900)", margin: 0 },
  h2i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },
  photoWrap: { position: "relative", borderRadius: 12, overflow: "hidden", marginBottom: 20, border: "1px solid rgba(160,120,64,.2)", boxShadow: "var(--shadow-paper)", transition: "border-color 280ms ease" },
  photoFrame: { background: 'url("../../assets/hero-panorama.webp") center 42% / cover', aspectRatio: "21 / 9", transition: "transform 1600ms cubic-bezier(0.22, 0.61, 0.36, 1)" },
  photoOverlay: { position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(42,37,29,0.5) 0%, rgba(42,37,29,0) 50%)" },
  photoCaption: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 28px", display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,220,0.85)" },
  photoCaptionRule: { display: "inline-block", width: 24, height: 1, background: "var(--gold-200)" },
  galleryNote: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 15, lineHeight: 1.65, color: "var(--stone-500)", margin: 0 },
  divider: { margin: "56px 0 40px", height: 1, background: "var(--hairline)" },
  archivePanel: { background: "rgba(242, 235, 220, 0.50)", backdropFilter: "blur(16px) saturate(118%)", WebkitBackdropFilter: "blur(16px) saturate(118%)", border: "1px solid rgba(160,120,64,.2)", borderRadius: 12, padding: "44px 48px 40px", boxShadow: "var(--shadow-paper), inset 0 1px 0 0 rgba(255,255,255,0.30)", transition: "border-color 280ms ease", position: "relative", overflow: "hidden" },
  archiveEyebrow: { fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold-500)", fontWeight: 500, marginBottom: 12, display: "flex", alignItems: "center", gap: 14 },
  archiveH3: { fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 30, lineHeight: 1.12, letterSpacing: "-0.012em", color: "var(--ink-900)", margin: "0 0 28px" },
  archiveH3i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },
  periodList: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 },
  periodCard: {
    background: "rgba(248,243,232,.5)", border: "1px solid rgba(160,120,64,.2)",
    borderRadius: 10, padding: "18px 20px",
    display: "flex", flexDirection: "column", gap: 6,
    transition: "border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease, background 280ms ease",
    position: "relative", overflow: "hidden",
  },
  periodRow: { display: "grid", gridTemplateColumns: "40px 1fr auto", gap: 16, alignItems: "baseline", padding: "18px 14px 18px 8px", borderBottom: "1px solid var(--hairline)", borderRadius: 6, cursor: "default", transition: "background 520ms cubic-bezier(0.22, 0.61, 0.36, 1), padding-left 420ms cubic-bezier(0.22, 0.61, 0.36, 1)" },
  periodNum: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 17, color: "var(--gold-500)", transition: "color 420ms" },
  periodName: { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 19, lineHeight: 1.3, color: "var(--ink-900)", letterSpacing: "-0.008em" },
  periodContext: { fontSize: 13, color: "var(--stone-500)", marginTop: 4, lineHeight: 1.5 },
  periodStatus: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-400)", whiteSpace: "nowrap" },
  growingNote: { marginTop: 32, fontSize: 14.5, lineHeight: 1.7, color: "var(--stone-500)", maxWidth: "62ch", fontFamily: "var(--font-italic)", fontStyle: "italic" },
};

/* Roman numerals stay constant; text comes from t("gl.periods")[i]. */
const PERIOD_NUMS = ["I", "II", "III", "IV", "V", "VI"];

const PERIOD_ICONS = ["book-2", "book", "camera", "archive", "radar", "folder"];

const PeriodRow = ({ num, p, icon }) => (
  <div className="tile tile-interactive" style={galeriaStyles.periodCard}>
    <span className="tc-c tc-tl"></span><span className="tc-c tc-tr"></span>
    <span className="tc-c tc-bl"></span><span className="tc-c tc-br"></span>
    <span className="tc-line"></span>
    <span className="bento-icon" style={{ marginBottom: 8 }}><Icon name={icon} size={22} stroke={1.3} /></span>
    <span style={{ ...galeriaStyles.periodNum, fontSize: 14 }}>{num}.</span>
    <div style={galeriaStyles.periodName}>{p.name}</div>
    <div style={galeriaStyles.periodContext}>{p.context}</div>
    <span style={{ ...galeriaStyles.periodStatus, marginTop: "auto", paddingTop: 10 }}>{p.status}</span>
  </div>
);

const Galeria = () => {
  const { t } = (window.useI18n ? window.useI18n() : { t: (k) => k });
  const [photoHover, setPhotoHover] = React.useState(false);
  const periods = t("gl.periods");
  return (
    <section id="galeria" style={galeriaStyles.section}>
      <div style={galeriaStyles.inner}>
        <div style={galeriaStyles.header}>
          <div style={galeriaStyles.eyebrow}><span style={galeriaStyles.rule}></span>{t("gl.eyebrow")}</div>
          <h2 style={galeriaStyles.h2}>{t("gl.h2a")} <span style={galeriaStyles.h2i}>{t("gl.h2b")}</span></h2>
        </div>

        <CarouselBoundary><CircularCarousel /></CarouselBoundary>

        <div
          style={galeriaStyles.photoWrap}
          onMouseEnter={() => setPhotoHover(true)} onMouseLeave={() => setPhotoHover(false)}
        >
          <div style={{ ...galeriaStyles.photoFrame, transform: photoHover && !RM_GAL ? "scale(1.03)" : "scale(1)" }}></div>
          <div style={galeriaStyles.photoOverlay}></div>
          <div style={galeriaStyles.photoCaption}>
            <span style={galeriaStyles.photoCaptionRule}></span>
            {t("gl.caption")}
          </div>
        </div>
        <p style={galeriaStyles.galleryNote}>{t("gl.note")}</p>

        <div style={galeriaStyles.divider}></div>

        <div className="tile-static" style={galeriaStyles.archivePanel}>
          <span className="tc-c tc-tl"></span><span className="tc-c tc-tr"></span>
          <span className="tc-c tc-bl"></span><span className="tc-c tc-br"></span>
          <span className="tc-line"></span>
          <div style={galeriaStyles.archiveEyebrow}><span style={galeriaStyles.rule}></span>{t("gl.archEyebrow")}</div>
          <h3 style={galeriaStyles.archiveH3}>{t("gl.archH3a")} <span style={galeriaStyles.archiveH3i}>{t("gl.archH3b")}</span></h3>
          <div className="gl-period-list" style={galeriaStyles.periodList}>
            {PERIOD_NUMS.map((num, i) => (
              <PeriodRow key={num} num={num} p={periods[i] || {}} icon={PERIOD_ICONS[i] || "book"} />
            ))}
          </div>
          <p style={galeriaStyles.growingNote}>{t("gl.growing")}</p>
        </div>
      </div>
    </section>
  );
};

window.Galeria = Galeria;
