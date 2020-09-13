const burger = document.querySelector(`.burger`);
const menu = document.querySelector(`.menu`);


export function openMenu() {
    burger.addEventListener('click', ()=> {
        burger.classList.toggle(`open`);
        menu.classList.toggle(`open`);
    })
 
};
