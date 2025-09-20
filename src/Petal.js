class Petal extends Drawable {
  constructor(angle, size) {
    super();
    this.angle = angle;
    this.size = size;
  }
  draw(x, y, pulse) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(this.angle);

    const grad = ctx.createRadialGradient(0, -this.size * 0.3, 5, 0, -this.size * 0.3, this.size + pulse);
    grad.addColorStop(0, "rgba(255,255,220,0.95)");
    grad.addColorStop(1, "rgba(255,215,0,0.2)");

    ctx.fillStyle = grad;
    ctx.shadowColor = "rgba(255,255,200,0.8)";
    ctx.shadowBlur = 15;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(this.size * 0.6, -this.size * 0.3, this.size * 0.6, -this.size, 0, -this.size);
    ctx.bezierCurveTo(-this.size * 0.6, -this.size, -this.size * 0.6, -this.size * 0.3, 0, 0);
    ctx.fill();

    ctx.restore();
  }
}
