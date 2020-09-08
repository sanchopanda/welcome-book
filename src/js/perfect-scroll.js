import PerfectScrollbar from "perfect-scrollbar";

const containers = document.querySelectorAll(".scroll-wrapper");

export function perfectScrollInit() {
  containers.forEach((container) => {
    const ps = new PerfectScrollbar(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      maxScrollbarLength: 228,
    });
    setTimeout(() => {
        ps.update();
    }, 100);
    
  });
}
