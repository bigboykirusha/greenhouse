var btn = document.getElementById('btn');
var btnRU = document.getElementById('btnRU');
var btnEN = document.getElementById('btnEN');

function leftClick() {
  btn.style.left = '0';
  btnEN.classList.add('active');
  btnRU.classList.remove('active');
}

function rightClick() {
  btn.style.left = '52px';
  btnRU.classList.add('active');
  btnEN.classList.remove('active');
}
