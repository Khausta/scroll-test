"use strict";var oldPos=window.scrollY;window.onscroll=function(){var o=window.scrollY,e=document.querySelector(".sticky-element");oldPos<o&&e.offsetHeight>window.innerHeight&&(e.style.top=window.innerHeight-e.offsetHeight+"px",oldPos=o),o<oldPos&&(e.style.top="0",oldPos=o)};
//# sourceMappingURL=main.js.map
