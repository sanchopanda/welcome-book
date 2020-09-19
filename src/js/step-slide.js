import { togglePageContent } from "./toggle-page-content";

const page = document.querySelector(".page-first-day .page__left");

const stepsList = document.querySelector(".steps__list");

const steps = stepsList.querySelectorAll(".step");

const dataControlId = stepsList.dataset.controlId;

const control = document.querySelector(
  `.page-control__item[data-control="${dataControlId}"]`
);

const progressBar = control.querySelector(".page-control__progress");

const stepsCount = stepsList.children.length;

const fillingProgress = (index) => {
  progressBar.style.width = `${(100 / stepsCount) * (index + 1)}%`;
};

export function stepWheel() {
    if (page.addEventListener) {
        if ('onwheel' in document) {
          // IE9+, FF17+, Ch31+
          page.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          page.addEventListener("mousewheel", onWheel);
        } else {
          // Firefox < 17
          page.addEventListener("MozMousePixelScroll", onWheel);
        }
      } else { // IE8-
        page.attachEvent("onmousewheel", onWheel);
      }
}

function onWheel(e) {
  const currentStep = stepsList.querySelector(".active");
  const next = stepsList.querySelector(".next");
  const prev = stepsList.querySelector(".prev");

  let delta = e.deltaY || e.detail || e.wheelDelta;

  if (next && delta > 0) {
    currentStep.classList.remove("active");
    next.classList.remove("next");
    next.classList.add("active");   

    chooseStep();
    togglePageContent(next);
    const index = Array.prototype.indexOf.call(steps, next);

      fillingProgress(index);
  } else if (prev && delta < 0) {
    currentStep.classList.remove("active");
    prev.classList.remove("prev");
    prev.classList.add("active");   

    chooseStep();
    togglePageContent(prev);
    const index = Array.prototype.indexOf.call(steps, prev);

      fillingProgress(index);
  }
}

export function chooseStep() {
  let nextStep = stepsList.querySelector(".next");

  if (nextStep) {
    nextStep.classList.remove("next");
  }

  let prevStep = stepsList.querySelector(".prev");

  if (prevStep) {
    prevStep.classList.remove("prev");
  }

  const activeStep = stepsList.querySelector(".active");
  const newNextStep = activeStep.nextElementSibling;
  if (newNextStep) {
    newNextStep.classList.add("next");
    if (newNextStep.classList.contains('visited')) {
      newNextStep.classList.remove('visited')
    }
  }

  const newPrevStep = activeStep.previousElementSibling;
  if (newPrevStep) {
    newPrevStep.classList.add("prev");
    newPrevStep.classList.add("visited");
  }
}

export function startFillingProgress() {
  const activeStep = stepsList.querySelector(".step.active");
  const index = Array.prototype.indexOf.call(steps, activeStep);
  progressBar.style.width = `${(100 / stepsCount) * (index + 1)}%`;
}

export function resetFillingProgress() {
  progressBar.style.width = `0px`;
}

export function stepSlide() {
  stepsList.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("step") &&
      !target.classList.contains("active")
    ) {
      const pageId = target.dataset.control;

      document.querySelector(`.step.active`).classList.remove("active");
      target.classList.add("active");

      const index = Array.prototype.indexOf.call(steps, e.target);

      fillingProgress(index);

      togglePageContent(target);

      chooseStep();
    }
  });
}
