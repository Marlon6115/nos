
export const contact = () => {
  const track = document.getElementById("poster-carousel");
  const DURATION = 25;

  function setupInfiniteCarousel() {
    console.log("Setting up infinite carousel");
    if (!track) return;

    const allPosters = Array.from(track.children);

    const originalSetLength = allPosters.length / 2;

    let displacement = 0;

    allPosters.slice(0, originalSetLength).forEach((poster) => {
      displacement += poster.offsetWidth;
    });

    const keyframes = `
    @keyframes scrollX {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${displacement}px); }
    }
  `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    track.style.animation = `scrollX ${DURATION}s linear infinite`;

    track.style.width = `${displacement * 2}px`;
    track.style.display = "flex";
  }
  setupInfiniteCarousel();
};
