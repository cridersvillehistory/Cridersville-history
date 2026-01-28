
(function(){
  const sel = document.getElementById('pageSelect');
  if(sel){
    sel.addEventListener('change', (e) => {
      const v = e.target.value;
      if(v) window.location.href = v;
    });
    const current = window.location.pathname.split('/').pop() || 'index.html';
    for(const opt of sel.options){
      if(opt.value.endsWith(current)) opt.selected = true;
    }
  }
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();
