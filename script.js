const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach((tab, index) => {
  tab.addEventListener('click', function() {
      tabLinks.forEach(link => link.classList.remove('active-link'));
    
      tab.classList.add('active-link');
      
      tabContents.forEach(content => content.classList.remove('active-tab'));
      
      tabContents[index].classList.add('active-tab');
  });
});