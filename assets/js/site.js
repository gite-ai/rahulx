// Shared site behavior: mobile nav toggle + live UTC/local clock (optional targets)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-hud-toggle]');
  var nav = document.querySelector('[data-hud-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (window.innerWidth > 860) return;
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  var clock = document.getElementById('hud-clock');
  if (clock) {
    function tick() {
      var now = new Date();
      clock.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) +
        ' — ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    tick();
    setInterval(tick, 1000);
  }
});
