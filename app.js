//Rohit Chaku, please do inform me if any error is found
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;

var whoseMove = 1;

var temp = "";

var ok = 0;

var whoWon = 0;

var countPlayer1Wins = 0;
var countPlayer2Wins = 0;
var countTies = 0;

function move(c) {
  temp = c;
  ok = 0;
  whoseMove = 1;
  document.getElementById("skor_1").style.color = "black";
  document.getElementById("skor_2").style.color = "red";
  checkSpace();
  if (ok == 1) {
    document.getElementById(c).src = "tic_tac_toe_images/o.png";
    setTimeout(function () {
      process();
    }, 5);
  } else {
    alert("This position is already occupied, please select another one!");
  }
  setTimeout(function () {
    computerMove();
  }, 10);
}

function computerMove() {
  whoseMove = 2;
  document.getElementById("skor_1").style.color = "red";
  document.getElementById("skor_2").style.color = "black";
  temp = "";
  ok = 0;
  computerWinningMove();
  checkSpace();
  if (ok == 0) {
    computerAgainstMove();
    checkSpace();
    if (ok == 0) {
      computerRandomMove();
    }
  }
  console.log(temp);
  console.log(a);
  console.log(b);
  console.log(c);
  document.getElementById(temp).src = "tic_tac_toe_images/x.jpg";
  whoseMove = 1;
  setTimeout(function () {
    process();
  }, 5);
}

function computerWinningMove() {
  if ((a==2)&&(b==2)&&(c==0)&&(temp=="")) {
    temp = "C";
  }
  else if ((a==2)&&(b==0)&&(c==2)&&(temp=="")) {
    temp = "B";
  }
  else if ((a==0)&&(b==2)&&(c==2)&&(temp=="")) {
    temp = "A";
  }
  else if ((d==2)&&(e==2)&&(f==0)&&(temp=="")) {
    temp = "F";
  }
  else if ((d==2)&&(e==0)&&(f==2)&&(temp=="")) {
    temp = "E";
  }
  else if ((d==0)&&(e==2)&&(f==2)&&(temp=="")) {
    temp = "D";
  }
  else if ((g==2)&&(h==2)&&(i==0)&&(temp=="")) {
    temp = "I";
  }
  else if ((g==2)&&(h==0)&&(i==2)&&(temp=="")) {
    temp = "H";
  }
  else if ((g==0)&&(h==2)&&(i==2)&&(temp=="")) {
    temp = "G";
  }
  else if ((a==2)&&(d==2)&&(g==0)&&(temp=="")) {
    temp = "G";
  }
  else if ((a==2)&&(d==0)&&(g==2)&&(temp=="")) {
    temp = "D";
  }
  else if ((a==0)&&(d==2)&&(g==2)&&(temp=="")) {
    temp = "A";
  }
  else if ((b==2)&&(e==2)&&(h==0)&&(temp=="")) {
    temp = "H";
  }
  else if ((b==2)&&(e==0)&&(h==2)&&(temp=="")) {
    temp = "E";
  }
  else if ((b==0)&&(e==2)&&(h==2)&&(temp=="")) {
    temp = "B";
  }
  else if ((c==2)&&(f==2)&&(i==0)&&(temp=="")) {
    temp = "I";
  }
  else if ((c==2)&&(f==0)&&(i==2)&&(temp=="")) {
    temp = "F";
  }
  else if ((c==0)&&(f==2)&&(i==2)&&(temp=="")) {
    temp = "C";
  }
  else if ((a==2)&&(e==2)&&(i==0)&&(temp=="")) {
    temp = "I";
  }
  else if ((a==2)&&(e==0)&&(i==2)&&(temp=="")) {
    temp = "I";
  }
  else if ((a==0)&&(e==2)&&(i==2)&&(temp=="")) {
    temp = "A";
  }
  else if ((c==2)&&(e==2)&&(g==0)&&(temp=="")) {
    temp = "G";
  }
  else if ((c==2)&&(e==0)&&(g==2)&&(temp=="")) {
    temp = "E";
  }
  else if ((c==0)&&(e==2)&&(g==2)&&(temp=="")) {
    temp = "C";
  }
}

