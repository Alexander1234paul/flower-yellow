class Flower extends Drawable {
  constructor(x, y, scale) {
    super();
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.stem = new Stem(200);
    this.leaves = [
      new Leaf(-40, 120, -0.5, 60),
      new Leaf(40, 140, 0.5, 60)
    ];
    this.petals = [];
    for (let i = 0; i < 5; i++) {
      this.petals.push(new Petal((Math.PI * 2 / 5) * i, 80));
    }
  }
  draw(sway, pulse) {
    ctx.save();
    ctx.translate(this.x + sway, this.y);
    ctx.scale(this.scale, this.scale);

    this.stem.draw(0, 0, sway);
    this.leaves.forEach(l => l.draw(sway));
    this.petals.forEach(p => p.draw(0, 0, pulse));

    // centro brillante
    const gradCenter = ctx.createRadialGradient(0, 0, 2, 0, 0, 40);
    gradCenter.addColorStop(0, "#FFD700");
    gradCenter.addColorStop(1, "#FF8C00");
    ctx.beginPath();
    ctx.fillStyle = gradCenter;
    ctx.shadowColor = "#FFD700";
    ctx.shadowBlur = 40;
    ctx.arc(0, 0, 22, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}
