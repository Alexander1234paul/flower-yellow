class GrassFactory {
  static createGrass(type) {
    const wrapper = document.createElement("div");
    wrapper.className = "growing-grass";

    const grass = document.createElement("div");
    grass.className = `flower__grass flower__grass--${type}`;

    const top = document.createElement("div");
    top.className = "flower__grass--top";
    const bottom = document.createElement("div");
    bottom.className = "flower__grass--bottom";

    grass.appendChild(top);
    grass.appendChild(bottom);

    // hojas de césped
    const maxLeaves = 8; 
    for (let i = 1; i <= maxLeaves; i++) {
      const leaf = document.createElement("div");
      leaf.className = `flower__grass__leaf flower__grass__leaf--${i}`;
      grass.appendChild(leaf);
    }

    // overlay
    const overlay = document.createElement("div");
    overlay.className = "flower__grass__overlay";
    grass.appendChild(overlay);

    wrapper.appendChild(grass);
    return wrapper;
  }
}
