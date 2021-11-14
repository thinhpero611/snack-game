const hover = document.querySelector('.hover');
const close = document.querySelector('.close');
const exist = document.querySelector('.exist');

function openLightBox() {
	hover.style.display = 'block';
	close.style.display = 'flex';
}

exist.addEventListener('click', () => {
	hover.style.display = 'none';
	close.style.display = 'none';
})