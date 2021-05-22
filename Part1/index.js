let progress = [];

function play(clickedId){
  let playerChoice = document.getElementById('player');
  let clickedCell = document.getElementById(clickedId);
  if(playerChoice.innerText === "x") {
    playerChoice.innerText = "o";
    clickedCell.innerText = "x"
    progress[clickedCell] = "x";
  } else {
    playerChoice.innerText = "x";
    clickedCell.innerText = "o";
    progress[clickedCell] = "o";
  }
  console.log(progress)
}
