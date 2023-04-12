!(function () {
  "use strict"
  window.addEventListener('load', function (event) {

    var banner = document.getElementById('banner')
    var headline = document.getElementById('headline')
    var next = document.getElementById('next')
    var readySection = document.getElementById('ready')
    var slide = 0
    var slideInfo = [
      { class: 'rise', title: `
        <span class="the">The</span>
        <span class="space">Space</span>
        <span class="elevator">Elevator</span>
        <span class="company">Company</span>
        `},
      { class: 'moon-landing', title: '<span class="space">Space</span> The Final Frontier'},
      { class: 'asteroid', title: 'We Dream Of Space, The Wonders, The Resources...'},
    ]

    next.addEventListener('click', function (event) {
      slide += 1
      if (slide >= 8) {
        window.scrollTo({top: readySection.offsetTop - 133, behavior: 'smooth'})
        slide = 0
      }
      banner.classList.add('bghidden')
      headline.classList.add('titlehidden')
      setTimeout(function () {
        banner.className = ''
        headline.className = ''
        banner.classList.add(slideInfo[slide].class)
        headline.classList.add(slideInfo[slide].class)
        headline.innerHTML = slideInfo[slide].title
        banner.classList.remove('bghidden')
        headline.classList.remove('titlehidden')
      }, 2000)
    })

  })
}());
