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
      { class: 'asteroid', title: 'We <span class="space">Dream</span> of Space<br><span class="smaller">The Wonders<br>The Resources...</span>'},
      { class: 'launches', title: '...but the <span class="glorious">Glorious</span> rocket launches are too expensive.'},
      { class: 'ocean', title: 'We have a <span class="chance">Chance</span>...'},
      { class: 'climb', title: 'By building the <span class="climb">Space Elevator!</span>'},
      { class: 'cost', title: 'For <span class="cost"><sup>1</sup>⁄<sub>10</sub></span> <span class="smaller">the cost of the International Space Station</span>'},
      { class: 'package', title: 'Getting to space for the cost of<br><span class="package">Mailing A Package</span>'},
      { class: 'operational', title: 'We plan to have the <span class="space">first</span> elevator operational by <span class="year">2033</span>'},
      { class: 'stations', title: 'And then...'},
      { class: 'solar', title: 'What are your <span class="space">Dreams</span> for Space?'},
      { class: 'dreams', title: 'Dreams have <span class="space">No Limits</span>'},
    ]

    next.addEventListener('click', function (event) {
      slide += 1
      if (slide >= 12) {
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
