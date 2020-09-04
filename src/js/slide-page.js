import { startFillingProgress, resetFillingProgress } from './step-slide.js';

const pages = document.querySelectorAll(".page");
const navArrows = document.querySelector(".nav-arrows");
const pageControl = document.querySelector(".page-control");

const choseActivePage = () => {
    return document.querySelector('.page.active');
}

export function mapControl() {
    const controlId = choseActivePage().id

    const control = pageControl.querySelector(`[data-control="${controlId}"]`);

    if(control) {
        control.classList.add('active');

        if (control.hasAttribute('data-progress-bar')) {
            startFillingProgress();
        }
    }    
};
   

const arrowToggle = (direction) => {
    const activePage =  document.querySelector(`.page.active`);
    const activeSlideId = activePage.dataset.slide;
    const nextSlideId = +activeSlideId + direction;
    const nextPage = document.querySelector(`.page[data-slide='${nextSlideId}']`);

    if(nextPage) {
        const activeId = activePage.id;
        const nextId = nextPage.id

        const nextControl = document.querySelector(`[data-control = "${nextId}"]`);

        activePage.classList.remove('active');
        nextPage.classList.add('active');

        document.querySelector(`[data-control = "${activeId}"]`).classList.remove('active');
        nextControl.classList.add('active');

        if(nextControl.hasAttribute('data-progress-bar')) {
            startFillingProgress();
        }else {
            resetFillingProgress();
       }      
    };                 
};


export function slidePage() {
    pages.forEach((page, index) => {
        page.dataset.slide = index;
    })

    mapControl();    

    pageControl.addEventListener('click', (e) => {
        const target = e.target;

        if(target.classList.contains('page-control__item') && !target.classList.contains('active')) {

           const pageId = target.dataset.control;

           document.querySelector(`.page-control__item.active`).classList.remove('active');
           target.classList.add('active');

           document.querySelector(`.page.active`).classList.remove('active');
           document.querySelector(`#${pageId}`).classList.add('active');

           if(target.hasAttribute('data-progress-bar')) {
                startFillingProgress();
           } else {
                resetFillingProgress();
           }            
        } 
    });

    navArrows.addEventListener('click', (e) => {
        const target = e.target;

        if(target.classList.contains('nav-arrows__arrow--next')) {
            arrowToggle(1);
        } else if(target.classList.contains('nav-arrows__arrow--prev')) {
            arrowToggle(-1);
        }
    })
};



