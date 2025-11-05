
// Simple JS to make current nav item active
(function(){
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if(href && (href === path || (href !== '/' && path.startsWith(href)))){
      a.classList.add('active');
    }
  });
})();
