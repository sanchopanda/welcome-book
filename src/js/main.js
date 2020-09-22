
import { scaleHtml } from './scale-html.js';
import { slidePage } from './slide-page.js';
import { stepSlide, startFillingProgress, chooseStep, stepWheel } from './step-slide.js'
import { sectionToggler } from './section-toggler.js'
import { infoSlidePage } from './info-slide-page.js'
import { parallaxBg } from './parallax-bg.js'
import { contentSwitcher } from './contentSwitcher.js';
import { smoothScrollInit } from './smooth-scroll';
import { openMenu } from './burger.js';

import yall from 'yall-js'

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
 }

scaleHtml();
slidePage();
stepSlide();
sectionToggler();
infoSlidePage();
parallaxBg();
contentSwitcher();
smoothScrollInit(); 
openMenu();
chooseStep();
stepWheel();2

const images = document.querySelectorAll('img[data-src]');

images.forEach(function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});


window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}