function computerAgainstMove() {
  if ((a==1)&&(b==1)&&(c==0)&&(temp=="")) {
    temp = "C";
  }
  else if ((a==1)&&(b==0)&&(c==1)&&(temp=="")) {
    temp = "B";
  }
  else if ((a==0)&&(b==1)&&(c==1)&&(temp=="")) {
    temp = "A";
  }
  else if ((d==1)&&(e==1)&&(f==0)&&(temp=="")) {
    temp = "F";
  }
  else if ((d==1)&&(e==0)&&(f==1)&&(temp=="")) {
    temp = "E";
  }
  else if ((d==0)&&(e==1)&&(f==1)&&(temp=="")) {
    temp = "D";
  }
  else if ((g==1)&&(h==1)&&(i==0)&&(temp=="")) {
    temp = "I";
  }
  else if ((g==1)&&(h==0)&&(i==1)&&(temp=="")) {
    temp = "H";
  }
  else if ((g==0)&&(h==1)&&(i==1)&&(temp=="")) {
    temp = "G";
  }
  else if ((a==1)&&(d==1)&&(g==0)&&(temp=="")) {
    temp = "G";
  }
  else if ((a==1)&&(d==0)&&(g==1)&&(temp=="")) {
    temp = "D";
  }
  else if ((a==0)&&(d==1)&&(g==1)&&(temp=="")) {
    temp = "A";
  }
  else if ((b==1)&&(e==1)&&(h==0)&&(temp=="")) {
    temp = "H";
  }
  else if ((b==1)&&(e==0)&&(h==1)&&(temp=="")) {
    temp = "E";
  }
  else if ((b==0)&&(e==1)&&(h==1)&&(temp=="")) {
    temp = "B";
  }
  else if ((c==1)&&(f==1)&&(i==0)&&(temp=="")) {
    temp = "I";
  }
  else if ((c==1)&&(f==0)&&(i==1)&&(temp=="")) {
    temp = "F";
  }
  else if ((c==0)&&(f==1)&&(i==1)&&(temp=="")) {
    temp = "C";
  }
  else if ((a==1)&&(e==1)&&(i==0)&&(temp=="")) {
    temp = "I";
  }
  else if ((a==1)&&(e==0)&&(i==1)&&(temp=="")) {
    temp = "I";
  }
  else if ((a==0)&&(e==1)&&(i==1)&&(temp=="")) {
    temp = "A";
  }
  else if ((c==1)&&(e==1)&&(g==0)&&(temp=="")) {
    temp = "G";
  }
  else if ((c==1)&&(e==0)&&(g==1)&&(temp=="")) {
    temp = "E";
  }
  else if ((c==0)&&(e==1)&&(g==1)&&(temp=="")) {
    temp = "C";
  }
}

function computerRandomMove() {
  while (ok == 0) {
    var computer_move = Math.floor(Math.random() * 10) + 1;
    console.log(computer_move);
    if (computer_move == 1) {
      temp = "A";
    }
    else if (computer_move == 2) {
      temp = "B";
    }
    else if (computer_move == 3) {
      temp = "C";
    }
    else if (computer_move == 4) {
      temp = "D";
    }
    else if (computer_move == 5) {
      temp = "E";
    }
    else if (computer_move == 6) {
      temp = "F";
    }
    else if (computer_move == 7) {
      temp = "G";
    }
    else if (computer_move == 8) {
      temp = "H";
    }
    else if (computer_move == 9) {
      temp = "I";
    }
    checkSpace();
  }
}

