(function () {
  // Contact form: compose an email in the visitor's own mail app.
  // Nothing is sent to or stored by this site.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var get = function (key) { return String(data.get(key) || '').trim(); };
      var subject = 'Portfolio enquiry: ' + get('topic') + ' (' + get('name') + ')';
      var lines = [
        get('message'),
        '',
        'Name: ' + get('name'),
        'Email: ' + get('email')
      ];
      if (get('company')) lines.push('Company: ' + get('company'));
      window.location.href = form.getAttribute('action') +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }

  // Reveal blocks as they scroll into view. Content stays visible without JS.
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
