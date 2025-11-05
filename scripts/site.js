
(function(){
  // Normalize paths so comparisons are robust across hosting setups.
  function normalizePath(p){
    if(!p) return '/';
    try{
      p = new URL(p, window.location).pathname;
    }catch(e){
      // if URL construction fails, fall back to raw value
    }
    // treat index.html as the directory root
    p = p.replace(/index\.html$/, '');
    // ensure a single trailing slash for directories
    if(!p.endsWith('/')) p = p + '/';
    return p;
  }

  const cur = normalizePath(window.location.pathname);
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if(!href) return;
    const full = normalizePath(href);
    if(cur === full || cur.startsWith(full)){
      a.classList.add('active');
    }
  });
})();
