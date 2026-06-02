/* Icons — thin-stroke Lucide-style set, drawn inline as SVG so no CDN dep.
   stroke-width 1.25 / 1.5 · linecap round · 22px default · gold-200 on hover. */

const Icon = ({ name, size = 22, stroke = 1.5, ...rest }) => {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
    ...rest,
  };
  switch (name) {
    case "arrow-right":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "arrow-up-right":
      return <svg {...common}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case "menu":
      return <svg {...common}><path d="M3 7h18M3 12h18M3 17h18"/></svg>;
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case "map-pin":
      return <svg {...common}><path d="M12 22s-7-6-7-12a7 7 0 1 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case "church":
      return <svg {...common} viewBox="0 0 28 32" strokeWidth="1">
        {/* tower */}
        <rect x="10" y="10" width="8" height="18" rx=".5"/>
        {/* cross */}
        <line x1="14" y1="2" x2="14" y2="8"/>
        <line x1="11.5" y1="5" x2="16.5" y2="5"/>
        {/* spire */}
        <path d="M10 10 L14 4 L18 10"/>
        {/* door */}
        <path d="M12 28 L12 23 A2 2 0 0 1 16 23 L16 28"/>
        {/* window */}
        <circle cx="14" cy="16" r="1.5"/>
        {/* nave left */}
        <rect x="3" y="18" width="7" height="10" rx=".5"/>
        <path d="M3 18 L6.5 14 L10 18"/>
        {/* nave right */}
        <rect x="18" y="18" width="7" height="10" rx=".5"/>
        <path d="M18 18 L21.5 14 L25 18"/>
      </svg>;
    case "compass":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m14.5 9.5-2 5-5 2 2-5 5-2z"/></svg>;
    case "book-open":
      return <svg {...common}><path d="M3 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/></svg>;
    case "camera":
      return <svg {...common}><path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/></svg>;
    case "leaf":
      return <svg {...common}><path d="M11 20A7 7 0 0 1 4 13c0-2 .5-5 2-8 3-1 6-1 9-1a7 7 0 0 1 0 14c-2 0-3-.5-4-1z"/><path d="M2 22 11 13"/></svg>;
    case "play":
      return <svg {...common}><path d="M6 4v16l14-8z"/></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "instagram":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>;
    case "facebook":
      return <svg {...common}><path d="M16 8h-3a1 1 0 0 0-1 1v3H9v3h3v6h3v-6h2.5l.5-3H15V10c0-.6.4-1 1-1h2V6h-2z"/></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>;
    case "trees":
      return <svg {...common}><path d="M17 14l-5-9-5 9h3l-3 5h4v3h2v-3h4l-3-5h3z"/></svg>;
    case "radar":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/><path d="M12 3v4M21 12h-4M12 21v-4M3 12h4"/></svg>;
    case "map":
      return <svg {...common}><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><path d="M9 3v15M15 6v15"/></svg>;
    case "grave":
      return <svg {...common}><rect x="6" y="8" width="12" height="13" rx="1"/><path d="M12 5V3M9 5h6M9 13h6"/></svg>;
    case "cross":
      return <svg {...common}><path d="M12 3v18M3 12h18"/></svg>;
    case "book-2":
      return <svg {...common}><path d="M4 4h8a3 3 0 0 1 0 6H4V4z"/><path d="M4 10h9a3 3 0 0 1 0 6H4V10z"/></svg>;
    case "book":
      return <svg {...common}><path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M8 4v16M11 9h5M11 13h5"/></svg>;
    case "archive":
      return <svg {...common}><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>;
    case "folder":
      return <svg {...common}><path d="M3 5h7l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