function checkSpace() {
  if ((temp == "A") && (a == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      a = 1;
    } else {
      a = 2;
    }
  }
  else if ((temp == "B") && (b == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      b = 1;
    } else {
      b = 2;
    }
  }
  else if ((temp == "C") && (c == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      c = 1;
    } else {
      c = 2;
    }
  }
  else if ((temp == "D") && (d == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      d = 1;
    } else {
      d = 2;
    }
  }
  else if ((temp == "E") && (e == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      e = 1;
    } else {
      e = 2;
    }
  }
  else if ((temp == "F") && (f == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      f = 1;
    } else {
      f = 2;
    }
  }
  else if ((temp == "G") && (g == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      g = 1;
    } else {
      g = 2;
    }
  }
  else if ((temp == "H") && (h == 0)) {
    ok = 1;
    if (whoseMove == 1) {
      h = 1;
    } else {
      h = 2;
    }
  }
  else if ((temp == "I") && (i == 0)){
    ok = 1;
    if (whoseMove == 1) {
      i = 1;
    } else {
      i = 2;
    }
  }
  else {
    ok = 0;
  }
}

function process() {
  checkWin();
  if (whoWon == 1) {
    countPlayer1Wins++;
    alert("Player 1 wins!!");
    document.getElementById("player1").value = countPlayer1Wins;
    playAgain();
  }
  else if (whoWon == 2) {
    countPlayer2Wins++;
    alert("Computer wins!!");
    document.getElementById("player2").value = countPlayer2Wins;
    playAgain();
  }
  else if (whoWon == 3) {
    alert("It's a draw!!");
    countTies++;
    document.getElementById("ties").value = countTies;
    playAgain();
  }
}

function checkWin() {
  if ((a == 1)&&(b == 1)&&(c == 1)) {
    whoWon = 1;
  }
  else if ((d == 1)&&(e == 1)&&(f == 1)) {
    whoWon = 1;
  }
  else if ((g == 1)&&(h == 1)&&(i == 1)) {
    whoWon = 1;
  }
  else if ((a == 1)&&(d == 1)&&(g == 1)) {
    whoWon = 1;
  }
  else if ((b == 1)&&(e == 1)&&(h == 1)) {
    whoWon = 1;
  }
  else if ((c == 1)&&(f == 1)&&(i == 1)) {
    whoWon = 1;
  }
  else if ((a == 1)&&(e == 1)&&(i == 1)) {
    whoWon = 1;
  }
  else if ((c == 1)&&(e == 1)&&(g == 1)) {
    whoWon = 1;
  }
  else if ((a == 2)&&(b == 2)&&(c == 2)) {
    whoWon = 2;
  }
  else if ((d == 2)&&(e == 2)&&(f == 2)) {
    whoWon = 2;
  }
  else if ((g == 2)&&(h == 2)&&(i == 2)) {
    whoWon = 2;
  }
  else if ((a == 2)&&(d == 2)&&(g == 2)) {
    whoWon = 2;
  }
  else if ((b == 2)&&(e == 2)&&(h == 2)) {
    whoWon = 2;
  }
  else if ((c == 2)&&(f == 2)&&(i == 2)) {
    whoWon = 2;
  }
  else if ((a == 2)&&(e == 2)&&(i == 2)) {
    whoWon = 2;
  }
  else if ((c == 2)&&(e == 2)&&(g == 2)) {
    whoWon = 2;
  }
  else if (a!=0 && b!=0 && c!=0 && d!=0 && e!=0 && f!=0 && g!=0 && h!=0 && i!=0) {
    whoWon = 3;
  }
}

function playAgain() {
  whoseMove = 1;
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  ok = 0;
  whoWon = 0;

  document.getElementById("A").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("B").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("C").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("D").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("E").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("F").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("G").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("H").src = "tic_tac_toe_images/blank.jpg";
  document.getElementById("I").src = "tic_tac_toe_images/blank.jpg";

  document.getElementById("skor_1").style.color = "red";
  document.getElementById("skor_2").style.color = "black";
}

function help() {
  alert("Welcome to tic-tac-toe, Player1 is O and player2 is X. Select the box by clicking it. You cannot occupy an ocupied position. First one to get 3 wins!");
}
