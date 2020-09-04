import { mapControl } from './slide-page'

const toggleList = document.querySelectorAll(".section-toggler");

const sections = document.querySelectorAll(".app__section");


export function sectionToggler() {
    toggleList.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const id = toggle.dataset.section;            
            const targetSection = document.getElementById(`${id}`);

            if(targetSection && !targetSection.classList.contains('active')) {
                document.querySelector('.app__section.active').classList.remove('active');
                targetSection.classList.add('active');
            }

            if(toggle.hasAttribute('data-control')){
                const id = toggle.dataset.control;
                console.log(id);
                document.querySelector(`.page.active`).classList.remove('active');
                document.querySelector(`#${id}`).classList.add('active');

                mapControl();
            }
            
        })
    })
}
