const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numberOfDrops = 100;
const drops = [];

for (let i = 0; i < numberOfDrops; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 5 + 5
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = drops[i];
        ctx.fillStyle = drop.color;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size, 0, 2 * Math.PI);
        ctx.fill();

        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = 0;
        }
    }

    requestAnimationFrame(draw);
}

draw();
