(function (exports) {

  const { writeToDocument } = exports;

  function eventHandler (event) {
    const input = event.target.closest('#name');
    let message = 'The text field is empty. Please enter your name.';
    if (event.which === 13) {
      if (input.value.length === 0) {
        writeToDocument(event, message, 'text-danger');
      } else {
        message = `Hello ${input.value} nice to meet you!`;
        writeToDocument(event, message);
      }
    }
  }

  exports.eventHandler = eventHandler;

})(typeof exports === 'undefined' ? window.app : exports)
