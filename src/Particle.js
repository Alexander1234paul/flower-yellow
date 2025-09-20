class Particle extends Drawable {
  constructor() { super(); this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 200;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random();
    this.speedY = Math.random() * 0.5 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,180,${this.opacity})`;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.y -= this.speedY;
    if (this.y < -10) this.reset();
    this.draw();
  }
}
