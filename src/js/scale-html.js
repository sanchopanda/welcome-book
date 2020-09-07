export function scaleHtml() {
  function adjustTexts(breakPoint) {
    let DocWidth = window.innerWidth;
    if (DocWidth < breakPoint) {
      let ratio = DocWidth / breakPoint;
      let html = document.querySelector("html");

      if (DocWidth < 768) {
        ratio = DocWidth / 1125;
        html.dataset.originaFsize = 10;
      } else {
        ratio = DocWidth / breakPoint;
        html.dataset.originaFsize = 10;
      }

      let newFsize = html.dataset.originaFsize * ratio;
      html.style.fontSize = `${newFsize}px`;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let breakPoint = 3360;

    adjustTexts(breakPoint);

    window.addEventListener("resize", () => {
      adjustTexts(breakPoint);
    });
  });
}

/*
$(document).ready(function() {

    // Считаем, что момент, когда надо уменьшать шрифт, это если экран стал меньше чеи размер контента
    // Запоминаем максимальный размер конетна
    let breakPoint = parseFloat( $($(".container")[1]).css('max-width') );

    // При загрзке настраиваем шрифты
    adjustTexts(breakPoint);

    // При изменении размера окна тоже перенастраиваем размеры шрифтов
    $(window).on('resize', function() {

        adjustTexts(breakPoint);

    });

});

function adjustTexts(breakPoint) {
    var DocWidth = $(window).width();
    // Если ширина документа меньше размер контета (то что запоминали вначале)
    if (DocWidth < breakPoint) {

        // Вычисляем коэффициент для изменения размера шрифта
        if(DocWidth < 768) {
            var ratio = DocWidth / 767;
            $("html").attr('original-fsize', 21.333);
        } else {
            var ratio = DocWidth / breakPoint;
            $("html").attr('original-fsize', 10);
        }


		var newFSize = $("html").attr('original-fsize') * ratio;
        $("html").css('font-size', newFSize + 'px');

    }
}
*/
