
import { scaleHtml } from './scale-html.js';
import { slidePage } from './slide-page.js';
import { stepSlide, startFillingProgress, chooseStep } from './step-slide.js'
import { sectionToggler } from './section-toggler.js'
import { infoSlidePage } from './info-slide-page.js'
import { parallaxBg } from './parallax-bg.js'
import { contentSwitcher } from './contentSwitcher.js';
import { smoothScrollInit } from './smooth-scroll';
import { openMenu } from './burger.js';

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