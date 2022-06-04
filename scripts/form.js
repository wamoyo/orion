!(function () {
  "use strict"
  window.addEventListener('load', function (event) {

    var form = document.getElementById('contact-form')
    var fieldset = form.querySelector('fieldset')
    var name = document.getElementById('name')
    var mail = document.getElementById('mail')
    var interests = []
      var follow = document.getElementById('follow')
      var investor = document.getElementById('investor')
      var media = document.getElementById('media')
      var science = document.getElementById('science')
      var art = document.getElementById('art')
      var presale = document.getElementById('presale')
      var entrepreneurs = document.getElementById('entrepreneurs')
    var message = document.getElementById('message')
    var formStatus = document.getElementById('form-status')
    var submit = document.getElementById('submit')
    var submitOriginalValue = submit.value
    var statusCode

    // Enabled form
    fieldset.removeAttribute('disabled')

    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()

        name.setAttribute('disabled', 'disabled')
        mail.setAttribute('disabled', 'disabled')
        follow.setAttribute('disabled', 'disabled')
        investor.setAttribute('disabled', 'disabled')
        media.setAttribute('disabled', 'disabled')
        science.setAttribute('disabled', 'disabled')
        art.setAttribute('disabled', 'disabled')
        presale.setAttribute('disabled', 'disabled')
        entrepreneurs.setAttribute('disabled', 'disabled')
        message.setAttribute('disabled', 'disabled')
        submit.setAttribute('disabled', 'disabled')
        submit.value = "Processing..."

        var email = mail.value || ''

        if (follow.checked) interests.push('follow')
        if (investor.checked) interests.push('investor')
        if (media.checked) interests.push('media')
        if (science.checked) interests.push('science')
        if (art.checked) interests.push('art')
        if (presale.checked) interests.push('presale')
        if (entrepreneurs.checked) interests.push('entrepreneurs')

        fetch('https://he2vqi0g1k.execute-api.us-east-1.amazonaws.com/contact', {
          method: 'POST',
          body: JSON.stringify({
            contact: {
              person: name.value || '',
              email: mail.value || '',
              interests: interests || [],
              message: message.value || ''
            }
          }),
          headers: {
            'Content-type': 'application/json'
          }
        }).then(function(response) {
          console.log('Response: ', response)
          statusCode = response.status
          return response.json()
        }).then(function(json) {
          console.log('JSON: ', json)
          if (statusCode == 200) return success(json.message)
          if (statusCode == 400) return badRequest(json.error)
          return errorOut(json.error)
        }).catch(function (error) {
          console.error(error)
          return errorOut(email)
        })
      })

      function success (status) {
        console.log(status)
        formStatus.classList.remove('fail')
        formStatus.classList.add('success')
        name.value = ''
        mail.value = ''
        follow.checked = false
        investor.checked = false
        media.checked = false
        science.checked = false
        art.checked = false
        presale.checked = false
        entrepreneurs.checked = false
        message.value = ''
        setTimeout(function () {
          formStatus.textContent = status
        }, 100)
        name.removeAttribute('disabled')
        mail.removeAttribute('disabled')
        follow.removeAttribute('disabled')
        investor.removeAttribute('disabled')
        media.removeAttribute('disabled')
        science.removeAttribute('disabled')
        art.removeAttribute('disabled')
        presale.removeAttribute('disabled')
        entrepreneurs.removeAttribute('disabled')
        message.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        submit.value = submitOriginalValue
      }

      function badRequest (email) {
        var status = 'Contact failed, please reach out to Costa Michailidis directly at costa@innovationbound.com for help.'
        console.log(status)
        formStatus.classList.remove('success')
        formStatus.classList.add('fail')
        formStatus.textContent = message
        name.removeAttribute('disabled')
        mail.removeAttribute('disabled')
        follow.removeAttribute('disabled')
        investor.removeAttribute('disabled')
        media.removeAttribute('disabled')
        science.removeAttribute('disabled')
        art.removeAttribute('disabled')
        presale.removeAttribute('disabled')
        entrepreneurs.removeAttribute('disabled')
        message.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        submit.value = submitOriginalValue
      }

      function errorOut (email) {
        var status = 'Contact failed, please reach out to Costa Michailidis directly at costa@innovationbound.com for help.'
        console.log(status)
        formStatus.classList.remove('success')
        formStatus.classList.add('fail')
        formStatus.textContent = status
        name.removeAttribute('disabled')
        mail.removeAttribute('disabled')
        follow.removeAttribute('disabled')
        investor.removeAttribute('disabled')
        media.removeAttribute('disabled')
        science.removeAttribute('disabled')
        art.removeAttribute('disabled')
        presale.removeAttribute('disabled')
        entrepreneurs.removeAttribute('disabled')
        message.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        submit.value = submitOriginalValue
      }
    }

  })
}());
