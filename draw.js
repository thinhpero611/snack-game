const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
	snake = new Snake();
	fruit = new Fruit();
	fruit.pickLocation();
	speed = 100;
	
	let myVar = setInterval(() =>{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		fruit.draw();
		snake.update();
		snake.draw();
		document.querySelector('.score').textContent = snake.total * 120;
		if (snake.eat(fruit)) {
			fruit.pickLocation();
		}
		if (snake.edge()) {
			openLightBox();
			clearInterval(myVar);
		}
	}, speed);

	function clear() {
		clearInterval(myVar);
	}
	document.querySelector('.stop').onclick = clear;
}());

window.addEventListener('keydown', (event) => {
	const direction = event.key.replace('Arrow', '');
	console.log(direction);
	snake.changeDirection(direction);
});
