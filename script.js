Telegram.WebApp.ready();
Telegram.WebApp.expand();

var photoWrap = document.getElementById('photoWrap');
var hotspot = document.getElementById('hotspot');
var reveal = document.getElementById('reveal');

hotspot.addEventListener('click', function () {
  photoWrap.classList.add('hide');
  reveal.classList.add('show');
  reveal.style.pointerEvents = 'auto';
});
