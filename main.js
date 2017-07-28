/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let searchButton = document.querySelector('#searchButton')
let searchInput = document.querySelector('#searchInput')
let songInfo = document.querySelector('#song_info')
let results = document.querySelector('.results')
let audio = document.querySelector('.music-player')



searchButton.addEventListener('click', function() {

  fetch(`https://itunes.apple.com/search?term=${searchInput.value}`)

  .then( function(response) {
    if (response.ok) {
      return response.json()}})
  .then(function(data) {
    console.log(data)
    for (var i = 0; i < data.results.length; i++) {
      results.innerHTML +=
      `<div class="result_item" src="dddd">
      <img src="${data.results[i].artworkUrl100}" data_url="${data.results[i].previewUrl}">
      <h1 id="track">${data.results[i].trackName}</h1>
      <h1 id="artist">${data.results[i].artistName}</h1>
      </div>`
    }
  searchInput.value = ""
  })
  .then(function(data) {
    document.querySelectorAll('.result_item').forEach(element =>
      element.addEventListener('click', function(e) {
        audio.setAttribute("src", `${e.target.attributes[1].nodeValue}`)
        
      }))
  })

})


// songInfo.innerHTML = `Now playing: ${data[i].trackName} - ${data[i].artistName}`
