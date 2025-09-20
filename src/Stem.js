class Stem extends Drawable {
  constructor(height) {
    super();
    this.height = height;
  }
  draw(x, y, sway) {
    ctx.beginPath();
    const gradStem = ctx.createLinearGradient(x, y, x, y + this.height);
    gradStem.addColorStop(0, "#2e8b57");
    gradStem.addColorStop(1, "#013220");
    ctx.strokeStyle = gradStem;
    ctx.lineWidth = 5;
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + sway, y + this.height / 2, x, y + this.height);
    ctx.stroke();
  }
}
