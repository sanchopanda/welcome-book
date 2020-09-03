
const pageControls = document.querySelectorAll(".link-toggle");

export function infoSlidePage() {
    pageControls.forEach((pageControl) => {
        pageControl.addEventListener('click', () => {
            if(!pageControl.classList.contains('active')) {
                const id = pageControl.dataset.control;
                document.querySelector('.page--info.active').classList.remove('active');
                document.getElementById(`${id}`).classList.add('active');
            }
            
        })
    })
}


