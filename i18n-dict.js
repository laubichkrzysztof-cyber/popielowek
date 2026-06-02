/* i18n dictionary — Popielówek / Hennersdorf living archive.
   PL is the source. DE/EN translated faithfully, documentary tone, no invented facts.
   Proper names (Popielówek, Hennersdorf, Armia Krajowa, PŁSD, Kościół św. Katarzyny,
   Żandarmeria Sił Podziemnych, Instytut Pamięci Narodowej) are preserved.
   Long Historia chapter bodies (chapters[].body) are stored in PL only and await
   manual review — the UI shows an honest "translation in preparation" notice in DE/EN. */
window.I18N_DICT = {

  /* ─────────────────────────── POLISH (source) ─────────────────────────── */
  PL: {
    nav: { timeline: "Oś czasu", history: "Historia", places: "Miejsca", monuments: "Zabytki", gallery: "Galeria", events: "Wydarzenia", contact: "Kontakt", menu: "Menu", close: "Zamknij" },
    drop: { getThere: "Jak dojechać", see: "Co zobaczyć", church: "Kościół św. Katarzyny", map: "Mapa miejsc" },
    lang: { pl: "polski", de: "niemiecki", en: "angielski", label: "Wybór języka" },

    hero: {
      eyebrow: "Żywe archiwum wsi dolnośląskiej",
      title: "Popielówek pamięta",
      sub1: "Wieś, która utraciła język,",
      sub2: "ale nie zgubiła duszy.",
      scroll: "Przewiń, aby odkryć historię",
      churchTitle: "Kościół pw. św. Katarzyny Aleksandryjskiej",
      churchSub: "Z lat 1766–1767, z elementami z XVI wieku.",
      goryYear: "Sudety Zachodnie",
      gorySub: "Góry Izerskie w Sudetach Zachodnich. Najwyższe wzniesienia przekraczają 500 m n.p.m.",
    },

    intro: {
      e1: "wieś", e2: "Dolny Śląsk", e3: "Polska",
      sub: "Mała wieś w gminie Lubomierz. Siedem wieków historii, jeden biały kościół, wiele zapomnianych nazwisk.",
      p1: "Osada wzmiankowana przed rokiem 1305 w rejestrze dziesięcin biskupstwa wrocławskiego. Przez wieki znana jako Hennersdorf — wieś śląska, pruska, a od 1945 roku polska. Jej dawna nazwa, jej nowi mieszkańcy i jej stare kamienie tworzą razem jedną opowieść.",
      p2: "To żywe archiwum gromadzi to, co pozostało: fotografie, głosy, dokumenty i małe ocalałe rzeczy. Nowe wpisy pojawiają się wraz z porami roku.",
      aEl: "Gmina", aElV: "Lubomierz",
      aCo: "Współrzędne", aCoV: "50.9883°N · 15.5306°E",
      aFi: "Pierwsza wzmianka", aFiV: "1307",
      aNa: "Dawna nazwa", aNaV: "Hennersdorf",
    },

    tl: {
      eyebrow: "Oś czasu", h2a: "Siedem wieków,", h2b: "kilka przełomów",
      e: [
        { title: "Darowizna dla klasztoru Benedyktynek", desc: "Jutta von Liebenthal przekazuje Hennersdorf klasztorowi w Lubomierzu. Wieś na stulecia zostaje związana z klasztornym majątkiem i feudalnym porządkiem Dolnego Śląska." },
        { title: "Kościół św. Katarzyny", desc: "Świątynia zachowuje elementy starszego kościoła z XVI wieku, a w latach 1766–1767 otrzymuje barokowy kształt. To jeden z najważniejszych materialnych śladów dawnego Hennersdorfu." },
        { title: "Śląsk przechodzi pod Prusy", desc: "Po wojnie śląskiej Hennersdorf trafia pod administrację pruską. Język dokumentów się zmienia — dzwony biją o tych samych porach." },
        { title: "Nowa szkoła wiejska", desc: "Budowa nowego budynku szkolnego dla dzieci z Hennersdorf i sąsiednich osad. Pokolenie urodzone po zjednoczeniu Niemiec uczy się tu czytać i liczyć." },
        { title: "Wysiedlenia. Nowi osadnicy.", desc: "Niemieccy mieszkańcy opuszczają wieś w ciągu tygodni. Polscy przesiedleńcy ze Lwowa i Wołynia zajmują puste domy — Hennersdorf staje się Popielówkiem. Dwie pamięci. Jeden krajobraz." },
        { title: "Żandarmeria Sił Podziemnych", desc: "W Popielówku dokumentuje się działalność komórki powojennego podziemia zbrojnego. Jeden z mniej znanych, lecz archiwalnie potwierdzonych śladów oporu w pierwszych latach Polski Ludowej." },
        { title: "Tajna stacja radarowa PŁSD", desc: "W pobliżu wsi uruchomiono obiekt Polskich Linii Służby Dyżurnej — element systemu obrony powietrznej PRL. Przez dekady utajniony, nieoznaczony na mapach." },
        { title: "Odkrycie sztandaru Armii Krajowej", desc: "Na strychu kościoła św. Katarzyny odnaleziony zostaje ukryty sztandar Armii Krajowej i pamiątkowa tablica. Przez ponad siedemdziesiąt lat czekały na właściwy moment." },
        { title: "Żywe archiwum Popielówka", desc: "Historia wsi pozostaje otwarta — uzupełniana przez zdjęcia, dokumenty, wspomnienia i nowe odkrycia mieszkańców." },
      ],
      years: ["1307", "XVI w.", "1742", "1871", "1945", "Maj 1947", "1979", "2018", "Dziś"],
      shortLabels: ["Darowizna klasztorna", "Kościół parafialny", "Śląsk pod Prusami", "Szkoła wiejska", "Wysiedlenia", "Żandarmeria SB", "Stacja PŁSD", "Sztandar AK", "Żywe archiwum"],
    },

    h: {
      eyebrow: "Historia", h2a: "Rozdziały, które złożyły się na", h2b: "tę wieś",
      expand: "Rozwiń rozdział", collapse: "Zwiń rozdział",
      pending: "Pełne tłumaczenie tego rozdziału jest w przygotowaniu. Poniżej zachowano tekst źródłowy w języku polskim.",
      labels: ["Lokacja · Klasztor", "Architektura · Sacrum", "1945 · Przełom", "Konspiracja · Powojnie", "Zimna wojna · Infrastruktura", "Odkrycie · 2018"],
      titles: ["Hennersdorf i klasztor Benedyktynek", "Kościół św. Katarzyny Aleksandryjskiej", "Rok 1945 i przerwana ciągłość", "Powojenne podziemie w Popielówku", "Stacja radarowa PŁSD", "Sztandar Armii Krajowej odnaleziony w 2018 roku"],
      ph: ["dokument · akt darowizny", "fotografia · widok kościoła", "dokument · lista przesiedleńców", "dokument · akta archiwalne", "mapa · lokalizacja obiektu", "fotografia · sztandar AK"],
      paras: [
        "Hennersdorf pojawia się w źródłach pisanych w 1307 roku, gdy Jutta von Liebenthal przekazuje wieś klasztorowi Benedyktynek w Lubomierzu. Przez ponad pięćset lat wieś pozostawała częścią klasztornego majątku — ziemia, obowiązki i rytm roku kościelnego splatały się w jeden feudalny porządek Dolnego Śląska.",
        "Kościół św. Katarzyny Aleksandryjskiej jest najważniejszym materialnym śladem dawnego Hennersdorfu. Świątynia, której początki wiązane są z XVI wiekiem, w latach 1766–1767 otrzymała barokowy kształt. Przez stulecia pozostawała miejscem modlitwy, pamięci i wspólnotowego trwania wsi.",
        "Rok 1945 przyniósł wsi najgłębsze pęknięcie w jej historii. Hennersdorf uniknął większych zniszczeń wojennych, ale utracił dotychczasową wspólnotę, język i ciągłość pokoleń. W opuszczonych domach zaczęli osiedlać się Polacy, a dawna wieś klasztorna otrzymała nowe imię: Popielówek.",
        "Po 1945 roku Popielówek stał się miejscem nowego początku, ale także powojennego napięcia. Wśród osadników byli dawni żołnierze podziemia niepodległościowego, a w 1947 roku we wsi powstała Żandarmeria Sił Podziemnych. Ta historia długo pozostawała ukryta — w rodzinnych wspomnieniach, aktach represji i symbolach przechowanych poza oficjalną pamięcią.",
        "W 1979 roku w krajobraz Popielówka wpisano nową, wojskową warstwę historii. Budowa stacji radarowej systemu PŁSD — Przeciwlotniczego Systemu Dowodzenia — połączyła spokojną wieś z infrastrukturą obrony powietrznej PRL. Przez kolejne dekady beton, ogrodzenia i wojskowa codzienność sąsiadowały tu z polami, domami i rytmem małej dolnośląskiej osady.",
        "We wrześniu 2018 roku na strychu kościoła św. Katarzyny odnaleziono sztandar Armii Krajowej oraz dwustronną tablicę pamiątkową. Ukryte przez dziesięciolecia artefakty stały się materialnym śladem powojennej pamięci Popielówka — pamięci osadników, konspiracji i lęku przed represjami komunistycznego aparatu bezpieczeństwa.",
      ],
    },

    mj: {
      eyebrow: "Miejsca", h2a: "Popielówek na", h2b: "mapie pamięci",
      locLabel: "Gdzie leży Popielówek",
      locA: "Popielówek leży w województwie", locStrong1: "dolnośląskim",
      locB: ", w powiecie lwóweckim, w gminie Lubomierz. Dawniej funkcjonował pod niemiecką nazwą",
      locStrong2: "Hennersdorf", locC: ".",
      chips: ["Dolny Śląsk", "Powiat lwówecki", "Gmina Lubomierz", "59-623", "dawny Hennersdorf"],
      imgCaption: "Popielówek z lotu ptaka — współczesny krajobraz dawnego Hennersdorfu.",
      mapLabel: "Mapa lokalizacji", mapsLink: "Zobacz w Google Maps",
      mapNote: "Interaktywna mapa miejsc pamięci, źródeł i fotografii będzie rozwijana wraz z archiwum.",
      mapClickHint: "Kliknij aby otworzyć mapę", mapCollapse: "Zwiń",
      layersTa: "Mała wieś,", layersTb: "wiele warstw",
      layers: [
        { title: "Kościół św. Katarzyny", desc: "Historyczny punkt odniesienia wsi — najtrwalszy materialny ślad dawnej i obecnej społeczności.", tag: "punkt odniesienia" },
        { title: "Dawny Hennersdorf", desc: "Warstwa najstarszej historii i dawnej niemieckiej nazwy, sięgająca średniowiecznych nadań.", tag: "warstwa pamięci" },
        { title: "Krajobraz Popielówka", desc: "Pola, drogi i panorama jako materialna ciągłość miejsca — to, co przetrwało zmiany granic.", tag: "warstwa pamięci" },
        { title: "Stacja radarowa PŁSD", desc: "Zimnowojenna warstwa historii — ślad utajnionej obecności wojska w okolicy.", tag: "po potwierdzeniu źródeł" },
        { title: "Mapa pamięci", desc: "Interaktywny indeks miejsc, źródeł i fotografii powiązanych z konkretnymi punktami wsi — rozwijany wraz z archiwum.", tag: "w przygotowaniu" },
      ],
    },

    zb: {
      eyebrow: "Zabytki", h2a: "Ślady, które", h2b: "przetrwały",
      sub: "Kościół, cmentarz, krzyże przydrożne i ślady po radiolokacji wojennej — każdy obiekt ma swoją historię i swoje milczenie.",
      cards: [
        { kicker: "SAKRALNY · 1581", title: "Kościół pw. św. Katarzyny", desc: "Murowany kościół parafialny z XVI wieku. Wieża, nawa i barokowy ołtarz. Dzwony ukryte podczas II wojny, zwrócone w 1947.", meta: "ul. Kościelna · otwarty codziennie" },
        { kicker: "SEPULKRALNY", title: "Cmentarz przykościelny", desc: "Nagrobki od XVIII do XXI wieku — nazwiska polskie i niemieckie obok siebie. Krajobraz pamięci podwójny.", meta: "przy kościele" },
        { kicker: "SAKRALNY · DROGI", title: "Krzyże i kapliczki przydrożne", desc: "Kilkanaście krzyży i kapliczek rozsianych na polach i przy drogach — ślad po obu kulturach, które ukształtowały wieś.", meta: "mapa w przygotowaniu" },
        { kicker: "MILITARNY · 1943–1944", title: "Ślady po stacji PŁSD", desc: "Fundamenty i widoczne z lotu ptaka ślady po stanowisku radiolokacyjnym z okresu II wojny światowej.", meta: "lokalizacja w opracowaniu" },
      ],
    },

    gl: {
      eyebrow: "Galeria & Archiwum", h2a: "Fotografie i", h2b: "źródła",
      caption: "Panorama z drona · Popielówek · maj 2025",
      note: "Archiwum fotograficzne jest stopniowo uzupełniane.",
      archEyebrow: "Archiwum źródeł", archH3a: "Materiały według", archH3b: "epok",
      periods: [
        { name: "Najstarsze wzmianki", context: "od XIV w. · biskupstwo wrocławskie", status: "w opracowaniu" },
        { name: "Kościół i księgi", context: "od 1581 · parafia, chrzciny, śluby", status: "w opracowaniu" },
        { name: "XIX i początek XX wieku", context: "pruski kataster, szkoła, zagrody śląskie", status: "w opracowaniu" },
        { name: "Powojenna pamięć", context: "1945–1950 · przesiedlenia, nowe rodziny", status: "w opracowaniu" },
        { name: "Zimna wojna i PŁSD", context: "1943–1989 · radar, wojsko, cisza", status: "w opracowaniu" },
        { name: "Archiwum współczesne", context: "od 1990 · fotografie, wspomnienia, zdjęcia z drona", status: "materiały zbierane" },
      ],
      growing: "Archiwum jest stopniowo uzupełniane. Im bliżej czasów współczesnych, tym więcej zachowanych fotografii, map, zapisków i wspomnień można odnaleźć.",
      car1: "Kościół św. Katarzyny", car2: "Widok na wieś", car3: "Dawny Hennersdorf", car4: "Cmentarz przykościelny",
      car5: "Krajobraz Popielówka", car6: "Archiwum — rok 1945", car7: "Stacja PŁSD", car8: "Sztandar AK 2018",
      s1: { name: "Kościół św. Katarzyny",    desig: "XVI wiek · Sacrum",        quote: "Najtrwalszy materialny ślad dawnej i obecnej społeczności Popielówka." },
      s2: { name: "Widok na wieś",            desig: "Współczesny · Krajobraz",  quote: "Pola, drogi i panorama jako materialna ciągłość miejsca." },
      s3: { name: "Dawny Hennersdorf",        desig: "Historia · Archiwum",      quote: "Warstwa najstarszej historii i dawnej nazwy, sięgająca średniowiecznych nadań." },
      s4: { name: "Cmentarz przykościelny",   desig: "XVIII–XIX w. · Pamięć",    quote: "Nagrobki od XVIII do XIX wieku — świadkowie ciągłości miejsca." },
      s5: { name: "Stacja PŁSD",              desig: "1979–1989 · Historia",     quote: "Tajny obiekt obrony powietrznej PRL. Przez dekady utajniony." },
      s6: { name: "Sztandar AK",              desig: "2018 · Odkrycie",          quote: "Po ponad siedemdziesięciu latach milczenia — odnaleziony na strychu kościoła." },
    },

    wd: {
      eyebrow: "Kalendarz", h2a: "Nadchodzące", h2b: "w wiosce",
      dek: "Jarmarki, procesje, ciche czytania, spotkania mieszkańców. Po potwierdzeniu terminów ogłoszenia pojawiają się tutaj.",
      stamp: "Stan na maj 2026",
      title: "Brak aktualnie zaplanowanych wydarzeń.",
      body: "Wydarzenia, ogłoszenia i spotkania lokalne będą publikowane tutaj po ich potwierdzeniu.",
      noteA: "Masz informację o wydarzeniu?", noteB: "Skontaktuj się przez sekcję Kontakt →",
    },

    kt: {
      eyebrow: "Kontakt", h2a: "Podziel się", h2b: "swoją pamięcią",
      p1: "Jeśli twoja rodzina pochodzi z Popielówka — lub z dawnego Hennersdorf — i przechowujesz fotografie, dokumenty lub wspomnienia, chcemy je ocalić.",
      p2: "Każdy dar, każde imię i każda data wzbogaca archiwum, które ma służyć przyszłym pokoleniom.",
      closing: "To archiwum powstaje powoli — z każdą przekazaną pamięcią.",
      panelLabel: "Jak przekazać materiały",
      emailLabel: "E-mail", addrLabel: "Adres",
      addr1: "Parafia pw. św. Katarzyny", addr2: "ul. Kościelna, Popielówek",
      soonLabel: "Formularz zgłoszeń",
      soon: "Możliwość bezpośredniego przesłania materiałów online będzie dostępna wkrótce. Do tego czasu prosimy o kontakt e-mailem.",
    },

    ft: {
      tag: "Cyfrowe archiwum i serwis informacyjny wsi Popielówek / dawny Hennersdorf.",
      tag2: "Masz zdjęcie, dokument, wspomnienie lub informację o wydarzeniu? Skontaktuj się i pomóż rozwijać archiwum.",
      cArchive: "Archiwum", cPlaces: "Wioska", cCommunity: "Więcej",
      ftDesc: "Cyfrowe archiwum wsi Popielówek — historia, miejsca, pamięć.",
      announcements: "Ogłoszenia", submit: "Prześlij materiał",
      rights: "Wszelkie prawa zastrzeżone.",
      signatureRole: "Projekt, opracowanie, układ strony, redakcja i administracja: Krzysztof Laubich.",
      legal1: "Strona pełni funkcję cyfrowego archiwum oraz serwisu informacyjnego wsi Popielówek. Projekt jest rozwijany i może być uzupełniany o nowe materiały, wydarzenia, ogłoszenia oraz informacje lokalne.",
      legal2: "Materiały archiwalne, fotografie, dokumenty i wspomnienia pozostają własnością ich autorów, właścicieli lub instytucji źródłowych, o ile nie wskazano inaczej.",
    },
  },

  /* ─────────────────────────────── GERMAN ──────────────────────────────── */
  DE: {
    nav: { timeline: "Zeitleiste", history: "Geschichte", places: "Orte", monuments: "Denkmäler", gallery: "Galerie", events: "Veranstaltungen", contact: "Kontakt", menu: "Menü", close: "Schließen" },
    drop: { getThere: "Anfahrt", see: "Sehenswertes", church: "Kościół św. Katarzyny", map: "Karte der Orte" },
    lang: { pl: "Polnisch", de: "Deutsch", en: "Englisch", label: "Sprachauswahl" },

    hero: {
      eyebrow: "Lebendiges Archiv eines niederschlesischen Dorfes",
      title: "Popielówek erinnert sich",
      sub1: "Ein Dorf, das seine Sprache verlor,",
      sub2: "aber nicht seine Seele.",
      scroll: "Scrollen, um die Geschichte zu entdecken",
      churchTitle: "Kościół pw. św. Katarzyny Aleksandryjskiej",
      churchSub: "Aus den Jahren 1766–1767, mit Elementen aus dem 16. Jahrhundert.",
      goryYear: "Westsudeten",
      gorySub: "Das Isergebirge in den Westsudeten. Die höchsten Erhebungen überschreiten 500 m ü. NN.",
    },

    intro: {
      e1: "Dorf", e2: "Niederschlesien", e3: "Polen",
      sub: "Ein kleines Dorf in der Gemeinde Lubomierz. Sieben Jahrhunderte Geschichte, eine weiße Kirche, viele vergessene Namen.",
      p1: "Die Siedlung wird vor 1305 im Zehntregister des Bistums Breslau erwähnt. Über Jahrhunderte war sie als Hennersdorf bekannt — ein schlesisches, preußisches und seit 1945 polnisches Dorf. Ihr alter Name, ihre neuen Bewohner und ihre alten Steine bilden zusammen eine einzige Erzählung.",
      p2: "Dieses lebendige Archiv sammelt, was geblieben ist: Fotografien, Stimmen, Dokumente und kleine erhaltene Dinge. Neue Einträge erscheinen mit den Jahreszeiten.",
      aEl: "Gemeinde", aElV: "Lubomierz",
      aCo: "Koordinaten", aCoV: "50.9883°N · 15.5306°E",
      aFi: "Erste Erwähnung", aFiV: "1307",
      aNa: "Früherer Name", aNaV: "Hennersdorf",
    },

    tl: {
      eyebrow: "Zeitleiste", h2a: "Sieben Jahrhunderte,", h2b: "einige Wendepunkte",
      e: [
        { title: "Schenkung an das Benediktinerinnenkloster", desc: "Jutta von Liebenthal übergibt Hennersdorf dem Kloster in Liebenthal (Lubomierz). Das Dorf bleibt für Jahrhunderte an den Klosterbesitz und die feudale Ordnung Niederschlesiens gebunden." },
        { title: "Katharinenkirche", desc: "Die Kirche bewahrt Elemente eines älteren Baus aus dem 16. Jahrhundert und erhielt 1766–1767 ihre barocke Gestalt. Sie ist eine der wichtigsten materiellen Spuren des alten Hennersdorf." },
        { title: "Schlesien wird preußisch", desc: "Nach dem Schlesischen Krieg gelangt Hennersdorf unter preußische Verwaltung. Die Sprache der Urkunden ändert sich — die Glocken läuten zu denselben Stunden." },
        { title: "Neue Dorfschule", desc: "Der Bau eines neuen Schulgebäudes für die Kinder aus Hennersdorf und den umliegenden Siedlungen. Eine nach der deutschen Einigung geborene Generation lernt hier lesen und rechnen." },
        { title: "Vertreibung. Neue Siedler.", desc: "Die deutschen Bewohner verlassen das Dorf innerhalb von Wochen. Polnische Umsiedler aus Lemberg und Wolhynien beziehen die leeren Häuser — aus Hennersdorf wird Popielówek. Zwei Erinnerungen. Eine Landschaft." },
        { title: "Żandarmeria Sił Podziemnych", desc: "In Popielówek ist die Tätigkeit einer Zelle des bewaffneten Nachkriegsuntergrunds dokumentiert. Eine der weniger bekannten, doch archivalisch belegten Spuren des Widerstands in den ersten Jahren der Volksrepublik Polen." },
        { title: "Geheime Radarstation PŁSD", desc: "In der Nähe des Dorfes entsteht eine Anlage der Polskie Linie Służby Dyżurnej — ein Element der Luftverteidigung der Volksrepublik Polen. Über Jahrzehnte geheim und auf keiner Karte verzeichnet." },
        { title: "Fund der Fahne der Armia Krajowa", desc: "Auf dem Dachboden der Katharinenkirche werden eine verborgene Fahne der Armia Krajowa und eine Gedenktafel entdeckt. Über siebzig Jahre warteten sie auf den richtigen Augenblick." },
        { title: "Lebendiges Archiv von Popielówek", desc: "Die Geschichte des Dorfes bleibt offen — ergänzt durch Fotografien, Dokumente, Erinnerungen und neue Funde der Bewohner." },
      ],
      years: ["1307", "16. Jh.", "1742", "1871", "1945", "Mai 1947", "1979", "2018", "Heute"],
      shortLabels: ["Darowizna klasztorna", "Kościół parafialny", "Śląsk pod Prusami", "Szkoła wiejska", "Wysiedlenia", "Żandarmeria SB", "Stacja PŁSD", "Sztandar AK", "Żywe archiwum"],
    },

    h: {
      eyebrow: "Geschichte", h2a: "Die Kapitel, aus denen", h2b: "dieses Dorf entstand",
      expand: "Kapitel öffnen", collapse: "Kapitel schließen",
      pending: "Die vollständige Übersetzung dieses Kapitels ist in Vorbereitung. Nachstehend der polnische Quelltext.",
      labels: ["Gründung · Kloster", "Architektur · Sakrales", "1945 · Wendepunkt", "Untergrund · Nachkriegszeit", "Kalter Krieg · Infrastruktur", "Entdeckung · 2018"],
      titles: ["Hennersdorf und das Benediktinerinnenkloster", "Kirche der hl. Katharina von Alexandrien", "Das Jahr 1945 und die unterbrochene Kontinuität", "Der Nachkriegsuntergrund in Popielówek", "Radarstation PŁSD", "Die 2018 gefundene Fahne der Armia Krajowa"],
      ph: ["Dokument · Schenkungsurkunde", "Fotografie · Ansicht der Kirche", "Dokument · Umsiedlerliste", "Dokument · Archivakten", "Karte · Lage der Anlage", "Fotografie · Fahne der AK"],
      paras: [
        "Hennersdorf erscheint 1307 in schriftlichen Quellen, als Jutta von Liebenthal das Dorf dem Benediktinerinnenkloster in Liebenthal (Lubomierz) übergibt. Über fünfhundert Jahre lang blieb das Dorf Teil des Klosterbesitzes — Land, Pflichten und der Rhythmus des Kirchenjahres verflochten sich zu einer feudalen Ordnung Niederschlesiens.",
        "Die Kirche der hl. Katharina von Alexandrien ist die wichtigste materielle Spur des alten Hennersdorf. Das Gotteshaus, dessen Anfänge mit dem 16. Jahrhundert verbunden werden, erhielt 1766–1767 seine barocke Gestalt. Über Jahrhunderte blieb es ein Ort des Gebets, der Erinnerung und des gemeinschaftlichen Fortbestehens des Dorfes.",
        "Das Jahr 1945 brachte dem Dorf den tiefsten Bruch seiner Geschichte. Hennersdorf entging größeren Kriegszerstörungen, verlor jedoch seine bisherige Gemeinschaft, seine Sprache und die Kontinuität der Generationen. In den verlassenen Häusern ließen sich Polen nieder, und das einstige Klosterdorf erhielt einen neuen Namen: Popielówek.",
        "Nach 1945 wurde Popielówek zum Ort eines Neuanfangs, aber auch der Nachkriegsspannung. Unter den Siedlern waren ehemalige Soldaten des Unabhängigkeitsuntergrunds, und 1947 entstand im Dorf die Żandarmeria Sił Podziemnych. Diese Geschichte blieb lange verborgen — in Familienerinnerungen, Repressionsakten und Symbolen, die außerhalb der offiziellen Erinnerung bewahrt wurden.",
        "1979 wurde der Landschaft von Popielówek eine neue, militärische Schicht der Geschichte eingeschrieben. Der Bau der Radarstation des Systems PŁSD verband das ruhige Dorf mit der Luftverteidigungsinfrastruktur der Volksrepublik Polen. In den folgenden Jahrzehnten standen Beton, Zäune und militärischer Alltag neben Feldern, Häusern und dem Rhythmus einer kleinen niederschlesischen Siedlung.",
        "Im September 2018 wurden auf dem Dachboden der Katharinenkirche eine Fahne der Armia Krajowa und eine zweiseitige Gedenktafel gefunden. Die jahrzehntelang verborgenen Artefakte wurden zur materiellen Spur der Nachkriegserinnerung Popielóweks — der Erinnerung an Siedler, Untergrund und die Furcht vor den Repressionen des kommunistischen Sicherheitsapparats.",
      ],
      chapBodies: [
        /* I — Hennersdorf und das Benediktinerinnenkloster */
        [
          "Das Dorf bestand wahrscheinlich schon vor 1307. Seine Wurzeln reichen vermutlich in die Zeit der mittelalterlichen Kolonisation nach deutschem Recht — jene Siedlungswelle, die im 13. und 14. Jahrhundert viele Dörfer in diesem Teil Schlesiens prägte. Henner — der Name, der der Siedlung ihren Namen gab — war wohl der erste Eigentümer oder Gründer. Er hinterließ nur diese eine Silbe.",
          "Auf Grundlage der Schenkung von 1307 erhielt das Benediktinerinnenkloster in Lubomierz — die Stadt trug damals den Namen Liebenthal — nicht nur Land, sondern auch Einnahmenrechte und die Oberhoheit über die Bewohner. Über fünfhundert Jahre lang war es der eigentliche Herr über Hennersdorf und band das Dorf an den Rhythmus des Klosterjahres: Fronden, Abgaben, Gerichtsbarkeit.",
          "Der Schulze — Dorfvorsteher — hatte eine alte feudale Pflicht: Auf jede Aufforderung hin musste er mit einem gesattelten Pferd erscheinen. Es war eine persönliche Verpflichtung, verwurzelt in einer Ordnung, in der Abhängigkeit sich durch körperliche Anwesenheit ausdrückte. Im Jahr 1350 wurde diese Pflicht in einen jährlichen Zins von einer halben Mark umgewandelt. Eine kleine, doch bedeutsame Änderung — sie zeugt vom allmählichen Übergang von persönlichem Dienst zur Geldleistung.",
          "Im Jahr 1568 hält das Gerichtsbuch aus Hain (Kamienica) — ein Gerichtsbuch für die umliegenden Dörfer — den Namen eines der ersten namentlich bekannten Bewohner von Hennersdorf fest: Michel Friderich. Eine Person, ein Name, eine Spur in den Akten. Doch genau aus solchen Fragmenten setzt sich das Archiv eines Dorfes zusammen. Die Klosterabhängigkeit dauerte bis zur Säkularisation im Jahr 1810 — und sie war es, die über mehr als fünf Jahrhunderte die Eigentumsstruktur, die Sitten und die Bindung dieses Dorfes an Lubomierz geprägt hat.",
        ],
        /* II — Kirche der hl. Katharina von Alexandrien */
        [
          "Die Kirche in Hennersdorf war von Anfang an mit dem Benediktinerinnenkloster in Lubomierz verbunden — so wie das Dorf selbst, dessen Geschichte sich über mehr als fünfhundert Jahre mit der Klosterordnung verflochten hatte. Die älteste Erwähnung der hiesigen Kirche wird mit dem 16. Jahrhundert in Verbindung gebracht; die Quellen nennen das Jahr um 1559, obwohl diese Angabe mit Vorsicht zu behandeln ist. Ob es sich um einen Holz- oder um einen Steinbau handelte, ist nicht sicher — der Eintrag bleibt mehrdeutig. Bekannt ist jedoch, dass die heutige Kirche Elemente einer älteren Struktur bewahrt, die spätere Umbauten überdauert haben.",
          "In den Jahren 1766–1767 erhielt die Kirche ihre barocke Gestalt, die bis heute erhalten geblieben ist. Turm, Schiff und die Ausstattung aus jener Zeit bilden ein Inneres, das Zeuge aller wichtigen Momente im Leben des Dorfes war: Taufen, Trauungen, Beerdigungen, Gebet in Kriegszeiten. Die Kirche war ein bedeutender Ort des religiösen Lebens, verbunden mit der Pfarrstruktur Wojciechów–Lubomierz, früher Ullersdorf–Liebenthal. Die ältesten erhaltenen Kirchenbücher — Pfarrregister ab 1666 — stammen eben aus dieser Pfarrei.",
          "Um die Kirche erstreckt sich ein Friedhof, der seine eigene Schicht der Erinnerung bewahrt. Die Grabsteine früherer Bewohner — diejenigen, die erhalten geblieben sind — sind stille Zeugen von Kontinuität und Bruch. Nach 1945, als das Dorf seine Sprache und seine Bewohner wechselte, wurde der Friedhof zu einem Ort, an dem zwei Erinnerungen wortlos nebeneinander bestehen.",
          "Auf dem Dachboden der Katharinenkirche wurden 2018 eine Fahne der Armia Krajowa (Heimatarmee) sowie eine Gedenktafel gefunden, die dort Jahrzehnte nach dem Krieg verborgen gewesen waren. Die vollständige Geschichte dieser Entdeckung gehört zum Kapitel VI, doch erscheint die Kirche bereits hier nicht nur als Ort des Gebets, sondern auch als Raum bewahrter Erinnerung.",
        ],
        /* III — Das Jahr 1945 und die unterbrochene Kontinuität */
        [
          "Im Februar 1945 kam die Ostfront einige Kilometer vom Dorf zum Stehen. Hennersdorf wurde verschont — Kirche, Friedhof, Wege, Gebäude und Landschaft blieben nahezu unversehrt. Diese physische Unversehrtheit ließ den Bruch, der wenige Monate später folgte, umso eindringlicher erscheinen: Das Dorf hatte überlebt, aber die Gemeinschaft, die es über Jahrhunderte bewohnt hatte, hörte auf zu bestehen.",
          "Nach den verfügbaren Unterlagen wurden die deutschen Bewohner im Juli 1945 — wahrscheinlich um den 12. Juli — aus ihren Häusern ausgewiesen. Vor dem Krieg hatte das Dorf etwa 286 Einwohner gezählt. Innerhalb weniger Wochen stand es leer. Die Menschen nahmen nur mit, was sie tragen konnten. Häuser, Felder, Gerätschaften, Friedhof — sie blieben.",
          "In den folgenden Monaten, vor allem in den Jahren 1945 und 1946, begannen polnische Siedler einzutreffen. Ein Teil kam aus Zentralpolen, ein anderer Teil aus den einstigen Kresy Wschodnie (Ostliche Grenzgebiete) — aus Gebieten, die nach dem Krieg jenseits der Grenzen des neuen Staates lagen. Manche brachten Kriegserfahrung mit, eine Vergangenheit in der Konspiration, ein Verlustgefühl, das sich von jenem der vertriebenen Deutschen gar nicht so sehr unterschied. Jede Familie brachte ihre eigene Erinnerung in die Häuser einer fremden Erinnerung.",
          "Der Wandel, der sich 1945 vollzog, war nicht nur ein administrativer. Sprache, Namen, Gewohnheiten und das Gefühl der Verwurzelung änderten sich. Und doch blieb etwas: die Kirche, der Friedhof, die Feldflur, die Wege, die Form des Dorfes. Popielówek ist ein anderer Ort als Hennersdorf — und derselbe Ort. Dieses Archiv versucht, beide Wahrheiten zu fassen.",
        ],
        /* IV — Der Nachkriegsuntergrund in Popielówek */
        [
          "Unter den Siedlern, die nach 1945 nach Popielówek kamen, befanden sich ehemalige Soldaten der Armia Krajowa (Heimatarmee, AK), der Narodowe Siły Zbrojne (Nationale Streitkräfte, NSZ) und der Bataliony Chłopskie (Bauernbataillone, BCh). Sie brachten nicht nur ihr Hab und Gut mit, sondern auch Kriegserfahrung, Misstrauen gegenüber der neuen Macht und — bisweilen — die Bereitschaft zu weiterem Widerstand. Die Nachkriegslandschaft aus verstreuten Gehöften und neuen, noch nicht verwurzelten Gemeinschaften begünstigte das Fortbestehen konspirativer Netzwerke, die andernorts bereits zerfallen waren.",
          "Im Mai 1947 wurde in Popielówek die Tätigkeit der Żandarmeria Sił Podziemnych (Gendarmerie der Untergrundkräfte) dokumentiert — einer Struktur, die dem Widerstand angehörte, der nach der formellen Auflösung der AK weiterarbeitete. Diese Organisation war mit dem Umfeld von Soldaten verbunden, die sich um Major Henryk Flame „Bartek“ scharten, eine der letzten Figuren des bewaffneten Untergrunds in Niederschlesien. Der Umfang der lokalen Tätigkeit ist nicht vollständig dokumentiert — die erhaltenen Spuren sind fragmentarisch.",
          "Eine der konkreten Personen, deren Schicksal mit diesem Umfeld verknüpft ist, war Tadeusz Pietryka „Sokół“ (Falke). Er wurde vom Sicherheitsapparat verhaftet, zu 15 Jahren Haft verurteilt und saß über fünf Jahre ab. Seine Geschichte ist ein Beispiel für die Repressionen, die viele Teilnehmer des Nachkriegsuntergrunds trafen — der breiteren Öffentlichkeit unbekannt, nur in Gerichtsakten und Familienberichten verzeichnet.",
          "Die Bezeichnung „Wioska Żołnierzy Niezłomnych“ (Dorf der unbeugsamen Soldaten) taucht im späteren Erinnerungsdiskurs als Etikett auf, das diesen Teil der Geschichte Popielóweks beschreibt. Sie ist mit Vorsicht zu behandeln: Es handelt sich um eine Erinnerungskategorie, nicht um eine neutrale historische Beschreibung. Ein späteres, materielles Zeugnis dieser Nachkriegs-Erinnerungsschicht wurde die Fahne der Armia Krajowa, die 2018 auf dem Dachboden der Katharinenkirche gefunden wurde.",
        ],
        /* V — Radarstation PŁSD */
        [
          "Der Bau der Anlage begann 1979 und dauerte bis etwa 1981. In militärischen Dokumenten lief die Investition unter dem Decknamen „Zadanie 85290“ (Aufgabe 85290). Die Station war Teil des Przeciwlotniczy System Dowodzenia — PŁSD (Luftverteidigungsführungssystem) — eines Netzes von Radar- und Führungsanlagen, die im Rahmen des Warschauer Pakts eine integrierte Luftverteidigung des Ostblocks bildeten. Popielówek, ein ruhiges Dorf in den Westsudeten, wurde zu einem Knotenpunkt dieser unsichtbaren Infrastruktur.",
          "Der Bau hinterließ Spuren in der lokalen Landschaft: Zufahrtswege wurden ausgebaut, Sperrzonen eingerichtet, Zäune und technische Gebäude errichtet. Die militärische Präsenz bedeutete neue Nachbarn — Soldaten und zivile Mitarbeiter — deren Alltag sich mit dem Dorfleben berührte, ohne sich wirklich mit ihm zu verbinden.",
          "Die Station war mehrere Jahre in Betrieb. Die Anlage wurde wahrscheinlich um das Jahr 2000 außer Dienst gestellt, obwohl das genaue Datum unsicher ist — einige Quellen nennen das Jahr 2002. Nach der Stilllegung begannen die Gebäude zu verfallen. Fundamente, Zaunreste, das Wachhaus und Graffiti-Spuren aus den Jahren um 1999–2000 — das, was blieb — wurden zu einer weiteren, ungewollten Schicht der Dorflandschaft nach der kalten-Kriegs-Infrastruktur.",
          "Die PŁSD-Radarstation ist ein Stück Geschichte, das selten in lokale Archive findet: militärisch, geheim, ohne Denkmal. Und doch prägte sie zwei Jahrzehnte lang den Alltag von Popielówek — auf keiner Karte verzeichnet, hinter dem Zaun präsent.",
        ],
        /* VI — Die 2018 gefundene Fahne der Armia Krajowa */
        [
          "Im September 2018, während Renovierungsarbeiten auf dem Dachboden der Kirche der hl. Katharina von Alexandrien in Popielówek, stießen Arbeiter auf eine in Leinenstoff gewickelte Fahne sowie eine daneben versteckte Gedenktafel. Die Artefakte hatten jahrzehntelang unberührt gelegen — vergessen oder absichtlich außerhalb der Reichweite des offiziellen Gedenkens verwahrt.",
          "Die Fahne der Armia Krajowa hat zwei Seiten. Auf der Vorderseite ist das Bildnis der Matka Boska Częstochowska (Schwarze Madonna von Tschenstochau) zu sehen — eine Ikone, die tief in der Tradition des polnischen Katholizismus und der Kriegsspiritualität verwurzelt ist. Auf der Rückseite: der gekrönte Adler und der Wahlspruch „Bóg, Honor, Ojczyzna“ (Gott, Ehre, Vaterland), seit Jahrzehnten Symbol der Unabhängigkeitsformationen. Es war kein zufälliger Gegenstand: AK-Fahnen wurden mit Bedacht aufbewahrt, oft unter Einsatz des eigenen Lebens.",
          "Die Gedenktafel ist von besonderer Natur. Sie ist zweiseitig — eine Seite trägt eine deutschsprachige Inschrift, die an die im Ersten Weltkrieg gefallenen Bewohner von Hennersdorf erinnert. Die andere Seite enthält eine polnische Inschrift, die vermutlich um 1946 von polnischen Siedlern-Partisanen angebracht wurde. Zwei Sprachen, zwei Momente der Trauer, ein Gegenstand — eine der wenigen materiellen Formen des Nebeneinanders zweier Erinnerungsschichten in dieser Region.",
          "Die Fahne und die Tafel wurden höchstwahrscheinlich in den Jahren 1946–1947 versteckt, als der kommunistische Sicherheitsapparat die Strukturen des Nachkriegsuntergrunds systematisch zerschlug. Die Angst vor dem UB (Urząd Bezpieczeństwa, Staatssicherheitsbüro), vor Verhaftung und Repressionen bewog dazu, Spuren zu verwischen. Wer genau diese Gegenstände versteckt hat — das bestätigen die Quellen nicht eindeutig. Sicher ist nur, dass sich jemand entschied, sie zu bewahren.",
          "Der Fund ist in den weiteren Kontext der lokalen Erinnerung einzuordnen, die u. a. das Instytut Pamięci Narodowej (Institut des Nationalen Gedenkens, IPN) seit Jahren zu rekonstruieren versucht. Die Bezeichnung „Wioska Żołnierzy Niezłomnych“, die in diesem Diskurs für Popielówek verwendet wird, ist eine spätere Erinnerungskategorie — nützlich, aber mit Vorsicht zu behandeln. Die Geschichte dieser Artefakte selbst ist komplex genug, um ohne Vereinfachungen davon zu sprechen.",
        ],
      ],
    },

    mj: {
      eyebrow: "Orte", h2a: "Popielówek auf der", h2b: "Karte der Erinnerung",
      locLabel: "Wo Popielówek liegt",
      locA: "Popielówek liegt in der Woiwodschaft", locStrong1: "Niederschlesien",
      locB: ", im Powiat Lwówek, in der Gemeinde Lubomierz. Früher bestand es unter dem deutschen Namen",
      locStrong2: "Hennersdorf", locC: ".",
      chips: ["Niederschlesien", "Powiat Lwówek", "Gemeinde Lubomierz", "59-623", "einst Hennersdorf"],
      imgCaption: "Popielówek aus der Vogelperspektive — die heutige Landschaft des alten Hennersdorf.",
      mapLabel: "Lagekarte", mapsLink: "In Google Maps ansehen",
      mapNote: "Eine interaktive Karte der Erinnerungsorte, Quellen und Fotografien wird gemeinsam mit dem Archiv entwickelt.",
      mapClickHint: "Klicken um die Karte zu öffnen", mapCollapse: "Zuklappen",
      layersTa: "Kleines Dorf,", layersTb: "viele Schichten",
      layers: [
        { title: "Kościół św. Katarzyny", desc: "Historischer Bezugspunkt des Dorfes — die dauerhafteste materielle Spur der einstigen und heutigen Gemeinschaft.", tag: "Bezugspunkt" },
        { title: "Das alte Hennersdorf", desc: "Die Schicht der ältesten Geschichte und des früheren deutschen Namens, zurückreichend bis zu mittelalterlichen Schenkungen.", tag: "Erinnerungsschicht" },
        { title: "Die Landschaft von Popielówek", desc: "Felder, Wege und Panorama als materielle Kontinuität des Ortes — das, was die Grenzverschiebungen überdauert hat.", tag: "Erinnerungsschicht" },
        { title: "Radarstation PŁSD", desc: "Eine Schicht des Kalten Krieges — Spur einer verborgenen militärischen Präsenz in der Umgebung.", tag: "nach Quellenprüfung" },
        { title: "Karte der Erinnerung", desc: "Ein interaktives Verzeichnis von Orten, Quellen und Fotografien, verknüpft mit konkreten Punkten des Dorfes — gemeinsam mit dem Archiv entwickelt.", tag: "in Vorbereitung" },
      ],
    },

    zb: {
      eyebrow: "Denkmäler", h2a: "Spuren, die", h2b: "überdauerten",
      sub: "Kirche, Friedhof, Wegkreuze und Spuren der militärischen Funkortung — jedes Objekt hat seine Geschichte und sein Schweigen.",
      cards: [
        { kicker: "SAKRAL · 1581", title: "Kościół pw. św. Katarzyny", desc: "Gemauerte Pfarrkirche aus dem 16. Jahrhundert. Turm, Schiff und barocker Altar. Die Glocken wurden im Zweiten Weltkrieg versteckt und 1947 zurückgegeben.", meta: "ul. Kościelna · täglich geöffnet" },
        { kicker: "SEPULKRAL", title: "Friedhof an der Kirche", desc: "Grabsteine vom 18. bis zum 21. Jahrhundert — polnische und deutsche Namen nebeneinander. Eine doppelte Erinnerungslandschaft.", meta: "an der Kirche" },
        { kicker: "SAKRAL · WEGE", title: "Wegkreuze und Bildstöcke", desc: "Über ein Dutzend Kreuze und Bildstöcke verstreut auf den Feldern und an den Wegen — Spur beider Kulturen, die das Dorf geprägt haben.", meta: "Karte in Vorbereitung" },
        { kicker: "MILITÄRISCH · 1943–1944", title: "Spuren der PŁSD-Anlage", desc: "Fundamente und aus der Luft sichtbare Spuren einer Funkortungsstellung aus der Zeit des Zweiten Weltkriegs.", meta: "Lage in Bearbeitung" },
      ],
    },

    gl: {
      eyebrow: "Galerie & Archiv", h2a: "Fotografien und", h2b: "Quellen",
      caption: "Drohnenpanorama · Popielówek · Mai 2025",
      note: "Das fotografische Archiv wird nach und nach ergänzt.",
      archEyebrow: "Quellenarchiv", archH3a: "Materialien nach", archH3b: "Epochen",
      periods: [
        { name: "Älteste Erwähnungen", context: "ab dem 14. Jh. · Bistum Breslau", status: "in Bearbeitung" },
        { name: "Kirche und Bücher", context: "ab 1581 · Pfarrei, Taufen, Trauungen", status: "in Bearbeitung" },
        { name: "19. und frühes 20. Jahrhundert", context: "preußisches Kataster, Schule, schlesische Höfe", status: "in Bearbeitung" },
        { name: "Nachkriegserinnerung", context: "1945–1950 · Umsiedlungen, neue Familien", status: "in Bearbeitung" },
        { name: "Kalter Krieg und PŁSD", context: "1943–1989 · Radar, Militär, Stille", status: "in Bearbeitung" },
        { name: "Zeitgenössisches Archiv", context: "ab 1990 · Fotografien, Erinnerungen, Drohnenaufnahmen", status: "Material wird gesammelt" },
      ],
      growing: "Das Archiv wird nach und nach ergänzt. Je näher die Gegenwart, desto mehr erhaltene Fotografien, Karten, Aufzeichnungen und Erinnerungen lassen sich finden.",
      car1: "Katharinenkirche", car2: "Blick auf das Dorf", car3: "Das alte Hennersdorf", car4: "Kirchhof",
      car5: "Landschaft von Popielówek", car6: "Archiv — Jahr 1945", car7: "Radarstation PŁSD", car8: "AK-Fahne 2018",
      s1: { name: "Katharinenkirche",          desig: "16. Jh. · Sakrales",         quote: "Das dauerhafteste materielle Zeugnis der einstigen und heutigen Gemeinschaft." },
      s2: { name: "Blick auf das Dorf",        desig: "Gegenwart · Landschaft",     quote: "Felder, Wege und Panorama als materielle Kontinuität des Ortes." },
      s3: { name: "Das alte Hennersdorf",      desig: "Geschichte · Archiv",        quote: "Die älteste Schicht der Geschichte, zurückreichend bis zu mittelalterlichen Schenkungen." },
      s4: { name: "Kirchhof",                  desig: "18.–19. Jh. · Erinnerung",  quote: "Grabsteine aus drei Jahrhunderten — stille Zeugen der Kontinuität." },
      s5: { name: "Radarstation PŁSD",         desig: "1979–1989 · Geschichte",     quote: "Geheime Luftverteidigungsanlage der Volksrepublik. Jahrzehntelang verschwiegen." },
      s6: { name: "AK-Fahne",                  desig: "2018 · Entdeckung",          quote: "Nach über siebzig Jahren Schweigen — auf dem Kirchendachboden gefunden." },
    },

    wd: {
      eyebrow: "Kalender", h2a: "Demnächst", h2b: "im Dorf",
      dek: "Jahrmärkte, Prozessionen, stille Lesungen, Treffen der Bewohner. Nach Bestätigung der Termine erscheinen die Ankündigungen hier.",
      stamp: "Stand Mai 2026",
      title: "Derzeit sind keine Veranstaltungen geplant.",
      body: "Veranstaltungen, Bekanntmachungen und lokale Treffen werden hier nach ihrer Bestätigung veröffentlicht.",
      noteA: "Haben Sie eine Information zu einer Veranstaltung?", noteB: "Kontaktieren Sie uns über den Bereich Kontakt →",
    },

    kt: {
      eyebrow: "Kontakt", h2a: "Teilen Sie", h2b: "Ihre Erinnerung",
      p1: "Wenn Ihre Familie aus Popielówek — oder dem alten Hennersdorf — stammt und Sie Fotografien, Dokumente oder Erinnerungen bewahren, möchten wir sie bewahren.",
      p2: "Jede Gabe, jeder Name und jedes Datum bereichert ein Archiv, das künftigen Generationen dienen soll.",
      closing: "Dieses Archiv entsteht langsam — mit jeder übergebenen Erinnerung.",
      panelLabel: "Wie Sie Materialien übergeben",
      emailLabel: "E-Mail", addrLabel: "Adresse",
      addr1: "Pfarrei der hl. Katharina", addr2: "ul. Kościelna, Popielówek",
      soonLabel: "Einreichungsformular",
      soon: "Die Möglichkeit, Materialien direkt online einzureichen, wird in Kürze verfügbar sein. Bis dahin bitten wir um Kontakt per E-Mail.",
    },

    ft: {
      tag: "Digitales Archiv und Informationsdienst des Dorfes Popielówek / einst Hennersdorf.",
      tag2: "Haben Sie ein Foto, ein Dokument, eine Erinnerung oder eine Information zu einer Veranstaltung? Nehmen Sie Kontakt auf und helfen Sie, das Archiv zu erweitern.",
      cArchive: "Archiv", cPlaces: "Dorf", cCommunity: "Mehr",
      ftDesc: "Digitales Archiv des Dorfes Popielówek — Geschichte, Orte, Erinnerung.",
      announcements: "Bekanntmachungen", submit: "Material einreichen",
      rights: "Alle Rechte vorbehalten.",
      signatureRole: "Konzept, Bearbeitung, Seitengestaltung, Redaktion und Verwaltung: Krzysztof Laubich.",
      legal1: "Die Seite dient als digitales Archiv und Informationsdienst des Dorfes Popielówek. Das Projekt wird weiterentwickelt und kann um neue Materialien, Veranstaltungen, Bekanntmachungen und lokale Informationen ergänzt werden.",
      legal2: "Archivmaterialien, Fotografien, Dokumente und Erinnerungen bleiben Eigentum ihrer Urheber, Eigentümer oder der Herkunftsinstitutionen, sofern nicht anders angegeben.",
    },
  },

  /* ─────────────────────────────── ENGLISH ─────────────────────────────── */
  EN: {
    nav: { timeline: "Timeline", history: "History", places: "Places", monuments: "Monuments", gallery: "Gallery", events: "Events", contact: "Contact", menu: "Menu", close: "Close" },
    drop: { getThere: "Getting there", see: "What to see", church: "Kościół św. Katarzyny", map: "Map of places" },
    lang: { pl: "Polish", de: "German", en: "English", label: "Language selection" },

    hero: {
      eyebrow: "A living archive of a Lower Silesian village",
      title: "Popielówek remembers",
      sub1: "A village that lost its language,",
      sub2: "but not its soul.",
      scroll: "Scroll to discover the story",
      churchTitle: "Kościół pw. św. Katarzyny Aleksandryjskiej",
      churchSub: "From 1766–1767, with elements from the 16th century.",
      goryYear: "Western Sudetes",
      gorySub: "The Izera Mountains in the Western Sudetes. The highest peaks exceed 500 m above sea level.",
    },

    intro: {
      e1: "village", e2: "Lower Silesia", e3: "Poland",
      sub: "A small village in the municipality of Lubomierz. Seven centuries of history, one white church, many forgotten names.",
      p1: "The settlement is recorded before 1305 in the tithe register of the Diocese of Wrocław. For centuries it was known as Hennersdorf — a Silesian, then Prussian, and since 1945 Polish village. Its old name, its new inhabitants and its old stones together form a single story.",
      p2: "This living archive gathers what remains: photographs, voices, documents and small surviving things. New entries appear with the seasons.",
      aEl: "Municipality", aElV: "Lubomierz",
      aCo: "Coordinates", aCoV: "50.9883°N · 15.5306°E",
      aFi: "First mention", aFiV: "1307",
      aNa: "Former name", aNaV: "Hennersdorf",
    },

    tl: {
      eyebrow: "Timeline", h2a: "Seven centuries,", h2b: "a few turning points",
      e: [
        { title: "Donation to the Benedictine convent", desc: "Jutta von Liebenthal grants Hennersdorf to the convent in Lubomierz. For centuries the village remains bound to the monastic estate and the feudal order of Lower Silesia." },
        { title: "Church of St Catherine", desc: "The church preserves elements of an older 16th-century building and received its Baroque form in 1766–1767. It is one of the most important material traces of old Hennersdorf." },
        { title: "Silesia passes to Prussia", desc: "After the Silesian War, Hennersdorf comes under Prussian administration. The language of the documents changes — the bells ring at the same hours." },
        { title: "A new village school", desc: "A new school building is raised for the children of Hennersdorf and the neighbouring settlements. A generation born after German unification learns to read and count here." },
        { title: "Expulsions. New settlers.", desc: "The German inhabitants leave the village within weeks. Polish resettlers from Lviv and Volhynia move into the empty houses — Hennersdorf becomes Popielówek. Two memories. One landscape." },
        { title: "Żandarmeria Sił Podziemnych", desc: "In Popielówek, the activity of a post-war armed underground cell is documented. One of the lesser-known yet archivally confirmed traces of resistance in the first years of People's Poland." },
        { title: "The secret PŁSD radar station", desc: "Near the village an installation of the Polskie Linie Służby Dyżurnej is brought into service — part of the air-defence system of People's Poland. Classified for decades, marked on no map." },
        { title: "Discovery of the Armia Krajowa banner", desc: "In the attic of St Catherine's church, a hidden Armia Krajowa banner and a commemorative plaque are found. For over seventy years they waited for the right moment." },
        { title: "The living archive of Popielówek", desc: "The village's history remains open — added to by photographs, documents, memories and new discoveries by residents." },
      ],
      years: ["1307", "16th c.", "1742", "1871", "1945", "May 1947", "1979", "2018", "Today"],
      shortLabels: ["Darowizna klasztorna", "Kościół parafialny", "Śląsk pod Prusami", "Szkoła wiejska", "Wysiedlenia", "Żandarmeria SB", "Stacja PŁSD", "Sztandar AK", "Żywe archiwum"],
    },

    h: {
      eyebrow: "History", h2a: "The chapters that made up", h2b: "this village",
      expand: "Expand chapter", collapse: "Collapse chapter",
      pending: "A full translation of this chapter is in preparation. The Polish source text appears below.",
      labels: ["Founding · Convent", "Architecture · Sacred", "1945 · The break", "Underground · Post-war", "Cold War · Infrastructure", "Discovery · 2018"],
      titles: ["Hennersdorf and the Benedictine convent", "Church of St Catherine of Alexandria", "The year 1945 and the broken continuity", "The post-war underground in Popielówek", "The PŁSD radar station", "The Armia Krajowa banner found in 2018"],
      ph: ["document · deed of donation", "photograph · view of the church", "document · resettlers' list", "document · archival files", "map · location of the installation", "photograph · AK banner"],
      paras: [
        "Hennersdorf appears in written sources in 1307, when Jutta von Liebenthal grants the village to the Benedictine convent in Lubomierz. For more than five hundred years the village remained part of the monastic estate — land, obligations and the rhythm of the church year woven into a single feudal order of Lower Silesia.",
        "The Church of St Catherine of Alexandria is the most important material trace of old Hennersdorf. The church, whose beginnings are linked to the 16th century, received its Baroque form in 1766–1767. For centuries it remained a place of prayer, memory and the community's endurance.",
        "The year 1945 brought the village the deepest rupture in its history. Hennersdorf escaped major war damage but lost its existing community, its language and the continuity of generations. Poles began to settle in the abandoned houses, and the former monastic village received a new name: Popielówek.",
        "After 1945 Popielówek became a place of new beginnings, but also of post-war tension. Among the settlers were former soldiers of the independence underground, and in 1947 the Żandarmeria Sił Podziemnych was formed in the village. This history long remained hidden — in family memories, records of repression and symbols kept outside official memory.",
        "In 1979 a new, military layer of history was inscribed into the landscape of Popielówek. The construction of a radar station of the PŁSD system connected the quiet village to the air-defence infrastructure of People's Poland. Over the following decades concrete, fences and military routine stood alongside fields, houses and the rhythm of a small Lower Silesian settlement.",
        "In September 2018, an Armia Krajowa banner and a double-sided commemorative plaque were found in the attic of St Catherine's church. The artefacts, hidden for decades, became a material trace of Popielówek's post-war memory — the memory of settlers, the underground and the fear of repression by the communist security apparatus.",
      ],
      chapBodies: [
        /* I — Hennersdorf and the Benedictine convent */
        [
          "The village most likely existed before 1307. Its roots probably reach back to the period of medieval colonisation under German law — a wave of settlement that shaped many villages in this part of Silesia during the 13th and 14th centuries. Henner — the name that gave the settlement its name — was presumably the first owner or founder. He left behind only that one syllable.",
          "Under the terms of the 1307 donation, the Benedictine convent in Lubomierz — the town was then called Liebenthal — received not only land but also income rights and authority over the inhabitants. For more than five hundred years it was the effective lord of Hennersdorf, binding the village to the rhythm of the monastic year: obligations, rents, jurisdiction.",
          "The village headman — the Schulze — had an old feudal duty: at every summons he was required to appear with a saddled horse. This was a personal obligation rooted in an order in which dependence expressed itself through bodily presence. In 1350 this duty was converted into an annual rent of half a mark. A small but significant change — it testifies to the gradual shift from personal service to monetary payment.",
          "In 1568, the Gerichtsbuch from Hain (Kamienica) — a court register kept for the surrounding villages — records the name of one of the first known inhabitants of Hennersdorf: Michel Friderich. One person, one name, one trace in the records. Yet it is precisely from such fragments that the archive of a village is assembled. The monastic dependency lasted until the secularisation of 1810 — and it was this dependency that, for more than five centuries, shaped the ownership structure, the customs and the bond of this village with Lubomierz.",
        ],
        /* II — Church of St Catherine of Alexandria */
        [
          "The church in Hennersdorf was from the outset connected to the Benedictine convent in Lubomierz — just like the village itself, whose history was intertwined with the monastic order for more than five hundred years. The earliest mention of the local church is linked to the 16th century; sources point to around 1559, though this date should be treated with caution. Whether it was a timber or a masonry structure is uncertain — the record remains ambiguous. What is known, however, is that the existing church preserves elements of an older structure that survived later rebuildings.",
          "In 1766–1767 the church received its Baroque form, which has survived to the present day. The tower, nave and furnishings from that period make up an interior that witnessed every important moment in the village's history: baptisms, weddings, funerals, prayers in wartime. The church was an important centre of religious life, connected to the parish structure of Wojciechów–Lubomierz, formerly Ullersdorf–Liebenthal. The oldest surviving registers — parish books recorded from 1666 — come from this very parish.",
          "Around the church stretches a cemetery that preserves its own layer of memory. The gravestones of former inhabitants — those that have survived — are silent witnesses of continuity and rupture. After 1945, when the village changed its language and its people, the cemetery became a place where two memories coexist without words.",
          "In the attic of St Catherine's church in 2018, an Armia Krajowa (Home Army) banner and a commemorative plaque were found, hidden there for decades after the war. The full story of this discovery belongs to Chapter VI, but already here the church appears not only as a place of prayer but also as a space of preserved memory.",
        ],
        /* III — The year 1945 and the broken continuity */
        [
          "In February 1945 the Eastern Front halted a few kilometres from the village. Hennersdorf was spared — the church, the cemetery, the roads, the buildings and the landscape remained almost intact. This physical survival made the rupture that followed a few months later all the more striking: the village had survived, but the community that had inhabited it for centuries ceased to exist.",
          "According to available records, in July 1945 — probably around 12 July — the German inhabitants were expelled from their homes. Before the war the village had counted around 286 residents. Within a few weeks it stood empty. People took only what they could carry. Houses, fields, tools, the cemetery — these remained.",
          "In the following months, especially in 1945 and 1946, Polish settlers began to arrive. Some came from central Poland, others from the former Kresy Wschodnie (Eastern Borderlands) — territories that after the war fell outside the borders of the new state. Some brought with them wartime experience, a past in the underground, a sense of loss not so very different from that carried by the expelled Germans. Each family brought its own memory into houses of someone else's memory.",
          "The change that took place in 1945 was not merely administrative. Language, names, customs and the sense of rootedness all changed. And yet something remained: the church, the cemetery, the layout of the fields, the roads, the shape of the village. Popielówek is a different place from Hennersdorf — and the same place. This archive tries to hold both truths.",
        ],
        /* IV — The post-war underground in Popielówek */
        [
          "Among the settlers who came to Popielówek after 1945 were former soldiers of the Armia Krajowa (Home Army, AK), the Narodowe Siły Zbrojne (National Armed Forces, NSZ) and the Bataliony Chłopskie (Peasant Battalions, BCh). They brought with them not only their belongings but also wartime experience, distrust of the new authorities and — in some cases — a readiness for continued resistance. The post-war landscape of scattered homesteads and new, still unrooted communities favoured the survival of underground networks that had already dissolved elsewhere.",
          "In May 1947 the activity of the Żandarmeria Sił Podziemnych (Gendarmerie of the Underground Forces) in Popielówek was documented — a structure connected to the resistance movement that continued after the formal dissolution of the AK. This organisation was linked to the circle of soldiers gathered around Major Henryk Flame 'Bartek', one of the last figures of the armed underground in Lower Silesia. The scale of local activity is not fully documented — the surviving traces are fragmentary.",
          "One of the specific individuals whose fate is connected to this milieu was Tadeusz Pietryka 'Sokół' (Falcon). Arrested by the security apparatus, sentenced to 15 years in prison, he served more than five years. His story is an example of the repression that befell many participants in the post-war underground — unknown to broader public memory, recorded only in court files and family accounts.",
          "The designation 'Wioska Żołnierzy Niezłomnych' (Village of Steadfast Soldiers) appears in later memory discourse as a label describing this part of Popielówek's history. It should be treated with caution: it is a category of memory, not a neutral historical description. A later material trace of this post-war layer of memory became the Armia Krajowa banner found in 2018 in the attic of St Catherine's church.",
        ],
        /* V — The PŁSD radar station */
        [
          "Construction of the installation began in 1979 and continued until around 1981. In military documents the project was known under the code name 'Zadanie 85290' (Task 85290). The station formed part of the Przeciwlotniczy System Dowodzenia — PŁSD (Anti-Aircraft Command System) — a network of radar and command installations that, under the Warsaw Pact, formed an integrated air-defence system for the Eastern Bloc. Popielówek, a quiet village in the Western Sudetes, became one of the nodes in this invisible infrastructure.",
          "The construction left its mark on the local landscape: access roads were upgraded, restricted zones were established, fences and technical buildings were erected. The military presence meant new neighbours — soldiers and civilian employees — whose daily life intersected with that of the village, though it rarely blended with it.",
          "The station was in operation for several years. The installation was probably decommissioned around 2000, although the exact date is uncertain — some sources point to 2002. After it ceased operation, the buildings began to fall into disrepair. Foundations, sections of fencing, the guardhouse and traces of graffiti from around 1999–2000 — what remained — entered the village landscape as another, unwanted layer left by Cold War infrastructure.",
          "The PŁSD radar station is a piece of history that rarely finds its way into local archives: military, classified, without a monument. And yet for two decades it shaped the daily life of Popielówek — unmarked on maps, present behind the fence.",
        ],
        /* VI — The Armia Krajowa banner found in 2018 */
        [
          "In September 2018, during renovation work in the attic of the Church of St Catherine of Alexandria in Popielówek, workers came across a banner wrapped in linen cloth and a commemorative plaque hidden nearby. The artefacts had lain undisturbed for decades — forgotten or deliberately concealed beyond the reach of official memory.",
          "The Armia Krajowa banner has two sides. On the obverse is an image of the Matka Boska Częstochowska (Black Madonna of Częstochowa) — an icon deeply rooted in the tradition of Polish Catholicism and wartime spirituality. On the reverse: the crowned eagle and the motto 'Bóg, Honor, Ojczyzna' (God, Honour, Fatherland), a symbol of independence formations for decades. It was no incidental object: AK banners were preserved with deliberate intent, often at the risk of one's life.",
          "The commemorative plaque is of an exceptional nature. It is double-sided — one face bears an inscription in German, commemorating the residents of Hennersdorf who fell in the First World War. The other face carries a Polish inscription, probably made by Polish settler-partisans around 1946. Two languages, two moments of mourning, one object — one of the very few material forms of the coexistence of two layers of memory in this region.",
          "The banner and the plaque were most probably hidden in 1946–1947, at a time when the communist security apparatus was systematically dismantling the structures of the post-war underground. Fear of the UB (Urząd Bezpieczeństwa, Security Office), of arrest and repression, prompted the covering of tracks. Who exactly hid these objects — the sources do not confirm this unambiguously. What is certain is only that someone decided to preserve them.",
          "The discovery fits into the wider context of local memory that the Instytut Pamięci Narodowej (Institute of National Remembrance, IPN), among others, has been working to reconstruct for years. The designation 'Wioska Żołnierzy Niezłomnych' (Village of Steadfast Soldiers), which appears in this discourse in reference to Popielówek, is a later category of memory — useful, but requiring caution. The history of these artefacts is itself complex enough to speak about without simplification.",
        ],
      ],
    },

    mj: {
      eyebrow: "Places", h2a: "Popielówek on the", h2b: "map of memory",
      locLabel: "Where Popielówek lies",
      locA: "Popielówek lies in the", locStrong1: "Lower Silesian",
      locB: " Voivodeship, in Lwówek County, in the municipality of Lubomierz. It formerly existed under the German name",
      locStrong2: "Hennersdorf", locC: ".",
      chips: ["Lower Silesia", "Lwówek County", "Lubomierz municipality", "59-623", "former Hennersdorf"],
      imgCaption: "Popielówek from above — the present-day landscape of old Hennersdorf.",
      mapLabel: "Location map", mapsLink: "View on Google Maps",
      mapNote: "An interactive map of memory sites, sources and photographs will be developed together with the archive.",
      mapClickHint: "Click to open the map", mapCollapse: "Collapse",
      layersTa: "A small village,", layersTb: "many layers",
      layers: [
        { title: "Kościół św. Katarzyny", desc: "The village's historical point of reference — the most enduring material trace of the former and present community.", tag: "point of reference" },
        { title: "Old Hennersdorf", desc: "The layer of the oldest history and the former German name, reaching back to medieval grants.", tag: "layer of memory" },
        { title: "The landscape of Popielówek", desc: "Fields, roads and panorama as the material continuity of the place — what survived the shifting of borders.", tag: "layer of memory" },
        { title: "The PŁSD radar station", desc: "A Cold War layer of history — a trace of a concealed military presence in the area.", tag: "pending source review" },
        { title: "Map of memory", desc: "An interactive index of places, sources and photographs tied to specific points in the village — developed together with the archive.", tag: "in preparation" },
      ],
    },

    zb: {
      eyebrow: "Monuments", h2a: "Traces that", h2b: "survived",
      sub: "Church, cemetery, wayside crosses and traces of wartime radar detection — each object has its own history and its own silence.",
      cards: [
        { kicker: "SACRED · 1581", title: "Kościół pw. św. Katarzyny", desc: "A brick parish church from the 16th century. Tower, nave and a Baroque altar. The bells were hidden during the Second World War and returned in 1947.", meta: "ul. Kościelna · open daily" },
        { kicker: "SEPULCHRAL", title: "Cemetery beside the church", desc: "Gravestones from the 18th to the 21st century — Polish and German names side by side. A doubled landscape of memory.", meta: "beside the church" },
        { kicker: "SACRED · ROADS", title: "Wayside crosses and shrines", desc: "More than a dozen crosses and shrines scattered across the fields and along the roads — a trace of both cultures that shaped the village.", meta: "map in preparation" },
        { kicker: "MILITARY · 1943–1944", title: "Traces of the PŁSD station", desc: "Foundations and aerial-visible traces of a radar-detection position from the Second World War.", meta: "location being studied" },
      ],
    },

    gl: {
      eyebrow: "Gallery & Archive", h2a: "Photographs and", h2b: "sources",
      caption: "Drone panorama · Popielówek · May 2025",
      note: "The photographic archive is being filled in gradually.",
      archEyebrow: "Source archive", archH3a: "Materials by", archH3b: "period",
      periods: [
        { name: "Earliest mentions", context: "from the 14th c. · Diocese of Wrocław", status: "being prepared" },
        { name: "Church and registers", context: "from 1581 · parish, baptisms, marriages", status: "being prepared" },
        { name: "19th and early 20th century", context: "Prussian cadastre, school, Silesian farmsteads", status: "being prepared" },
        { name: "Post-war memory", context: "1945–1950 · resettlements, new families", status: "being prepared" },
        { name: "Cold War and PŁSD", context: "1943–1989 · radar, military, silence", status: "being prepared" },
        { name: "Contemporary archive", context: "from 1990 · photographs, memories, drone images", status: "material being gathered" },
      ],
      growing: "The archive is being filled in gradually. The closer to the present day, the more surviving photographs, maps, notes and memories can be found.",
      car1: "Church of St Catherine", car2: "View of the village", car3: "Old Hennersdorf", car4: "Churchyard cemetery",
      car5: "Popielówek landscape", car6: "Archive — year 1945", car7: "PŁSD radar station", car8: "AK banner 2018",
      s1: { name: "St Catherine's Church",  desig: "16th c. · Sacred",         quote: "The most enduring material trace of Popielówek's past and present community." },
      s2: { name: "View of the village",    desig: "Contemporary · Landscape", quote: "Fields, paths and panorama as the material continuity of the place." },
      s3: { name: "Old Hennersdorf",        desig: "History · Archive",        quote: "The oldest layer of history, reaching back to medieval grants." },
      s4: { name: "Churchyard cemetery",    desig: "18th–19th c. · Memory",    quote: "Gravestones from three centuries — silent witnesses to the continuity of place." },
      s5: { name: "PŁSD Station",           desig: "1979–1989 · History",      quote: "A secret air-defence installation of People's Poland. Classified for decades." },
      s6: { name: "AK Banner",              desig: "2018 · Discovery",         quote: "After over seventy years of silence — found in the church attic." },
    },

    wd: {
      eyebrow: "Calendar", h2a: "Coming up", h2b: "in the village",
      dek: "Fairs, processions, quiet readings, gatherings of residents. Once dates are confirmed, announcements appear here.",
      stamp: "As of May 2026",
      title: "No events are currently scheduled.",
      body: "Events, announcements and local gatherings will be published here once they are confirmed.",
      noteA: "Have information about an event?", noteB: "Get in touch via the Contact section →",
    },

    kt: {
      eyebrow: "Contact", h2a: "Share", h2b: "your memory",
      p1: "If your family comes from Popielówek — or from old Hennersdorf — and you keep photographs, documents or memories, we want to preserve them.",
      p2: "Every gift, every name and every date enriches an archive meant to serve future generations.",
      closing: "This archive is built slowly — with every memory entrusted to it.",
      panelLabel: "How to submit materials",
      emailLabel: "E-mail", addrLabel: "Address",
      addr1: "Parish of St Catherine", addr2: "ul. Kościelna, Popielówek",
      soonLabel: "Submission form",
      soon: "The option to submit materials directly online will be available soon. Until then, please get in touch by e-mail.",
    },

    ft: {
      tag: "Digital archive and information service of the village of Popielówek / former Hennersdorf.",
      tag2: "Have a photo, a document, a memory or information about an event? Get in touch and help grow the archive.",
      cArchive: "Archive", cPlaces: "Village", cCommunity: "More",
      ftDesc: "Digital archive of Popielówek village — history, places, memory.",
      announcements: "Announcements", submit: "Submit material",
      rights: "All rights reserved.",
      signatureRole: "Design, development, page layout, editing and administration: Krzysztof Laubich.",
      legal1: "This site serves as a digital archive and information service for the village of Popielówek. The project is being developed and may be supplemented with new materials, events, announcements and local information.",
      legal2: "Archival materials, photographs, documents and memories remain the property of their authors, owners or source institutions, unless otherwise indicated.",
    },
  },
};
