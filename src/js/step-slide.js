const stepsList = document.querySelector(".steps__list");

const steps = stepsList.querySelectorAll(".step");

const dataControlId = stepsList.dataset.controlId;

const control = document.querySelector(`.page-control__item[data-control="${dataControlId}"]`);

const progressBar = control.querySelector('.page-control__progress');

const stepsCount = stepsList.children.length;

const fillingProgress = (index) => {
    progressBar.style.width = `${100 / stepsCount * (index + 1)}%`
}

export function startFillingProgress() {
    const activeStep = stepsList.querySelector('.step.active');
    const index = Array.prototype.indexOf.call(steps, activeStep);
    progressBar.style.width = `${100 / stepsCount * (index + 1)}%`;
}

export function resetFillingProgress() {
    progressBar.style.width = `0px`;
}

export function stepSlide() {
    stepsList.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('step') && !target.classList.contains('active')) {
            console.log(1)
            const pageId = target.dataset.control;

           document.querySelector(`.step.active`).classList.remove('active');
           target.classList.add('active');

          
           const index =  Array.prototype.indexOf.call(steps, e.target);

           fillingProgress(index);            
        } 
    })
};



