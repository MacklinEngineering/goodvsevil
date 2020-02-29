let board = ["", "", "", "", "", "", "", "", ""]
var count = 0

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

];



// Class to construct players 1 and player 2
class makePlayer{

  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.score = 0

  }

  playWeapon (e, v){

   document.querySelector(`#`+ e).innerHTML = this.weapon
   board[v] = this.weapon  }

  countScore(score){

    this.score = score + 1


    console.log(`${score}`)

    if ( count % 2 === 0){

      document.querySelector("#PlayerOne").innerHTML = this.score

     // console.log(`${score}`)


    }else {

     document.querySelector("#PlayerTwo").innerHTML = this.score

     // console.log(`${score}`)

  }

}

}


// Create game object for the games mechanics


let ticGame = {

 gameOver: function(){

    ticGame.display('Game Over')
    count = 0

  } ,


 turn: function (player){

  ticGame.display(`It's  ${player}'s Turn`) },


 compare: function(){

  for(let i = 0; i <= 7; i++) {

    const winCondition = winningConditions[i]
    let a = board[winCondition[0]]
    let b = board[winCondition[1]]
    let c = board[winCondition[2]]

    if (a === '' || b === '' || c === '') {


      continue;

    }
    if (a === b && b === c) {

        if ( count % 2 === 0){

            ticGame.display(`${player1.name} Wins! `)
            player1.countScore(player1.score)
            document.querySelector('#topSquareLeft').classList.add("noClick")
            document.querySelector('#topSquareMid').classList.add("noClick")
            document.querySelector('#topSquareRight').classList.add("noClick")
            document.querySelector('#midSquareLeft').classList.add("noClick")
            document.querySelector('#midSquareMid').classList.add("noClick")
            document.querySelector('#midSquareRight').classList.add("noClick")
            document.querySelector('#bottomSquareleft').classList.add("noClick")
            document.querySelector('#bottomSquareMid').classList.add("noClick")
            document.querySelector('#bottomSquareRight').classList.add("noClick")
            ticGame.clearBoard()


        }else{

            ticGame.display( `${player2.name} Wins! `)
            player2.countScore(player2.score)
            document.querySelector('#topSquareLeft').classList.add("noClick")
            document.querySelector('#topSquareMid').classList.add("noClick")
            document.querySelector('#topSquareRight').classList.add("noClick")
            document.querySelector('#midSquareLeft').classList.add("noClick")
            document.querySelector('#midSquareMid').classList.add("noClick")
            document.querySelector('#midSquareRight').classList.add("noClick")
            document.querySelector('#bottomSquareleft').classList.add("noClick")
            document.querySelector('#bottomSquareMid').classList.add("noClick")
            document.querySelector('#bottomSquareRight').classList.add("noClick")
            ticGame.clearBoard()




        }


    }
  }},


  display: function(message){


    document.querySelector(".winMessage").innerHTML =  message },


  resetGrid: function(){

    //  document.querySelectorAll('.grid').innerHTML = " "
    //  document.querySelectorAll('.grid').classList.remove("noClick")

        document.querySelector('#topSquareLeft').innerHTML = ""
        document.querySelector('#topSquareMid').innerHTML = ""
        document.querySelector('#topSquareRight').innerHTML = ""
        document.querySelector('#midSquareLeft').innerHTML = ""
        document.querySelector('#midSquareMid').innerHTML = ""
        document.querySelector('#midSquareRight').innerHTML = ""
        document.querySelector('#bottomSquareleft').innerHTML = ""
        document.querySelector('#bottomSquareMid').innerHTML = ""
        document.querySelector('#bottomSquareRight').innerHTML = ""

        document.querySelector('#topSquareLeft').classList.remove("noClick")
        document.querySelector('#topSquareMid').classList.remove("noClick")
        document.querySelector('#topSquareRight').classList.remove("noClick")
        document.querySelector('#midSquareLeft').classList.remove("noClick")
        document.querySelector('#midSquareMid').classList.remove("noClick")
        document.querySelector('#midSquareRight').classList.remove("noClick")
        document.querySelector('#bottomSquareleft').classList.remove("noClick")
        document.querySelector('#bottomSquareMid').classList.remove("noClick")
        document.querySelector('#bottomSquareRight').classList.remove("noClick")

        count = 0

        ticGame.display(`${player1.name}`)


       // document.querySelectorAll('.grid').classList.remove('noClick')

      },

  clearBoard: function(){

    board = ["", "", "", "", "", "", "", "", ""]


  }

}







// Created Players 1 and Player 2

const player1 = new makePlayer( "Good", "x")

const player2 = new makePlayer( "Evil", "o")


document.querySelector('#resetButton').addEventListener('click', ticGame.resetGrid)


// Event listener executes game when event is clicked
document.querySelectorAll('.grid').forEach (item => {
   item.addEventListener('click', event => {
   let eventId = event.target.getAttribute('id')
   let eventValue = event.target.getAttribute('value')
   event.target.classList.add('noClick')
    //document.querySelector(`#`+ eventId).innerHTML = "x"

    if (count === 0 ){


      // player1.playWeapon(eventId,eventValue)
      // ticGame.turn(player2.name)
      // ticGame.compare()

    }

    if ( count % 2 === 0){

     player1.playWeapon(eventId,eventValue)
     ticGame.turn(player2.name)
     ticGame.compare()
     console.log(`${player1.score}`)


    }else{

      player2.playWeapon(eventId,eventValue)
      ticGame.turn(player1.name)
      ticGame.compare()
      console.log(`${player2.score}`)

    }

  if (count === 8){

    ticGame.display("Its a draw")
  }

   // return eventId
   count++

  // console.log(count)

  })

})
