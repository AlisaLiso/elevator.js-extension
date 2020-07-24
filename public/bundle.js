(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Elevator = require("elevator.js");

window.onload = function () {
  let footer = document.getElementsByTagName("footer")[0];

  if (footer) {
    let button = document.createElement("button");
    let parentDiv = footer.parentNode;

    button.id = "elevator";
    button.type = "button";
    button.innerHTML +=
      '<svg id="sweet-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="100px" width="100px"><path d="M70,47.5H30c-1.4,0-2.5,1.1-2.5,2.5v40c0,1.4,1.1,2.5,2.5,2.5h40c1.4,0,2.5-1.1,2.5-2.5V50C72.5,48.6,71.4,47.5,70,47.5z   M47.5,87.5h-5v-25h5V87.5z M57.5,87.5h-5v-25h5V87.5z M67.5,87.5h-5V60c0-1.4-1.1-2.5-2.5-2.5H40c-1.4,0-2.5,1.1-2.5,2.5v27.5h-5  v-35h35V87.5z" /><path d="M50,42.5c1.4,0,2.5-1.1,2.5-2.5V16l5.7,5.7c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5l-10-10  c-1-1-2.6-1-3.5,0l-10,10c-1,1-1,2.6,0,3.5c1,1,2.6,1,3.5,0l5.7-5.7v24C47.5,41.4,48.6,42.5,50,42.5z" /></svg> Back to Top';

    parentDiv.insertBefore(button, footer);
    let elementButton = document.getElementById("elevator");

    var elevator = new Elevator({
      element: elementButton,
      mainAudio: chrome.runtime.getURL("media/elevator.mp3"),
      endAudio: chrome.runtime.getURL("media/ding.mp3"),
    });

    elementButton.addEventListener("click", function () {
      elevator.elevate();
    });
  }
};

},{"elevator.js":2}],2:[function(require,module,exports){
var Elevator=function(n){"use strict";function e(n,e,t,o){return n/=o/2,1>n?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n,e){for(var t in e){var o=void 0===n[t]&&"function"!=typeof t;o&&(n[t]=e[t])}return n}function o(n){for(var e=0;n;)e+=n.offsetTop||0,n=n.offsetParent;return g&&(e-=g),e}function l(n){T||(T=n);var t=n-T,o=e(t,k,y-k,b);window.scrollTo(0,o),b>t?w=requestAnimationFrame(l):r()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function u(){T=null,k=null,h=!1}function a(){C&&(y=o(C))}function r(){u(),f&&(f.pause(),f.currentTime=0),p&&p.play(),v&&v()}function d(){h&&(cancelAnimationFrame(w),u(),f&&(f.pause(),f.currentTime=0),a(),window.scrollTo(0,y))}function c(n){n.addEventListener?n.addEventListener("click",F.elevate,!1):n.attachEvent("onclick",function(){a(),document.documentElement.scrollTop=y,document.body.scrollTop=y,window.scroll(0,y)})}function s(n){A=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};n=t(n,e),n.element&&c(n.element),i()&&(n.duration&&(E=!0,b=n.duration),n.targetElement&&(C=n.targetElement),n.verticalPadding&&(g=n.verticalPadding),window.addEventListener("blur",d,!1),n.mainAudio&&(f=new Audio(n.mainAudio),f.setAttribute("preload",n.preloadAudio),f.setAttribute("loop",n.loopAudio)),n.endAudio&&(p=new Audio(n.endAudio),p.setAttribute("preload","true")),n.endCallback&&(v=n.endCallback),n.startCallback&&(m=n.startCallback))}var m,f,p,v,A=null,w=null,b=null,E=!1,T=null,k=null,y=0,C=null,g=null,h=!1,F=this;this.elevate=function(){h||(h=!0,k=document.documentElement.scrollTop||A.scrollTop,a(),E||(b=1.5*Math.abs(y-k)),requestAnimationFrame(l),f&&f.play(),m&&m())},s(n)};"undefined"!=typeof module&&module.exports&&(module.exports=Elevator);
},{}]},{},[1]);
