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

                mapControl();
            }
            
        })
    })
}
