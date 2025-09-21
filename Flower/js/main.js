window.onload = () => {
  const flowersContainer = document.querySelector(".flowers");
  const starsContainer = document.querySelector(".shooting-stars");

  // 🌻 Crear 5 flores
  for (let i = 1; i <= 5; i++) {
    flowersContainer.appendChild(FlowerFactory.createFlower(i));
  }

  // 🌱 Crear 10 pastos
  for (let i = 1; i <= 10; i++) {
    flowersContainer.appendChild(GrassFactory.createGrass(i));
  }

  // 🌠 Crear estrellas fugaces aleatorias
  function spawnStar() {
    const star = StarFactory.createStar();
    starsContainer.appendChild(star);
    setTimeout(() => star.remove(), 4000);
  }

  setInterval(() => {
    if (Math.random() > 0.3) spawnStar();
  }, Math.random() * 5000 + 3000);

  // Animaciones activas
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);
};
