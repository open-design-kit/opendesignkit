(function(win) {
  "use strict";
  var canHistory = "pushState" in history &&
    "replaceState" in history &&
    !(win.navigator.userAgent.indexOf("Firefox") >= 0 && win.top !== win) &&
    (win.navigator.userAgent.search(/CriOS/ ) === -1);

  var doc = win.document;
  var hist = win.history;

  var toggle = function (el, visible) {
    if (visible) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
  };

  var handler = function (e) {
    if (canHistory) {
      e.preventDefault();
      var className = e.target.getAttribute('data-toggle');
      var elements = doc.querySelectorAll('.js-list li');
      hist.pushState({}, className, e.target.href);
      for (var key in elements) {
        var el = elements[key];
        if (elements.hasOwnProperty(key)) {
          toggle(el, el.classList.contains(className))
        }
      }
    }
  };

  var attach = function (el, fn) {
    el.addEventListener('click', fn);
  };

  var toggles = doc.querySelectorAll('[data-toggle]');
  for (var el in toggles) {
    if (toggles.hasOwnProperty(el)) {
      attach(toggles[el], handler);
    }
  }

})(this);
