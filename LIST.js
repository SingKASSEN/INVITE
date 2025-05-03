window.onload = function() {
    var saved = JSON.parse(localStorage.getItem('memoList') || '[]');
    var list = document.getElementById('list');
    list.innerHTML = '';
    if(saved.length === 0) {
      list.innerHTML = '<li>No memos registered.</li>';
    } else {
      saved.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.name + " : " + item.memo;
        list.appendChild(li);
      });
    }
  };
  