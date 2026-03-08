console.log("Site TRI07 chargé");

// nettoyage URL
if (window.location.pathname.endsWith("/index.html")) {
  const cleanPath = window.location.pathname.replace("index.html","");
  window.history.replaceState(null,"",cleanPath);
}

/* chargement du header */

fetch("/includes/header.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("header-placeholder").innerHTML = data;

    initMenu(); // on initialise le menu APRES injection

  });


function initMenu() {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("menu-overlay");

  if (!hamburger) return;

  hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("open");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");

  });

  overlay.addEventListener("click", () => {

    navMenu.classList.remove("open");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");

  });

  document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("open");
      hamburger.classList.remove("active");
      overlay.classList.remove("active");

    });

  });

}