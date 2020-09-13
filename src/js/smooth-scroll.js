import Scrollbar from 'smooth-scrollbar';

const containers = document.querySelectorAll(".scroll-wrapper");

export function smoothScrollInit() {
  containers.forEach((container) => {
    Scrollbar.init(container, {
      alwaysShowTracks: true
    });    
  });
}
