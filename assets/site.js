
const dropdowns = document.querySelectorAll('.dd');
function closeAll(){
  dropdowns.forEach(dd => {
    dd.setAttribute('aria-expanded','false');
    const btn = dd.querySelector('button');
    if(btn) btn.setAttribute('aria-expanded','false');
  });
}
dropdowns.forEach(dd => {
  const btn = dd.querySelector('button');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = dd.getAttribute('aria-expanded') === 'true';
    closeAll();
    dd.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  });
});
document.addEventListener('click', () => closeAll());
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeAll(); });

const burger = document.getElementById('burger');
const mobilePanel = document.getElementById('mobilePanel');
if(burger && mobilePanel){
  burger.addEventListener('click', () => {
    const open = mobilePanel.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobilePanel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobilePanel.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    });
  });
}
function wireToggle(btnId, subId){
  const btn = document.getElementById(btnId);
  const sub = document.getElementById(subId);
  if(btn && sub) btn.addEventListener('click', () => sub.classList.toggle('open'));
}
wireToggle('mWhere','mWhereSub');
wireToggle('mRes','mResSub');

const year = document.getElementById('year');
if(year) year.textContent = new Date().getFullYear();
