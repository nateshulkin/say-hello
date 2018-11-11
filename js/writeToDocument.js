(function (exports) {

  function writeToDocument (event, message, warning) {
    const column = document.querySelector('.col-md-6');
    const p = document.createElement('p');
    p.innerHTML = message;
    p.classList.add(warning);
    column.appendChild(p);
    event.preventDefault();
  }

  exports.writeToDocument = writeToDocument;

})(typeof exports === 'undefined' ? window.app = {} : exports)
