// Site-wide search: fetches /assets/search-index.json once, then does a fast
// client-side filter. Works from any page depth because all URLs in the
// index and all links here are root-relative.
(function () {
  var INDEX_URL = '/assets/search-index.json';
  var indexPromise = null;

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(INDEX_URL).then(function (r) { return r.json(); }).catch(function () { return []; });
    }
    return indexPromise;
  }

  function score(entry, terms) {
    var title = entry.title.toLowerCase();
    var desc = (entry.desc || '').toLowerCase();
    var s = 0;
    terms.forEach(function (t) {
      if (!t) return;
      if (title === t) s += 100;
      else if (title.indexOf(t) === 0) s += 40;
      else if (title.indexOf(t) !== -1) s += 20;
      else if (desc.indexOf(t) !== -1) s += 5;
    });
    return s;
  }

  function search(list, query) {
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return list
      .map(function (e) { return { entry: e, s: score(e, terms) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, 12)
      .map(function (r) { return r.entry; });
  }

  var KIND_LABEL = {
    'page': 'Page', 'tool': 'Tool', 'term': 'Glossary', 'upsc-topic': 'UPSC', 'article': 'Article'
  };

  function buildDropdown(container) {
    var dd = document.createElement('div');
    dd.className = 'site-search-results';
    dd.hidden = true;
    container.appendChild(dd);
    return dd;
  }

  function renderResults(dd, results) {
    dd.innerHTML = '';
    if (!results.length) {
      dd.hidden = true;
      return;
    }
    results.forEach(function (r) {
      var a = document.createElement('a');
      a.href = r.url;
      a.className = 'site-search-item';
      a.innerHTML =
        '<span class="site-search-kind">' + (KIND_LABEL[r.kind] || 'Page') + '</span>' +
        '<span class="site-search-text"><strong>' + escapeHtml(r.title) + '</strong>' +
        (r.desc ? '<small>' + escapeHtml(r.desc) + '</small>' : '') + '</span>';
      dd.appendChild(a);
    });
    dd.hidden = false;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function wireSearchBox(input, dd) {
    var list = null;
    loadIndex().then(function (l) { list = l; });

    input.addEventListener('input', function () {
      var q = input.value.trim();
      if (!list || q.length < 2) {
        dd.hidden = true;
        return;
      }
      renderResults(dd, search(list, q));
    });

    input.addEventListener('focus', function () {
      if (input.value.trim().length >= 2 && dd.children.length) dd.hidden = false;
    });

    document.addEventListener('click', function (e) {
      if (!dd.contains(e.target) && e.target !== input) dd.hidden = true;
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { dd.hidden = true; input.blur(); }
    });
  }

  function injectTopbarSearch() {
    var nav = document.querySelector('[data-hud-nav]');
    if (!nav || document.querySelector('.hud-search')) return;

    var wrap = document.createElement('div');
    wrap.className = 'hud-search';
    wrap.innerHTML =
      '<input type="text" class="hud-search-input" placeholder="Search RahulX..." aria-label="Search RahulX" autocomplete="off">';
    nav.appendChild(wrap);

    var input = wrap.querySelector('.hud-search-input');
    var dd = buildDropdown(wrap);
    wireSearchBox(input, dd);
  }

  document.addEventListener('DOMContentLoaded', injectTopbarSearch);

  // Expose for pages (like the homepage) that want to wire their own search box.
  window.RahulXSearch = { loadIndex: loadIndex, search: search, wireSearchBox: wireSearchBox, renderResults: renderResults, buildDropdown: buildDropdown };
})();
