const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab)=>{
  tab.addEventListener('click', ()=>{
    tabs.forEach((tab)=>{
      tab.classList.remove('active');
    })

    tab.classList.add('active');
    const target = document.querySelector(tab.dataset.tabTarget);
    // console.log(target)
    // console.log(tab);
    tabContents.forEach((content)=>{
      content.classList.remove('active');
    })
    target.classList.add('active');
  });
});

function activateTab(){
 
}


// document.querySelectorAll('a').forEach((link)=>{
//   link.addEventListener('click', (e)=>{
//     e.preventDefault();
//   });
// });