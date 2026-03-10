console.log("Site TRI07 chargé");

// nettoyage URL
if (window.location.pathname.endsWith("/index.html")) {
  const cleanPath = window.location.pathname.replace("index.html","");
  window.history.replaceState(null, "", cleanPath);
}

/* chargement des html */

fetch("/includes/header.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("header-placeholder").innerHTML = data;

    initMenu(); // on initialise le menu APRES injection

  });

fetch("/includes/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });


function initMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("menu-overlay");

  if (!hamburger) return;

  function closeMenu() {
    navMenu.classList.remove("open");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
  }

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    navMenu.classList.toggle("open");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
      closeMenu();
    }
  });
}