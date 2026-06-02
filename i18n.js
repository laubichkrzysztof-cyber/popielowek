/* i18n core — tiny external store wired to React via useSyncExternalStore.
   No dependencies. Default PL, persisted to localStorage. Dictionary lives in i18n-dict.js. */
(function () {
  var LANGS = ["PL", "DE", "EN"];
  var KEY = "pop-lang";

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  var current = (stored && LANGS.indexOf(stored) >= 0) ? stored : "PL";
  try { document.documentElement.lang = current.toLowerCase(); } catch (e) {}

  var listeners = new Set();

  function getLang() { return current; }

  function setLang(l) {
    if (LANGS.indexOf(l) < 0 || l === current) return;
    current = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    try { document.documentElement.lang = l.toLowerCase(); } catch (e) {}
    listeners.forEach(function (fn) { fn(); });
  }

  /* Resolve a dotted key against the active table, falling back to PL, then the key itself. */
  function resolve(table, key) {
    if (!table) return undefined;
    var parts = key.split(".");
    var node = table;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  function t(key) {
    var DICT = window.I18N_DICT || {};
    var v = resolve(DICT[current], key);
    if (v == null) v = resolve(DICT.PL, key);
    return v == null ? key : v;
  }

  function subscribe(cb) {
    listeners.add(cb);
    return function () { listeners.delete(cb); };
  }

  function useI18n() {
    var lang = React.useSyncExternalStore(subscribe, getLang, getLang);
    return { lang: lang, setLang: setLang, t: t, langs: LANGS };
  }

  window.I18N = { getLang: getLang, setLang: setLang, t: t, subscribe: subscribe, LANGS: LANGS };
  window.useI18n = useI18n;
})();
