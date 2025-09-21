class StarFactory {
  static createStar() {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.top = Math.random() * 60 + "%";
    star.style.animationDelay = "0s";
    star.style.animationDuration = (Math.random() * 1.5 + 2) + "s";
    return star;
  }
}
