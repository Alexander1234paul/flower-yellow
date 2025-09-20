

let tiempo = 0;
const ctx = document.getElementById("canvas").getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear partículas y flores con Factory
const particles = Array.from({ length: 150 }, () => new Particle());
const flowers = [
  ...FlowerFactory.createRow(canvas.width/2 - 200, canvas.height/2 + 50, 4, 120, 0.8), // fila abajo
  ...FlowerFactory.createRow(canvas.width/2 - 120, canvas.height/2 - 50, 3, 120, 0.9)  // fila arriba
];

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tiempo++;

  particles.forEach(p => p.update());

  const sway = Math.sin(tiempo * 0.02) * 20;
  const pulse = Math.sin(tiempo * 0.05) * 5;

  flowers.forEach(f => f.draw(sway, pulse));

  requestAnimationFrame(animar);
}

animar();
