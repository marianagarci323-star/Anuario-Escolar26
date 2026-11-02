document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // --- CONTROL DE PÁGINAS DEL LIBRO ---
  const papers = Array.from(document.querySelectorAll(".paper"));
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const pageIndicator = document.getElementById("page-indicator");

  let currentPaperIndex = 0;

  function updateBookState() {
    papers.forEach((paper, index) => {
      if (index < currentPaperIndex) {
        paper.classList.add("flipped");
        paper.style.zIndex = index + 1;
      } else {
        paper.classList.remove("flipped");
        paper.style.zIndex = papers.length - index;
      }
    });

    pageIndicator.textContent = `Hoja ${currentPaperIndex + 1} de ${papers.length}`;
  }

  btnNext.addEventListener("click", () => {
    if (currentPaperIndex < papers.length) {
      currentPaperIndex++;
      updateBookState();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentPaperIndex > 0) {
      currentPaperIndex--;
      updateBookState();
    }
  });

  // --- GUARDADO DE TEXTOS ---
  const btnSave = document.getElementById("btn-save");

  btnSave.addEventListener("click", () => {
    alert("¡Los textos del anuario han sido guardados con éxito!");
  });
});