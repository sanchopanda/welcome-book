

export function scaleHtml() {

    function adjustTexts(breakPoint) {
      let DocWidth = window.innerWidth;
      if (DocWidth < breakPoint) {
        let ratio = DocWidth / breakPoint;
        let html = document.querySelector('html');
        html.dataset.originaFsize = 10;
    
    
        let newFsize = html.dataset.originaFsize * ratio;
        html.style.fontSize = `${newFsize}px`;
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
        
    let breakPoint = 3360;
 
    adjustTexts(breakPoint);
  
    window.addEventListener('resize', () => {
      adjustTexts(breakPoint);
    })  
  });
 
};
