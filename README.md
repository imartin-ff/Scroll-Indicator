# Scroll-Indicator
**Scroll indicator using vanilla JavaScript**


## HTML
``` HTML
  <div class="scroll-wrapper">
    <div class="scroll-item"></div>
  </div>
```



## Java-Script
```javascript
var sItem  = document.querySelector('.scroll-item');
window.addEventListener('scroll',function(){
  let pageHeight = document.documentElement.scrollHeight;
  let scrollOffset = window.scrollY;
  let wHeight = window.innerHeight;
  let percent = Math.floor((scrollOffset/(pageHeight - wHeight)) * 100);
  sItem.style.width = `${percent}%`;
});
```


## CSS

``` CSS
.scroll-wrapper {
  position: fixed;
  width: 100%;
  height: 3px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.scroll-item {
  width: 0;
  height: 100%;
  background-color: red;
}
```
