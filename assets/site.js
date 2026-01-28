
(function(){
  const sel = document.getElementById('pageSelect');
  if(!sel) return;
  sel.addEventListener('change', function(){
    if(this.value) window.location.href = this.value;
  });
})();
