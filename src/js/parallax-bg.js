export function parallaxBg() {
    let bg = document.querySelector('.mouse-parallax-bg');
    let bgReverse = document.querySelector('.mouse-parallax-bg-reverse');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
        bgReverse.style.backgroundPosition = x * 20 + 'px,' + y * 20 + 'px';
    });  
}


