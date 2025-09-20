class FlowerFactory {
  static createRow(x, y, count, spacing, scale) {
    const row = [];
    for (let i = 0; i < count; i++) {
      row.push(new Flower(x + i * spacing, y, scale));
    }
    return row;
  }
}
