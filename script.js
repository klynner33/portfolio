// TAB LINKS
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

// HAMBURGER MENU

const closeMenuButton = document.querySelector('.fa-xmark');
const openMenuButton = document.querySelector('.fa-bars');
const sideMenu = document.querySelector('.menu');

openMenuButton.addEventListener('click', () => {
  sideMenu.style.right = "0";
})
closeMenuButton.addEventListener('click', () => {
  sideMenu.style.right = "-200px";
})

// SEE MORE BUTTON
const seeMoreButton = document.querySelector('.see-more-button');


seeMoreButton.addEventListener('click', () => {
  const hiddenWork = document.querySelector('.hidden-work');
    if (hiddenWork.style.display === 'none' || hiddenWork.style.display === '') {
      hiddenWork.style.display = 'grid';
      seeMoreButton.textContent = 'See Less';
    } else {
      hiddenWork.style.display = 'none';
      seeMoreButton.textContent = 'See More';
    }
    
});

// CONTACT FORM

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9oYNiMLnM2VE0jjiELSg50tvdit4NTDpei_ydQNyqNsNH4V5kIvafRTIPR5Fm4b8/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('.msg');
form.addEventListener('submit', e => {
  e.preventDefault()
  showLoadingIcon();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => msg.innerHTML = "", 5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// Loading Icon
function showLoadingIcon() {
  const loadingIcon = document.querySelector('.loading-icon')
  loadingIcon.style.display = 'block';

  setTimeout(function() {
      loadingIcon.style.display = 'none';
  }, 3000);
}
