window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.modal-bg').classList.add('show');
      
      var audio = document.getElementById('inviteSound');
      if (audio) {
        audio.play().catch(function(e) {
          
          console.log('Oh! Something's blocking our sound :():', e);
        });
      }
    }, 800);
  });
  