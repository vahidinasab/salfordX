
(function(){
  const p = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if(!href) return;
    const full = new URL(href, window.location).pathname;
    if(p === full || (p.startsWith(full) && full.endsWith('/'))){
      a.classList.add('active');
    }
  });
})();
