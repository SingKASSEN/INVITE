window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('.modal-bg').classList.add('show');
  }, 800); 
});


document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.no-popup-bg').style.display = 'flex';
});


document.querySelector('.no-close-btn').addEventListener('click', function() {
  document.querySelector('.no-popup-bg').style.display = 'none';
  document.querySelector('.modal-bg').classList.remove('show');
  
  document.body.style.backgroundImage = "url('img/good night.jpg')";
  document.body.style.backgroundSize = "center";
  document.body.style.backgroundPosition = "50% 10%";
  document.querySelector('h1').style.display = 'none';
});


