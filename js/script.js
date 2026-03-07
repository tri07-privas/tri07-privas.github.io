
console.log("Site TRI07 chargé");

// Si l'URL contient index.html, rediriger vers la racine
if (window.location.pathname.endsWith('/index.html')) {
    const cleanPath = window.location.pathname.replace('index.html', '');
    window.history.replaceState(null, '', cleanPath); // Change l'URL sans recharger
}