

export function togglePageContent(toggler) {
    const pageContentList = document.querySelector(".page__right--slider");
    const id = toggler.dataset.stepId;    
   const targetPageContent = pageContentList.querySelector(`#${id}`)

   if(!targetPageContent.classList.contains('active')) {
        pageContentList.querySelector('.active').classList.remove('active');
        targetPageContent.classList.add('active');
   }
}