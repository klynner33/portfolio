const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach((tab, index) => {
  tab.addEventListener('click', () => {
      tabLinks.forEach(link => link.classList.remove('active-link'));
    
      tab.classList.add('active-link');
      
      tabContents.forEach(content => content.classList.remove('active-tab'));
      
      tabContents[index].classList.add('active-tab');
  });
});

const closeMenuButton = document.querySelector('.fa-xmark');
const openMenuButton = document.querySelector('.fa-bars');
const sideMenu = document.querySelector('.side-menu');

openMenuButton.addEventListener('click', () => {
  sideMenu.style.right = "0";
})
closeMenuButton.addEventListener('click', () => {
  sideMenu.style.right = "-200px";
})