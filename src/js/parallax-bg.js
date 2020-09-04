export function parallaxBg() {
    let bg = document.querySelector('.mouse-parallax-bg');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    });
}


