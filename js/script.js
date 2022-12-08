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
        size: Math.random() * 6 + 2,
        speed: Math.random() * 5 + 10
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

        // 画面下端に到達した時、雨粒の位置を初期化し、雨粒の落下速度をランダムに変化させる
        if (drop.y > canvas.height) {
            drop.y = 0;
            drop.speed = Math.random() * 5 + 10;
        }
    }

    requestAnimationFrame(draw);
}

draw();
