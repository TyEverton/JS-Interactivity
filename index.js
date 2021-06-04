const addBtn = document.querySelector("form")

const message = document.querySelector("#message")

function addMovie(e) {
  e.preventDefault()
  const inputField = document.querySelector("input")

  const movie = document.createElement("li")

  const movieTitle = document.createElement("span")
  movieTitle.textContent = inputField.value
  movie.appendChild(movieTitle)
  movieTitle.addEventListener("click", crossOffMovie)


  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = ("Remove Movie")
  deleteBtn.addEventListener("click", deleteMovie)
  movie.appendChild(deleteBtn)

  document.querySelector("ul").appendChild(movie)

  inputField.value = ''
}

/////////////////////DELETE BUTTON IS BELOW/////////////////////

addBtn.addEventListener("submit", addMovie)

function deleteMovie(e) {
  e.preventDefault()
  e.target.parentNode.remove() 
}
////////////////////CROSS OFF WATCHED MOVIES//////////////////////////////

function crossOffMovie(e) {
  e.preventDefault()
  e.target.classList.toggle("checked")
 
if(e.target.classList.contains("checked") === true) {
  alert("Movie watched!")
} else {
  alert("Movie removed")
}
}







