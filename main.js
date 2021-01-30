const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

var gravity = false;
var velocidadeCactus = 1;
let position = 0;
function jump(event) {
	if (event.keyCode == 32 && !gravity) {
		gravity = true;
		let upInterval = setInterval(() => {
			if (position >= 140) {
				clearInterval(upInterval);
				let downInterval = setInterval(() => {
					if (position <= 0) {
						gravity = false;
						clearInterval(downInterval);
					}
					else
						position -= 10;
					dino.style.bottom = position + 'px';
				},20);
			}
			else
				position += 10;
			dino.style.bottom = position + 'px';
		}, 20);
	}
}

document.addEventListener('keypress', jump);
createCactus();
function createCactus() {
	const cactus = document.createElement('div');
	var cactusPosition = 1000;
	let randomTime = Math.random() * 6000;
	cactus.classList.add('cactus');
	cactus.style.left = 1000 + 'px';
	background.appendChild(cactus);
	let leftInterval = setInterval(() => {
		cactusPosition -= 10 * velocidadeCactus;
		cactus.style.left = cactusPosition + "px";
		if (cactusPosition <= -60) {
			clearInterval(leftInterval);
			background.removeChild(cactus);
		} else if (cactusPosition > -60 && cactusPosition < 60 && position < 60) {
			document.body.innerHTML = "<h1 class='game-over'>Game Over<h1>";
		}
	}, 20);
	setTimeout(createCactus, randomTime);
}

function moveCactus() {

}

function paralax() {

}