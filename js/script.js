var toggleButton = document.querySelector('.tgl-btn');
var navBar = document.querySelector('.hdr-wrp');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});