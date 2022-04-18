!(function () {
  "use strict"
  window.addEventListener('load', function (event) {

    var form = document.getElementById('contact-form')
    var fieldset = form.querySelector('fieldset')

    // Enabled form
    fieldset.removeAttribute('disabled')

  })
}());
