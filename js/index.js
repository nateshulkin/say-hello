(function (exports) {
  const { eventHandler } = exports;
  document.documentElement.addEventListener('keypress', eventHandler);
})(typeof exports === 'undefined' ? window.app : exports)
