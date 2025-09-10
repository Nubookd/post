const textFirst = "Web web web"
const textSecond = "аа знаю такое"
const textThird = "точно знаю"

const topText = document.querySelector("#topText")
const cursor = document.querySelector("#topTextCursor")

let indexFirst = 0
let indexSecond = 0
let indexThird = 0

const typingSpeed = 100
const deletingSpeed = 50
const pauseAfterFirst = 500
const pauseAfterSecond = 1000
const pauseBeforeThird = 500

let brAdded = false

function typingFirst() {
  if (indexFirst < textFirst.length) {
    topText.innerHTML += textFirst.charAt(indexFirst)
    indexFirst++
    setTimeout(typingFirst, typingSpeed)
  } else {
    if (!brAdded) {
      const br = document.createElement("br")
      topText.appendChild(br)
      brAdded = true
    }
    setTimeout(typingSecond, pauseAfterFirst)
  }
}
function typingSecond() {
  if (indexSecond < textSecond.length) {
    topText.innerHTML += textSecond.charAt(indexSecond)
    indexSecond++
    setTimeout(typingSecond, typingSpeed)
  } else {
    setTimeout(deleteChars, pauseAfterSecond)
  }
}

function deleteChars() {
  const brIndex = topText.innerHTML.lastIndexOf("<br>")
  if (brIndex !== -1) {
    const contentAfterBr = topText.innerHTML.substring(brIndex + "<br>".length)
    if (contentAfterBr.length > 0) {
      const newContentAfterBr = contentAfterBr.slice(0, -1)
      topText.innerHTML =
        topText.innerHTML.substring(0, brIndex + "<br>".length) +
        newContentAfterBr
      setTimeout(deleteChars, deletingSpeed)
    } else {
      setTimeout(typingThird, pauseBeforeThird)
    }
  }
}

function typingThird() {
  if (indexThird < textThird.length) {
    topText.innerHTML += textThird.charAt(indexThird)
    indexThird++
    setTimeout(typingThird, typingSpeed)
  } else {
    cursor.style.display = "none"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typingFirst()
})
