/*!
 * Firefox iframe getComputedStyle fix.
 *
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

(function() {
  if(/firefox/i.test(navigator.userAgent)) {
    window.oldGetComputedStyle = window.getComputedStyle;
    window.getComputedStyle = function (element, pseudoElt) {
      var t = window.oldGetComputedStyle(element, pseudoElt);
      if (t === null) {
        return element.style;
      } else {
        return t;
      }
    };
  }
})();
