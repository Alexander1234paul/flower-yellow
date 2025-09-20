class Leaf extends Drawable {
  constructor(x, y, angle, size) {
    super();
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.size = size;
  }
  draw(sway) {
    ctx.save();
    ctx.translate(this.x + sway * 0.2, this.y);
    ctx.rotate(this.angle);

    const gradLeaf = ctx.createLinearGradient(0, 0, this.size, this.size);
    gradLeaf.addColorStop(0, "#32CD32");
    gradLeaf.addColorStop(1, "#006400");

    ctx.fillStyle = gradLeaf;
    ctx.shadowColor = "#32CD32";
    ctx.shadowBlur = 10;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(this.size, -this.size / 2, 0, -this.size);
    ctx.quadraticCurveTo(-this.size, -this.size / 2, 0, 0);
    ctx.fill();

    ctx.restore();
  }
}
