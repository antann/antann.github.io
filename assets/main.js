/* Composizione all'apertura: la colonna di destra "impagina"
   subito dopo il caricamento. Nessuna dipendenza esterna. */
(function () {
  var attiva = function () {
    document.body.classList.add("composta");
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      requestAnimationFrame(attiva);
    });
  } else {
    requestAnimationFrame(attiva);
  }
})();
