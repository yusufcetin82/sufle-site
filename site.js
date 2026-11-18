// The address is never written into the page: it is put together only when
// the link is clicked, so harvesters reading the HTML do not find it.
// The link text comes from the page (data-label), so each language sets its own.
document.querySelectorAll('.eposta').forEach(function (el) {
  var link = document.createElement('a');
  link.href = '#';
  link.textContent = el.dataset.label;
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var flip = function (s) { return s.split('').reverse().join(''); };
    window.location.href = 'mailto:' + flip(el.dataset.a) + '@' + flip(el.dataset.b) + '?subject=Sufle';
  });
  el.appendChild(link);
});
