document.getElementById('submitBtn').addEventListener('click', function() {
  var name = document.getElementById('nameInput').value.trim();
  var memo = document.getElementById('memoInput').value.trim();
  if(name && memo) {
    var saved = JSON.parse(localStorage.getItem('memoList') || '[]');
    saved.push({ name: name, memo: memo });
    localStorage.setItem('memoList', JSON.stringify(saved));
    alert('REGISTERED!');
    document.getElementById('nameInput').value = '';
    document.getElementById('memoInput').value = '';
  } else {
    alert('BMO : PLEASE FILL UP YOUR NAME AND MESSAGES!');
  }
});