let redDiv = document.getElementById('red')

let yellowDiv = document.getElementById('yellow')

let greenDiv = document.getElementById('green')

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// For Each

const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    // console.log(square.value)
  }
})

function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = 0
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()


