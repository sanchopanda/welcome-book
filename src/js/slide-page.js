const pages = document.querySelectorAll(".page");
const navArrows = document.querySelector(".nav-arrows");
const pageControl = document.querySelector(".page-control");

const choseActivePage = () => {
    return document.querySelector('.page.active');
}

const mapControl = () => {
    const controlId = choseActivePage().id

   pageControl.querySelector(`[data-control="${controlId}"]`).classList.add('active');

};





export function slidePage() {
    mapControl();

    pageControl.addEventListener('click', (e) => {
        const target = e.target;
        console.log(target);

        if(target.classList.contains('page-control__item')) {

           const pageId = target.dataset.control;
           document.querySelector(`.page.active`).classList.remove('active');

           document.querySelector(`#${pageId}`).classList.add('active');
            
        } 
    })
};



