export const techScript = () => {
  const slider = document.querySelector(".slide");
  const customHeight = document.querySelector(".active");
  const slides = Array.from(slider.children);
  const tituloDiv = document.querySelector(".title-tech");
  const descDiv = document.querySelector(".desc-tech");
  const btnNext = document.querySelector(".btnNext");
  const btnPrev = document.querySelector(".btnPrev");

  const dataTech = [
    {
      title: "Calidad de sonido",
      desc: "Impulsado por innovación y diseño, NOS te sumerge en un sonido puro y equilibrado que se ajusta a tu ambiente, redefiniendo la forma en que escuchas tu mundo.",
    },
    {
      title: "Cancelación de ruido",
      desc: "NOS utiliza un sistema inteligente de cancelación de ruido que analiza tu entorno en tiempo real y ajusta el sonido para ofrecer una experiencia auditiva limpia, profunda y sin interferencias",
    },
    {
      title: "Larga duración de batería",
      desc: "Con una batería de larga duración, NOS te acompaña durante todo el día sin interrupciones. Disfruta de horas continuas de música, llamadas y concentración con un rendimiento confiable que se adapta a tu ritmo.",
    },
    {
      title: "Resistencia al agua y al sudor",
      desc: "Ni la lluvia ni el esfuerzo detienen tu ritmo. Con su resistencia al agua y al sudor, NOS está hecho para seguirte en cada paso, manteniendo la música viva donde quiera que estés.",
    },
  ];
  tituloDiv.textContent = dataTech[0].title;
  descDiv.textContent = dataTech[0].desc;
  const mobile = window.innerWidth <= 900;
  let index = mobile ? 0 : 1;
  mobile && slides.shift();
  slider.style.height !== 0 && !mobile
    ? (slider.style.height = customHeight.offsetHeight + "px")
    : mobile &&
      (slider.style.height =
        customHeight.offsetHeight + slides[0].offsetHeight + 20 + "px");
  function updateActive() {
    slides.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  document.querySelector(".btnNext").onclick = () => {
    if (index >= slides.length - 1) return;
    if (index >= slides.length - 2) btnNext.classList.remove("btn-tech-active");
    index = Math.min(index + 1, slides.length - 1);
    updateActive();
    btnPrev.classList.add("btn-tech-active");
    updateTextContent();
    slides[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };
  document.querySelector(".btnPrev").onclick = () => {
    if (index <= (mobile ? 0 : 1)) return;
    if (index <= (mobile ? 1 : 2)) btnPrev.classList.remove("btn-tech-active");

    btnNext.classList.add("btn-tech-active");
    index = Math.max(index - 1, 0);
    updateActive();
    updateTextContent();
    slides[index - 1].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: mobile ? "end" : "nearest",
    });
  };
  function updateTextContent() {
    const data = dataTech[index - (mobile ? 0 : 1)];
    const container = document.querySelector(".tech-resume");
    if (data) {
      container.classList.add("tech-resume-gonna-change");

      setTimeout(() => {
        tituloDiv.textContent = data.title;
        descDiv.textContent = data.desc;
        container.classList.remove("tech-resume-gonna-change");
      }, 400);
    }
  }
};
