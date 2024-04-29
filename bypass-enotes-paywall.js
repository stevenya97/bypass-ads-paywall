// ==UserScript==
// @name            Remove Enotes.com paywall
// @version         1.0
// @description     personal js script to remove paywall for enotes.com
// @author          stevenya97
// @match           *://*.com/*
// @grant           GM.xmlHttpRequest
// ==/UserScript==
(function() {
  'use strict';
window.setTimeout(function () {
    if (matchDomain('enotes.com')) {
  let paywall = document.querySelectorAll('section.c-cta-section');
  if (paywall.length) {
    removeDOMElement(...paywall);
    let blurred = document.querySelectorAll('div[class="u-paywall"]');
    for (let elem of blurred)
      elem.removeAttribute('class');
    let intro = document.querySelectorAll('div.o-rte-text > div:not([class])');
    for (let elem of intro)
      removeDOMElement(elem);
    let section_words = document.querySelectorAll('p.u-align--center');
    
    hideDOMElement(...section_words);
     
    let trailing_ellipsis = document.querySelector('div.o-rte-text')
  }
}
},1000);
    
// Config
const config ={
    verbose:true
};
// General Functions

function matchDomain(domains, hostname) {
  var matched_domain = false;
  if (!hostname)
    hostname = window.location.hostname;
  if (typeof domains === 'string')
    domains = [domains];
  domains.some(domain => (hostname === domain || hostname.endsWith('.' + domain)) && (matched_domain = domain));
  return matched_domain;
}
function removeDOMElement(...elements) {
  for (let element of elements) {
    if (element)
      element.remove();
  }
}
function hideDOMElement(...elements) {
  for (let element of elements) {
    if (element)
      element.style = 'display:none !important;';
  }
}
function pageContains(selector, text) {
  let elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}
})();
