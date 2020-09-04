const controlWrapper = document.querySelector(`.page-control__wrapper`);
const controls = controlWrapper.querySelectorAll(`.page-control__item`);

export function scrollControls() {
  controls.forEach((control) => {
    if (control.classList.contains(`active`)) {
      const controlWrapperPosX = controlWrapper.getBoundingClientRect().left;
      const controlPosX = control.getBoundingClientRect().left;
      let relativePos = controlPosX - controlWrapperPosX;

      controlWrapper.setAttribute(
        `style`,
        `transform: translateX(-${relativePos}px)`
      );
    }
  });
}
