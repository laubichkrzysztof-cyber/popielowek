/* Historia — six-chapter documentary archive.
   Phase 4 i18n: collapsed visible layer (eyebrow, h2, chapter num/label/title,
   intro paragraph, placeholder caption, expand/collapse button) translates via t().
   The long expanded chapter bodies remain in Polish for now; in DE/EN they appear
   below a "translation in preparation" notice (t("h.pending")), so the source text
   is preserved as honest documentary fallback until Phase 5 review. */

const hStyles = {
  section: { padding: "96px 64px 96px", background: "var(--parchment-100)" },
  inner: { maxWidth: 1280, margin: "0 auto" },
  sectionHead: { display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginBottom: 56 },
  sectionHeadInner: { gridColumn: "2 / span 7" },
  eyebrow: { fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold-500)", fontWeight: 500, marginBottom: 18, display: "flex", alignItems: "center", gap: 14 },
  rule: { display: "inline-block", width: 36, height: 1, background: "var(--gold-400)" },
  h2: { fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(2.25rem, 4vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.018em", color: "var(--ink-900)", margin: 0 },
  h2i: { fontFamily: "var(--font-italic)", fontStyle: "italic", color: "var(--gold-500)" },
  chapters: { display: "flex", flexDirection: "column", gap: 12 },
  chapter: {
    display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24,
    paddingTop: 56, paddingBottom: 56,
    background: "rgba(248,243,232,.5)",
    border: "1px solid rgba(160,120,64,.2)",
    borderRadius: 12,
    alignItems: "start",
  },
  chapterLeft: { gridColumn: "2 / span 2" },
  chapterNum: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 42, lineHeight: 1, letterSpacing: "-0.01em", color: "var(--gold-300)", display: "block", marginBottom: 10 },
  chapterLabel: { fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--stone-400)", fontWeight: 500 },
  chapterBody: { gridColumn: "4 / span 5" },
  chapterTitle: { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: 1.2, letterSpacing: "-0.012em", color: "var(--ink-900)", margin: "0 0 22px" },
  chapterPara: { fontSize: 16, lineHeight: 1.70, color: "var(--stone-600)", margin: 0, maxWidth: "44ch" },
  expandedOuter: { display: "grid", transition: "grid-template-rows 820ms cubic-bezier(0.65, 0, 0.35, 1), opacity 680ms ease-in-out", overflow: "hidden" },
  expandedInner: { overflow: "hidden", minHeight: 0 },
  expandedBlock: { paddingTop: 28, marginTop: 28, borderTop: "1px solid var(--hairline)" },
  pendingNotice: {
    fontFamily: "var(--font-italic)", fontStyle: "italic",
    fontSize: 13.5, lineHeight: 1.6, color: "var(--stone-500)",
    marginBottom: 22, paddingBottom: 18,
    borderBottom: "1px dashed var(--hairline-gold)",
    maxWidth: "48ch",
  },
  expandedPara: { fontSize: 15.5, lineHeight: 1.72, color: "var(--stone-600)", margin: "0 0 20px", maxWidth: "48ch" },
  expandedParaLast: { fontSize: 15.5, lineHeight: 1.72, color: "var(--stone-600)", margin: 0, maxWidth: "48ch" },
  chapterCta: { display: "inline-flex", alignItems: "center", gap: 12, marginTop: 24, background: "transparent", border: 0, fontSize: 10.5, letterSpacing: "0.20em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", padding: 0 },
  ctaRule: { display: "inline-block", height: 1, background: "var(--gold-400)" },
  chapterMedia: { gridColumn: "9 / span 3" },
  placeholder: { aspectRatio: "4 / 3", border: "1px solid rgba(160,120,64,.2)", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--parchment-200)", transition: "border-color 280ms ease" },
  placeholderIcon: { width: 28, height: 28, opacity: 0.35, stroke: "var(--stone-500)", fill: "none", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" },
  placeholderLabel: { fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-400)", fontWeight: 500, textAlign: "center", maxWidth: "16ch", lineHeight: 1.5 },
};

/* Chapter layout/metadata + Polish source for the long expanded bodies (Phase 5).
   Numerals and placeholder types are constants; visible text (label/title/para)
   resolves from i18n at render time. */
const CHAPTERS = [
  {
    num: "I", placeholderType: "document",
    expandedText: [
      "Wieś istniała zapewne już przed 1307 rokiem. Jej korzenie sięgają prawdopodobnie okresu średniowiecznej kolonizacji na prawie niemieckim — fali osadnictwa, która w XIII i XIV wieku ukształtowała wiele wsi w tej części Śląska. Henner — imię, które dało nazwę osadzie — był zapewne pierwszym właścicielem lub założycielem. Pozostawił po sobie tylko tę jedną sylabę.",
      "Na mocy darowizny z 1307 roku klasztor Benedyktynek w Lubomierzu — miasto nosiło wtedy nazwę Liebenthal — otrzymał nie tylko ziemię, lecz także prawa do dochodów i zwierzchność nad mieszkańcami. Przez ponad pięćset lat był rzeczywistym gospodarzem Hennersdorfu, wpisując wieś w rytm klasztornego roku: powinności, czynsze, sądownictwo.",
      "Sołtys wsi — Schulze — miał dawny obowiązek feudalny: na każde wezwanie musiał stawić się z osiodłanym koniem. To powinność osobista, zakorzeniona w porządku, gdzie zależność wyrażała się ciałem i obecnością. W 1350 roku ten obowiązek został zamieniony w coroczny czynsz w wysokości pół marki. Zmiana drobna, lecz znacząca — świadczy o stopniowym przejściu od osobistej posługi do świadczenia pieniężnego.",
      "W 1568 roku Gerichtsbuch z Kamienicy — księga sądowa prowadzona dla okolicznych wsi — utrwala imię jednego z pierwszych znanych z imienia mieszkańców Hennersdorfu: Michel Friderich. Jedna osoba, jedno imię, jeden ślad w aktach. Ale właśnie z takich fragmentów składa się archiwum wsi. Klasztorna zależność trwała aż do sekularyzacji w 1810 roku — i to ona przez ponad pięć stuleci kształtowała strukturę własności, obyczaje i więź tej wsi z Lubomierzem.",
    ],
  },
  {
    num: "II", placeholderType: "photo",
    expandedText: [
      "Kościół w Hennersdorfie był od początku związany z klasztorem Benedyktynek w Lubomierzu — tak jak sama wieś, której historia przez ponad pięćset lat splatała się z klasztornym porządkiem. Najstarsza wzmianka o miejscowej świątyni wiązana jest z XVI wiekiem; źródła wskazują na datę około 1559 roku, choć należy traktować ją z ostrożnością. Nie jest pewne, czy była to budowla drewniana, czy murowana — zapis pozostaje niejednoznaczny. Wiadomo jednak, że istniejący kościół zachowuje elementy starszej struktury, które przetrwały późniejsze przebudowy.",
      "W latach 1766–1767 świątynia otrzymała barokowy kształt, który przetrwał do dziś. Wieża, nawa i wyposażenie z tego okresu tworzą wnętrze będące świadkiem wszystkich ważnych momentów w historii wsi: chrztów, ślubów, pogrzebów, modlitwy w czasie wojen. Kościół był ważnym miejscem życia religijnego, związanym ze strukturą parafialną Wojciechów–Lubomierz, dawniej Ullersdorf–Liebenthal. Najstarsze zachowane metryki — księgi parafialne dokumentowane od 1666 roku — pochodzą właśnie z tej parafii.",
      "Wokół kościoła rozciąga się cmentarz, który przechowuje własną warstwę pamięci. Nagrobki dawnych mieszkańców — te, które przetrwały — są cichymi świadkami ciągłości i zerwania. Po 1945 roku, gdy wieś zmieniła język i mieszkańców, cmentarz stał się miejscem, gdzie dwie pamięci współistnieją bez słów.",
      "Na strychu kościoła św. Katarzyny w 2018 roku odnaleziono sztandar Armii Krajowej oraz pamiątkową tablicę, ukryte tam przez dziesięciolecia po wojnie. Pełna historia tego odkrycia należy do Rozdziału VI, ale już tutaj kościół pojawia się nie tylko jako miejsce modlitwy, lecz także jako przestrzeń przechowanej pamięci.",
    ],
  },
  {
    num: "III", placeholderType: "document",
    expandedText: [
      "W lutym 1945 roku front wschodni zatrzymał się kilka kilometrów od wsi. Hennersdorf ocalał — kościół, cmentarz, drogi, zabudowania i krajobraz pozostały niemal nienaruszone. To fizyczne ocalenie sprawiło, że pęknięcie, które nastąpiło kilka miesięcy później, było tym bardziej uderzające: wieś przetrwała, ale wspólnota, która ją zamieszkiwała przez stulecia, przestała istnieć.",
      "Według dostępnych materiałów w lipcu 1945 roku — prawdopodobnie w okolicach 12 lipca — niemieccy mieszkańcy zostali wysiedleni ze swoich domów. Przed wojną wieś liczyła około 286 mieszkańców. W ciągu kilku tygodni opustoszała. Zabrali ze sobą tylko to, co mogli udźwignąć. Domy, pola, sprzęty, cmentarz — zostały.",
      "W kolejnych miesiącach, zwłaszcza w latach 1945–1946, zaczęli przybywać polscy osadnicy. Część pochodziła z centralnej Polski, część z dawnych Kresów Wschodnich — z terenów, które po wojnie znalazły się poza granicami nowego państwa. Niektórzy przybyli z doświadczeniem wojennym, z przeszłością w konspiracji, z poczuciem utraty, które nie różniło się tak bardzo od tego, które nosili w sobie wysiedleni Niemcy. Każda rodzina przynosiła własną pamięć do domów cudzej pamięci.",
      "Zmiana, która zaszła w 1945 roku, nie była tylko administracyjna. Zmieniły się język, imiona, obyczaje i poczucie zakorzenienia. A jednak coś zostało: kościół, cmentarz, układ pól, drogi, kształt wsi. Popielówek jest innym miejscem niż Hennersdorf — i tym samym miejscem. To archiwum stara się pomieścić obie te prawdy.",
    ],
  },
  {
    num: "IV", placeholderType: "document",
    expandedText: [
      "Wśród osadników, którzy po 1945 roku przybyli do Popielówka, byli dawni żołnierze Armii Krajowej, Narodowych Sił Zbrojnych i Batalionów Chłopskich. Przynosili ze sobą nie tylko swój dobytek, lecz także wojenne doświadczenie, nieufność wobec nowej władzy i — niekiedy — gotowość do dalszego oporu. Powojenny krajobraz rozrzuconych zabudowań i nowych, jeszcze niezakorzenionych społeczności sprzyjał trwaniu siatek konspiracyjnych, które gdzie indziej już się rozpadły.",
      "W maju 1947 roku w Popielówku udokumentowano działalność Żandarmerii Sił Podziemnych — struktury związanej z ruchem oporu, który kontynuował działalność po formalnym rozwiązaniu AK. Organizacja ta powiązana była ze środowiskiem żołnierzy skupionych wokół majora Henryka Flame'a „Bartka”, jednej z ostatnich postaci zbrojnego podziemia na Dolnym Śląsku. Skala lokalnej działalności nie jest w pełni udokumentowana — zachowane ślady są fragmentaryczne.",
      "Jedną z konkretnych postaci, której losy wiążą się z tym środowiskiem, był Tadeusz Pietryka „Sokół”. Aresztowany przez aparat bezpieczeństwa, skazany na 15 lat więzienia, odsiedział ponad pięć lat. Jego historia jest przykładem represji, które dotknęły wielu uczestników powojennego podziemia — nieznanych szerszej pamięci, odnotowanych jedynie w aktach sądowych i rodzinnych relacjach.",
      "Określenie „Wioska Żołnierzy Niezłomnych” pojawia się w późniejszym dyskursie pamięci jako etykieta opisująca tę część historii Popielówka. Warto traktować je z ostrożnością: jest to kategoria pamięciowa, a nie neutralny opis historyczny. Późniejszym, materialnym śladem tej powojennej warstwy pamięci stał się sztandar Armii Krajowej odnaleziony w 2018 roku na strychu kościoła św. Katarzyny.",
    ],
  },
  {
    num: "V", placeholderType: "map",
    expandedText: [
      "Budowa obiektu ruszyła w 1979 roku i trwała do około 1981 roku. W dokumentach wojskowych inwestycja funkcjonowała pod kryptonimem „Zadanie 85290\u201d. Stacja wchodziła w skład Przeciwlotniczego Systemu Dowodzenia — PŁSD — sieci obiektów radiolokacyjnych i dowódczych, które w ramach Układu Warszawskiego tworzyły zintegrowaną obronę powietrzną bloku wschodniego. Popielówek, spokojna wieś w Sudetach Zachodnich, stał się jednym z węzłów tej niewidocznej infrastruktury.",
      "Budowa odcisnęła ślad na lokalnym krajobrazie: zmodernizowano drogi dojazdowe, wytyczono strefy ograniczonego dostępu, wzniesiono ogrodzenia i zabudowania techniczne. Wojskowa obecność oznaczała nowych sąsiadów — żołnierzy i pracowników cywilnych — których codzienność przenikała się z życiem wsi, choć rzadko się z nim mieszała.",
      "Stacja funkcjonowała przez kilkanaście lat. Obiekt prawdopodobnie wyszedł z użytku około 2000 roku, choć dokładna data jest niepewna — część źródeł wskazuje na rok 2002. Po zakończeniu działalności zabudowania zaczęły popadać w ruinę. Fundamenty, fragmenty ogrodzeń, wartownia i ślady graffiti z przełomu lat 1999–2000 — to, co pozostało — weszły w krajobraz wsi jako kolejna, niechciana warstwa po zimnowojennej infrastrukturze.",
      "Stacja radarowa PŁSD jest fragmentem historii, która rzadko trafia do lokalnych archiwów: wojskowa, utajniona, pozbawiona pomnika. A jednak przez dwie dekady kształtowała codzienność Popielówka — nieoznaczona na mapach, obecna za ogrodzeniem.",
    ],
  },
  {
    num: "VI", placeholderType: "photo",
    expandedText: [
      "We wrześniu 2018 roku, podczas prac remontowych na strychu kościoła pw. św. Katarzyny Aleksandryjskiej w Popielówku, robotnicy natknęli się na zawinięty w płótno sztandar oraz ukrytą obok tablicę pamiątkową. Artefakty leżały nieporuszone przez kilkadziesiąt lat — zapomniane lub celowo schowane poza zasięgiem oficjalnej pamięci.",
      "Sztandar Armii Krajowej ma dwie strony. Na awersie widnieje wizerunek Matki Boskiej Częstochowskiej — ikona głęboko zakorzeniona w tradycji polskiego katolicyzmu i wojennej duchowości. Na rewersie — Orzeł w koronie oraz hasło „Bóg, Honor, Ojczyzna\u201d, od dekad symbol formacji niepodległościowych. To nie był przedmiot przypadkowy: sztandary AK przechowywano z rozmysłem, często z narażeniem życia.",
      "Tablica pamiątkowa ma charakter wyjątkowy. Jest dwustronna — jedna strona nosi inskrypcję w języku niemieckim, upamiętniającą mieszkańców Hennersdorfu poległych w czasie I wojny światowej. Druga strona zawiera polski napis, prawdopodobnie sporządzony przez polskich osadników-partyzantów około 1946 roku. Dwa języki, dwa momenty żałoby, jeden przedmiot — jedna z niewielu w tym regionie materialnych form współistnienia dwóch warstw pamięci.",
      "Sztandar i tablica zostały najprawdopodobniej ukryte w latach 1946–1947, w czasie gdy komunistyczny aparat bezpieczeństwa systematycznie likwidował struktury powojennego podziemia. Obawa przed UB, aresztem i represjami skłaniała do zacierania śladów. Kto dokładnie ukrył te przedmioty — tego źródła jednoznacznie nie potwierdzają. Pewne jest tylko to, że ktoś zdecydował się je zachować.",
      "Odkrycie wpisuje się w szerszy kontekst lokalnej pamięci, którą od lat stara się rekonstruować m.in. Instytut Pamięci Narodowej. Określenie „Wioska Żołnierzy Niezłomnych\u201d, które pojawia się w tym dyskursie w odniesieniu do Popielówka, jest późniejszą kategorią pamięciową — użyteczną, lecz wymagającą ostrożności. Sama historia tych artefaktów jest wystarczająco złożona, by mówić o niej bez uproszczeń.",
    ],
  },
];

const PlaceholderIcon = ({ type }) => {
  if (type === "photo") return (
    <svg style={hStyles.placeholderIcon} viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="1"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M8 5l1.5-2h5L16 5"/>
    </svg>
  );
  if (type === "document") return (
    <svg style={hStyles.placeholderIcon} viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="13" y2="17"/>
    </svg>
  );
  return (
    <svg style={hStyles.placeholderIcon} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
    </svg>
  );
};

const ChapterRow = ({ ch, label, title, para, placeholder, expandLabel, collapseLabel, pendingNotice, showPending, translatedBody }) => {
  const [hover, setHover] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const hasExpanded = ch.expandedText && ch.expandedText.length > 0;
  const paragraphs = translatedBody || ch.expandedText;
  const showFallback = !translatedBody && showPending;

  return (
    <div className="tile-interactive hist-chapter" style={hStyles.chapter}>
      <span className="tc-c tc-tl"></span><span className="tc-c tc-tr"></span>
      <span className="tc-c tc-bl"></span><span className="tc-c tc-br"></span>
      <span className="tc-line"></span>
      <div className="hist-chapter-left" style={hStyles.chapterLeft}>
        <span style={hStyles.chapterNum}>{ch.num}</span>
        <span style={hStyles.chapterLabel}>{label}</span>
      </div>
      <div className="hist-chapter-body" style={hStyles.chapterBody}>
        <h3 style={hStyles.chapterTitle}>{title}</h3>
        <p style={hStyles.chapterPara}>{para}</p>

        {hasExpanded && (
          <div style={{
            ...hStyles.expandedOuter,
            gridTemplateRows: expanded ? "1fr" : "0fr",
            opacity: expanded ? 1 : 0,
          }}>
            <div style={hStyles.expandedInner}>
              <div style={hStyles.expandedBlock}>
                {showFallback && (
                  <p style={hStyles.pendingNotice} lang="en">{pendingNotice}</p>
                )}
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    lang={showFallback ? "pl" : undefined}
                    style={i === paragraphs.length - 1 ? hStyles.expandedParaLast : hStyles.expandedPara}
                  >{p}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {hasExpanded && (
          <button
            className="btn-archival"
            style={{ marginTop: 24 }}
            onClick={() => setExpanded(e => !e)}
            aria-expanded={expanded}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {expanded ? collapseLabel : expandLabel}
          </button>
        )}
      </div>
      <div className="hist-chapter-media" style={hStyles.chapterMedia}>
        <div className="hist-placeholder" style={hStyles.placeholder}>
          <PlaceholderIcon type={ch.placeholderType}/>
          <span style={hStyles.placeholderLabel}>{placeholder}</span>
        </div>
      </div>
    </div>
  );
};

const Historia = () => {
  const { lang, t } = (window.useI18n ? window.useI18n() : { lang: "PL", t: (k) => k });
  const labels = t("h.labels");
  const titles = t("h.titles");
  const paras  = t("h.paras");
  const phs    = t("h.ph");
  const expandLabel   = t("h.expand");
  const collapseLabel = t("h.collapse");
  const pendingNotice = t("h.pending");
  const chapBodies = lang !== "PL" ? t("h.chapBodies") : null;
  const hasTranslations = Array.isArray(chapBodies) && chapBodies.length === 6;
  const showPending = lang !== "PL" && !hasTranslations;
  return (
    <section id="historia" style={hStyles.section}>
      <div style={hStyles.inner}>
        <div className="hist-section-head" style={hStyles.sectionHead}>
          <div className="hist-section-head-inner" style={hStyles.sectionHeadInner}>
            <div style={hStyles.eyebrow}><span style={hStyles.rule}></span>{t("h.eyebrow")}</div>
            <h2 style={hStyles.h2}>
              {t("h.h2a")} <span style={hStyles.h2i}>{t("h.h2b")}</span>.
            </h2>
          </div>
        </div>
        <div style={hStyles.chapters}>
          {CHAPTERS.map((ch, i) => (
            <ChapterRow
              key={i} ch={ch}
              label={labels[i] || ""}
              title={titles[i] || ""}
              para={paras[i] || ""}
              placeholder={phs[i] || ""}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
              pendingNotice={pendingNotice}
              showPending={showPending}
              translatedBody={hasTranslations ? (chapBodies[i] || null) : null}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

window.Historia = Historia;
