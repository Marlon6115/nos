export const faq = () => {
  const accordionButton = document.querySelectorAll(".btn-question");
  accordionButton.forEach((button) => {
    let initialState = false;
    const questionItem = document.getElementById(`desc-${button.id}`);
    const fixedHeight = questionItem.offsetHeight;
    questionItem.style.height = "0px";
    button.onclick = () => {
      const questionImg = button.querySelector(".question-img");
      if (initialState) {
        questionItem.style.height = "0px";
        questionImg.style.transform = "rotate(-180deg)";
      } else {
        questionItem.style.height = fixedHeight + "px";
        questionImg.style.transform = "rotate(0)";
      }
      initialState = !initialState;
    };
  });
};
