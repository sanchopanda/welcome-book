const burger = document.querySelector(`.burger`);
const menu = document.querySelector(`.menu`);

export function toggleMenu() {   
        burger.classList.toggle(`open`);
        menu.classList.toggle(`open`);   
};



export function openMenu() {
    burger.addEventListener('click', ()=> {
        toggleMenu();
    }) 
};
