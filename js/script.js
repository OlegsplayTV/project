"use strict";
const p = document.querySelectorAll('p');
console.log(p);
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.asyns = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");

