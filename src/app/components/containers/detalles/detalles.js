export const detallesScript = () => {
  const overlay = document.getElementById("modal-overlay");
  const card = document.getElementById("product-card");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  openModalBtn.onclick = (text) => {
    console.log(text);
    overlay.classList.remove("hidden");
    setTimeout(() => {
      card.classList.remove("scale-95", "opacity-0");
      card.classList.add("scale-100", "opacity-100");
    }, 10);
  };
  closeModalBtn.onclick = () => {
    card.classList.remove("scale-100", "opacity-100");
    card.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  };
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
};
