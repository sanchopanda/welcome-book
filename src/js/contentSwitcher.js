const alltoggleList = document.querySelectorAll(
  "[data-content-slider-controls]"
);

export function contentSwitcher() {
  alltoggleList.forEach((toggleList) => {
    toggleList.addEventListener("click", (e) => {
      let target = e.target.closest("[data-control]"); 

      if (!target) return; 

      if (
        target.hasAttribute("data-control") &&
        !target.classList.contains("active")
      ) {
        const slideId = target.dataset.control;

        const slider = document.querySelector(
          `[data-content-slider='${toggleList.dataset.contentSliderControls}']`
        );

        const targetSlide = slider.querySelector(`#${slideId}`);

        slider.querySelector(`.active`).classList.remove("active");
        targetSlide.classList.add("active");
        toggleList.querySelector('.active[data-control]').classList.remove('active');
        target.classList.add("active");
      }
    });
  });
}
