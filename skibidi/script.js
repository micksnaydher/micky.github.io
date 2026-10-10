  const sfondo = document.getElementById("cuori");

    for (let i = 0; i < 40; i++) {
      const cuore = document.createElement("span");

      cuore.className = "cuore";
      cuore.textContent = "♥️";
      cuore.style.left = Math.random() * 100 + "vw";
      cuore.style.fontSize = (15 + Math.random() * 25) + "px";
      cuore.style.animationDuration = (4 + Math.random() * 6) + "s";
      cuore.style.animationDelay = (-Math.random() * 10) + "s";

      sfondo.appendChild(cuore);
    }