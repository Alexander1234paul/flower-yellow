class FlowerFactory {
  static createFlower(type) {
    const flower = document.createElement("div");
    flower.className = `flower flower--${type}`;

    // 🌼 Pétalos
    const leafs = document.createElement("div");
    leafs.className = `flower__leafs flower__leafs--${type}`;
    for (let i = 0; i < 12; i++) {
      const petal = document.createElement("div");
      petal.className = "flower__leaf";
      petal.style.transform = `translate(-50%, -10%) rotate(${i * 30}deg)`;
      leafs.appendChild(petal);
    }

    // 🌻 Centro
    const center = document.createElement("div");
    center.className = "flower__white-circle";
    leafs.appendChild(center);

    // 🌰 Semillas
    for (let i = 1; i <= 8; i++) {
      const seed = document.createElement("div");
      seed.className = `flower__light flower__light--${i}`;
      leafs.appendChild(seed);
    }

    // 🌿 Tallo
    const line = document.createElement("div");
    line.className = "flower__line";
    for (let i = 1; i <= 4; i++) {
      const leaf = document.createElement("div");
      leaf.className = `flower__line__leaf flower__line__leaf--${i}`;
      line.appendChild(leaf);
    }

    flower.appendChild(leafs);
    flower.appendChild(line);

    return flower;
  }
}
