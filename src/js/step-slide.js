const steps = document.querySelector(".steps__list");

const dataControlId = steps.dataset.controlId;

const control = document.querySelector(`.page-control__item[data-control="${dataControlId}"]`);

const progressBar = control.querySelector('.page-control__progress');

const stepsCount = steps.children.length;

export function stepSlide() {
    console.log(stepsCount);
};



