var sItem  = document.querySelector('.scroll-item');
window.addEventListener('scroll',function(){
  let pageHeight = document.documentElement.scrollHeight;
  let scrollOffset = window.scrollY;
  let wHeight = window.innerHeight;
  let percent = Math.floor((scrollOffset/(pageHeight - wHeight)) * 100);
  sItem.style.width = `${percent}%`;
});
