const container = document.getElementById('board')

const black_squares = document.querySelectorAll('.black-squares')
const red_checkers = document.querySelectorAll('.red-checkers')
const green_checkers = document.querySelectorAll('.green-checkers')


/* red_checkers.forEach(red_checker => red_checker.addEventListener('dragstart', (e) => {

})) */






























/* // Board created row by row

for (let i = 0; i < numberOfRows; i++) {
  //create odd rows
  if (i % 2 != 0) {
    createOddRow()
  } else {
    createEvenRow()
  }
}

function createEvenRow() {
  // every second row
  for (let i = 0; i < rowLength; i++) {
    const square = document.createElement('div')
    square.classList.add('board-square')

    // odd number
    if (i % 2 != 0) {
      square.classList.add('black-square')

    } else {
      //even number
      square.classList.add('white-square')
    }

    container.appendChild(square)
  }
}

function createOddRow() {
  //every other row
  for (let i = 1; i < rowLength + 1; i++) {
    const square = document.createElement('div')
    square.classList.add('board-square')

    //odd number
    if (i % 2 != 0) {
      square.classList.add('black-square')
    } else {
      //even number
      square.classList.add('white-square')
    }

    container.appendChild(square)
  }
} */



