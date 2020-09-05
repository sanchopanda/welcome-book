const controlsBlock = document.querySelector(`.page-control`);
const controlWrapper = document.querySelector(`.page-control__wrapper`);
const controlItems = controlWrapper.querySelectorAll(`.page-control__item`);

function getTranslateX(elem) {
  var style = window.getComputedStyle(elem);
  return new WebKitCSSMatrix(style.webkitTransform).m41;
}

export function scrollControls() {
  controlItems.forEach((control) => {
    if (control.classList.contains(`active`)) {
      const controlsBlockPosX = controlsBlock.getBoundingClientRect().left;
      const controlPosX = control.getBoundingClientRect().left;
      let relativePos = controlPosX - controlsBlockPosX;
      const currentPos = getTranslateX(controlWrapper);


      let shift = 0;

      if(relativePos > 0) {
        requestAnimationFrame(function scroll() {
       
          controlWrapper.setAttribute(
            `style`,
            `transform: translateX(${currentPos - shift}px)`
          );
          shift = shift + 10;
  
          if (shift < relativePos) requestAnimationFrame(scroll);
        });
      } else {
        requestAnimationFrame(function scroll() {
          controlWrapper.setAttribute(
            `style`,
            `transform: translateX(${currentPos + shift}px)`
          );
          shift = shift + 10;
  
          if (shift <= -relativePos) requestAnimationFrame(scroll);
        });
      }     
    }
  });
}
