const canvas = document.getElementById('monCanvas');
const ctx = canvas.getContext('2d');

// Décalage de l'ombre selon X et Y
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
// Etendue du flou
ctx.shadowBlur = 4;
// Couleur de l'ombre
ctx.shadowColor = 'black';


ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 100);

ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 250);
ctx.lineTo(400, 250);
ctx.lineTo(500, 150);
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = 'blue';
ctx.clearRect(100, 100, 300, 300);
ctx.stroke();

ctx.fillStyle = 'cyan';
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.rect(500, 300, 90, 90);
ctx.rect(450, 250, 90, 90);
ctx.lineWidth = 10;
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(50, 350, 40, 1.5*Math.PI, Math.PI);
ctx.stroke();

const msg = '20°C';
ctx.lineWidth = 2;
ctx.font = '48px sans-serif';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
const coordY = 170;
const coordX = 240;
ctx.strokeText(msg, coordX, coordY);
ctx.fillText(msg, coordX, coordY);

const image = new Image();
image.src = "images.png";
image.onload = function() {
	ctx.drawImage(this, 250, 290, 100, 100);
};