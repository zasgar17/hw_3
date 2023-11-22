const mainTitle = document.querySelector('.logo h1');
console.log("hello check")
const workLink = document.getElementById('work-link');

mainTitle.addEventListener('click', () => {

  window.location.href = 'https://www.facebook.com/';
});

workLink.addEventListener('click', () => {
  
  window.location.href = 'our_work.html';
});

workLink.classList.add('highlight');
